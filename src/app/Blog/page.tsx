// src/app/Blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Pagination from './Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// Define Post type
interface Post {
  slug: string;
  title: string;
  date: string;
  categories?: string[];
  tags?: string[];
}

// Function to fetch all posts from the file system
function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      categories: matterResult.data.categories || [],
      tags: matterResult.data.tags || [],
      thumbnail: matterResult.data.thumbnail || '', // Ensure this line is included
      excerpt: matterResult.data.excerpt || '', // Ensure this line is included if applicable
    };
  });

  // Sort posts by date
  allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
  
  return allPostsData;
}

const BlogPage: React.FC = () => {  
  const posts = getAllPosts();
  
  return (
    <Container>
        <Paper className="m-2 p-2 dark:bg-stone-900">
        <Typography variant="h4" className='p-4 text-blue-500 drop-shadow'>Blog</Typography>
        <Box>   
          <Pagination posts={posts} />
        </Box>
      </Paper>
    </Container>
  );
};

export default BlogPage;
