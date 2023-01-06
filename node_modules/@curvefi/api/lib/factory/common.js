"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFactoryZapContracts = void 0;
var constants_1 = require("./constants");
var constants_crypto_1 = require("./constants-crypto");
function setFactoryZapContracts(isCrypto) {
    var basePoolIdZapDict = (isCrypto ? constants_crypto_1.CRYPTO_FACTORY_CONSTANTS : constants_1.FACTORY_CONSTANTS)[this.chainId].basePoolIdZapDict;
    for (var basePoolId in basePoolIdZapDict) {
        if (!Object.prototype.hasOwnProperty.call(basePoolIdZapDict, basePoolId))
            continue;
        var basePool = basePoolIdZapDict[basePoolId];
        if (basePool.address in this.constants)
            continue;
        this.setContract(basePool.address, basePool.ABI);
    }
}
exports.setFactoryZapContracts = setFactoryZapContracts;
