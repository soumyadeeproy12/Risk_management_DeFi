"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS_DATA_MOONBEAM = void 0;
var swap_json_1 = __importDefault(require("../abis/3pool-optimism/swap.json"));
var gauge_child_json_1 = __importDefault(require("../abis/gauge_child.json"));
var utils_1 = require("../utils");
exports.POOLS_DATA_MOONBEAM = (0, utils_1.lowerCasePoolDataAddresses)({
    '3pool': {
        name: "3pool",
        full_name: "3pool",
        symbol: "3pool",
        reference_asset: 'USD',
        swap_address: '0xace58a26b8db90498ef0330fdc9c2655db0c45e2',
        token_address: '0xace58a26b8db90498ef0330fdc9c2655db0c45e2',
        gauge_address: '0x0000000000000000000000000000000000000000',
        is_plain: true,
        underlying_coins: ['DAI', 'USDC', 'USDT'],
        wrapped_coins: ['DAI', 'USDC', 'USDT'],
        underlying_coin_addresses: [
            '0xc234A67a4F840E61adE794be47de455361b52413',
            '0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC9',
            '0x8e70cD5B4Ff3f62659049e74b6649c6603A0E594',
        ],
        wrapped_coin_addresses: [
            '0xc234A67a4F840E61adE794be47de455361b52413',
            '0x8f552a71EFE5eeFc207Bf75485b356A0b3f01eC9',
            '0x8e70cD5B4Ff3f62659049e74b6649c6603A0E594',
        ],
        underlying_decimals: [18, 6, 6],
        wrapped_decimals: [18, 6, 6],
        swap_abi: swap_json_1.default,
        gauge_abi: gauge_child_json_1.default,
    },
});
