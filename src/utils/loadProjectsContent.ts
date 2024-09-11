// src/utils/loadProjectsContent.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function loadProjectsContent(): PostData[] {
  const projectsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames
    .filter((filename) => filename.endsWith('.md')) // Only .md files
    .map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      return {
        id: filename.replace(/\.md$/, ''),
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
      };
    });

  return projects;
}