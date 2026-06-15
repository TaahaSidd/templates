export default function Collections() {
    const categories = [
        {
            name: 'Living room',
            subtitle: 'Architectural comfort.',
            span: 'md:col-span-8',
            image: 'https://images.unsplash.com/photo-1615800002234-05c4d488696c?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
        {
            name: 'Bedroom',
            subtitle: 'Serene spaces.',
            span: 'md:col-span-4',
            image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
        {
            name: 'Dining room',
            subtitle: 'Artisanal dining.',
            span: 'md:col-span-12',
            image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
    ];

    return (
        <section className="py-20 max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-4xl font-serif text-gray-900">Our Collection</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className={`${cat.span} group relative overflow-hidden bg-gray-200 h-[300px] md:h-[400px] rounded hover:shadow-lg transition-all`}
                    >
                        {/* Use the image property here */}
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-2xl text-white font-serif">{cat.name}</h3>
                            <p className="text-white/80 text-sm mb-4">{cat.subtitle}</p>
                            <a href="#" className="text-xs tracking-widest text-white border-b border-white w-fit">
                                View collection
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}