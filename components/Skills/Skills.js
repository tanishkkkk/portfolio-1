import React, { useEffect, useState } from 'react'
import { useRoute } from '../../Context'
import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'

export const Skills = () => {
    const { route } = useRoute()
    const [slide, setSlide] = useState('')
    const [isHidden, setIsHidden] = useState('hidden')
    const { setRoute } = useRoute()

    function changePage() {
        setTimeout(() => {
            setRoute('projects')
        }, 150)
        setSlide('slideUp')
    }
    useEffect(() => {
        if (route === 'skills') {
            setSlide('slide-up-bottom')
            setTimeout(() => {
                setIsHidden('')
            }, 0)
        }
    }, [route])


    return (
        <div className={`${slide} md:z-10 h-full pl-6 pr-3 pt-28 md:pt-10 justify-center text-white-50 font-poppins ${isHidden}`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-aqua-600">S</span>kills</h1>

            <div className="blur-border flex flex-col md:flex-row md:flex-wrap h-5/6 overflow-y-scroll md:h-full gap-x-2 md:pl-56 md:mt-2 gap-y-2 pb-3 pr-1">
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/html-css-js.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">HTML,CSS &#38; JS</h4>
                        <p className="text-sm  font-light text-center">The essential components of every website. Love creating UI-designs using Vanilla CSS from scratch. </p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/react-redux.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">React &#38; Redux</h4>
                        <p className="text-sm  font-light text-center">React Function components, React Hooks and React Router and state maintainance using Redux </p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-86 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/express-mongo-firebase.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Express, MongoDB &#38; Firebase</h4>
                        <p className="text-sm  font-light text-center">Made full stack applications using REST APIs, MongoDB &#38; Firebase</p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/graphql-hasura.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">GraphQl &#38; Hasura</h4>
                        <p className="text-sm  font-light text-center">Explored GraphQl query language with Hasura and postgreSql integration</p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/Typescript.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Typescript</h4>
                        <p className="text-sm  font-light text-center">Worked on typescript for type checking and code scaling </p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-86 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/Tailwind.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Tailwind</h4>
                        <p className="text-sm  font-light text-center">Used tailwind for beautiful &#38; flexible UI development </p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/Next.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">NextJs</h4>
                        <p className="text-sm  font-light text-center">Used NextJs for server side rendering to make react app more performant.</p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2 ">
                    <img src='/Skills/Webpack.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Webpack</h4>
                        <p className="text-sm  font-light text-center">Learnt how to make code more efficient by using different methods like code-splitting, caching, lazy loading etc. </p>
                    </div>
                </div>
                <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-86 h-56 pt-5 pb-5 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <img src='/Skills/Figma.svg' className="w-1/3" />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Figma</h4>
                        <p className="text-sm  font-light text-center">Explored for making better UI designs and collaborations</p>
                    </div>
                </div>
            </div>
            <button onClick={changePage} className={`z-10 bounce btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Image src={Arrow} /></button>
        </div>
    )
}
