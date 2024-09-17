//src/app/layout.tsx
"use client"
import { useEffect } from 'react';
import { AuthProvider } from '../context/auth-context';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState, useMemo } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState, AppDispatch } from '@/redux/store';
import { loadTranslations } from '@/redux/slices/languageSlice';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js';


interface FooterData{
  title: string;
  description: string;
}
interface Translations {
  Footer?: FooterData; // Footer 是可選屬性
}

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const translations = useSelector<RootState, Translations | undefined>(
    (state) => state.language.translations
  );
  
  const { title = "", description = "" } = translations?.Footer || {};

  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode,
    },
  }), [mode]);

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark', mode === 'light');
  };

  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  useEffect(() => {
    dispatch(loadTranslations(currentLanguage));
  }, [dispatch, currentLanguage]);

  // 在頁面加載後應用 Highlight.js
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);  // 使用 highlightElement 而不是 highlightBlock
    });
  }, [children]);  // 在 children 變更時應用高亮

  return (
    <html lang={currentLanguage}>
      {/* <body className={`${notoSansTC.className} dark:bg-stone-900 bg-slate-200`} > */}
      <body className={` dark:bg-stone-900 bg-slate-200`} >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          {/* 把 toggleTheme 傳遞給 NavigationBar */}
          <NavBar toggleTheme={toggleTheme} />
          <AuthProvider>        
            {children}
          </AuthProvider>
        </ThemeProvider>
       
        <Footer 
          title={title}
          description={description}
        />

      </body>     
    </html>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  );
}
