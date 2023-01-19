const getPrice = async (coin: string) => {
  let currency = "usd";
  // The API URL to get the current price
  let string = "https://api.coingecko.com/api/v3/coins/" + coin;
  await fetch(string)
    .then((resp) => resp.json())
    .then((data) => console.log(data.market_data.current_price.usd));
};

getPrice("bitcoin");
