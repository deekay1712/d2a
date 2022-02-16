import ProjectDesc from "../../Components/ProjectDesc";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import projectData from "../../public/Assets/data";

export default function DynamicPage({projectObj}) {
  return (
    <>
      <Navbar />
      <ProjectDesc projectObj={projectObj} />
      <Footer />
    </>
  );
}

DynamicPage.getInitialProps = async (ctx) => {
  const {id} = ctx.query;
  const projectObj = projectData.find((item) => item.id === id);
  return { projectObj };
}