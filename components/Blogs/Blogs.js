import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'
import { Card } from '../Card/Card'
import Blog from '../../Listings/blog.listing.json'

export const Blogs = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    const [isHidden, setIsHidden] = useState('hidden')
    const { setRoute } = useRoute()

    function changePage() {
        setTimeout(() => {
            setRoute('contact')
        }, 150)
        setSlide('slideUp')
    }
    useEffect(() => {
        if (route === 'blogs') {
            setSlide('slide-up-bottom')
            setTimeout(() => {
                setIsHidden('')
            }, 0)
        }
    }, [route])


    return (
        <div className={`${slide} md:z-10 h-full pl-6 pr-3 pt-28 md:pt-32 justify-center text-white-50 font-poppins ${isHidden}`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-aqua-600">B</span>logs</h1>
            <div className="flex w-screen mt-2 justify-around overflow-y-scroll flex-wrap md:block md:flex-nowrap pt-10 gap-y-3 md:pl-64 md:pt-6 overflow-x-scroll h-4/5 absolute right-0 left-0 m-auto pb-10 md:pb-24">
                {Blog.blogs.map(({ imgUrl, description, name, live, id }) => {
                    return <Card img={imgUrl} heading={name} live={live} details={description} key={id} />
                })}
            </div>
            <button onClick={changePage} className={`z-10 bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Image src={Arrow} /></button>
        </div>
    )
}
