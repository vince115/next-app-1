//app/About/page.tsx
"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Code from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import PhpIcon from '@mui/icons-material/Php';
import ApiIcon from '@mui/icons-material/Api';
import WebhookIcon from '@mui/icons-material/Webhook';

import Box from "@mui/material/Box";
import ChipSkills from "@/components/ChipSkills";
import Timeline from "@mui/lab/Timeline"
import TimelineSchool from "@/components/TimelineSchool";
import TimelineWork from "@/components/TimelineWork";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import ThreeZoom from "@/components/ThreeZoom";


const iconMap: { [key: string]: JSX.Element } = {  
  CodeIcon: <Code />,
  HtmlIcon: <HtmlIcon />,
  CssIcon: <CssIcon/>,
  JavascriptIcon: <JavascriptIcon/>,
  PhpIcon: <PhpIcon/>,
  ApiIcon: <ApiIcon/>,
  WebhookIcon: <WebhookIcon />,
};
interface ChipSkillsData{
  iconTag:string;
  skill:string;
  bgColor:string;
}
interface TimelineSchoolData {
  time: string;
  dotColor: string;
  school: string;
  department: string;
  content: string;
}
interface TimelineWorkData {
  time: string;
  dotColor: string;
  company: string;
  title: string;
  content: string;
}

interface Translations {
  title: string;
  description: string;
  skills: string;
  school:string;
  work:string;
  ChipSkills: ChipSkillsData[];
  TimelineSchool: TimelineSchoolData[]; 
  TimelineWork: TimelineWorkData[]; // 將 TimelineWork 定義為數組
}

const About: React.FC = () => {
  const translations = useSelector<RootState, Translations | undefined>(
    (state) => state.language.translations.About
  );

  // 提供預設值，避免 translations 未加載時出現錯誤
  const {
    title = "About",
    description = "Loading...",
    skills = "Skills",
    school = "School Experience",
    ChipSkills : ChipSkillsData =[
      {
        skill:"Loading...",
        iconTag:"", 
        bgColor:""
      }
    ],
    work = "Work Experience",
    TimelineSchool: TimelineSchoolData = [
      {
        time: "Loading...", // 修正屬性賦值
        dotColor:"bg-green-500",
        school: "Loading...",
        department: "Loading...",
        content: "Loading...",
      }      
    ], // 預設數組
    TimelineWork: TimelineWorkData = [
      {
        time: "2008", // 修正屬性賦值
        dotColor:"bg-red-500",
        company: "IEI",
        title: "Media Designer",
        content: "UIUX",
      },
      {
        time: "2011",
        dotColor:"",
        company: "Delta",
        title: "Frontend Engineer",
        content: "RWD Web Dev"
      },
    ], // 預設數組
  } = translations || {};
  
  {console.log('111T',translations);}

  return (
    <Container>
      <Paper className="m-2 p-2  dark:bg-stone-900 pb-12 pr-6">
        <Typography variant="h4" className="text-red-500 p-4 drop-shadow">
          {title}
        </Typography>
        <Typography className=" px-4">
          {description}
        </Typography>


        <Typography variant="h4" className="text-orange-500 font-medium text-2xl p-4">
          {skills}
        </Typography>

        <Box className="ml-8">
        {ChipSkillsData.map((item, index) => (

         <ChipSkills
          key={index}
          iconTag={iconMap[item.iconTag]}
          skill={item.skill}
          bgColor={item.bgColor}

          />

        ))}
        </Box>
        <Box className="w-[580px] h-[580px] block float-right mr-[15px]"
          sx={{
            position: 'sticky',
            top: '5px', // 當滾動時保持距離頂部 100px
          }}
        >
          <ThreeZoom/>
        </Box>
        <Typography variant="h4" className="text-green-500 font-medium text-2xl p-4">
          {school}
        </Typography>

        <Timeline 
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
        >
        {/* 渲染每一個 TimelineWork 條目 */}
        {TimelineSchoolData.map((item, index) => (
        <TimelineSchool
          key={index}
          time={item.time}          
          dotColor={item.dotColor}
          school={item.school}
          department={item.department}
          content={item.content}
        />
        ))}
      </Timeline>    
               
     
      <Typography variant="h4" className="text-blue-500 font-medium text-2xl p-4"> {work} </Typography>      
        <Timeline 
         sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
        >
        {/* 渲染每一個 TimelineWork 條目 */}
        {TimelineWorkData.map((item, index) => (
          <TimelineWork
            key={index}
            time={item.time}
            dotColor={item.dotColor}
            company={item.company}
            title={item.title}
            content={item.content}
          />
        ))}
        </Timeline>

      </Paper>
    </Container>
  );
};

export default About;