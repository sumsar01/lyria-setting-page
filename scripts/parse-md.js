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
async function executeDataviewQuery(query) {
  const result = await dataview.query(query.trim());  // Execute the Dataview query
  let formattedResult = "";

  if (result.type === "table") {
    // Format the result as an HTML table
    formattedResult = "<table><thead><tr>";
    result.columns.forEach(col => {
      formattedResult += `<th>${col.name}</th>`;
    });
    formattedResult += "</tr></thead><tbody>";

    result.rows.forEach(row => {
      formattedResult += "<tr>";
      result.columns.forEach(col => {
        formattedResult += `<td>${row[col.name]}</td>`;
      });
      formattedResult += "</tr>";
    });

    formattedResult += "</tbody></table>";
  } else if (result.type === "list") {
    // Format the result as an HTML list
    formattedResult = "<ul>";
    result.rows.forEach(row => {
      formattedResult += `<li>${row.name}</li>`; // Adjust based on your query results
    });
    formattedResult += "</ul>";
  } else if (result.type === "text") {
    // Format the result as plain text
    formattedResult = result.rows.map(row => row.text).join("\n");
  } else {
    // Fallback for unrecognized result types
    formattedResult = "Unable to process the result.";
  }

  return formattedResult;
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
