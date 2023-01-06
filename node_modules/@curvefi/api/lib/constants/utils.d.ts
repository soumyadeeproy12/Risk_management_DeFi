import { IDict, IPoolData } from "../interfaces";
export declare const lowerCasePoolDataAddresses: (poolsData: IDict<IPoolData>) => IDict<IPoolData>;
export declare const extractDecimals: (poolsData: IDict<IPoolData>) => IDict<number>;
export declare const extractGauges: (poolsData: IDict<IPoolData>) => string[];
export declare const lowerCaseValues: (dict: IDict<string>) => IDict<string>;
export declare const lowerCaseKeys: (dict: IDict<any>) => IDict<any>;
