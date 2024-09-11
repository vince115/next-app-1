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
                    margin:'0  2px'
                }}            
            />
            
    </>     
  );
};

export default ChipSkills;
