import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'

export const About = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    const [isHidden,setIsHidden] = useState('hidden')
    const { setRoute } = useRoute()
    
    function changePage() {
        setTimeout(()=>{
            setRoute('projects')
        },150)
        setSlide('slideUp')
    }
    useEffect(() => {
        if (route === 'about') {
            setSlide('slide-up-bottom')
            setTimeout(()=>{
                setIsHidden('')
            },0)
        }
    }, [route])


    return (
        <div className={`${slide} h-full pl-6 pr-3 pt-28 md:pt-32 justify-center text-white-50 font-poppins ${isHidden}`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-aqua-600  ">M</span>e &#38; <span className="text-aqua-600">M</span>yself</h1>
            <p className="text-sm pt-2 md:pl-56 md:w-4/5 md:pt-4">Lorem ipsu m dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam. Id consectetur purus ut faucibus. Duis tristique sollicitudin nibh sit amet commodo. Et pharetra pharetra massa massa ultricies mi quis. Sed augue lacus viverra vitae congue. Quisque egestas
                diam in arcu cursus euismod quis viverra. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Pellentesque elit eget gravida cum. Viverra ipsum nunc aliquet bibendum enim. Elementum tempus egestas sed sed risus pretium quam. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Odio facilisis mauris sit amet massa. Ac auctor augue mauris augue neque gravida. Urna neque viverra justo nec.
            </p>
            <button onClick={changePage} className={`bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Image src={Arrow} /></button>
        </div>
    )
}
