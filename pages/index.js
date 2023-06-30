import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
// import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cre8tiveByte - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="At Cre8tiveByte, we are a leading software solution company dedicated to unlocking the full potential of digital innovation. With our team of highly skilled professionals, we strive to provide cutting-edge software services that empower businesses to thrive in the digital landscape."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Cre8tiveByte Benefits"
        title="Why should you should choose us?">
        Expertise, customization, and cutting-edge tech combine in our software services. We collaborate closely, delivering high-quality solutions tailored to your needs. Timely delivery, ongoing support, and client satisfaction drive our approach. Choose us for innovative software solutions that propel your business forward.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      Get answers to common questions about our services, including software solutions, customization options, development timelines, ongoing support, security measures, mobile app development, and how to get started.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;