// src/utils/loadProjectsContent.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string[];
  technologies: string[];
  date: string;
}

export function loadProjectsContent(language: string): PostData[] {
  //const projectsDirectory = path.join(process.cwd(), 'src', 'posts', language);
  const projectsDirectory = path.join(process.cwd(), 'src', 'posts');
  // 確保文件夾存在
  if (!fs.existsSync(projectsDirectory)) {
    throw new Error(`Directory for language ${language} does not exist`);
  }
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames
    .filter((filename) => filename.endsWith('.md')) 
    .map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      return {
        id: filename.replace('.md', ''),
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        category: data.category || [],
        technologies: data.technologies || [],
        date: data.date, 
      };
    });

  return projects;
}