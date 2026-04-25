import styles from "./Home.module.css";
import { Hero } from "../../components/organisms/Hero/Hero.jsx";
import { NavMenu } from "../../components/organisms/Navbar/NavMenu.jsx";
import { About } from "../../components/organisms/About/About.jsx"
import { Stats } from "../../components/organisms/Stats/Stats.jsx";
import { Atouts } from "../../components/organisms/Atouts/Atouts.jsx";
import { Experience } from "../../components/organisms/Experience/Experience.jsx";
import { Education } from "../../components/organisms/Formation/Education.jsx";
import { Associatif } from "../../components/organisms/Formation/Associatif.jsx";
import { Trainings } from "../../components/organisms/Formation/Trainings.jsx";
import { Interests } from "../../components/organisms/Interests/Interests.jsx";
import { Skills } from "../../components/organisms/Skills/Skills.jsx";
import { Contact } from "../../components/organisms/Contact/Contact.jsx";

function Home() {

  return (
    <div className={styles.Home}>
      <NavMenu />
      <Hero />
      <About />
      <Atouts />
      <Experience />
      <Skills />
      <Education />
      <Interests />
      <Associatif />
      <Trainings />
      <Contact />
    </div>
  );
}

export default Home;
