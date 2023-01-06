import WebSocket from 'ws';
import { config } from "dotenv"
import Exchange from "ccxt"

config()

//console.log(process.env.API_KEY)
const coin1 = 'ethusdt';
const coin2 = 'ETH/USDT';
const ws = new WebSocket(`wss://fstream.binance.com/ws/${coin1}@trade`);
const interval = 5 * 1000     // milliseconds, right now it's just 5 seconds

const binance_extract = async () => {
    console.log(process.env.API_KEY)

    //Import the API key and secret from the .env file

    const binance = new Exchange.binance({
        'apiKey' : process.env.API_KEY,
        'secret' : process.env.API_SECRET,
      })

    //Fetch the historical data from the past 60 minutes

    let historical  = await binance.fetchOHLCV(coin2, '1m', Date.now() - 60*60*1000, 1)
    var pst_time = Date.now();
    var pst_trade = historical[0][4];
    console.log("data of the past trade from history"+ String(pst_trade))
    //console.log("time now from history data"+ String(Date.now()))
    //return  [pst_time, pst_trade]
    ws.on('message', (data?: string) => {
        if (data) {
            const trade = JSON.parse(data); // parsing a single-trade record
            // start ws 
            // init ws = trade1
            //next pst ws = init ws 
            //init ws = trade 2 
            //per =curr - pst ws  
            const trade_curr = trade.p
            const time = trade.T
           // console.log("data-2"+ String(trade_curr))
           // console.log("data-3"+ String(time))
    
    
            //count = count + 1
            //var temp = 0
            if (time>= pst_time + interval){
                const per = (trade_curr - pst_trade)*100/pst_trade 
                pst_time = time
                pst_trade = trade_curr 
                console.log("Percentage change: "+ String(per))
                ws.close()
            } 
            
    
    
    
           
    
        }
    });
    
}
await binance_extract();
//binance_extract().then(window.close);

//console.log(await binance_extract())
//console.log(pst_t[0])