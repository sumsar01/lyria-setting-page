import fs from 'fs';
import path from 'path';

// Function to read all Markdown files recursively from a folder
function getMarkdownFiles(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      files = files.concat(getMarkdownFiles(fullPath));
    } else if (fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  });
  return files;
}

// Mock Dataview API parser (replace this with actual query execution in Obsidian)
function executeDataviewQuery(query) {
  // For demonstration, we mock the result.
  // Replace this part with real Dataview query execution logic if possible.
  return `Mocked result of query: ${query}`;
}

// Process Markdown file and replace dataview queries with their output
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const dataviewRegex = /```dataview([\s\S]*?)```/g;

  let modified = false;

  // Replace each dataview block with the result of its query
  content = content.replace(dataviewRegex, (match, query) => {
    const result = executeDataviewQuery(query.trim());
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

// Main script function
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
