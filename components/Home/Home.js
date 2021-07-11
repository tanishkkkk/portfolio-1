import React, { useState } from 'react'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'
import { useRoute } from '../../Context'
export const Home = () => {
    const [slide, setSlide] = useState('')
    const { setRoute } = useRoute()
    function changePage() {
        setTimeout(()=>{
            setRoute('about')
        },150)
        setSlide('slideUp')
    }
    return (
        <>
            <div className={`${slide} index-high h-full pl-10 flex items-start  flex-col justify-center text-white font-poppins font-black text-5xl md:pl-60 md:text-8xlm`}>
                <h1 className="index-high tracking-widest pt-2"><span className="text-aqua-600" ></span>Hi</h1>
                <h1 className="index-high tracking-widest pt-2">I&apos;m <span className="text-aqua-600">Ishan</span></h1>
                <h1 className="index-high tracking-widest text-3xl md:text-7xl pt-2">web <span className="text-aqua-600">d</span>eveloper</h1>
                <h3 className="index-high font-medium text-sm md:text-xl  text-gray-850 pt-2">MERN <span className="text-aqua-450">/</span> NextJs <span className="text-aqua-450">/</span> Graphql <span className="text-aqua-450">/</span> Tailwind</h3>
                <button onClick={changePage} className={`bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Image src={Arrow} /></button>
            </div>

        </>
    )
}
