import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProjectProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectProps) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'src', 'posts', `${id}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return notFound(); // Return a 404 if the file doesn't exist
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Image src={data.imageUrl} alt={data.title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      id: filename.replace(/\.md$/, ''), // Remove .md extension
    }));

  return paths;
}
