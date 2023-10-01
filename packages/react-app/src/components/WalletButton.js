import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

const WalletButton = () => {
  const [accountAddress, setaccountAddress] = useState("");
  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  const connectWallet = () => {
    if (!account) {
      activateBrowserWallet();
    } else {
      deactivate();
    }
  };

  useEffect(() => {
    if (ens) {
      setaccountAddress(ens);
    } else if (account) {
      setaccountAddress(shortenAddress(account));
    } else {
      setaccountAddress("");
    }
  }, [account, ens, setaccountAddress]);

  return (
    <button onClick={connectWallet} className={styles.walletButton}>
      {accountAddress || "Connect Wallet"}
    </button>
  );
};

export default WalletButton;
