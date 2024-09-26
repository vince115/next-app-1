//src/components/CardHome.tsx
import React from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface CardHomeProps {
  imgSrc: string;
  titleLabel: string;
  contentLabel: string;
  linkhref: string;
  buttonLabel: string;
  link2href: string;
  button2Label: string;
}

const CardHome: React.FC<CardHomeProps> = ({
  imgSrc,
  titleLabel,
  contentLabel,
  linkhref,
  buttonLabel,
  link2href,
  button2Label,
}) => {
  return (
    <Grid container spacing={2}>
     <Grid size={{xs:12, sm:4 }} className="">
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={imgSrc}
              alt={titleLabel}
              style={{
                maxHeight: "180px",
                objectFit: "cover",
                width: "100%",
                minWidth: "360px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {titleLabel}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {contentLabel}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* 
      <CardActions>
        <Link href={linkhref} passHref>
          <Button size="small" color="primary">
            {buttonLabel}
          </Button>
        </Link>
        <Link href={link2href} passHref>
          <Button size="small" color="primary">
            {button2Label}
          </Button>
        </Link>
      </CardActions>
 */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardHome;
