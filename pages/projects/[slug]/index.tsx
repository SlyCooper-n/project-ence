import { Project } from "@components/pages";
import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();

  return <Project />;
};

export default ProjectPage;
