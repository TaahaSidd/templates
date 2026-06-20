import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { Service } from "../types";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenServiceDetail?: (service: Service) => void;
}

export default function Navbar({ onOpenContact, onOpenServiceDetail }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Work", href: "#work" },
    { name: "Project", href: "#projects" },
    { name: "Service", href: "#services" },
    { name: "About Us", href: "#about" },
  ];

  const categories = [
    {
      name: "WhatsApp & Chatbots",
      ids: ["ai-chatbots", "whatsapp-marketing", "automated-support"],
    },
    {
      name: "Development & Design",
      ids: ["web-app", "brand-strategy", "creative-content"],
    },
    {
      name: "Acquisition & Performance",
      ids: ["seo", "email-marketing", "digital-ads"],
    },
  ];

  const getCategoryServices = (ids: string[]) => {
    return ids
      .map((id) => services.find((s) => s.id === id))
      .filter(Boolean) as Service[];
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-300 rounded-full border border-white/10 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-2.5 shadow-xl shadow-black/40"
          : "bg-black/50 backdrop-blur-sm py-3.5"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center group" aria-label="Home">
          <div className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-black text-sm transition-transform duration-250 group-hover:scale-105 shadow-md shadow-[#7c3aed]/10">
            N
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.name === "Service") {
              return (
                <div
                  key={item.name}
                  className="relative py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdownOpen(!dropdownOpen);
                      const element = document.querySelector("#services");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="flex items-center gap-1 text-xs font-semibold tracking-wider text-white/60 hover:text-[#F5F5F5] transition-colors duration-200 cursor-pointer py-1"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-[#7c3aed]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-[#121212]/95 border border-white/10 rounded-3xl shadow-2xl p-6 grid grid-cols-3 gap-6 z-50 backdrop-blur-md"
                      >
                        {categories.map((cat) => (
                          <div key={cat.name} className="space-y-4">
                            <div className="font-sans text-[10px] font-bold tracking-wider text-[#7c3aed] border-b border-white/5 pb-1.5">
                              {cat.name}
                            </div>
                            <div className="flex flex-col gap-3">
                              {getCategoryServices(cat.ids).map((service) => (
                                <button
                                  key={service.id}
                                  onClick={() => {
                                    setDropdownOpen(false);
                                    const element = document.querySelector("#services");
                                    if (element) {
                                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                    if (onOpenServiceDetail) {
                                      onOpenServiceDetail(service);
                                    }
                                  }}
                                  className="text-left group/item cursor-pointer focus:outline-none"
                                >
                                  <span className="block text-xs font-bold text-white group-hover/item:text-[#7c3aed] transition-colors duration-155">
                                    {service.title}
                                  </span>
                                  <span className="block text-[10px] text-zinc-400 font-sans leading-normal line-clamp-1 mt-0.5 group-hover/item:text-zinc-300 transition-colors duration-155">
                                    {service.description.slice(0, 42) + (service.description.length > 42 ? "..." : "")}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                className="text-xs font-semibold tracking-wider text-white/60 hover:text-[#F5F5F5] transition-colors duration-200"
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Let's Talk CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="flex items-center justify-center gap-2 px-5 py-2 border border-white/20 hover:border-white hover:bg-white hover:text-black rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 text-white cursor-pointer"
          >
            <Mail size={12} className="opacity-80" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border border-white/10 rounded-2xl mx-2 mt-2 overflow-hidden absolute top-full left-0 w-[calc(100%-1rem)]"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navItems.map((item) => {
                if (item.name === "Service") {
                  return (
                    <div key={item.name} className="flex flex-col gap-1">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="text-white/60 hover:text-[#F5F5F5] text-xs font-semibold tracking-wider py-1.5 flex items-center justify-between w-full text-left"
                      >
                        <span>Services</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#7c3aed]" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 overflow-hidden flex flex-col gap-4 border-l border-white/5 mt-2"
                          >
                            {categories.map((cat) => (
                              <div key={cat.name} className="space-y-2">
                                <div className="text-[10px] font-sans font-semibold tracking-wider text-[#7c3aed] opacity-80 pl-1">
                                  {cat.name}
                                </div>
                                <div className="flex flex-col gap-2">
                                  {getCategoryServices(cat.ids).map((service) => (
                                    <button
                                      key={service.id}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileServicesOpen(false);
                                        const element = document.querySelector("#services");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }
                                        if (onOpenServiceDetail) {
                                          onOpenServiceDetail(service);
                                        }
                                      }}
                                      className="py-1 px-1.5 rounded-lg text-left text-zinc-400 hover:text-white transition-colors block text-[11px] font-medium"
                                    >
                                      {service.title}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollClick(e, item.href)}
                    className="text-white/60 hover:text-[#F5F5F5] text-xs font-semibold tracking-wider py-1.5 list-none"
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10 flex flex-col items-stretch">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white hover:bg-white hover:text-black text-[11px] font-bold tracking-wider text-white cursor-pointer"
                >
                  <Mail size={12} />
                  <span>Let's Talk</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
