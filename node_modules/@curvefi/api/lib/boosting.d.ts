import { IDict } from "./interfaces";
export declare const getCrv: (...addresses: string[] | string[][]) => Promise<IDict<string> | string>;
export declare const getLockedAmountAndUnlockTime: (...addresses: string[] | string[][]) => Promise<IDict<{
    lockedAmount: string;
    unlockTime: number;
}> | {
    lockedAmount: string;
    unlockTime: number;
}>;
export declare const getVeCrv: (...addresses: string[] | string[][]) => Promise<IDict<string> | string>;
export declare const getVeCrvPct: (...addresses: string[] | string[][]) => Promise<IDict<string> | string>;
export declare const isApproved: (amount: number | string) => Promise<boolean>;
export declare const approveEstimateGas: (amount: number | string) => Promise<number>;
export declare const approve: (amount: number | string) => Promise<string[]>;
export declare const createLockEstimateGas: (amount: number | string, days: number) => Promise<number>;
export declare const createLock: (amount: number | string, days: number) => Promise<string>;
export declare const increaseAmountEstimateGas: (amount: number | string) => Promise<number>;
export declare const increaseAmount: (amount: number | string) => Promise<string>;
export declare const increaseUnlockTimeEstimateGas: (days: number) => Promise<number>;
export declare const increaseUnlockTime: (days: number) => Promise<string>;
export declare const withdrawLockedCrvEstimateGas: () => Promise<number>;
export declare const withdrawLockedCrv: () => Promise<string>;
export declare const claimableFees: (address?: string) => Promise<string>;
export declare const claimFeesEstimateGas: (address?: string) => Promise<number>;
export declare const claimFees: (address?: string) => Promise<string>;
