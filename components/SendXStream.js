import React from 'react'
import DropSelect from './DropSelect'
import StreamInfo from './StreamInfo'

const SendXStream = () => {
    return (
        <div className="main-container w-full h-screen ">
            <div className="max-w-6xl mx-auto mt-16 rounded-2xl bg-white w-full ">
                <form className='p-10'>
                    <div className='flex items-center justify-between w-full gap-10'>
                        <input className="rounded-lg w-full px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none" placeholder="your@mail.com" />
                        <input className="rounded-lg w-full px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none" placeholder="your@mail.com" />
                    </div>
                    <input className="rounded-lg mt-8 w-full px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none" placeholder="Enter  receipient address or ENS" />

                    <div className='flex items-center justify-between'>
                        <DropSelect />
                        <DropSelect />
                        <DropSelect />

                    </div>

                    <div className='w-full h-[2px] bg-gray-300 mt-12'/>

                    <StreamInfo />

                    <button className='w-[403px] h-[67px] flex items-center justify-center bg-[#96D068] rounded-[10px] px-[80px] py-[20px] mx-auto mt-10 text-white'>
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SendXStream