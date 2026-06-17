import { useState } from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

export default function NavBar() {
    const [active, setActive] = useState('Collections');
    const links = ['Collections', 'About', 'Materials', 'Showroom', 'Contact'];

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 h-[80px]">
            <div className="flex justify-between items-center px-6 max-w-[1200px] mx-auto w-full h-full">

                <div className="text-xl font-bold tracking-tight">
                    The Furniture House
                </div>

                <div className="hidden md:flex items-center space-x-8 h-full">
                    {links.map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => setActive(item)}
                            className={`h-full flex items-center text-xs font-semibold tracking-widest transition-colors ${active === item ? 'text-black' : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                    <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                    <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                </div>
            </div>
        </nav>
    );
}