import React, { useState,useEffect } from 'react'
import { useRoute } from '../Context'
import Logo from '../Images/Socials/Logo.svg'
import Github from '../Images/Socials/Github.svg'
import Instagram from '../Images/Socials/Instagram.svg'
import LinkedIn from '../Images/Socials/LinkedIn.svg'
import Twitter from '../Images/Socials/Twitter.svg'
import Close from '../Images/Close.svg'
import Hamburger from '../Images/Hamburger.svg'

import Image from 'next/image'
import Link from 'next/link'


export const Nav = () => {
    const { route, setRoute } = useRoute()
    const [top, setTop] = useState(2.9)
    const [mobileNav, setMobileNav] = useState()

    function onClickHandler(current, top) {
        setRoute(current)
        setTop(top)
    }
    useEffect(()=>{
       switch (route) {
           case "about":
                return onClickHandler('about', 14.5)
            case "projects":
                return onClickHandler('projects', 17)
            case "blogs":
                return onClickHandler('blogs', 20)
            case "contact":
                return onClickHandler('contact', 22.5)
       }

    },[route])
    function navAction(action) {
        setMobileNav(action)
    }
    return (
        <>
            {/* Desktop Nav */}
            <nav className="desktop-nav z-10 border-right bg-gray-950 w-48 h-full fixed top-0 left-0 flex flex-col justify-center items-end gap-y-4 ">
                <span className="w-40 absolute top-2 link desktop" onClick={() => onClickHandler('home', 2.9)}><Image src={Logo} /></span>
                <div className="slider w-full absolute h-10" style={{ top: `${top}rem` }}></div>
                <a onClick={() => onClickHandler('about', 14.5)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>About</a>
                <a onClick={() => onClickHandler('projects', 17)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Projects</a>
                <a onClick={() => onClickHandler('blogs', 20)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Blogs</a>
                <a onClick={() => onClickHandler('contact', 22.5)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Contact</a>
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                    <span className="mr-2"><Link href="" ><Image alt="" src={LinkedIn} /></Link></span>
                    <span className="mr-2"><Link href=""><Image alt="" src={Github} /></Link></span>
                    <span className="mr-2"><Link href=""><Image alt="" src={Twitter} /></Link></span>
                    <span className="mr-2"><Link href=""><Image alt="" src={Instagram} /></Link></span>
                </div>
            </nav>
            {/* Mobile Header */}
            <div className="w-46 pt-2 absolute top-0 link mobile header"><span className="logo" onClick={() => onClickHandler('home')}><Image src={Logo} /></span><span onClick={() => navAction('animate-in')} className="icon"><Image src={Hamburger} /></span></div>

            {/* Mobile Nav */}
            <nav className={` z-10 nav ${mobileNav} mobile-nav animate border-right bg-gray-950 w-48 h-full fixed top-0 left-0 flex flex-col justify-center items-end gap-y-4 `}>
                <div className="w-40 absolute top-2 link mobile"><span className="logo"><Image src={Logo} /></span><span onClick={() => navAction('animate-out')} className="icon"><Image src={Close} /></span></div>
                <a onClick={() => onClickHandler('about', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>About</a>
                <a onClick={() => onClickHandler('projects', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Projects</a>
                <a onClick={() => onClickHandler('blogs', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Blogs</a>
                <a onClick={() => onClickHandler('contact', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Contact</a>
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                    <span className="mr-2"><Link href="" ><Image alt="" src={LinkedIn} /></Link></span>
                    <span className="mr-2"><Link href=""><Image alt="" src={Github} /></Link></span>
                    <span className="mr-2"><Link href=""><Image alt="" src={Twitter} /></Link></span>
                    <span className="mr-2"><Link href=""><Image alt="" src={Instagram} /></Link></span>
                </div>
            </nav>
        </>


    )
}
