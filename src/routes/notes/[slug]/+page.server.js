// @ts-nocheck
import { promises as fs } from 'fs';
import path from 'path';
import markdownIt from 'markdown-it';
import cheerio from 'cheerio';


const md = markdownIt();

export async function load({ params }) {
  const { slug } = params;
  const filePath = path.resolve(`./src/routes/notes/posts/${slug}.md`);
  const markdown = await fs.readFile(filePath, 'utf-8');
  const content = md.render(markdown);

  // The parsed markdown always includes frontmatter metadata in the h2 tag
  // Remove it and the hr tag in front of it too 
  const $ = cheerio.load(content);
  const hrElement = $('hr').get(0);
  const h2Element = $('h2:not(:empty)').get(0);
  let substring = '';
  if (hrElement && h2Element) {
    const startIndex = content.indexOf($.html(hrElement)) + $.html(hrElement).length + $.html(h2Element).length + 1;
    substring = content.substring(startIndex);
  }

  return { substring };
}
