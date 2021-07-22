import React from 'react'
import { Layout, Home, About, Projects, Blogs, Contact, Skills } from '../components'
import { useRoute } from '../Context'
import Head from 'next/head'

const Portfolio = () => {
    const { route } = useRoute()
    return (
        <Layout >
            <Head>
                <title>Ishan Jirety</title>
                <meta name="description" content="Hi, I am a Frontend Developer. I have been working on the MERN stack for about 6 months in this span I have developed multiple projects which helped me to enhance my skills." />
                <meta property="og:title" content="Ishan Jirety portfolio website" />
                <meta property="og:url" content="https://ishanjirety.vercel.app" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="bg-100 w-full h-screen overflow-hidden p-0 m-0">

                {route === 'home' && <Home />}
                {route === 'about' && <About />}
                {route === 'skills' && <Skills />}
                {route === 'projects' && <Projects />}
                {route === 'blogs' && <Blogs />}
                {route === 'contact' && <Contact />}
            </div>
        </Layout>
    )
}
export default Portfolio