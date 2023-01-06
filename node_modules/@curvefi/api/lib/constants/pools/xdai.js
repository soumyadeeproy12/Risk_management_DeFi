"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS_DATA_XDAI = void 0;
var swap_json_1 = __importDefault(require("../abis/3pool/swap.json"));
var swap_json_2 = __importDefault(require("../abis/rai/swap.json"));
var deposit_json_1 = __importDefault(require("../abis/rai/deposit.json"));
var swap_json_3 = __importDefault(require("../abis/tricrypto-xdai/swap.json"));
var zap_json_1 = __importDefault(require("../abis/tricrypto-xdai/zap.json"));
var gauge_rewards_only_json_1 = __importDefault(require("../abis/gauge_rewards_only.json"));
var gauge_child_json_1 = __importDefault(require("../abis/gauge_child.json"));
var streamer_json_1 = __importDefault(require("../abis/streamer.json"));
var utils_1 = require("../utils");
exports.POOLS_DATA_XDAI = (0, utils_1.lowerCasePoolDataAddresses)({
    '3pool': {
        name: "3pool",
        full_name: "3pool",
        symbol: "3pool",
        reference_asset: 'USD',
        swap_address: '0x7f90122BF0700F9E7e1F688fe926940E8839F353',
        token_address: '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
        gauge_address: '0xb721cc32160ab0da2614cc6ab16ed822aeebc101',
        sCurveRewards_address: '0x6C09F6727113543Fd061a721da512B7eFCDD0267',
        is_plain: true,
        underlying_coins: ['WXDAI', 'USDC', 'USDT'],
        wrapped_coins: ['WXDAI', 'USDC', 'USDT'],
        underlying_coin_addresses: [
            '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
            '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
            '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
        ],
        wrapped_coin_addresses: [
            '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
            '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
            '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
        ],
        underlying_decimals: [18, 6, 6],
        wrapped_decimals: [18, 6, 6],
        swap_abi: swap_json_1.default,
        gauge_abi: gauge_child_json_1.default,
        sCurveRewards_abi: streamer_json_1.default,
    },
    rai: {
        name: "rai",
        full_name: "rai",
        symbol: "rai",
        reference_asset: 'USD',
        swap_address: '0x85bA9Dfb4a3E4541420Fc75Be02E2B42042D7e46',
        token_address: '0x36390a1Ae126f16C5D222CB1F2AB341dD09f2FEC',
        gauge_address: '0x0000000000000000000000000000000000000000',
        deposit_address: '0xdf6eb52c4A9d7d5964b918c50D47a643Fd7D3D4c',
        is_meta: true,
        base_pool: '3pool',
        underlying_coins: ['RAI', 'WXDAI', 'USDC', 'USDT'],
        wrapped_coins: ['RAI', 'x3CRV'],
        underlying_coin_addresses: [
            '0xd7a28aa9c470e7e9d8c676bcd5dd2f40c5683afa',
            '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
            '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
            '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
        ],
        wrapped_coin_addresses: [
            '0xd7a28aa9c470e7e9d8c676bcd5dd2f40c5683afa',
            '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
        ],
        underlying_decimals: [18, 18, 6, 6],
        wrapped_decimals: [18, 18],
        swap_abi: swap_json_2.default,
        gauge_abi: gauge_rewards_only_json_1.default,
        deposit_abi: deposit_json_1.default,
    },
    tricrypto: {
        name: "tricrypto",
        full_name: "tricrypto",
        symbol: "tricrypto",
        reference_asset: 'CRYPTO',
        swap_address: '0x5633E00994896D0F472926050eCb32E38bef3e65',
        token_address: '0x02E7e2dd3BA409148A49D5cc9a9034D2f884F245',
        gauge_address: '0x0000000000000000000000000000000000000000',
        deposit_address: '0xF182926A64C0A19234E7E1FCDfE772aA7A1CA351',
        is_crypto: true,
        is_meta: true,
        base_pool: '3pool',
        underlying_coins: ['WXDAI', 'USDC', 'USDT', 'WBTC', 'WETH'],
        wrapped_coins: ['x3CRV', 'WBTC', 'WETH'],
        underlying_coin_addresses: [
            '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
            '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
            '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
            '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
            '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
        ],
        wrapped_coin_addresses: [
            '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
            '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
            '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
        ],
        underlying_decimals: [18, 6, 6, 8, 18],
        wrapped_decimals: [18, 8, 18],
        swap_abi: swap_json_3.default,
        gauge_abi: gauge_rewards_only_json_1.default,
        deposit_abi: zap_json_1.default,
    },
});
