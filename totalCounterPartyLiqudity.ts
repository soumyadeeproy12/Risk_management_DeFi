import { ethers } from "ethers";
import { abi } from "./abi";
export const totalCounterPartyLiqudity = async (
  address: string,
  strategyName: string,
  rpcUrl: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract(address, abi, provider);
  const totalCounterPartyLiqudity = await contract.totalCounterpartyLiquidity(
    strategyName
  );
  return totalCounterPartyLiqudity;
};
