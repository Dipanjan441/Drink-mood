import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"


const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start:  'top center',
            }
        })

        scrollTimeline.from(titleSplit.words,{
            opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.05
        }).from('.top-grid div, .bottom-grid div',{
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.06,
        },'-=0.5')
    })
    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters
                            <span className="text-white">from middle to garnish</span>
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia exercitationem optio, maiores repellat et voluptate. Itaque dignissimos officia porro aspernatur inventore sapiente possimus qui neque exercitationem! Iste dolores velit natus!
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>
                            </p>
                            <p className="text-sm text-white-100">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12">
                    <div className="top-grid">
                        <div className="md:col-span-3 col-span-12">
                            {/* <div className="noisy" /> */}
                            <img className="w-full h-full object-cover" src="/images/abt1.png" alt="about-image1" />
                        </div>
                        <div className="md:col-span-6 col-span-12">
                            {/* <div className="noisy" /> */}
                            <img src="/images/abt2.png" alt="about-image2" />
                        </div>
                        <div className="md:col-span-3 col-span-12">
                            {/* <div className="noisy" /> */}
                            <img src="/images/abt3.png" alt="about-image3" />
                        </div>
                    </div>
                    </div>
                    <div className="col-span-12">
                    <div className="bottom-grid">
                        <div className="md:col-span-8 col-span-12">
                            {/* <div className="noisy" /> */}
                            <img src="/images/abt4.png" alt="about-image4" />
                        </div>
                        <div className="md:col-span-4 col-span-12">
                            {/* <div className="noisy" /> */}
                            <img src="/images/abt5.png" alt="about-image5" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
