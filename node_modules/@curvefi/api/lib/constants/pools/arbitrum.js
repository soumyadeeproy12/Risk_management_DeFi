"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POOLS_DATA_ARBITRUM = void 0;
var utils_1 = require("../utils");
var swap_json_1 = __importDefault(require("../abis/2pool/swap.json"));
var swap_json_2 = __importDefault(require("../abis/tricrypto2/swap.json"));
var deposit_json_1 = __importDefault(require("../abis/tricrypto2/deposit.json"));
var swap_json_3 = __importDefault(require("../abis/eursusd2/swap.json"));
var zap_json_1 = __importDefault(require("../abis/eursusd2/zap.json"));
var swap_json_4 = __importDefault(require("../abis/ren-arbitrum/swap.json"));
var gauge_child_json_1 = __importDefault(require("../abis/gauge_child.json"));
var swap_json_5 = __importDefault(require("../abis/wsteth/swap.json"));
exports.POOLS_DATA_ARBITRUM = (0, utils_1.lowerCasePoolDataAddresses)({
    '2pool': {
        name: "2pool",
        full_name: "2pool",
        symbol: "2pool",
        reference_asset: "USD",
        swap_address: '0x7f90122bf0700f9e7e1f688fe926940e8839f353',
        token_address: '0x7f90122bf0700f9e7e1f688fe926940e8839f353',
        gauge_address: '0xCE5F24B7A95e9cBa7df4B54E911B4A3Dc8CDAf6f',
        is_plain: true,
        underlying_coins: ['USDC', 'USDT'],
        wrapped_coins: ['USDC', 'USDT'],
        underlying_coin_addresses: [
            '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        ],
        wrapped_coin_addresses: [
            '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        ],
        underlying_decimals: [6, 6],
        wrapped_decimals: [6, 6],
        swap_abi: swap_json_1.default,
        gauge_abi: gauge_child_json_1.default,
    },
    tricrypto: {
        name: "tricrypto",
        full_name: "tricrypto",
        symbol: "tricrypto",
        reference_asset: 'CRYPTO',
        is_crypto: true,
        swap_address: '0x960ea3e3C7FB317332d990873d354E18d7645590',
        token_address: '0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2',
        gauge_address: '0x555766f3da968ecBefa690Ffd49A2Ac02f47aa5f',
        deposit_address: '0xF97c707024ef0DD3E77a0824555a46B622bfB500',
        underlying_coins: ['USDT', 'WBTC', 'ETH'],
        wrapped_coins: ['USDT', 'WBTC', 'WETH'],
        underlying_coin_addresses: [
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
            '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        ],
        wrapped_coin_addresses: [
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
            '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
            '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        ],
        underlying_decimals: [6, 8, 18],
        wrapped_decimals: [6, 8, 18],
        swap_abi: swap_json_2.default,
        gauge_abi: gauge_child_json_1.default,
        deposit_abi: deposit_json_1.default,
    },
    'ren': {
        name: "ren",
        full_name: "ren",
        symbol: "ren",
        reference_asset: 'BTC',
        is_plain: true,
        swap_address: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
        token_address: '0x3E01dD8a5E1fb3481F0F589056b428Fc308AF0Fb',
        gauge_address: '0xDB3fd1bfC67b5D4325cb31C04E0Cae52f1787FD6',
        underlying_coins: ['WBTC', 'renBTC'],
        wrapped_coins: ['WBTC', 'renBTC'],
        underlying_coin_addresses: [
            '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
            '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
        ],
        wrapped_coin_addresses: [
            '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
            '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
        ],
        underlying_decimals: [8, 8],
        wrapped_decimals: [8, 8],
        swap_abi: swap_json_4.default,
        gauge_abi: gauge_child_json_1.default,
    },
    eursusd: {
        name: "eursusd",
        full_name: "eursusd",
        symbol: "eursusd",
        reference_asset: 'CRYPTO',
        swap_address: '0xA827a652Ead76c6B0b3D19dba05452E06e25c27e',
        token_address: '0x3dFe1324A0ee9d86337d06aEB829dEb4528DB9CA',
        gauge_address: '0x6339eF8Df0C2d3d3E7eE697E241666a916B81587',
        deposit_address: '0x25e2e8d104BC1A70492e2BE32dA7c1f8367F9d2c',
        is_meta: true,
        is_crypto: true,
        base_pool: '2pool',
        underlying_coins: ['EURS', 'USDC', 'USDT'],
        wrapped_coins: ['EURS', '2CRV'],
        underlying_coin_addresses: [
            '0xd22a58f79e9481d1a88e00c343885a588b34b68b',
            '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
            '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        ],
        wrapped_coin_addresses: [
            '0xd22a58f79e9481d1a88e00c343885a588b34b68b',
            '0x7f90122bf0700f9e7e1f688fe926940e8839f353',
        ],
        underlying_decimals: [2, 6, 6],
        wrapped_decimals: [2, 18],
        swap_abi: swap_json_3.default,
        gauge_abi: gauge_child_json_1.default,
        deposit_abi: zap_json_1.default,
    },
    wsteth: {
        name: "wsteth",
        full_name: "wsteth",
        symbol: "wsteth",
        reference_asset: 'ETH',
        is_plain: true,
        swap_address: '0x6eB2dc694eB516B16Dc9FBc678C60052BbdD7d80',
        token_address: '0xDbcD16e622c95AcB2650b38eC799f76BFC557a0b',
        gauge_address: '0x098EF55011B6B8c99845128114A9D9159777d697',
        underlying_coins: ['ETH', 'wstETH'],
        wrapped_coins: ['ETH', 'wstETH'],
        underlying_coin_addresses: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0x5979D7b546E38E414F7E9822514be443A4800529',
        ],
        wrapped_coin_addresses: [
            '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '0x5979D7b546E38E414F7E9822514be443A4800529',
        ],
        underlying_decimals: [18, 18],
        wrapped_decimals: [18, 18],
        swap_abi: swap_json_5.default,
        gauge_abi: gauge_child_json_1.default,
    },
});
