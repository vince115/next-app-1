//src/components/Carousel.tsx  
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import style from "../components/carouselhome.module.scss"

  interface CarouselProps {
    imgSrc: string;
    titleLabel: string;
    linkhref: string; 
    buttonLabel: string;
  }
  
  const CarouselHome: React.FC<CarouselProps> = ({
    imgSrc,
    titleLabel,
    linkhref,
    buttonLabel,
  }) => {
    return (
      <>      
  <Container className={`${style.box} flex justify-center items-center`}>
<<<<<<< HEAD
  
  <Box className="p-2">
  <Image
    src={imgSrc}
    alt=""
    className="rounded px-0"
    width={1150}
    height={200}
  />
  </Box>
=======
  <Image
    src={imgSrc}
    alt=""
    className="rounded-sm"
    width={1150}
    height={200}
  />
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
  <Box sx={{ position: "absolute", zIndex: 8 }}>
    <Typography
      sx={{
        position: "relative",
        fontSize: "24px",
        top: -50,
        left: -400,
        zIndex: 9,
      }}
    >
      {titleLabel}
    </Typography>
    <Link href={linkhref}>
    <Button
      sx={{ position: "relative", top: 70, left: 350, zIndex: 9 }}
      variant="contained"
    > 
      {buttonLabel}
    </Button>
    </Link>
  </Box>
</Container>                      
      </>
    );
  };
  
  export default CarouselHome;
  