<<<<<<< HEAD
// app/Projects/page.tsx
import { loadProjectsContent, PostData } from '@/utils/loadProjectsContent';
import ProjectsClientComponent from './ProjectsClientComponent'; // 引入客戶端組件

const ProjectsPage = async () => {
  
  const language = 'en';  // 默認為 'en' 語言，或者你可以通過其他方式動態獲取語言

  // 根據語言加載項目數據
  const projects: PostData[] = loadProjectsContent(language);

  return (
    <ProjectsClientComponent projects={projects} />
  );
};

export default ProjectsPage;
=======
import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { loadProjectsContent, PostData } from '@/utils/loadProjectsContent';
//import parse from 'html-react-parser';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


const ProjectsPage: React.FC = () => {

  const loadProjects = (): PostData[] => {
    const projectsDirectory = path.join(process.cwd(), 'src', 'posts');
    const filenames = fs.readdirSync(projectsDirectory);
    console.log("Filenames:", filenames);

    const projects = filenames
      .filter((filename) => filename.endsWith('.md'))  // Filter only .md files
      .map((filename) => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        console.log(`Contents of ${filename}:`, fileContents);

        const { data } = matter(fileContents);
        console.log(`Data for ${filename}:`, data);

        return {
          id: filename.replace(/\.md$/, ''),  // Remove the .md extension
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
        };
      });

      console.log("Loaded Projects:", projects);

      return projects;
    };


  const projects = loadProjects();
  return (
    <Container>
      <Paper className="m-2 p-2 dark:bg-stone-900 ">
      <Typography variant="h4" className='p-4 text-green-500  drop-shadow '>Projects</Typography>
      <Container>
      <ul>      
      <Grid container spacing={1}>
            {projects.map((project) => (
              <Grid size={4} key={project.id} component="li" className='p-2'>       
                <Link href={`/Projects/${project.id}`} passHref className='no-underline'>
                <Card className={`border-0 dark:bg-gray-800 dark:border-slate-700 bg-stone-50`}>
                    <CardContent>
                      <Typography variant="h6" noWrap={false} className='text-teal-500'>{project.title}</Typography>
                      <Typography>{project.description}</Typography>
                      <Image 
                        src={project.imageUrl} 
                        alt={project.title} 
                        width={600} 
                        height={400}
                       />
                    </CardContent>
                  </Card>
                  </Link>         
                </Grid>
            ))}
            </Grid>  
      </ul>
      </Container>
      </Paper>
    </Container>
  );
};

export default ProjectsPage;
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
