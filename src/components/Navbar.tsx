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

        navTween.fromTo('nav',{backgroundColor: 'transparent'},{
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        }
        )
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" />
                    <p>Drink Mood</p>
                </a>
                <ul>
                    {NavbarItems.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
