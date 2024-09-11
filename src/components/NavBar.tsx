//src/components/NavBar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, MenuItem, IconButton, Box } from "@mui/material";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ContrastIcon from "@mui/icons-material/Contrast";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import LoginIcon from "@mui/icons-material/Login";

interface Translations {
  Home: string;
  About: string;
  Projects: string;
  Blog: string;
  Contact: string;
  Login: string;
  Logout: string;
}

const NavBar: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  const translations = useSelector<RootState, Translations | undefined>(
    (state) => state.language.translations.Navbar
  );
  const {
    Home = "Home",
    About = "About",
    Projects = "Projects",
    Blog = "Blog",
    Contact = "Contact",
    Login = "Login",
    Logout = "Logout",
  } = translations || {};

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={(theme:any) => ({
        backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#111111",
        color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
      })}
      elevation={0}
      className="border-b dark:border-stone-900 border-stone-300"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <BlurOnIcon className="text-teal-500" />

        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <MenuItem component={Link} href="/Home">
            {Home}
          </MenuItem>
          <MenuItem component={Link} href="/About">
            {About}
          </MenuItem>
          <MenuItem component={Link} href="/Projects">
            {Projects}
          </MenuItem>
          <MenuItem component={Link} href="/Blog">
            {Blog}
          </MenuItem>
          <MenuItem component={Link} href="/Contact">
            {Contact}
          </MenuItem>
        </Box>
        <Box>
          <IconButton
            color="inherit"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <ContrastIcon />
          </IconButton>
        </Box>
        <Box>
          {!isLoggedIn ? (
            <IconButton component={Link} href="/Login">
              <LoginIcon />
            </IconButton>
          ) : (
            <MenuItem onClick={handleLogout}>{Logout}</MenuItem>
          )}
        </Box>
        <Box>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
