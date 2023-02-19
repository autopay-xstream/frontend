import Head from "next/head";
import { useEffect, useState } from "react";

import logo from "../image/Logo.png";
import logowhite from "../image/LogoWhite.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//********************** connect wallet imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, polygonMumbai, optimism, arbitrum, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Dashboard from "../components/Dashboard";
import SendStream from "../components/SendStream";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import SendXStream from "@/components/SendXStream";
import Stream from "@/components/Stream";
import Notifications from "@/components/Notifications";

//******************************************* */

export default function Home() {
  //********************** connect wallet imports

  const { chains, provider } = configureChains(
    [polygonMumbai, goerli],
    [
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  //********************** connect wallet imports

  const [showDashboard, setDashboard] = useState(false);
  const [showSendStream, setSendStream] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showXStream, setShowXStream] = useState(false);
  const [showStream, setShowStream] = useState(false);

  useEffect(() => {
    setDashboard(true);
  }, []);


  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: "#10bb35",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <Head>
            <title>XStream</title>
            <meta
              name="description"
              content="Cross chain streaming using AutoPay XStream"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="main font-poppins">
            {/* ******************** Navbar ******************** */}

            <div className="navbar flex justify-between p-2 items-center absolute w-full px-4 z-10">
              <div className="navbar-logo flex-auto w-64  py-4 px-3">
                {/* //logo  */}
                <Image src={logowhite} alt="logo" height={40} />
              </div>
              <div className="connect-wallet">
                <ConnectButton
                  accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "full",
                  }}
                  showBalance={{
                    smallScreen: false,
                    largeScreen: true,
                  }}
                />
              </div>
            </div>

            {/* ******************** main ******************** */}

            <div className="flex  min-h-screen">
              {/* ****************main left panel************** */}
              <SideBar
                setDashboard={setDashboard}
                setSendStream={setSendStream}
                setShowNotification={setShowNotification}
                setShowXStream={setShowXStream}
                showXStream={showXStream}
                showDashboard={showDashboard}
                showSendStream={showSendStream}
                showNotification={showNotification}
                setShowStream={setShowStream}
                showStream={showStream}
              />


              {/* ****************main right panel************** */}
              <div className="w-full bg-[#F4F4F4]">
                <div className="inside-main-right">
                  {showDashboard ? (
                    <Dashboard />
                  ) : showSendStream ? (
                    <SendStream />
                  ) : showXStream ? (
                    <SendXStream />
                  ) : showNotification ?
                    <Notifications />
                    : null
                  }

                </div>
              </div>
            </div>


          </main>
          <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
