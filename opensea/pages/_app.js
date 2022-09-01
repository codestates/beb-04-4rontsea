import "../styles/globals.css";
// fontawesome 실행하기 위한 import
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { MoralisProvider } from "react-moralis";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://spmzat1t3sba.usemoralis.com:2053/server"
      appId="mjebjZmx4hkMeprsqNHaUg7KzENKEKuGatVYL6AC"
    >
      <Component {...pageProps} />{" "}
    </MoralisProvider>
  );
}

export default MyApp;
