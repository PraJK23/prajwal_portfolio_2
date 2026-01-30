import Hero from "./components/hero/Hero";
import WhatIBuild from "./components/what-i-build/WhatIBuild";
import FeaturedProjects from "./components/projects/FeaturedProjects";
import CareerTimeline from "./components/timeline/CareerTimeline";
import ExperienceSnapshot from "./components/experience/ExperienceSnapshot";
import Skills from "./components/skills/Skills";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIBuild />
      <FeaturedProjects />
      <CareerTimeline />
      <ExperienceSnapshot />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
