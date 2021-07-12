import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
export const About = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    useEffect(() => {
        if (route === 'about') {
            setSlide('slide-up-bottom')
        }
    }, [route])


    return (
        <div className={`${slide} w-full h-full`}>

        </div>
    )
}
