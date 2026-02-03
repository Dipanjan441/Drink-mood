import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"


const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {
            type: 'word'
        })
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inout'
        })
        timeline
            .from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.05 })
            .from('#contact h3, #contact p', { opacity: 0, yPercent: 100, stagger: 0.05 })
            .to('#f-right-leaf', { y: '-50', duration: 1, ease: 'power1.inOut' })
            .to('#f-left-leaf', { y: '-50', duration: 1, ease: 'power1.inOut' }, '<')
    })
    return (
        <footer id="contact">
            <img src="images/footer-right-leaf.png" alt="right leaf" id="f-right-leaf" />
            <img src="images/footer-left-leaf.png" alt="left leaf" id="f-left-leaf" />
            <div className="content">
                <h2>Where to Find us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati!</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>91+ 8617******</p>
                    <p>hello@drinkmood.com</p>
                </div>
                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>{time.day} : {time.time}</p>
                    ))}
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" aria-label={social.name} rel="noopener noreffer"
                                className="w-12 h-12 flex-center rounded-full glass-panel hover:bg-yellow hover:scale-110 transition-all duration-300 group">
                                <img src={social.icon} className="w-6 h-6 object-contain group-hover:invert-0 invert transition-all" alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
