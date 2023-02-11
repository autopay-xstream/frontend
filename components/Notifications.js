import React, { Component } from 'react'

export default function Notifications() {
    return (
        <div className="main-container w-full h-screen">
            <div
                className={`mx-auto mt-16 rounded-2xl bg-white w-full max-w-6xl  pl-[9px] pr-[9px] pt-[25px] pb-[25px]`}
            >
                <div
                    className="pb-2.5 flex justify-between items-center font-medium w-[1086px] text-[rgba(70,70,70,0.7)]"
                >
                    <div
                        className="px-5 py-2 flex items-center text-left w-[147.73513793945312px] h-[39.14px]"
                    >
                        <p
                            className="flex-1 m-0 text-[13px] leading-[17.610811233520508px]"
                        >
                            Status Update
                        </p>
                    </div>
                    <div
                        className="py-2 pl-1 pr-4 flex items-center text-left w-[104.68648529052734px] h-[39.14px]"
                    >
                        <p className="m-0 text-[13px] leading-[17.610811233520508px]">
                            Receipient
                        </p>
                    </div>
                    <div className="py-2 w-24 flex items-center text-left h-[39px]">
                        <p className="m-0 text-[13px] leading-[17.610811233520508px]">
                            Token Amount
                        </p>
                    </div>
                    <div
                        className="py-2 flex items-center text-center w-[110px] h-[39px]"
                    >
                        <p className="m-0 text-[13px] leading-[17.610811233520508px]">
                            Amount / month
                        </p>
                    </div>
                    <div
                        className="py-2 pr-4 flex items-center text-left w-[130.654052734375px] h-[39.14px]"
                    >
                        <p className="m-0 text-[13px] leading-[17.610811233520508px]">
                            Transaction hash
                        </p>
                    </div>
                    <div
                        className="py-2 pl-4 flex items-center text-left w-[80.2270278930664px] h-[39.14px] pr-[10.23px]"
                    >
                        <p className="m-0 text-[13px] leading-[17.610811233520508px]">
                            Balance
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1.5px] bg-gray-300 my-2" />
                <div className="font-normal text-[rgba(70,70,70,1)]">
                    <div
                        className="py-5 bg-white flex flex-col justify-center items-center pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px]"
                    >
                        <div className="relative w-[1064.48px] h-[48.92px]">
                            <div className="text-left">
                                <div
                                    className="px-2.5 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                                >
                                    <p
                                        className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                    >
                                        Fragments.eth
                                    </p>
                                </div>
                            </div>
                            <div className="text-left">
                                <div
                                    className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                                >
                                    <p
                                        className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                    >
                                        Initiated
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                                >
                                    <p
                                        className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                    >
                                        XXXX
                                        <br />
                                        USDC Polygon
                                    </p>
                                </div>
                            </div>
                            <div className="text-left">
                                <div
                                    className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                                >
                                    <p
                                        className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                    >
                                        20
                                    </p>
                                </div>
                            </div>
                            <div className="text-left">
                                <div
                                    className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                                >
                                    <p
                                        className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                    >
                                        37283.890282202
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="py-5 bg-white flex flex-col justify-center items-center font-normal pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px] text-[rgba(70,70,70,1)]"
                >
                    <div className="relative w-[1064.48px] h-[48.92px]">
                        <div className="text-left">
                            <div
                                className="px-2.5 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Fraents.eth
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Executed
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    XXXX
                                    <br />
                                    USDC Polygon
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    20
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    37283.890282202
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="py-5 bg-white flex flex-col justify-center items-center font-normal pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px] text-[rgba(70,70,70,1)]"
                >
                    <div className="relative w-[1064.48px] h-[48.92px]">
                        <div className="text-left">
                            <div
                                className="px-2.5 py-0 absolute flex justify-center items-center h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                            >
                                <div>
                                    <p
                                        className="m-0 h-9 text-[15.65px] leading-[17.610811233520508px]"
                                    >
                                        0xaksjdokfnoe
                                        <br />
                                        nfoweokf
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Closed
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    XXXX
                                    <br />
                                    USDC Polygon
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    20
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    37283.890282202
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="py-5 bg-white flex flex-col justify-center items-center font-normal pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px] text-[rgba(70,70,70,1)]"
                >
                    <div className="relative w-[1064.48px] h-[48.92px]">
                        <div className="text-left">
                            <div
                                className="px-2.5 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Fragments.eth
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Initiated
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    XXXX
                                    <br />
                                    USDC Polygon
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    20
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    37283.890282202
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="py-5 bg-white flex flex-col justify-center items-center font-normal pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px] text-[rgba(70,70,70,1)]"
                >
                    <div className="relative w-[1064.48px] h-[48.92px]">
                        <div className="text-left">
                            <div
                                className="px-2.5 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Fragments.eth
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Update
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    XXXX
                                    <br />
                                    USDC Polygon
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    20
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    37283.890282202
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="py-5 bg-white flex flex-col justify-center items-center font-normal pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px] text-[rgba(70,70,70,1)]"
                >
                    <div className="relative w-[1064.48px] h-[48.92px]">
                        <div className="text-left">
                            <div
                                className="px-2.5 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Fragments.eth
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Initiated
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    XXXX
                                    <br />
                                    USDC Polygon
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    20
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    37283.890282202
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="py-5 bg-white flex flex-col justify-center items-center font-normal pl-[11px] pr-[11px] gap-[9.78px] rounded-[9.78px] text-[rgba(70,70,70,1)]"
                >
                    <div className="relative w-[1064.48px] h-[48.92px]">
                        <div className="text-left">
                            <div
                                className="px-2.5 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] h-[31.31px] left-[216px] top-[8.81px] gap-[19.57px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Fragments.eth
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="pr-4 absolute flex justify-center items-center pt-[5.31px] pb-[5.31px] w-[109.58px] h-[31.31px] left-[0.24px] top-[10.3px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    Executed
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="px-4 absolute top-0 flex justify-center items-center pt-[7px] pb-[7px] left-[399.62px] h-[49.697296142578125px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    XXXX
                                    <br />
                                    USDC Polygon
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[572.44px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    20
                                </p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div
                                className="px-4 absolute flex justify-center items-center pt-[7px] pb-[7px] left-[769.04px] top-[8.81px]"
                            >
                                <p
                                    className="m-0 text-[15.65px] leading-[17.610811233520508px]"
                                >
                                    37283.890282202
                                </p>
                            </div>
                        </div>
                        <div>
                            <div
                                className="[rotate:-90deg] [transform:scaleY(-1)] [box-shadow:0px_0px_0px_0.9783783555030823px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.98px] px-2.5 py-0.5 origin-top-left absolute flex justify-center items-center w-[31.31px] h-[35.22px] left-[1026.85px] top-[40.61px] drop-shadow-lg bg-[rgba(244,244,244,1)] gap-[9.78px] rounded-[3.91px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
