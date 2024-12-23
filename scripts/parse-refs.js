import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // For parsing YAML frontmatter
import { glob } from 'glob'; // For reading files recursively

// Function to read all Markdown files recursively from a folder
function getMarkdownFiles(dir) {
  let files = [];
  glob.sync(path.join(dir, '**/*.md')).forEach(file => {
    files.push(file);
  });
  return files;
}

function replaceThisExpressions(content, frontmatter, filePath) {
  const regex = /=((?:link\()?this\.(\w+(\.\w+)*)(?:\))?)/g;

  return content.replace(regex, (match, fullExpression, property) => {
    let replacement;

    // Handle `=this.property`
    if (property in frontmatter) {
      replacement = frontmatter[property]; // Replace with the actual value from frontmatter
    }
    // Handle special cases like `file.name` and `file.path`
    else if (property === 'file.name') {
      replacement = path.basename(filePath, '.md'); // Replace with file name (without extension)
    } else if (property === 'file.path') {
      replacement = filePath; // Replace with the full file path
    }

    // Handle `=link(this.property)`
    if (fullExpression.startsWith('link(')) {
      if (replacement !== undefined) {
        return `[[${replacement}]]`; // Wrap the value in Obsidian link syntax
      }
    }

    // If no match, return the original expression
    return replacement !== undefined ? replacement : match;
  });
}

// Function to safely stringify the frontmatter
function safeStringifyFrontmatter(frontmatter) {
  // Ensure frontmatter is valid
  if (!frontmatter || typeof frontmatter !== 'object') {
    return ''; // Return an empty string if frontmatter is invalid or undefined
  }

  
  // Remove invalid or unsupported properties
  const sanitizedFrontmatter = JSON.parse(JSON.stringify(frontmatter, (key, value) => {

    return value;
  }));

  return matter.stringify(sanitizedFrontmatter);
}

// Function to process each markdown file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Parse the frontmatter with gray-matter
  const { data: frontmatter, content: markdownContent } = matter(content);

  console.log(`Processing file: ${filePath}`);
  console.log('Frontmatter:', frontmatter);

  // Replace expressions like =this.property with actual values from frontmatter or file properties
  let modifiedContent = replaceThisExpressions(markdownContent, frontmatter, filePath);

  // If the content was modified, write it back to the file
  if (modifiedContent !== markdownContent) {
    const newFrontmatter = safeStringifyFrontmatter(frontmatter);
    const newContent = `---\n${newFrontmatter}\n---\n${modifiedContent}`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Processed and updated: ${filePath}`);
  } else {
    console.log(`No expressions found in: ${filePath}`);
  }
}

// Main function to process all markdown files in a directory
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
