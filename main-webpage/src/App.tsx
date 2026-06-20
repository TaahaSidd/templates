import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import DetailModal from "./components/DetailModal";
import { Service, Project } from "./types";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleOpenServiceDetail = (service: Service) => {
    setSelectedProject(null);
    setSelectedService(service);
  };

  const handleOpenProjectDetail = (project: Project) => {
    setSelectedService(null);
    setSelectedProject(project);
  };

  const handleCloseDetailModal = () => {
    setSelectedService(null);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-[#e2e2e2] font-sans selection:bg-[#ef4444]/30 selection:text-white">
      {/* Structural navigation header */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenServiceDetail={handleOpenServiceDetail}
      />

      {/* Floating back-to-top badge or grid decorators */}
      <main className="relative">
        {/* Sections */}
        <Hero onOpenContact={handleOpenContact} />
        
        <About />
        
        <Services
          onOpenContact={handleOpenContact}
          onOpenServiceDetail={handleOpenServiceDetail}
        />
        
        <Work
          onOpenProjectDetail={handleOpenProjectDetail}
          onOpenContact={handleOpenContact}
        />
        
        <Team />
        
        <Testimonials />
      </main>

      {/* Footer element */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive modal dialogs */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
      />

      <DetailModal
        isOpen={selectedService !== null || selectedProject !== null}
        onClose={handleCloseDetailModal}
        service={selectedService}
        project={selectedProject}
      />
    </div>
  );
}
