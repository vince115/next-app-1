// src/components/BlogList.tsx
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface BlogListProps {
  posts: Post[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          <small>{post.date}</small>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
