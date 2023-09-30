import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xdDcf2396fc66A0fF7D8192f01C7dc2B8a6bc247E";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]:
      "https://eth-sepolia.g.alchemy.com/v2/SeoEfuUU9XpD7JZKWad7TjVIVhzOd4dm",
  },
};
