import Image from "next/image"
import React from "react"

const Branding = () => {
  return (
    <section className="flex flex-col md:flex-row 
        justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
            
            {/* DISNEY */}
            <div className="brand group">
                <Image src="/images/disney_.png" layout="fill" objectFit="cover" />
                <video autoPlay loop playsInline className="hidden group-hover:inline
                    rounded-lg object-cover w-[100%]">
                    <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Marvel */}
            <div className="brand group">
                <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
                <video autoPlay loop playsInline className="hidden group-hover:inline
                    rounded-lg object-cover w-[100%]">
                    <source src="/videos/marvel.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Pixar */}
            <div className="brand group">
                <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
                <video autoPlay loop playsInline className="hidden group-hover:inline
                    rounded-lg object-cover w-[100%]">
                    <source src="/videos/pixar.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Star Wars */}
            <div className="brand group">
                <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
                <video autoPlay loop playsInline className="hidden group-hover:inline
                    rounded-lg object-cover w-[100%]">
                    <source src="/videos/star-wars.mp4" type="video/mp4" />
                </video>
            </div>

            {/* National Geo */}
            <div className="brand group">
                <Image src="/images/national-geographic.png" layout="fill" objectFit="cover" />
                <video autoPlay loop playsInline className="hidden group-hover:inline
                    rounded-lg object-cover w-[100%]">
                    <source src="/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </div>
    </section>
  )
}

export default Branding