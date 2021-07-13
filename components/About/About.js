import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'

export const About = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    const [isHidden, setIsHidden] = useState('hidden')
    const { setRoute } = useRoute()

    function changePage() {
        setTimeout(() => {
            setRoute('skills')
        }, 150)
        setSlide('slideUp')
    }
    useEffect(() => {
        if (route === 'about') {
            setSlide('slide-up-bottom')
            setTimeout(() => {
                setIsHidden('')
            }, 0)
        }
    }, [route])


    return (
        <div className={`${slide} h-full pl-6 pr-3 pt-28 md:pt-32 justify-center text-white-50 font-poppins ${isHidden}`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-aqua-600  ">M</span>e &#38; <span className="text-aqua-600">M</span>yself</h1>
            <div className="h-5/6 overflow-y-scroll md:w-11/12 inline-block pb-2">
                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">Hi, I am a <span className="text-aqua-600">Frontend Developer</span>. I have been working on the MERN stack for about 6 months in this span I have developed multiple projects which helped me to enhance my skills. Yes, having your strong base really helps and hence I am open to adapting to whichever framework is required. While I was working on different tech stacks, to give a kick start to my career I also did some freelancing work which helped me to explore different domains like <span className="text-aqua-600">Shopify app development</span>, <span className="text-aqua-600">DevOps</span> and <span className="text-aqua-600">Securities.</span></p>

                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4"> After all this, I joined <span className="text-aqua-600">Neog</span> a Bootcamp for <span className="text-aqua-600">web developers</span>, there I learned about <span className="text-aqua-600">React ecosystem</span>, <span className="text-aqua-600">UI/UX</span>, <span className="text-aqua-600">web performances</span>, and <span className="text-aqua-600">tooling</span> which helped me to grow overall, and equipped me with some of the latest technologies.</p>

                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4"> I believe Project Based Learning is the best approach to learn anything. Hence, I've got projects in all the different technologies that I've learned over time.</p>

                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">By the way, when I'm not coding, you'll find me playing guitar, or watching stand-ups, or playing chess : ) </p>
            </div>
            <button onClick={changePage} className={`bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Image src={Arrow} /></button>
        </div>
    )
}
