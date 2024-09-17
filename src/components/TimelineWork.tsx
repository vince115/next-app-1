//src/components/TimelineWork.tsx
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

interface TimelineWorkProps {
  time: string;
  dotColor: string;
  company: string;
  title: string;
  content: string;
<<<<<<< HEAD
  skills:string;
=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
}

const TimelineWork: React.FC<TimelineWorkProps> = ({
  time,
  dotColor,
  company,
  title,
  content,
<<<<<<< HEAD
  skills
=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
}) => {
  return (
    <>

      <TimelineItem>
        <TimelineOppositeContent className="text-amber-500">{time}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot 
            variant="outlined"
            color="primary"
            className={dotColor} 
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="font-bold">{company}</Typography>
          <Typography className="text-blue-500">{title}</Typography>
          <Typography className="text-gray-400">{content}</Typography>
<<<<<<< HEAD
          
          <Typography className="text-gray-600">{skills}</Typography>
=======
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
        </TimelineContent>
      </TimelineItem>
              

    </>
  );
};

export default TimelineWork;
