import curve from "@curvefi/api";
import { PollingWatchKind } from "typescript";
const break_time = 5000;
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const pool_info = async () => {
  var temp = 0;
  let _curve: any = curve;

  //await _curve.default.init('JsonRpc', {}, { gasPrice: 0, maxFeePerGas: 0, maxPriorityFeePerGas: 0 });
  await _curve.default.init(
    "Infura",
    { network: "homestead", apiKey: "075e15f5cc904e50b3050108c5fcc6dd" },
    { chainId: 1 }
  );
  await _curve.default.fetchFactoryPools();
  await _curve.default.fetchCryptoFactoryPools();
  const pool = _curve.default.getPool("mim");
  console.log(pool);

  const underlying_balance_init = await pool.stats.underlyingBalances();

  //console.log(underlying_balance_init);

  const price_init = await pool._underlyingPrices();

  var startTime = Date.now();
  while (Date.now() - startTime < 60000) {
    var underlying = await pool.underlyingCoins;
    var underlying_balance = await pool.stats.underlyingBalances();
    console.log(underlying_balance);
    if (underlying_balance[0] < 0.7 * underlying_balance_init[0]) {
      console.log("Alert: Liquidity has gone down by 30% of " + underlying[0]);
    }
    if (underlying_balance[1] < 0.7 * underlying_balance_init[1]) {
      console.log("Alert: Liquidity has gone down by 30% of " + underlying[1]);
    }
    if (underlying_balance[2] < 0.7 * underlying_balance_init[2]) {
      console.log("Alert: Liquidity has gone down by 30% of " + underlying[2]);
    }
    if (underlying_balance[3] < 0.7 * underlying_balance_init[3]) {
      console.log("Alert: Liquidity has gone down by 30% of " + underlying[3]);
    }
    if (
      underlying_balance[0] > 0.7 * underlying_balance_init[0] ||
      underlying_balance[1] > 0.7 * underlying_balance_init[1] ||
      underlying_balance[2] > 0.7 * underlying_balance_init[2] ||
      underlying_balance[3] > 0.7 * underlying_balance_init[3]
    ) {
      console.log(
        "Everything is alright with the underlying coins (not less than 30%): " +
          underlying[0] +
          "," +
          underlying[1] +
          "," +
          underlying[2] +
          "," +
          underlying[3]
      );
    }
  }
};
pool_info();
