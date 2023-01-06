"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS_DATA_AURORA = void 0;
var swap_json_1 = __importDefault(require("../abis/3pool-optimism/swap.json"));
var gauge_rewards_only_json_1 = __importDefault(require("../abis/gauge_rewards_only.json"));
var utils_1 = require("../utils");
exports.POOLS_DATA_AURORA = (0, utils_1.lowerCasePoolDataAddresses)({
    '3pool': {
        name: "3pool",
        full_name: "3pool",
        symbol: "3pool",
        reference_asset: 'USD',
        swap_address: '0xbF7E49483881C76487b0989CD7d9A8239B20CA41',
        token_address: '0xbF7E49483881C76487b0989CD7d9A8239B20CA41',
        gauge_address: '0xC2b1DF84112619D190193E48148000e3990Bf627',
        is_plain: true,
        underlying_coins: ['DAI', 'USDC', 'USDT'],
        wrapped_coins: ['DAI', 'USDC', 'USDT'],
        underlying_coin_addresses: [
            '0xe3520349F477A5F6EB06107066048508498A291b',
            '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
            '0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
        ],
        wrapped_coin_addresses: [
            '0xe3520349F477A5F6EB06107066048508498A291b',
            '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
            '0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
        ],
        underlying_decimals: [18, 6, 6],
        wrapped_decimals: [18, 6, 6],
        swap_abi: swap_json_1.default,
        gauge_abi: gauge_rewards_only_json_1.default,
    },
});
