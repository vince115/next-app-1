//src/components/ChipSkills.tsx
import { Chip } from '@mui/material';

interface SkillsProps {
  iconTag: JSX.Element; 
  skill: string;
  bgColor: string;
}

const ChipSkills: React.FC<SkillsProps>=({
    iconTag, 
    skill, 
    bgColor
}) => {

  return (
    <>
        <Chip 
            icon={iconTag}  
            label={skill}   
            sx={{ 
                    backgroundColor: bgColor,
<<<<<<< HEAD
                    margin:'4px 2px'
=======
                    margin:'0  2px'
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
                }}            
            />
            
    </>     
  );
};

export default ChipSkills;
