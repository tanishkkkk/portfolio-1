import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'
import { Card } from '../Card/Card'
export const Contact = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    const [isHidden, setIsHidden] = useState('hidden')
    const { setRoute } = useRoute()

    function changePage() {
        setTimeout(() => {
            setRoute('home')
        }, 150)
        setSlide('slideUp')
    }
    useEffect(() => {
        if (route === 'contact') {
            setSlide('slide-up-bottom')
            setTimeout(() => {
                setIsHidden('')
            }, 0)
        }
    }, [route])


    return (
        <div className={`${slide} md:z-10 h-full pl-6 pr-3 pt-28 md:pt-32 justify-center text-white-50 font-poppins ${isHidden}`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-aqua-600">L</span>et&apos;s <span className="text-aqua-600">C</span>onnect</h1>
            <button onClick={changePage} className={`z-10 bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center `}><Image src={Arrow} className="rotate"/></button>
        </div>
    )
}
