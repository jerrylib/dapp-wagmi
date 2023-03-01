import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
  erc20ABI,
  useAccount,
  useContractEvent,
} from "wagmi";

import { ethers } from "ethers";

import VAULT_ABI from "./abi";

export default function ETHi() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0x1757a98c1333B9dc8D408b194B2279b5AFDF70Cc",
    abi: VAULT_ABI,
    functionName: "mint",
    args: [
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      ethers.utils.parseEther("0.01"),
      0,
    ],
    overrides: {
      value: ethers.utils.parseEther("0.01"),
    },
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const { address } = useAccount();
  const { data: a } = useContractRead({
    address: "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af",
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address],
  });

  useContractEvent({
    address: "0x1757a98c1333B9dc8D408b194B2279b5AFDF70Cc",
    abi: VAULT_ABI,
    eventName: "Mint",
    listener(node, label, owner) {
      console.log("mint=", node, label, owner);
    },
  });

  return (
    <div>
      <p>{ethers.utils.formatEther(a)}</p>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Minting..." : "Mint"}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  );
}
