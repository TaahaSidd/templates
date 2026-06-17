import { useState } from 'react';

export default function NavBar() {
    const [active, setActive] = useState('Services');
    const navLinks = ['Services', 'Portfolio', 'About', 'Contact'];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-[#444748]/30">
            <div className="flex justify-between items-center px-6 md:px-16 py-6 w-full max-w-[1280px] mx-auto">

                {/* Brand Logo - Libre Caslon Text */}
                <a className="font-serif text-2xl md:text-3xl text-[#c8c6c5] tracking-tight" href="#">
                    Aura Interiors
                </a>

                {/* Navigation Links - Manrope */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setActive(item)}
                            className={`font-sans text-base transition-colors duration-300 pb-1 ${active === item
                                    ? 'text-[#c8c6c5] border-b-2 border-[#c8c6c5]'
                                    : 'text-[#c4c7c7] hover:text-[#c8c6c5]'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Consultation Button - 6px Border Radius strictly implemented */}
                <button className="bg-[#c8c6c5] text-[#313030] px-6 py-3 rounded-[6px] font-sans text-base font-semibold hover:opacity-90 transition-all duration-200 active:scale-95">
                    Book Consultation
                </button>
            </div>
        </nav>
    );
}
