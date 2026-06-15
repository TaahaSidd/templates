import { Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white py-24">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-16">

                {/* Column 1: Brand Info & Map */}
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h3 className="text-2xl font-serif mb-4">The Furniture House</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Curating architectural serenity for the modern home since 1984.
                        </p>
                    </div>

                    {/* Icons */}
                    <div className="flex gap-4">
                        <Globe className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                        <Mail className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                        <MapPin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                    </div>

                    {/* Map moved here */}
                    <iframe
                        className="w-full h-48 grayscale hover:grayscale-0 transition-all rounded"
                        src="https://www.google.com/maps/embed?pb=..."
                        title="Location map"
                    />
                </div>

                {/* Column 2: Sitemap */}
                <div>
                    <h4 className="text-sm font-bold  tracking-widest mb-6">Sitemap</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['Collections', 'Showroom', 'Design services', 'Trade program'].map(link => (
                            <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Support */}
                <div>
                    <h4 className="text-sm font-bold  tracking-widest mb-6">Support</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['Shipping & returns', 'Sustainability', 'Care guide', 'Faq'].map(link => (
                            <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Legal */}
                <div>
                    <h4 className="text-sm font-bold tracking-widest mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Privacy policy</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Terms of service</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-xs text-gray-500">
                © 2026 The Furniture House. All rights reserved.
            </div>
        </footer>
    );
}