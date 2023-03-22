import Layout from "@/components/Layout";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "../styles/container.css";
import "../styles/dashboard.css";
import "../styles/globals.css";
import "../styles/setpermission.css";
import AuthProvider from "@/providers/AuthProvider";

export default function App({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [polygonMumbai, goerli],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Autopay",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

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
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
