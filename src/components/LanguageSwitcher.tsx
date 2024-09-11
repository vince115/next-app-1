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