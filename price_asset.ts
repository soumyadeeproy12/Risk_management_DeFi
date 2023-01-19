import curve from "@curvefi/api";
//reset the time to check when you want to check the price
const break_time = 5000;
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const pool_info = async () => {
  var temp = 0;
  let _curve: any = curve;

  await _curve.default.init(
    "Infura",
    { network: "homestead", apiKey: "075e15f5cc904e50b3050108c5fcc6dd" },
    { chainId: 1 }
  );
  await _curve.default.fetchFactoryPools();
  await _curve.default.fetchCryptoFactoryPools();
  const pool = _curve.default.getPool("mim");

  const price_init = await pool._underlyingPrices();

  //console.log(underlying_balance_init);

  var startTime = Date.now();
  while (Date.now() - startTime < 60000) {
    var underlying = await pool.underlyingCoins;
    var underlying_price = await pool._underlyingPrices();
    if (underlying_price[0] < 0.7 * price_init[0]) {
      console.log("Alert: price has gone down by 30% of" + underlying[0]);
    } else if (underlying_price[1] < 0.7 * price_init[1]) {
      console.log("Alert: price has gone down by 30% of" + underlying[1]);
    } else if (underlying_price[2] < 0.7 * price_init[2]) {
      console.log("Alert: price has gone down by 30% of" + underlying[2]);
    } else if (underlying_price[3] < 0.7 * price_init[3]) {
      console.log("Alert: price has gone down by 30% of" + underlying[3]);
    } else {
      console.log(
        "Everything is alright with the underlying coins: " +
          underlying[0] +
          "," +
          underlying[1] +
          "," +
          underlying[2] +
          "," +
          underlying[3]
      );
    }

    await sleep(break_time);
  }
};
pool_info();
