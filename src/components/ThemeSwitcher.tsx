import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import IconButton from '@mui/material/IconButton';
import ContrastIcon from '@mui/icons-material/Contrast';

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <IconButton onClick={toggleTheme} color="inherit" aria-label="Toggle theme">
      <ContrastIcon />
    </IconButton>
  );
};

export default ThemeSwitcher;