import { Truck, Leaf, PencilRuler, ShieldCheck } from 'lucide-react';

export default function Features() {
    const features = [
        { title: 'White glove delivery', desc: 'Expert handling and assembly.', icon: Truck },
        { title: 'Ethical sourcing', desc: 'Certified sustainable materials.', icon: Leaf },
        { title: 'Design consultation', desc: 'Curate your space with experts.', icon: PencilRuler },
        { title: 'Lifetime warranty', desc: 'Built to last generations.', icon: ShieldCheck },
    ];

    return (
        <section className="py-20 border-t border-gray-200 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                        <div key={i} className="flex gap-4 items-start">
                            <Icon className="w-6 h-6 mt-1 text-black shrink-0" strokeWidth={1.5} />

                            <div>
                                <h4 className="text-xs racking-widest font-bold mb-1">
                                    {f.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}