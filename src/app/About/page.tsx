//app/About/page.tsx
"use client";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
import Avatar from "@mui/material/Avatar";

import Code from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import PhpIcon from "@mui/icons-material/Php";
import ApiIcon from "@mui/icons-material/Api";
import WebhookIcon from "@mui/icons-material/Webhook";

import Box from "@mui/material/Box";
import ChipSkills from "@/components/ChipSkills";
import Timeline from "@mui/lab/Timeline";
=======

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
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
import TimelineSchool from "@/components/TimelineSchool";
import TimelineWork from "@/components/TimelineWork";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
<<<<<<< HEAD
} from "@mui/lab/TimelineOppositeContent";

import ThreeZoom from "@/components/ThreeZoom";

const iconMap: { [key: string]: JSX.Element } = {
  CodeIcon: <Code />,
  HtmlIcon: <HtmlIcon />,
  CssIcon: <CssIcon />,
  JavascriptIcon: <JavascriptIcon />,
  PhpIcon: <PhpIcon />,
  ApiIcon: <ApiIcon />,
  WebhookIcon: <WebhookIcon />,
};

interface ChipSkillsData {
  iconTag: string;
  skill: string;
  bgColor: string;
}

=======
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
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
interface TimelineSchoolData {
  time: string;
  dotColor: string;
  school: string;
  department: string;
  content: string;
}
<<<<<<< HEAD

=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
interface TimelineWorkData {
  time: string;
  dotColor: string;
  company: string;
  title: string;
  content: string;
<<<<<<< HEAD
  skills: string;
=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
}

interface Translations {
  title: string;
  description: string;
  skills: string;
<<<<<<< HEAD
  school: string;
  work: string;
  ChipSkills: ChipSkillsData[];
  TimelineSchool: TimelineSchoolData[];
=======
  school:string;
  work:string;
  ChipSkills: ChipSkillsData[];
  TimelineSchool: TimelineSchoolData[]; 
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
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
<<<<<<< HEAD
    ChipSkills: ChipSkillsData = [
      {
        skill: "Loading...",
        iconTag: "",
        bgColor: "",
      },
=======
    ChipSkills : ChipSkillsData =[
      {
        skill:"Loading...",
        iconTag:"", 
        bgColor:""
      }
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
    ],
    work = "Work Experience",
    TimelineSchool: TimelineSchoolData = [
      {
        time: "Loading...", // 修正屬性賦值
<<<<<<< HEAD
        dotColor: "bg-green-500",
        school: "Loading...",
        department: "Loading...",
        content: "Loading...",
      },
=======
        dotColor:"bg-green-500",
        school: "Loading...",
        department: "Loading...",
        content: "Loading...",
      }      
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
    ], // 預設數組
    TimelineWork: TimelineWorkData = [
      {
        time: "2008", // 修正屬性賦值
<<<<<<< HEAD
        dotColor: "bg-red-500",
        company: "IEI",
        title: "Media Designer",
        content: "UIUX",
        skills: "",
      },
      {
        time: "2011",
        dotColor: "",
        company: "Delta",
        title: "Frontend Engineer",
        content: "RWD Web Dev",
        skills: "",
      },
    ], // 預設數組
  } = translations || {};

  {
    console.log("111T", translations);
  }

  const [avatarSrc, setAvatarSrc] = useState("../images/profile.png");
=======
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
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344

  return (
    <Container>
      <Paper className="m-2 p-2  dark:bg-stone-900 pb-12 pr-6">
        <Typography variant="h4" className="text-red-500 p-4 drop-shadow">
          {title}
        </Typography>
<<<<<<< HEAD

        <Box className="float-right inline-block mr-8">
          <Avatar
            alt="Vince Lo"
            src={avatarSrc}
            sx={{ width: 168, height: 168 }}
            onMouseOver={() => setAvatarSrc("../images/profile.jpg")} // 當滑鼠移過時切換圖片
            onMouseOut={() => setAvatarSrc("../images/profile.png")} // 當滑鼠移出時恢復原來的圖片
          />
        </Box>

        <Typography className="px-4">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>

        <Box
          className="w-[580px] h-[580px] inline-block  clear-right float-right "
          sx={{
            position: "sticky",
            top: "5px", // 當滾動時保持距離頂部 100px
          }}
        >
          <ThreeZoom />
        </Box>

        <Typography
          variant="h4"
          className="text-orange-500 font-medium text-2xl p-4"
        >
          {skills}
        </Typography>

        <Box className="ml-8" display="flex" flexWrap="wrap">
          {ChipSkillsData.map((item, index) => (
            <React.Fragment key={index}>
              {item.skill === "\n" ? (
                // 如果 skill 是 \n，則插入一個換行
                <Box width="100%"></Box>
              ) : (
                // 否則正常渲染 ChipSkills 元件
                <Box>
                  <ChipSkills
                    iconTag={iconMap[item.iconTag]}
                    skill={item.skill}
                    bgColor={item.bgColor}
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>

     

        <Typography
          variant="h4"
          className="text-green-500 font-medium text-2xl p-4"
        >
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

        <Typography
          variant="h4"
          className="text-blue-500 font-medium text-2xl p-4"
        >
          {" "}
          {work}{" "}
        </Typography>
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
              skills={item.skills}
            />
          ))}
        </Timeline>
=======
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

>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
      </Paper>
    </Container>
  );
};

export default About;
