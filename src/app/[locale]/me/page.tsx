import CTASection from "../../_components/callToAction";
import ExpertiseSection from "../../_components/expertiseSection";
import Footer from "../../_components/footer";
import Hero from "../../_components/hero";
import MedescriptionAtHome from "../../_components/meDescription";
import NavigationBar from "../../_components/navigationBar";
import SkillsTech from "../../_components/skillSection";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
 
  return (
    <div className="w-full min-h-screen">
      
      <Hero />
      <MedescriptionAtHome/>
      <ExpertiseSection/>
      <SkillsTech/>
      <CTASection/>
      
    </div>
  );
}
