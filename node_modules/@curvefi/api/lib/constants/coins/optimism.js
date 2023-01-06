"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aTokensOptimism = exports.ycTokensOptimism = exports.yTokensOptimism = exports.cTokensOptimism = exports.COINS_OPTIMISM = void 0;
var utils_1 = require("../utils");
exports.COINS_OPTIMISM = (0, utils_1.lowerCaseValues)({
    'crv': '0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53',
    // --- USD ---
    'dai': '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    'usdc': '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    'usdt': '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
    'susd': '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
    '3crv': '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
    // --- ETH ---
    'eth': '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    'weth': '0x4200000000000000000000000000000000000006',
    'seth': '0xe405de8f52ba7559f9df3c368500b6e6ae6cee49',
    'wsteth': '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
});
exports.cTokensOptimism = []; //.map((a) => a.toLowerCase());
exports.yTokensOptimism = []; //.map((a) => a.toLowerCase());
exports.ycTokensOptimism = []; //.map((a) => a.toLowerCase());
exports.aTokensOptimism = []; //.map((a) => a.toLowerCase());
