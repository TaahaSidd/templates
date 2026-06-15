const ProductCard = ({ name, price, category, image }) => {
    // 1. Update the number below (remove any + or spaces)
    const phoneNumber = '919876543210';

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(`Hi! I'm interested in the ${name}. Could you please share more details?`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="group cursor-pointer">
            <div className="aspect-[3/4] mb-4 overflow-hidden bg-gray-200 rounded">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-xs text-gray-500 tracking-widest">{category}</p>
            <h3 className="text-lg font-serif">{name}</h3>
            <p className="text-sm font-bold mt-1">Starting at ₹{price}</p>

            <button
                onClick={handleWhatsAppClick}
                className="mt-4 w-full border border-black py-3 text-[10px] tracking-widest hover:bg-black hover:text-white transition-all rounded-md"
            >
                Chat on WhatsApp
            </button>
        </div>
    );
};

export default function ProductGrid() {
    const products = [
        {
            name: 'Premium Armchair',
            price: '12,500',
            image: 'https://images.unsplash.com/photo-1634148739177-775032f3feb1?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
        {
            name: 'Minimalist Sideboard',
            price: '19,500',
            image: 'https://images.unsplash.com/photo-1713810958247-01dbd76b4a61?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
        {
            name: 'Linear Floor Lamp',
            price: '4,200',
            image: 'https://images.unsplash.com/photo-1677593040114-42da5c510595?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
        {
            name: 'Nordic Linen Sofa',
            price: '45,000',
            image: 'https://images.unsplash.com/photo-1511401139252-f158d3209c17?fm=jpg&q=60&w=3000&auto=format&fit=crop'
        },
    ];

    return (
        <section className="py-20 max-w-[1200px] mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl font-serif">The signature edit</h2>
                <a href="#" className="text-xs tracking-widest border-b border-black">View all products</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((p, i) => <ProductCard key={i} {...p} />)}
            </div>
        </section>
    );
}