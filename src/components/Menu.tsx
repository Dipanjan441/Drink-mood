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
        gsap.fromTo('.details h2',{opacity: 0, yPercent: -100},{
            opacity: 1,
            duration: 1,
            yPercent: 0,
            ease: 'power1.inOut'
        })
        gsap.fromTo('.details p',{opacity: 0, yPercent: 100},{
            opacity: 1,
            duration: 1,
            yPercent: 0,
            ease: 'power1.inOut'
        })
    }, [currentIndex])

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button onClick={()=>setCurrentIndex(index)} key={cocktail.id} className={isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button onClick={() => goToSlide(currentIndex - 1)} className="text-left">
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button onClick={() => goToSlide(currentIndex + 1)} className="text-right">
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} alt="current cocktail" className="object-contain" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for : </p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
