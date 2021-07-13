import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'
import { Card } from '../Card/Card'
export const Contact = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    const [isHidden, setIsHidden] = useState('hidden')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
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

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(e)
        console.log('clicked')
    }
    function updateText(action, value) {
        switch (action) {
            case "EMAIL":
                setEmail(value.toLowerCase().replace(/[^a-zA-Z0-9@.]/g, ''))
                break;
            case "MESSAGE":
                setMessage(value)
                break
            case "NAME":
                setName(value)
                break;
        }
    }


    return (
        <div className={`${slide} md:z-10 h-full pl-6 pr-3 pt-20 md:pt-16 justify-center text-white-50 font-poppins ${isHidden}`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-aqua-600">L</span>et&apos;s <span className="text-aqua-600">C</span>onnect</h1>
            <p className="text-sm pt-2 md:pl-56 md:w-4/5 md:pt-4">I'd love to hear about what you're working on and how I could help. I'm currently looking for a new role and open to opportunities in the domain of web development. I'm also open to discussing ideas and doing a project together.
            </p>
            <p className="text-sm pt-2 md:pl-56 md:w-4/5 md:pt-4">Feel free to drop a message :)
            </p>

            <form className=" mt-3 flex flex-col gap-y-3" onSubmit={onSubmitHandler}>
                

                <input value={name} className=" z-10 md:ml-56 md:pl-4 p-2 w-72 bg-gray-950 rounded btn-emboss-plus outline-none" placeholder="Name" onChange={(e) => updateText("NAME", e.target.value)}></input>

                <input value={email} className=" z-10 md:ml-56 md:pl-4 p-2 w-72 bg-gray-950 rounded btn-emboss-plus outline-none" placeholder="Email" onChange={(e) => updateText("EMAIL", e.target.value)}></input>

                <textarea value={message} className=" z-10 md:w-1/2 md:pl-4 p-2 md:ml-56 rounded btn-emboss-plus h-20 md:h-44 bg-gray-950 resize-none outline-none" placeholder="Message" onChange={(e) => updateText("MESSAGE", e.target.value)}></textarea>
                <button className="bg-gray-950 z-10 md:ml-56  text-aqua-600 btn-emboss-plus w-36 p-2 ">Send</button>
            </form>

            <button type="submit" onClick={changePage} className={`z-10 bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center `}><Image src={Arrow} className="rotate" /></button>
        </div>
    )
}

