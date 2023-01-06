"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aTokensKava = exports.ycTokensKava = exports.yTokensKava = exports.cTokensKava = exports.COINS_KAVA = void 0;
var utils_1 = require("../utils");
exports.COINS_KAVA = (0, utils_1.lowerCaseValues)({
    'crv': '0x64D5BaF5ac030e2b7c435aDD967f787ae94D0205',
    // --- USD ---
    'dai': '0x765277EebeCA2e31912C9946eAe1021199B39C61',
    'usdc': '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
    'usdt': '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    '3crv': '0x7A0e3b70b1dB0D6CA63Cac240895b2D21444A7b9',
});
exports.cTokensKava = []; //.map((a) => a.toLowerCase());
exports.yTokensKava = []; //.map((a) => a.toLowerCase());
exports.ycTokensKava = []; //.map((a) => a.toLowerCase());
exports.aTokensKava = []; //.map((a) => a.toLowerCase());
