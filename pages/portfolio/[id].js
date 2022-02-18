import ProjectDesc from "../../Components/ProjectDesc";
import projectData from "../../public/Assets/data";

export default function DynamicPage({ projectObj }) {
  return (
    <>
      <ProjectDesc projectObj={projectObj} />
    </>
  );
}

DynamicPage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const projectObj = projectData.find((item) => item.id === id);
  return { projectObj };
};