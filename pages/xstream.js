import SendXStream from "@/components/SendXStream";
import SideBar from "@/components/SideBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logowhite from "../image/LogoWhite.png";

const Streams = () => {
  return (
    <>
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
          <SideBar />

          {/* ****************main right panel************** */}
          <div className="w-full bg-[#F4F4F4]">
            <div className="inside-main-right">
              <SendXStream />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Streams;
