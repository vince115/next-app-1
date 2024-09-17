//src/app/Projects/[lang]/Pagination.tsx
"use client";

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const PaginationProjects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 5; // Show 9 projects per page

  // Calculate the current projects to display based on pagination
  const currentProjects = projects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <Container>
    <Grid container spacing={2}>
      {currentProjects.map((project) => (
        <Grid size={4} key={project.id}>
         
            <Card className={`border-0 dark:bg-gray-800 dark:border-slate-700 bg-stone-50`}>
              {/* CardMedia for thumbnail */}
              <CardMedia
                component="img"
                alt={project.title}
                image={project.imageUrl} // Thumbnail image URL
                title={project.title}
                sx={{
                  height: 180,  // Adjust the thumbnail height
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" noWrap={false} className='text-teal-500'>
                  {project.title}
                </Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
              <Link href={`/Projects/${project.id}`} passHref>
              <Button size="small">Learn More</Button> 
              </Link>
            </CardActions>
            </Card>
         
        </Grid>
      ))}
    </Grid>

    {/* Centered Pagination */}
    <Box display="flex" justifyContent="center" mt={4}>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(projects.length / pageSize)} // Calculate total pages based on project count
          variant="outlined"
          shape="rounded"
          color="primary"
          page={currentPage + 1}
          onChange={(event, value) => setCurrentPage(value - 1)} // Update the current page
        />
      </Stack>
    </Box>
  </Container>
  );
};

export default PaginationProjects;