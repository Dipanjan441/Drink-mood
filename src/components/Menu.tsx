import { useRef, useState } from "react"
import { sliderLists } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const totalCocktails = sliderLists.length;
    const goToSlide = (currentIndex: number) => {
        const newIndex = (currentIndex + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }
    const getCocktilAt = (indexOffset: number) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktilAt(0);
    const prevCocktail = getCocktilAt(-1);
    const nextCocktail = getCocktilAt(1);

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 })
        gsap.fromTo('.cocktail img',
            { opacity: 0, xPercent: -100 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut',
                xPercent: 0
            })
        gsap.fromTo('.details h2', { opacity: 0, yPercent: -100 }, {
            opacity: 1,
            duration: 1,
            yPercent: 0,
            ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, {
            opacity: 1,
            duration: 1,
            yPercent: 0,
            ease: 'power1.inOut'
        })
    }, [currentIndex])

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button onClick={() => setCurrentIndex(index)} key={cocktail.id} className={isActive ? 'text-yellow border-yellow drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]' : 'text-white/50 border-white/50 hover:text-white hover:border-white'}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button onClick={() => goToSlide(currentIndex - 1)} className="text-left hover:scale-110 transition-transform">
                        <span>{prevCocktail.name}</span>
                        <img src="images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button onClick={() => goToSlide(currentIndex + 1)} className="text-right hover:scale-110 transition-transform">
                        <span>{nextCocktail.name}</span>
                        <img src="images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} alt="current cocktail" className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="recipe p-8 lg:w-[90%] mx-auto">
                    <div ref={contentRef} className="info">
                        <p className="opacity-70">Recipe for : </p>
                        <p id="title" className="text-4xl">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2 className="mb-2">{currentCocktail.title}</h2>
                        <p className="opacity-80">{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
