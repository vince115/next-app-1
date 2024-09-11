//src/app/layout.tsx
"use client"
import { useEffect } from 'react';
import { Noto_Sans_TC } from "next/font/google";
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

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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

  return (
    <html lang={currentLanguage}>
      <body className={`${notoSansTC.className} dark:bg-stone-900 bg-slate-200`} >
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
