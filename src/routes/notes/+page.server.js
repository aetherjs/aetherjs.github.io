// @ts-nocheck
import { promises as fs } from 'fs';
import path from 'path';
import markdownIt from 'markdown-it';
import fm from 'front-matter';

const md = markdownIt();

export async function load() {
  // Get the names of all .md files in the /posts directory
  const files = await fs.readdir('src/routes/notes/posts');
  
  // Filter for .md files and remove the extension
  const slugs = files.filter(file => path.extname(file) === '.md').map(file => path.basename(file, '.md'));

  // Load and parse each Markdown file
  const posts = await Promise.all(slugs.map(async slug => {
    const filePath = path.resolve(`./src/routes/notes/posts/${slug}.md`);
    const markdown = await fs.readFile(filePath, 'utf-8');
    const { attributes, body } = fm(markdown);

    const content = md.render(body);
    const url = `notes/${slug}`

    return { url, attributes, content };
  }));

  return { posts };
}
