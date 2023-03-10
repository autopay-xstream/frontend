import React from 'react'

const DashboardRow = () => {
    return (
        <tr>
            <td>
                <p className="m-0 text-[15.65px] leading-[17.610811233520508px]">
                    Fragments.eth
                </p>
            </td>
            <td>
                <p
                    className="m-0 h-9 text-[15.65px] leading-[17.610811233520508px]"
                >
                    December
                    <br />
                    10, 1815
                </p>
            </td>
            <td>
                <p className="m-0 text-[15.65px] leading-[17.610811233520508px]">
                    {"USDC "}
                    <br />
                    Polygon
                </p>
            </td>
            <td>
                <p className="m-0 text-[15.65px] leading-[17.610811233520508px]">
                    10
                </p>
            </td>
            <td>
                <p className="m-0 text-[15.65px] leading-[17.610811233520508px]">
                    20
                </p>
            </td>
            <td>
                <p className="m-0 text-[15.65px] leading-[17.610811233520508px]">
                    3.890282202
                </p>
            </td>
            <td>
                <button className='bg-[rgba(244,244,244,1)] rounded-[6.15px] px-2 py-1 text-sm'>
                    Cancel
                </button>
            </td>
            <td>
                <button className='bg-[rgba(244,244,244,1)] rounded-[6.15px] px-2 py-1 text-sm'>
                    Top Up
                </button>
            </td>
            <td>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default DashboardRow