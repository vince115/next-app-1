import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import PaginationButtons from '../PaginationButtons'; // 引入客戶端組件

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostData {
  slug: string;
  contentHtml: string;
  title: string;
  date: string;
  categories?: string[];
  tags?: string[];
}

async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  } as PostData;
}

async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    return {
      slug: filename.replace(/\.md$/, ''),
    };
  });
  return posts;
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  if (!slug) {
    return <p>Invalid post!</p>;
  }

  const postData = await getPostData(slug);
  const allPosts = await getAllPosts(); 
  const currentIndex = allPosts.findIndex((post) => post.slug === slug); 
  const totalPages = allPosts.length; 

  return (
    <>
      <Container className='m-4'>
        <Paper className="m-2 p-8 pb-[4rem]">
          <Typography variant="h5" className=' text-teal-500 drop-shadow-sm'>{postData.title}</Typography>
          <Typography variant="h6" className=' text-lime-500'>{postData.date}</Typography>

          {postData.categories && (
            <div>
              <strong>Categories: </strong>
              {postData.categories.map((category: string) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          )}

          {postData.tags && (
            <div>
              <strong>Tags: </strong>
              {postData.tags.map((tag: string) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div id="disqus_thread"></div> 

          {/* 使用客戶端組件處理分頁按鈕 */}
          <PaginationButtons currentIndex={currentIndex} totalPages={totalPages} allPosts={allPosts} />
        </Paper>
      </Container>
    </>
  );
};

export default BlogPost;
