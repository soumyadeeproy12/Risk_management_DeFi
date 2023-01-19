import { ethers } from "ethers";
import { abi } from "./abi";
export const holdings = async (
  address: string,
  strategyName: string,
  rpcUrl: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract(address, abi, provider);
  const holding = await contract.holdings(strategyName);
  return holding;
};
