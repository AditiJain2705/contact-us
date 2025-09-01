import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const SuccessStoryHero = () => {
    return (
        <div>
            <div className="px-6 pt-6 lg:mb-0">
                <h1 className="text-3xl md:text-4xl  text-gray-900 leading-tight">
                    Guiding Businesses. <br />Creating&nbsp;
                    <span className=" text-[#0CABC8] font-semibold text-4xl cormorant-text ">
                        Impacts.
                    </span>{" "}
                </h1>
                <p className="my-4 text-xs text-black">
                    Get in touch with our team for any questions. This is suppose to be a paragraph, and this will be of about 100-200 words.                 </p>
                <div className='flex gap-3'>
                    <Link href={"#"} className='rounded-full border font-semibold text-xs py-2 px-4 '>Talk to an Expert</Link>                <Link href={"#"} className='rounded-full bg-black text-white border font-semibold text-xs py-2 px-4  flex items-center gap-2'>Save taxes for 3 years <BsArrowUpRightCircleFill className='text-gray-300 text-lg' />
                    </Link>
                </div>


            </div>
            <div className="flex items-center space-x-2 mb-6">
                <Image src="/assets/test.webp" alt='startup-flora-logo' height={159} width={360} />

            </div>

        </div>
    )
}

export default SuccessStoryHero