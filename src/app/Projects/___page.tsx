// app/Projects/page.tsx
'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ProjectsClientComponent from './ProjectsClientComponent'; // 引入客戶端組件
import { loadProjectsContent } from '@/utils/loadProjectsContent';

const ProjectsPage = () => {
  // 從 Redux 中取得語言
  const language = useSelector((state: RootState) => state.language.currentLanguage) || 'en';

  // 根據語言加載項目數據
  const projects = loadProjectsContent(language);

  return (
    <ProjectsClientComponent projects={projects} />
  );
};

export default ProjectsPage;
