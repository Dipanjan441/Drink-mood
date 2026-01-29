import { useGSAP } from "@gsap/react"
import { cocktailLists, mockTailLists } from "../constants"
import gsap from "gsap"


const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true
            }
        })
        parallaxTimeline.from('#c-left-leaf', {
            x: -100,
            y: 100
        }).from('#c-right-leaf', {
            x: 100,
            y: 100
        })
    })
    return (
        <section id="cocktails">
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />
            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails: </h2>
                    <ul>
                        {cocktailLists.map((drink) => (
                            <li key={drink.name} className="glass-panel p-5 hover:bg-white/5 transition-colors mb-4">
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p className="opacity-70">{drink.country} | {drink.detail}</p>
                                </div>
                                <span className="text-yellow font-bold text-2xl">{drink.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails: </h2>
                    <ul>
                        {mockTailLists.map((drink) => (
                            <li key={drink.name} className="glass-panel p-5 hover:bg-white/5 transition-colors mb-4">
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p className="opacity-70">{drink.country} | {drink.detail}</p>
                                </div>
                                <span className="text-yellow font-bold text-2xl">{drink.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails
