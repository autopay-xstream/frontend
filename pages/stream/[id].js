import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import gif from "../../public/stream-loop.gif";
import { fetchEnsName, fetchEnsAvatar } from '@wagmi/core';
import { AuthContext } from '@/providers/AuthProvider';
import { truncateAddress } from '@/helpers/formatHelper';
import { useRouter } from 'next/router';
import { subgraphURIs } from '@/data/config';
import { fetchSuperfluidOutflow } from '@/helpers/xStreamSubgraph';

const chainDomains = {
    9991: {name: "Polygon Mumbai"},
    1735353714: {name: "Goerli"},

    1886350457: {name: "Polygon"},
    6778479: {name: "Gnosis"},
    6648936: {name: "Ethereum Mainnet"},
}

const Stream = (props) => {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    const [ensName, setEnsName] = useState({
        name: "",
        avatar: ""
    });
    const [receiverEns, setReceiverEns] = useState({
        name: "",
        avatar: "",
    });
    const [notifEvent, setNotifEvent] = useState();

    useEffect(() => {
        const setUpData = async() => {
            const streamData = JSON.parse(router.query.data);
            setNotifEvent(streamData);
            const ens = await fetchEnsName({address: authContext?.userAddress});
            const ensAvatar = await fetchEnsAvatar({address: authContext?.userAddress});
            if (ens || ensAvatar)
                setEnsName({name: ens, avatar: ensAvatar});

            const receiveEns = await fetchEnsName({address: streamData?.receiver});
            const receiverAvatar = await fetchEnsAvatar({address: streamData?.receiver});
            
            if (receiveEns || receiverAvatar) 
                setReceiverEns({name: receiveEns, avatar: receiverAvatar});

            const destinationDomain = streamData?.destinationDomain;
            const uri = subgraphURIs['superfluid'][destinationDomain];
            const subGraphData = await fetchSuperfluidOutflow()
            
        }
        setUpData();
    }, [authContext?.userAddress])
    return (
        <div className="main-container w-full h-screen ">
            <div className="max-w-6xl mx-auto mt-16 rounded-2xl bg-white w-full p-10 ">
                <div className="pt-5 flex flex-col items-center gap-[30px]">
                    <div
                        className="pt-2.5 flex flex-col justify-center items-center gap-[5px]"
                    >
                        <p
                            className="text-base font-medium m-0 leading-[normal] text-[rgba(70,70,70,1)]"
                        >
                            Total Amount Streamed
                        </p>
                        <div className="flex items-center gap-[30px]">
                            <div
                                className="relative text-white font-semibold w-[50px] h-[54px]"
                            >
                                <div
                                    className="left-0 top-0 absolute rounded-full border-solid border-2 w-[50px] h-[50px] bg-[rgba(39,117,202,1)] border-[rgba(150,208,104,1)]"
                                />
                                <p
                                    className="absolute text-3xl inline m-0 left-[15px] top-[3px] leading-[normal]"
                                >
                                    $
                                </p>
                            </div>
                            <div className="leading-none relative">
                                <p
                                    className="font-medium inline m-0 text-[45px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    1516.121250208
                                </p>
                                <p
                                    className="font-normal inline m-0 text-[45px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    {" "}
                                </p>
                                <p
                                    className="text-3xl font-semibold inline m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                                >
                                    TESTx
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div
                            className="[box-shadow:0px_0px_0px_1px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:1px] bg-white gap-2.5 flex flex-col justify-center items-center p-5 w-[416px] rounded-[10px]"
                        >
                            <div className="flex justify-between items-center w-[376px]">
                                <p
                                    className="text-sm font-normal leading-9 m-0 text-[rgba(70,70,70,0.8)]"
                                >
                                    Sender
                                </p>
                                <div className="flex items-center w-[148.28125px] gap-[7.19px]">
                                    <p
                                        className="text-sm font-normal m-0 leading-[25.875px] text-[rgba(70,70,70,0.8)]"
                                    >
                                        Network
                                    </p>
                                    <div
                                        className="[box-shadow:0px_0px_0px_0.4724368155002594px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.47px] bg-white flex items-center pl-[9px] pr-[9px] pt-[7px] pb-[7px] w-[84.09375px] gap-[9.45px] rounded-[4.72px]"
                                    >
                                        <div
                                            className="flex justify-center items-center text-white font-bold pl-[5.62px] pr-[5.62px] pt-[1.62px] pb-[1.62px] w-[23.621841430664062px] h-[23.62px] bg-[rgba(145,101,255,1)] gap-[4.72px] rounded-[23.62px]"
                                        >
                                            <p
                                                className="m-0 text-[13.23px] leading-[17.00772476196289px]"
                                            >
                                                G
                                            </p>
                                        </div>
                                        <p
                                            className="font-semibold m-0 text-[10.39px] leading-[17.00772476196289px] text-[rgba(70,70,70,1)]"
                                        >
                                            {authContext?.chain?.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-[5px] text-[rgba(70,70,70,1)]">
                                <div
                                    className="[box-shadow:0px_0px_0px_1px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:1px] px-5 bg-white gap-5 flex items-center pt-[15px] pb-[15px] w-[376px] rounded-[10px]"
                                >
                                    <div
                                        className="[box-shadow:0px_0px_0px_0.6000000238418579px_rgba(150,_208,_104,_1)_inset] [box-shadow-width:0.6px] bg-white gap-2.5 w-[60px] rounded-[10px]"
                                    >
                                        <div
                                            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/373aadff3b811a637cb46375b48df52ce3ec2405.webp)_center_/_cover] w-[60px] h-[60px] rounded-[10px]"
                                        />
                                    </div>
                                    <div className="w-64 flex flex-col items-start">
                                        <p className="font-semibold leading-9 m-0 text-[22px]">
                                            {ensName.name}
                                        </p>
                                        <p className="text-lg font-normal leading-9 m-0">
                                            {truncateAddress(authContext?.userAddress)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={gif}
                            alt="send stream image"
                            className="w-36 p-1 rounded-xl"
                        />
                        <div
                            className="[box-shadow:0px_0px_0px_1px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:1px] bg-white gap-2.5 flex flex-col justify-center items-center p-5 w-[416px] rounded-[10px]"
                        >
                            <div className="flex justify-between items-center w-[376px]">
                                <p
                                    className="text-sm font-normal leading-9 m-0 text-[rgba(70,70,70,0.8)]"
                                >
                                    Receiver
                                </p>
                                <div className="flex items-center w-[148.28125px] gap-[7.19px]">
                                    <p
                                        className="text-sm font-normal m-0 leading-[25.875px] text-[rgba(70,70,70,0.8)]"
                                    >
                                        Network
                                    </p>
                                    <div
                                        className="[box-shadow:0px_0px_0px_0.4724368155002594px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:0.47px] bg-white flex items-center pl-[9px] pr-[9px] pt-[7px] pb-[7px] w-[84.09375px] gap-[9.45px] rounded-[4.72px]"
                                    >
                                        <div
                                            className="flex justify-center items-center text-white font-bold pl-[5.62px] pr-[5.62px] pt-[1.62px] pb-[1.62px] w-[23.621841430664062px] h-[23.62px] bg-[rgba(145,101,255,1)] gap-[4.72px] rounded-[23.62px]"
                                        >
                                            <p
                                                className="m-0 text-[13.23px] leading-[17.00772476196289px]"
                                            >
                                                G
                                            </p>
                                        </div>
                                        <p
                                            className="font-semibold m-0 text-[10.39px] leading-[17.00772476196289px] text-[rgba(70,70,70,1)]"
                                        >
                                            {notifEvent?.destinationDomain}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-[5px] text-[rgba(70,70,70,1)]">
                                <div
                                    className="[box-shadow:0px_0px_0px_1px_rgba(0,_0,_0,_0.1)_inset] [box-shadow-width:1px] px-5 bg-white gap-5 flex items-center pt-[15px] pb-[15px] w-[376px] rounded-[10px]"
                                >
                                    <div
                                        className="[box-shadow:0px_0px_0px_0.6000000238418579px_rgba(150,_208,_104,_1)_inset] [box-shadow-width:0.6px] bg-white gap-2.5 w-[60px] rounded-[10px]"
                                    >
                                        <div
                                            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/a343cb0b49071c34639ec69f2575360509d18652.webp)_center_/_cover] w-[60px] h-[60px] rounded-[10px]"
                                        />
                                    </div>
                                    <div className="w-64 flex flex-col items-start">
                                        <p className="font-semibold leading-9 m-0 text-[22px]">
                                            {receiverEns.name}
                                        </p>
                                        <p className="text-lg font-normal leading-9 m-0">
                                            {truncateAddress(notifEvent?.receiver)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[51px] mt-10">
                    <div
                        className="flex justify-center items-center font-medium w-[1038px] pb-[30px] pl-[15px] text-[rgba(70,70,70,1)]"
                    >
                        <div className="leading-none relative">
                            <p className="text-2xl inline m-0 leading-[normal]">
                                {"0.9331 fUSDCx "}
                            </p>
                            <p className="text-lg inline m-0 leading-[normal]">
                                per month
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-start w-[931.67px]">
                        <div
                            className="flex flex-col items-start w-[453.9166564941406px] gap-[7.58px]"
                        >
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    Start Date:
                                </p>
                                <p
                                    className="font-semibold m-0 w-[128.92px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    22 Dec, 2022 11:51
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    Updated Date:
                                </p>
                                <p
                                    className="font-semibold m-0 w-[125.67px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    4 Feb, 2023 16:51
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    Network Fees:
                                </p>
                                <p
                                    className="font-semibold m-0 w-[63.92px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    0.00025
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    Transaction Hash:
                                </p>
                                <div
                                    className="flex items-start font-semibold   gap-[10.83px] text-[rgba(70,70,70,1)]"
                                >
                                    <p className="m-0 text-[15.17px] leading-[normal]">
                                        0x0cf11....4244
                                    </p>
                                    {/* <IconexBrokenLayers />
                                <IconexBrokenUpRightCircle /> */}
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-start w-[453.9166564941406px] gap-[7.58px]"
                        >
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    Buffer:
                                </p>
                                <p
                                    className="font-semibold m-0 text-[15.17px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    0.001296 fUSDCx
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    End Date:
                                </p>
                                <p
                                    className="font-semibold m-0 text-[15.17px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    22 Dec, 2023 16:43
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-[453.92px]">
                                <p
                                    className="font-normal m-0 w-[148.42px] text-[15.17px] leading-[normal] text-[rgba(70,70,70,0.6)]"
                                >
                                    {" Balance:"}
                                </p>
                                <p
                                    className="font-semibold m-0 text-[15.17px] leading-[normal] text-[rgba(70,70,70,1)]"
                                >
                                    1179.25
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stream;