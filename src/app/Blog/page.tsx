// src/app/Blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Pagination from './Pagination';
<<<<<<< HEAD
import Box from '@mui/material/Box';
=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
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

<<<<<<< HEAD
const BlogPage: React.FC = () => {  
=======
// Server component to render the blog page
const BlogPage = async () => {
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
  const posts = getAllPosts();
  
  return (
    <Container>
        <Paper className="m-2 p-2 dark:bg-stone-900">
        <Typography variant="h4" className='p-4 text-blue-500 drop-shadow'>Blog</Typography>
<<<<<<< HEAD
        <Box>   
          <Pagination posts={posts} />
        </Box>
=======
        <div>   
          <Pagination posts={posts} />
        </div>
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
      </Paper>
    </Container>
  );
};

export default BlogPage;
