import React from "react";
import { useEthers } from "@usedapp/core";
import { usePools } from "./hooks";
import { uniswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";
import styles from "./styles";
import HowToButton from "./components/HowToButton";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* NAV HEADER */}
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap-logo"
            className="w-16 h-16 object-contain"
          />

          <WalletButton />
        </header>

        {/* MAIN CONTENT */}
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap V2.0</h1>
          <p className={styles.subTitle}>Exchange your tokens in seconds</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet..." />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>

          {/* INFO */}
          <HowToButton />
        </div>
      </div>
    </div>
  );
};

export default App;
