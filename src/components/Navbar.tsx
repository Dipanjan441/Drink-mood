import { useGSAP } from "@gsap/react"
import { NavbarItems } from "../constants"
import gsap from "gsap"

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                toggleActions: 'play reverse play reverse'
            }
        })

        navTween.fromTo('nav', { 
            backgroundColor: 'transparent', 
            borderBottom: '1px solid transparent' 
        }, {
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            duration: 0.5,
            ease: 'power1.inOut'
        })
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className="w-8" />
                    <p className="tracking-wide">Drink Mood</p>
                </a>
                <ul className="hidden lg:flex">
                    {NavbarItems.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className="hover:text-yellow transition-colors">{item.title}</a>
                        </li>
                    ))}
                </ul>
                <a href="#reservation" className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-yellow hover:text-black hover:border-yellow transition-all duration-300 text-sm font-medium">
                    Book Table
                </a>
            </div>
        </nav>
    )
}

export default Navbar
