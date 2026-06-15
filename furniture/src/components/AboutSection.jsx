export default function AboutSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1700831213936-44bb92582be4?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                        alt="Artisan woodworking"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Narrative Side */}
                <div>
                    <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Heritage</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        At The Furniture House, we believe a home should be a gallery of your life.
                        Since 1984, our studio has been dedicated to the pursuit of structural perfection
                        and timeless comfort. We source only the finest sustainable materials,
                        working closely with local artisans who share our commitment to quality.
                    </p>

                    <div className="flex gap-12">
                        <div>
                            <p className="text-3xl font-serif text-black">100%</p>
                            <p className="text-[10px] tracking-widest mt-1">Sustainable wood</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif text-black">40yr</p>
                            <p className="text-[10px] tracking-widest mt-1">Craft heritage</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}