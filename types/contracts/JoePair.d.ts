import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IPermitParams {
    owner: string;
    spender: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export declare class JoePair extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): JoePair.ApprovalEvent[];
    decodeApprovalEvent(event: Event): JoePair.ApprovalEvent;
    parseBurnEvent(receipt: TransactionReceipt): JoePair.BurnEvent[];
    decodeBurnEvent(event: Event): JoePair.BurnEvent;
    parseMintEvent(receipt: TransactionReceipt): JoePair.MintEvent[];
    decodeMintEvent(event: Event): JoePair.MintEvent;
    parseSwapEvent(receipt: TransactionReceipt): JoePair.SwapEvent[];
    decodeSwapEvent(event: Event): JoePair.SwapEvent;
    parseSyncEvent(receipt: TransactionReceipt): JoePair.SyncEvent[];
    decodeSyncEvent(event: Event): JoePair.SyncEvent;
    parseTransferEvent(receipt: TransactionReceipt): JoePair.TransferEvent[];
    decodeTransferEvent(event: Event): JoePair.TransferEvent;
    DOMAIN_SEPARATOR: {
        (): Promise<string>;
    };
    MINIMUM_LIQUIDITY: {
        (): Promise<BigNumber>;
    };
    PERMIT_TYPEHASH: {
        (): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string): Promise<BigNumber>;
    };
    burn: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    factory: {
        (): Promise<string>;
    };
    getReserves: {
        (): Promise<{
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
    };
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    };
    kLast: {
        (): Promise<BigNumber>;
    };
    mint: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    nonces: {
        (param1: string): Promise<BigNumber>;
    };
    permit: {
        (params: IPermitParams): Promise<TransactionReceipt>;
        call: (params: IPermitParams) => Promise<void>;
    };
    price0CumulativeLast: {
        (): Promise<BigNumber>;
    };
    price1CumulativeLast: {
        (): Promise<BigNumber>;
    };
    skim: {
        (to: string): Promise<TransactionReceipt>;
        call: (to: string) => Promise<void>;
    };
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    };
    symbol: {
        (): Promise<string>;
    };
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    token0: {
        (): Promise<string>;
    };
    token1: {
        (): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    private assign;
}
export declare module JoePair {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface BurnEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
        _event: Event;
    }
    interface SyncEvent {
        reserve0: BigNumber;
        reserve1: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
