
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";

import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Services from "@/src/components/Services";
import Vision from "@/src/components/Vison";
import Footer from "@/src/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-950">
      {/* ================= Fixed Navigation ================= */}
      <Navbar />

      {/* ================= Main Content ================= */}
      <main className="w-full bg-white md:pl-24 transition-all duration-300">
        {/* ================= Hero ================= */}
        <section
          id="home"
          className="relative w-full scroll-mt-20 bg-white pt-10 md:pt-0"
        >
          <Hero />
        </section>

        {/* ================= About ================= */}
        <section
          id="about"
          className="relative w-full scroll-mt-20 bg-white"
        >
          <About />
        </section>

        {/* ================= Services ================= */}
        <section
          id="services"
          className="relative w-full scroll-mt-20 bg-white"
        >
          <Services />
        </section>

        {/* ================= Courses ================= */}
      

        {/* ================= Vision ================= */}
        <section
          id="vision"
          className="relative w-full scroll-mt-20 bg-white"
        >
          <Vision />
        </section>

        {/* ================= Founders ================= */}
   
        {/* ================= Contact ================= */}
        <section
          id="contact"
          className="relative w-full scroll-mt-20 bg-white pb-16 md:pb-0"
        >
          <Contact />
        </section>
      </main>

      {/* ================= Footer ================= */}
      <div className="w-full bg-white md:pl-24">
        <Footer />
      </div>
    </div>
  );
}