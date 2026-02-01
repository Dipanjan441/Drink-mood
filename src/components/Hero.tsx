import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";


const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            stagger: 0.05,
            ease: 'expo.out',
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }).to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        if (videoRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: 'video',
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true,
                }
            })

            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {
                    currentTime: videoRef.current?.duration
                })
            }
        }

    }, [])
    return (
        <>
            <section id="hero">
                <h1 className="title drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">Mojito</h1>
                <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className="tracking-widest uppercase opacity-80">Cool. Crisp. Classic.</p>
                            <p className="subtitle">Sip the spirit <br /> of Summer </p>
                        </div>
                    </div>
                    <div className="view-cocktails flex flex-col items-center">
                        <p className="subtitle opacity-90">Experience the perfect blend of zest and sweetness. The classic Mojito re-imagined for the modern palate.</p>
                        <a href="#cocktail" className="mt:2 inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-yellow hover:text-black hover:border-yellow hover:scale-105 transition-all duration-300 font-medium tracking-wide shadow-lg">View Cocktail</a>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto" />
            </div>
        </>
    )
}

export default Hero
