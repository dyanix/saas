import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
// import {Techstack} from "@/components/techstack"

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      {/* <Techstack/> */}
      <LandingContent />
    
    </div>
   );
}
 
export default LandingPage;