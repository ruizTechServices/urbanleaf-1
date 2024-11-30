import Image from "next/image";

export const HeroMain = () => {
    return (
        <section className="h-full relative bg-cover bg-center text-white py-20 flex items-center justify-center" style={{ backgroundImage: 'url(/bg_13.jpg)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black leading-tight">
                            A Luxury Cannabis Adventure
                        </h1>
                        <p className="text-lg md:text-xl text-green-400 mb-8">
                            Discover the best products curated just for you!
                        </p>
                        <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105">
                            Explore Now
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="relative w-64 h-64 sm:w-56 sm:h-56 md:w-72 md:h-72">
                            <Image
                                src="/researching.png"
                                alt="Researching Cannabis"
                                layout="fill"
                                objectFit="contain"
                                className="filter drop-shadow-lg hidden sm:block"
                            />
                        </div>
                        <div className="relative w-64 h-64 sm:w-56 sm:h-56 md:w-72 md:h-72">
                            <Image
                                src="/farming.png"
                                alt="Cannabis Farming"
                                layout="fill"
                                objectFit="contain"
                                className="filter drop-shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

