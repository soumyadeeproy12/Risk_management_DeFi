
import curve from "@curvefi/api";
    const break_time = 5000;
    function sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
     const pool_info =  async () => {
        let _curve : any = curve;
        
        //await _curve.default.init('JsonRpc', {}, { gasPrice: 0, maxFeePerGas: 0, maxPriorityFeePerGas: 0 });
        await _curve.default.init("Infura", { network: "homestead", apiKey: "075e15f5cc904e50b3050108c5fcc6dd" }, { chainId: 1 });
        await _curve.default.fetchFactoryPools();
        await _curve.default.fetchCryptoFactoryPools();
        const pool =  _curve.default.getPool('mim');
        

        const init_liq = await pool.stats.totalLiquidity();
        

        
      
        
        var startTime = Date.now();
        while ((Date.now() - startTime) < 60000) {
            const liq = await pool.stats.totalLiquidity();
            if (liq < 0.70*init_liq) {
                console.log("Alert: Liquidity has gone down by 30%");
            }
            else {
                console.log("Everything is alright about Liquidity");
            };

          

            await sleep(break_time);

        }
        
      
    }

pool_info()