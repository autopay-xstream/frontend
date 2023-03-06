import "../styles/globals.css";
import "../styles/dashboard.css";
import "../styles/container.css";
import "../styles/setpermission.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}
