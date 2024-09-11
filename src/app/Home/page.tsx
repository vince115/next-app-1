"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import style from "./home.module.scss";
import CarouselHome from "@/components/CarouselHome";
import CardHome from "@/components/CardHome";


interface CarouselHomeData {
  imgSrc: string;
  titleLabel: string;
  linkhref: string;
  buttonLabel: string;
}

interface CardHomeData {
  imgSrc: string;
  titleLabel: string;
  contentLabel: string;
  linkhref: string;
  buttonLabel: string;
  link2href: string;
  button2Label: string;
}

interface Translations {
  welcome: string;
  language: string;
  Carousel: CarouselHomeData[];
  Card: CardHomeData[];
}

const Home: React.FC = () => {
  const translations = useSelector<RootState, Translations | undefined>(
    (state) => state.language.translations.Home
  );
  // 提供預設值，避免 translations 未加載時出現錯誤
  const {
    welcome = "Loading...",
    language = "Loading...",
    Carousel: CarouselHomeData = [
      {
        imgSrc: "",
        titleLabel: "",
        linkhref: "",
        buttonLabel: "",
      },
    ],
    Card: CardHomeData = [
      {
        imgSrc: "",
        titleLabel: "",
        contentLabel: "",
        linkhref: "",
        buttonLabel: "",
        link2href: "",
        button2Label: "",
      },
    ],
  } = translations || {};

  return (
    <>
      <Carousel
        className={`${style.carousel} px-2`} 
        sx={{ boxShadow: 0, ".MuiButtonBase-root": { zIndex: 10 } }}
        interval={3000} // 確保這裡的 interval 設定正確
        //navButtonsAlwaysVisible // 添加這行以確保導航按鈕始終可見
      
      >
        {CarouselHomeData.map((item, index) => (
          <CarouselHome
            key={index}
            imgSrc={item.imgSrc}
            titleLabel={item.titleLabel}
            linkhref={item.linkhref}
            buttonLabel={item.buttonLabel}
          />
        ))}
      </Carousel>

      <Container>
        <Paper className="m-2 p-2  dark:bg-stone-900 pb-12 pr-6">
          {/* <main className="flex flex-col items-center justify-between pb-48"> */}
          <Typography
            variant="h4"
            className="p-4 pb-0 text-purple-500 drop-shadow"
          >
            {welcome}
          </Typography>
          <Typography className="px-4 pb-6">{language}</Typography>

    
          <Grid container spacing={2} className=" pl-2 pb-6 mx-2">   
          {CardHomeData.map((item, index) => (
            <CardHome
              key={index}
              imgSrc={item.imgSrc}
              titleLabel={item.titleLabel}
              contentLabel={item.contentLabel}
              linkhref={item.linkhref}
              buttonLabel={item.buttonLabel}
              link2href={item.link2href}
              button2Label={item.button2Label}
            />
          ))}

        </Grid>
          {/* </main> */}
        </Paper>
      </Container>
    </>
  );
};
export default Home;
