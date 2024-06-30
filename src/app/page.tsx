import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span className="text-accent"> Chamudi Navodya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I am a highly motivated and dedicated Information Technology
            undergraduate at SLIIT, passionate about leveraging technology
            to solve real-world issues. Proficient in Java, Python, and C++,
            adept in database management and web development.
            Proactive, adaptive, and eager to explore the intersection of
            technology and business. Committed to continuous learning,
            with a strong foundation in IT concepts and a proactive
            approach to problem-solving. Seeking opportunities to apply
            skills and contribute positively to the IT sphere.

            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8"> 
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="text-xl">
                <Social/>
              </div>
            </div>


          </div>

          {/* photo */}
          <div>photo</div>

        </div>
      </div>
    </section>
  );
};

export default Home;
