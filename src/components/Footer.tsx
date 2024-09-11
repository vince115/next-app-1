//src/components/Footer.tsx
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

interface FooterProps {
  title: string;
  description: string;
}

const Footer:React.FC<FooterProps>=({
  title,
  description,
})=>{
  return (
    <footer style={{ backgroundColor: '#212529', color: '#fff', padding: '20px 0', marginTop: 'auto' }}>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom></Typography>
          <ul className='flex flex-nowrap '>
            <li className='pr-2'><Link href='' color="inherit"><FacebookIcon className='text-slate-50'/></Link></li>
            <li className='pr-2'><Link href='' color="inherit"><XIcon className='text-slate-50'/></Link></li>
            <li className='pr-2'><Link href='' color="inherit"><InstagramIcon className='text-slate-50'/></Link></li>
            <li className='pr-2'><Link href='' color="inherit"><PinterestIcon className='text-slate-50'/></Link></li>
            <li className='pr-2'><Link href='' color="inherit"><YouTubeIcon className='text-slate-50'/></Link></li>
            <li><Link href='' color="inherit"><GitHubIcon className='text-slate-50'/></Link></li>
          </ul>
        </Grid>
      </Grid>
      <Typography variant="body2" align="left" style={{ marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} vince115 Idv. All Rights Reserved.
      </Typography>
    </Container>
  </footer>
  );
};

export default Footer;