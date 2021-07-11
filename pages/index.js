import React from 'react'
import { Layout, Home,About } from '../components'
import { useRoute } from '../Context'

const Portfolio = () => {
    const { route } = useRoute()
    return (
        <Layout >
            <div className="bg-100 w-full h-screen overflow-hidden p-0 m-0">
                {/* <button className="bg-gray-950 ml-96 mt-96 text-aqua-600 shadow-btn w-36 p-2">Send</button> */}
                {route === 'home' && <Home />}
                {route === 'about' && <About />}

            </div>
        </Layout>
    )
}
export default Portfolio