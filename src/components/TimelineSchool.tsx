//src/components/TimelineSchool.tsx
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    TimelineSeparator,
  } from "@mui/lab";
  import { Typography } from "@mui/material";
  //import { Timeline, TimelineItem } from "flowbite-react";
  
  interface TimelineSchoolProps {
    time: string;
    dotColor: string;
    school: string;
    department: string;
    content: string;
  }
  
  const TimelineSchool: React.FC<TimelineSchoolProps> = ({
    time,
    dotColor,
    school,
    department,
    content,
  }) => {
    return (
      <>
  
        <TimelineItem>
          <TimelineOppositeContent className="text-amber-500">{time} </TimelineOppositeContent>
          <TimelineSeparator>             
            <TimelineDot variant="outlined" 
            color="success"
            sx={{ 
              backgroundColor: dotColor
            }}
            //className={dotColor} 
           // className={`${dotColor} `} 
            />          
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className="font-bold">{school}</Typography>
            <Typography>{department}</Typography>
            <Typography>{content}</Typography>
          </TimelineContent>
        </TimelineItem>
                
  
      </>
    );
  };
  
  export default TimelineSchool;
  