import React from 'react'
import Image from 'next/image'
import Open from '../../Images/Open.svg'
import Github from '../../Images/Socials/Github.svg'


export const Card = ({ img, heading, github, live, details }) => {
    return (
        <div className="index-high md:inline-block md:mr-10 bg-gray-950 h-60 w-40 md:w-56 md:h-72 flex flex-col items-center overflow-hidden rounded">
            <div className="relative">
                <img className="filter brightness-50" src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div className="flex items-center justify-end absolute bottom-0 right-0 gap-x-1 pr-2">
                    <span className=""><Image src={Github} /></span>
                    <span className="w-6"><Image src={Open} /></span>
                </div>
            </div>
            <h4 className="font-semiBold pt-5 md:text-center">Video Library</h4>
            <p className="font-extralight text-center text-xs">An application for chess enthusiast  </p>
        </div>
    )
}

