'use client';  // 這裡標記為客戶端組件

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';

interface PaginationButtonsProps {
  currentIndex: number;
  totalPages: number;
  allPosts: { slug: string }[];
}

const PaginationButtons = ({ currentIndex, totalPages, allPosts }: PaginationButtonsProps) => {
  const router = useRouter();

  const handlePreviousPage = () => {
    if (currentIndex > 0) {
      const previousSlug = allPosts[currentIndex - 1].slug;
      router.push(`/Blog/${previousSlug}`);
    }
  };

  const handleNextPage = () => {
    if (currentIndex < totalPages - 1) {
      const nextSlug = allPosts[currentIndex + 1].slug;
      router.push(`/Blog/${nextSlug}`);
    }
  };

  return (
    <Box mt={2}>
      <Button onClick={handlePreviousPage} disabled={currentIndex === 0} variant="contained">
        Previous
      </Button>
      <Button
        onClick={handleNextPage}
        disabled={currentIndex >= totalPages - 1}
        variant="contained"
        sx={{ ml: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default PaginationButtons;
