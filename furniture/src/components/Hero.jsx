export default function Hero() {
    return (
        <section className="relative h-[720px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                    alt="Modern luxury living room"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
                        The art of <br /> living well.
                    </h1>
                    <p className="text-lg text-white/90 mb-8 max-w-lg">
                        Discover curated furniture that blends timeless design with modern comfort.
                        Every piece is a testament to architectural integrity.
                    </p>
                    <button className="bg-white text-black font-semibold py-4 px-10 hover:bg-gray-200 transition-colors rounded-md">
                        Explore collections
                    </button>
                </div>
            </div>
        </section>
    );
}