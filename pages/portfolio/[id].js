import ProjectDesc from "../../Components/ProjectDesc";
import projectData from "../../public/Assets/data";

export default function DynamicPage({ projectObj }) {
  return (
    <>
      <ProjectDesc projectObj={projectObj} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  // console.log(ctx);
  const { id } = ctx.params;
  const projectObj = projectData.find((item) => item.id === id);
  return { props: { projectObj } };
};

export const getStaticPaths = async () => {
  return {
    paths: projectData.map((item) => ({ params: { id: item.id } })),
    fallback: false,
  };
};
