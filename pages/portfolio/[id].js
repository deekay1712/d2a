import ProjectDesc from "../../Components/ProjectDesc";
import projectData from "../../public/Assets/data";
import Head from "next/head";

export default function DynamicPage({ projectObj }) {
  return (
    <>
      <Head>
        <title>PORTFOLIO - Dream Design Architects</title>
        <meta name="description" content="Dream Design Architects is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="notranslate" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PORTFOLIO - Dream Design Architects" />
        <meta property="og:description" content="We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
        <meta property="og:url" content="https://dreamdesignarchitects.com/portfolio/" />
        <meta property="og:site_name" content="Dream Design Architects" />
        <meta property="og:image" content="/Assets/carousel1.jpeg" />
        <meta property="og:image:secure_url" content="/Assets/carousel1.jpeg" />
        <meta name="twitter:description" content="Dream Design Architects is a design firm based in the heart of the city of DELHI. We are a team of creative and experienced professionals who are passionate about creating beautiful spaces." />
        <meta name="twitter:title" content="PORTFOLIO - Dream Design Architects" />
        <meta name="twitter:image" content="/Assets/carousel1.jpeg" />
      </Head>
      <ProjectDesc projectObj={projectObj} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
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
