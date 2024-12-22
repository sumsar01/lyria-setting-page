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

// Function to replace expressions like =this.file.name with the actual value
function replaceThisExpressions(content, frontmatter, filePath) {
  const regex = /=this\.(\w+(\.\w+)*)/g; // Matches =this.property or =this.file.name (including nested properties)
  
  // Replace each =this.property with the corresponding value from frontmatter or the file metadata
  return content.replace(regex, (match, property) => {
    // Handle specific properties from frontmatter
    if (property in frontmatter) {
      return frontmatter[property]; // Replace with actual value from frontmatter
    } 
    // Handle special properties like file.name or file.path
    else if (property === 'file.name') {
      const fileName = path.basename(filePath, '.md');
      return fileName; // Replace with the file name (without the extension)
    }
    else if (property === 'file.path') {
      return filePath; // Replace with the full file path
    }
    // If no such property, return the original expression
    return match;
  });
}

// Function to ensure we have valid frontmatter, and ignore improper YAML entries like "---|---|"
function cleanFrontmatter(content) {
  const frontmatterRegex = /^(---[\s\S]*?---)/;

  const frontmatterMatch = content.match(frontmatterRegex);

  if (frontmatterMatch) {
    let frontmatterContent = frontmatterMatch[1];

    // Remove lines like "---|---|" from frontmatter content
    frontmatterContent = frontmatterContent.replace(/---\|---\|/g, '');

    return frontmatterContent;
  }

  return content;
}

// Function to process each markdown file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Clean frontmatter to avoid invalid syntax like "---|---|"
  const cleanedContent = cleanFrontmatter(content);

  // Parse the frontmatter with gray-matter
  const { data: frontmatter, content: markdownContent } = matter(cleanedContent);

  console.log(`Processing file: ${filePath}`);
  console.log('Frontmatter:', frontmatter);

  // Replace expressions like =this.property with actual values from frontmatter or file properties
  let modifiedContent = replaceThisExpressions(markdownContent, frontmatter, filePath);

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
