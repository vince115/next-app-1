import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'src', 'posts', `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound(); // Return 404 if the file doesn't exist
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <Container>
      <Paper className="m-2 p-8 pb-[4rem]">
      <Typography variant="h5" className=' text-teal-500 drop-shadow-sm'>{data.title}</Typography>
      <Typography variant="h6" className=' text-lime-500'>{data.description}</Typography>  
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Image src={data.imageUrl} alt={data.title} width={600} height={400} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      </Paper>
    </Container>
  );
}

export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(projectsDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      id: filename.replace(/\.md$/, ''), // Remove .md extension
    }));

  return paths;
}
