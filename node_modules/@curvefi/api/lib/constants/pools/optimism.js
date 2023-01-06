"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS_DATA_OPTIMISM = void 0;
var swap_json_1 = __importDefault(require("../abis/3pool-optimism/swap.json"));
var swap_json_2 = __importDefault(require("../abis/wsteth/swap.json"));
var gauge_child_json_1 = __importDefault(require("../abis/gauge_child.json"));
var utils_1 = require("../utils");
exports.POOLS_DATA_OPTIMISM = (0, utils_1.lowerCasePoolDataAddresses)({
    '3pool': {
        name: "3pool",
        full_name: "3pool",
        symbol: "3pool",
        reference_asset: 'USD',
        is_plain: true,
        swap_address: '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
        token_address: '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
        gauge_address: '0x15F52286C0FF1d7A7dDbC9E300dd66628D46D4e6',
        underlying_coins: ['DAI', 'USDC', 'USDT'],
        wrapped_coins: ['DAI', 'USDC', 'USDT'],
        underlying_coin_addresses: [
            '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
            '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
            '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
        ],
        wrapped_coin_addresses: [
            '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
            '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
            '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
        ],
        underlying_decimals: [18, 6, 6],
        wrapped_decimals: [18, 6, 6],
        swap_abi: swap_json_1.default,
        gauge_abi: gauge_child_json_1.default,
    },
    wsteth: {
        name: "wsteth",
        full_name: "wsteth",
        symbol: "wsteth",
        reference_asset: 'ETH',
        is_plain: true,
        swap_address: '0xB90B9B1F91a01Ea22A182CD84C1E22222e39B415',
        token_address: '0xEfDE221f306152971D8e9f181bFe998447975810',
        gauge_address: '0xD53cCBfED6577d8dc82987e766e75E3cb73a8563',
        underlying_coins: ['ETH', 'wstETH'],
        wrapped_coins: ['ETH', 'wstETH'],
        underlying_coin_addresses: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
        ],
        wrapped_coin_addresses: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
        ],
        underlying_decimals: [18, 18],
        wrapped_decimals: [18, 18],
        swap_abi: swap_json_2.default,
        gauge_abi: gauge_child_json_1.default,
    },
});
