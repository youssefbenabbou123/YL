import Layout from "@/components/layout/Layout";
import Hero from "../components/home/Hero";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";
import Manifesto from "@/components/home/Manifesto";
import Gallery from "@/components/home/Gallery";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Manifesto />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Gallery />
      <CTA />
    </Layout>
  );
};

export default Index;