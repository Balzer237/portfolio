import CTASection from "@/app/_components/callToAction";
import ExpertiseSection from "@/app/_components/expertiseSection";
import Hero from "@/app/_components/hero";
import MedescriptionAtHome from "@/app/_components/meDescription";
import SkillsTech from "@/app/_components/skillSection";


export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
 const dict = {
    welcome: "welcome",
    hero_subtitle: "hero_subtitle",
    view_work: "view_work",
    contact_me: "contact_me",
  };
  const d = '';
  return (
    <div className="w-full min-h-screen">
      <Hero dict={dict} />
      <MedescriptionAtHome d={d}/>
      <ExpertiseSection/>
      <SkillsTech/>
      <CTASection/>
    </div>
  );
}
