import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // For parsing YAML frontmatter
import glob from 'glob'; // For reading files recursively

// Function to read all Markdown files recursively from a folder
function getMarkdownFiles(dir) {
  let files = [];
  glob.sync(path.join(dir, '**/*.md')).forEach(file => {
    files.push(file);
  });
  return files;
}

// Function to parse a simple Dataview-like query and filter markdown files accordingly
function executeDataviewQuery(query, files) {
  // Example query parsing for basic "WHERE" and "SORT" clauses
  const whereMatch = query.match(/WHERE\s+(.*)/);
  const sortMatch = query.match(/SORT\s+(.*)/);

  let filteredFiles = files;

  // Apply "WHERE" condition if it exists
  if (whereMatch) {
    const condition = whereMatch[1].trim();
    const [key, value] = condition.split('=').map(str => str.trim().replace(/["']/g, ''));

    filteredFiles = filteredFiles.filter(file => {
      const { data } = matter(fs.readFileSync(file, 'utf-8'));
      return data[key] && data[key] === value;
    });
  }

  // Apply "SORT" if it exists
  if (sortMatch) {
    const sortField = sortMatch[1].trim();
    filteredFiles = filteredFiles.sort((a, b) => {
      const { data: dataA } = matter(fs.readFileSync(a, 'utf-8'));
      const { data: dataB } = matter(fs.readFileSync(b, 'utf-8'));
      return dataA[sortField] > dataB[sortField] ? 1 : -1;
    });
  }

  return filteredFiles;
}

// Function to replace Dataview blocks with the results of the query
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const dataviewRegex = /```dataview([\s\S]*?)```/g;

  let modified = false;

  // Replace each dataview block with the result of its query
  content = content.replace(dataviewRegex, (match, query) => {
    // Get all markdown files (for query execution)
    const files = getMarkdownFiles('content'); // You should specify the correct path for your markdown files
    const filteredFiles = executeDataviewQuery(query.trim(), files);

    // Build a table-like result for the Dataview block
    let result = "<table><thead><tr><th>File Name</th><th>Title</th></tr></thead><tbody>";

    filteredFiles.forEach(file => {
      const { data } = matter(fs.readFileSync(file, 'utf-8'));
      result += `<tr>
        <td>${path.basename(file)}</td>
        <td>${data.title || 'N/A'}</td>
      </tr>`;
    });

    result += "</tbody></table>";

    modified = true;
    return result;
  });

  // Write changes back to the file if it was modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Processed and updated: ${filePath}`);
  } else {
    console.log(`No dataview queries found in: ${filePath}`);
  }
}

// Main script function to process all markdown files in a directory
function processVault(vaultPath) {
  const markdownFiles = getMarkdownFiles(vaultPath);

  markdownFiles.forEach((file) => {
    processFile(file);
  });

  console.log('All files processed.');
}

// Run the script
const vaultPath = path.resolve('content'); // Replace with your vault path
processVault(vaultPath);
