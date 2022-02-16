import { useRouter } from "next/router"
import ProjectDesc from "../../Components/ProjectDesc";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function DynamicPage(props) {
  // console.log(props);
  const router = useRouter()
  const {
    query: { id },
  } = router;
    return (
    <div>
        <Navbar />
        <ProjectDesc id={id} />
        <Footer />
    </div>
  );
}   