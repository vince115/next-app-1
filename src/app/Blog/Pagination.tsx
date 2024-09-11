// src/app/Blog/Pagination.tsx
"use client";

import React, { useState } from 'react';
import Container from '@mui/material/Container';

import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Post {
  slug: string;
  title: string;
  date: string;
  categories?: string[];
  tags?: string[];
  thumbnail?: string;
  excerpt?: string;
}

const PaginationPage = ({ posts }: { posts: Post[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 5;

 
  // Calculate the current posts to display based on pagination
  const currentPosts = posts.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <Container>

    <Grid container spacing={2}> 
        {currentPosts.map((post) => {
             console.log('Post thumbnail:', post.thumbnail); 
        return (    
          <Grid size={12} key={post.slug} maxWidth="85%" > 
            <Card className={`border-0 dark:bg-gray-800 dark:border-slate-700 `}>
            <Grid container spacing={2}>
              <Grid size={8}> 
             
                <CardContent>
                <Typography variant="h5" component="div" className='text-teal-500'>
                  {post.title}
                </Typography>
                <Typography variant="body2" className='text-lime-500'>
                  {post.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {post.tags?.join(', ')} 
                </Typography>
               
                {post.excerpt && (
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                )}
                </CardContent>
                <CardActions>
                <Link href={`/Blog/${post.slug}`} passHref>
                <Button size="small" variant="contained" className='bg-teal-500'>Read More</Button>
                </Link>
                </CardActions>
               
              </Grid>
              <Grid size={4}>
              <Box>
              {post.thumbnail && (
                <CardMedia
                className='p-4'
                component="img"
                image={post.thumbnail}
                alt={post.title}
                sx={{ 
                    height: '100%', // Set a maximum height
                    width: '100%', // Let the width adjust automatically to keep the aspect ratio
                    maxWidth: '100%', // Ensure it doesn't overflow its container
                    objectFit: 'cover', // Adjust how the image should be resized
                  }}
                />
            )}
            </Box>         
              </Grid>
            </Grid>
            </Card>
          </Grid>
       );
    })}
      </Grid>

      <Box>
        <Stack spacing={2} >
        <Pagination 
        count={Math.ceil(posts.length / pageSize)} // 根據總文章數計算頁數
        variant='outlined'
        shape='rounded' 
        color='primary' 
        page={currentPage + 1} // 設置當前頁面
        onChange={(event, value) => setCurrentPage(value - 1)} // 更新當前頁面
        className='pt-4 w-[85%] flex justify-center'
      />
        </Stack>
      </Box>


      </Container>
  );
};

export default PaginationPage;
