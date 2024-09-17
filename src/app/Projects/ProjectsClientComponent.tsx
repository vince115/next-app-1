// app/Projects/ProjectsClientComponent.tsx (客戶端組件)
'use client';

import React, { useState } from 'react';
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PaginationProjects from './Pagination'; // 引入你的分頁組件

// 由於 category 是字符串陣列，因此不需要使用 name 屬性
interface PostData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string[]; // 將 category 定義為字符串陣列
  technologies: string[];
}

interface Translations {
  title: string;
  description: string;
}

interface ProjectsClientComponentProps {
  projects: PostData[];
}

const ProjectsClientComponent: React.FC<ProjectsClientComponentProps> = ({ projects }) => {
  
  const translations = useSelector<RootState, Translations | undefined>(
    (state) => state.language.translations?.Projects
  );

  const {
    title = "Projects",
    description = "Loading..."
  } = translations || {};

  // Tabs 狀態
  const [selectedTab, setSelectedTab] = useState<string>('all');

  // 根據當前的標籤篩選項目
  const filteredProjects = selectedTab === 'all'
    ? projects
    : projects.filter((project) => {
        console.log("Selected Tab:", selectedTab);
        console.log("Project Categories:", project.category);

        // 在字符串陣列中篩選出匹配的類別
        return project.category.some((cat) => cat.toLowerCase() === selectedTab.toLowerCase());
      });

  // 處理標籤更改
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Paper className="m-2 p-2 dark:bg-stone-900">
        <Typography variant="h4" className="text-green-500 p-4 drop-shadow">
          {title}
        </Typography>
        <Typography className="px-4">
          {description}
        </Typography>

        {/* 添加 Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          className="mb-3"
        >
          <Tab label="All" value="all" />
          <Tab label="UI/UX" value="uiux" />
          <Tab label="FrontEnd" value="frontend" />
          <Tab label="Backend" value="backend" />
        </Tabs>

        {/* 使用分頁系統來展示篩選後的項目 */}
        <PaginationProjects projects={filteredProjects} />
      </Paper>
    </Container>
  );
};

export default ProjectsClientComponent;
