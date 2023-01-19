import { holdings } from "./holdings";
import { totalCounterPartyLiqudity } from "./totalCounterPartyLiqudity";
import { BigNumber, utils } from "ethers";
import { ethers } from "ethers";
const moonBeamDiamondAddress = "0xcF79046a903F17e886E8d35d3A52FeBF188e077E";
const moonBeamRpcUrl = "https://rpc.ankr.com/moonbeam";
const provider = new ethers.providers.JsonRpcProvider(moonBeamRpcUrl);

const erc20Abi = ["function decimals() public view returns (uint8)"];

const bigToNumber = (number: BigNumber, decimals: BigNumber) => {
  return utils.formatUnits(number, decimals);
};

const holding = await holdings(
  moonBeamDiamondAddress,
  "Beam4Pool",
  moonBeamRpcUrl
);
console.log("Holdings");
for (let i = 0; i < holding.length; i++) {
  const tokenContract = new ethers.Contract(
    holding[i].tokenAddress,
    erc20Abi,
    provider
  );
  const decimals = await tokenContract.decimals();
  console.log(
    `${holding[i].tokenAddress}: ${bigToNumber(holding[i].balance, decimals)}`
  );
}
const totalLiqudity = await totalCounterPartyLiqudity(
  moonBeamDiamondAddress,
  "Beam4Pool",
  moonBeamRpcUrl
);
console.log("Total Liquidity");
for (let i = 0; i < totalLiqudity.length; i++) {
  const tokenContract = new ethers.Contract(
    totalLiqudity[i].tokenAddress,
    erc20Abi,
    provider
  );
  const decimals = await tokenContract.decimals();
  console.log(
    `${totalLiqudity[i].tokenAddress}: ${bigToNumber(
      totalLiqudity[i].balance,
      decimals
    )}`
  );
}
