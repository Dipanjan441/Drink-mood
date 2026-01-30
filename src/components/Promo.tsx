import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { contactMailWith, myServices } from "../constants"

const Promo = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#promo',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from('#promo-card', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from('.promo-text > *', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.5')
            .from('.service-card', {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: 'power2.out'
            }, '-=0.8')

        // Continuous floating animation for the service card
        gsap.to('.service-card', {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })
    })

    return (
        <section id="promo" className="container mx-auto px-5 py-32 flex-center relative">
            {/* Background glow for emphasis */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-lime-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div id="promo-card" className="glass-panel w-full max-w-5xl md:p-16 p-8 relative overflow-hidden group">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/20 blur-2xl -translate-y-1/2 translate-x-1/2 rounded-full" />

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 promo-text">
                        <div className="inline-block px-4 py-1 rounded-full border border-yellow/30 bg-yellow/10">
                            <span className="text-yellow text-xs font-bold tracking-widest uppercase">Developer Spotlight</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Want a Website <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-white">That Stands Out?</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            I craft immersive, animated digital experiences just like this one.
                            From smooth interactions to premium designs, I help brands leave a lasting impression.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href={contactMailWith} className="px-8 py-3 bg-yellow text-black rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300">
                                Hire Me
                            </a>
                            <a target="_blank" href="https://dipanjan441.github.io/my-portfolio/" className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                                View Portfolio
                            </a>
                        </div>
                    </div>

                    <div className="service-card relative h-full min-h-[300px] flex-center border border-white/10 rounded-2xl bg-black/20 p-8">
                        {/* A visual representation of code or creativity */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>

                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-serif">My Services</h3>
                            <ul className="space-y-3 text-white/60 text-sm text-left inline-block">
                                {
                                    myServices.map((service) => (
                                        <li key={service.id} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-yellow" /> {service.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo;
