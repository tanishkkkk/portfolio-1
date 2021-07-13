import React from 'react'
import { Layout, Home,About, Projects,Blogs, Contact,Skills } from '../components'
import { useRoute } from '../Context'

const Portfolio = () => {
    const { route } = useRoute()
    console.log(route)
    return (
        <Layout >
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