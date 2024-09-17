<<<<<<< HEAD
//src/components/LanguageSwitcher.tsx
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, loadTranslations } from "@/redux/slices/languageSlice";
import type { RootState, AppDispatch } from "@/redux/store";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : ""; // 取得當前路徑

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value;

    // 更新 Redux 中的語言狀態
    dispatch(setLanguage(selectedLanguage));
    dispatch(loadTranslations(selectedLanguage));
  };

  const generateLink = (lang: string) => {
    // 如果當前是 /projects 頁面，則返回 /projects/{lang} 路徑
    if (currentPath.startsWith("/Projects")) {
      return `/Projects/${lang}`;
    }
    // 否則，返回當前路徑，保持其他頁面的語言切換不影響路徑
    return currentPath;
  };

  return (
    <Select
      value={currentLanguage}
      onChange={handleChange}
      sx={{
        border: "none",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
      }} // 無邊框設計
      className="text-teal-500"
    >
      <MenuItem value="en">
        <Link
          href={generateLink("en")}
          style={{ textDecoration: "none" }}
          passHref
        >
          <Typography component="span">EN</Typography>
        </Link>
      </MenuItem>
      <MenuItem value="zh-tw">
        <Link
          href={generateLink("zh-tw")}
          style={{ textDecoration: "none" }}
          passHref
        >
          <Typography component="span">繁中</Typography>
        </Link>
      </MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
=======
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, loadTranslations } from '@/redux/slices/languageSlice';
import type { RootState, AppDispatch } from '@/redux/store';

const LanguageSwitcher:React.FC=()=>{
    const dispatch = useDispatch<AppDispatch>();
    const currentLanguage = useSelector((state:RootState)=> state.language.currentLanguage);
    
    const handleChange = (event:SelectChangeEvent<string>) => {
        const selectedLanguage = event.target.value;
        dispatch(setLanguage(selectedLanguage)); //更新語言狀態
        dispatch(loadTranslations(selectedLanguage)); //加載對應語言的翻譯
    }

    return(
        <Select 
        value={currentLanguage} 
        onChange={handleChange}
        sx={{ border: 'none', '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }} // 無邊框設計
        className='text-teal-500'
        >
          
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="zh-tw">繁中</MenuItem>
        </Select>
    )
}
export default LanguageSwitcher;
>>>>>>> 32b2443aa1b341c46d8f79cd01d26253efa39344
