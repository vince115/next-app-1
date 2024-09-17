// app/Projects/page.tsx
import { loadProjectsContent, PostData } from '@/utils/loadProjectsContent';
import ProjectsClientComponent from './ProjectsClientComponent'; // 引入客戶端組件

const ProjectsPage = async () => {
  
  const language = 'en';  // 默認為 'en' 語言，或者你可以通過其他方式動態獲取語言

  // 根據語言加載項目數據
  const projects: PostData[] = loadProjectsContent(language);

  return (
    <ProjectsClientComponent projects={projects} />
  );
};

export default ProjectsPage;
