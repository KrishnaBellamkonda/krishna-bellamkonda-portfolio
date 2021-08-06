// Importing CSS
import appCSS from '../src/styles/App.css' 
import styleCSS from '../src/styles/style.css'


// Importing components
import LandingPage from '../src/components/LandingPage'
import SkillsPage  from '../src/components/SkillsPage';
import ProjectsPage from '../src/components/ProjectsPage'
import AboutPage from '../src/components/AboutPage'
import ContactPage from '../src/components/ContactPage';
import SideNav from '../src/components/SideNav'

function App() {
  return (
    <div className="App">

      <SideNav />

      <main>
        <LandingPage />
        <SkillsPage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage />
      </main>
    </div>
  );
}

export default App;

