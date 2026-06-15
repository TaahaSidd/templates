export default function Newsletter() {
    return (
        <section className="bg-gray-200 py-24">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <div className="max-w-md mx-auto">
                    <h2 className="text-3xl font-serif text-gray-900 mb-4">Join the inner circle</h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Receive early access to new collections, artisan stories, and interior inspiration.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 bg-transparent border border-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-black rounded-md"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors rounded-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}