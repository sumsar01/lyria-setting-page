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

// Function to replace expressions like =this.property with the actual value from frontmatter
function replaceThisExpressions(content, frontmatter) {
  const regex = /=this\.(\w+)/g; // Matches =this.property expressions

  // Replace each =this.property with the corresponding value from frontmatter
  return content.replace(regex, (match, property) => {
    if (frontmatter[property] !== undefined) {
      return frontmatter[property]; // Replace with actual value from frontmatter
    } else {
      return match; // If no such property, keep the original expression
    }
  });
}

// Function to ensure we have valid frontmatter, and ignore improper YAML
function cleanFrontmatter(content) {
  // Match YAML frontmatter, but allow multi-line values or invalid table-like lines to be ignored
  const frontmatterRegex = /^(---[\s\S]*?---)/;

  const frontmatterMatch = content.match(frontmatterRegex);

  // If frontmatter exists, ensure it doesn't contain table-like invalid entries
  if (frontmatterMatch) {
    const frontmatterContent = frontmatterMatch[1];

    // Remove lines like "---|---|" from frontmatter content to prevent issues with YAML parsing
    const cleanedContent = frontmatterContent.replace(/---\|---\|/g, '');

    return cleanedContent;
  }

  return content;
}

// Function to process each markdown file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Clean frontmatter to avoid invalid syntax like "---|---|"
  const cleanedContent = cleanFrontmatter(content);

  // Now parse the cleaned content with gray-matter
  const { data: frontmatter, content: markdownContent } = matter(cleanedContent);

  // Replace expressions like =this.property with actual values from frontmatter
  let modifiedContent = replaceThisExpressions(markdownContent, frontmatter);

  // If the content was modified, write it back to the file
  if (modifiedContent !== markdownContent) {
    const newContent = `---\n${matter.stringify(frontmatter)}---\n${modifiedContent}`;
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
