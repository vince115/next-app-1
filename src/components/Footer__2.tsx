
//src/components/Footer.tsx
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

interface FooterProps {
  title: string;
  description: string;
}
const Footer:React.FC<FooterProps>=({
  title,
  description
})=>{
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
      className="bg-slate-300"
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid size={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;