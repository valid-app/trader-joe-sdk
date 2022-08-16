import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export declare class JoeFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(feeToSetter: string): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): JoeFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): JoeFactory.PairCreatedEvent;
    allPairs: {
        (param1: number | BigNumber): Promise<string>;
    };
    allPairsLength: {
        (): Promise<BigNumber>;
    };
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    };
    feeTo: {
        (): Promise<string>;
    };
    feeToSetter: {
        (): Promise<string>;
    };
    getPair: {
        (params: IGetPairParams): Promise<string>;
    };
    migrator: {
        (): Promise<string>;
    };
    pairCodeHash: {
        (): Promise<string>;
    };
    setFeeTo: {
        (feeTo: string): Promise<TransactionReceipt>;
        call: (feeTo: string) => Promise<void>;
    };
    setFeeToSetter: {
        (feeToSetter: string): Promise<TransactionReceipt>;
        call: (feeToSetter: string) => Promise<void>;
    };
    setMigrator: {
        (migrator: string): Promise<TransactionReceipt>;
        call: (migrator: string) => Promise<void>;
    };
    private assign;
}
export declare module JoeFactory {
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        param4: BigNumber;
        _event: Event;
    }
}
