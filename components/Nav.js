import React, { useState, useEffect } from 'react'
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
    const [top, setTop] = useState(50)
    const [mobileNav, setMobileNav] = useState('hidden')

    function onClickHandler(current, top, e) {
        setRoute(current)
        setTop(e?.offsetTop - 5 + top)
        console.log(e?.offsetTop)
    }
    useEffect(() => {
        const target = document.getElementById(route)
        switch (route) {
            case "about":
                return onClickHandler('about', 0, target)
            case "projects":
                return onClickHandler('projects', 0, target)
            case "blogs":
                return onClickHandler('blogs', 0, target)
            case "contact":
                return onClickHandler('contact', 0, target)
            case "skills":
                return onClickHandler('skills', 0, target)
            case "home":
                return onClickHandler('home', 50, target)
        }

    }, [route])
    function navAction(action) {
        setMobileNav(action)
    }
    return (
        <>
            {/* Desktop Nav */}
            <nav className="desktop-nav z-20 border-right bg-gray-950 w-48 h-full fixed top-0 left-0 flex flex-col justify-center items-end gap-y-4 ">
                <span className="w-40 absolute top-2 link desktop" id='home' onClick={(e) => onClickHandler('home', 50, e.target)}><Image src={Logo} /></span>
                <div className="slider w-full absolute h-10" style={{ top: `${top}px` }}></div>
                <a id="about" onClick={(e) => onClickHandler('about', 0, e.target)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>About</a>
                <a id="skills" onClick={(e) => onClickHandler('skills', 0, e.target)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Skills</a>
                <a id="projects" onClick={(e) => onClickHandler('projects', 0, e.target)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Projects</a>
                <a id="blogs" onClick={(e) => onClickHandler('blogs', 0, e.target)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Blogs</a>
                <a id="contact" onClick={(e) => onClickHandler('contact', 0, e.target)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Contact</a>
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ishan-jirety-a1b4a31aa/" ><Image alt="" src={LinkedIn} /></a></span>
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://github.com/ishanjirety"><Image alt="" src={Github} /></a></span>
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://twitter.com/IshanJirety"><Image alt="" src={Twitter} /></a></span>
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ishan_jirety/"><Image alt="" src={Instagram} /></a></span>
                </div>
            </nav>
            {/* Mobile Header */}
            <div className="z-10 w-46 pt-2 absolute top-0 link mobile header"><span className="logo" onClick={() => onClickHandler('home')}><Image src={Logo} /></span><span onClick={() => navAction('animate-in')} className="icon"><Image src={Hamburger} /></span></div>

            {/* Mobile Nav */}
            <nav className={` z-20 nav ${mobileNav} mobile-nav border-right bg-gray-950 w-48 h-full fixed top-0 left-0 flex flex-col justify-center items-end gap-y-4 `}>
                <div className="w-40 absolute top-2 link mobile"><span className="logo"><Image src={Logo} /></span><span onClick={() => navAction('animate-out')} className="icon"><Image src={Close} /></span></div>
                <a onClick={() => onClickHandler('about', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>About</a>
                <a onClick={() => onClickHandler('skills', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Skills</a>
                <a onClick={() => onClickHandler('projects', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Projects</a>
                <a onClick={() => onClickHandler('blogs', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Blogs</a>
                <a onClick={() => onClickHandler('contact', 0)} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>Contact</a>
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ishan-jirety-a1b4a31aa/" ><Image alt="" src={LinkedIn} /></a></span>
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://github.com/ishanjirety"><Image alt="" src={Github} /></a></span>
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://twitter.com/IshanJirety"><Image alt="" src={Twitter} /></a></span>
                    <span className="mr-2"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ishan_jirety/"><Image alt="" src={Instagram} /></a></span>
                </div>
            </nav>
        </>


    )
}
