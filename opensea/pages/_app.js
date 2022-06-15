import "../styles/globals.css";
// fontawesome 실행하기 위한 import
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { MoralisProvider } from "react-moralis";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="4xXCbtP7m1VwKTHPiuKep75TfYC5TDnd027EZKNQ"
      serverUrl="https://elifuy0f0etv.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
