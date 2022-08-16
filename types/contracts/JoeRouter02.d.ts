import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    factory: string;
    WAVAX: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    amountADesired: number | BigNumber;
    amountBDesired: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IAddLiquidityAVAXParams {
    token: string;
    amountTokenDesired: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountAVAXMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IGetAmountInParams {
    amountOut: number | BigNumber;
    reserveIn: number | BigNumber;
    reserveOut: number | BigNumber;
}
export interface IGetAmountOutParams {
    amountIn: number | BigNumber;
    reserveIn: number | BigNumber;
    reserveOut: number | BigNumber;
}
export interface IGetAmountsInParams {
    amountOut: number | BigNumber;
    path: string[];
}
export interface IGetAmountsOutParams {
    amountIn: number | BigNumber;
    path: string[];
}
export interface IQuoteParams {
    amountA: number | BigNumber;
    reserveA: number | BigNumber;
    reserveB: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityAVAXParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountAVAXMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountAVAXMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityAVAXWithPermitParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountAVAXMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountAVAXMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityWithPermitParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapAVAXForExactTokensParams {
    amountOut: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactAVAXForTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForAVAXParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactAVAXParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export declare class JoeRouter02 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WAVAX: {
        (): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    addLiquidityAVAX: {
        (params: IAddLiquidityAVAXParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityAVAXParams, _value: number | BigNumber) => Promise<{
            amountToken: BigNumber;
            amountAVAX: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    factory: {
        (): Promise<string>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    };
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeLiquidityAVAX: {
        (params: IRemoveLiquidityAVAXParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXParams) => Promise<{
            amountToken: BigNumber;
            amountAVAX: BigNumber;
        }>;
    };
    removeLiquidityAVAXSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    };
    removeLiquidityAVAXWithPermit: {
        (params: IRemoveLiquidityAVAXWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitParams) => Promise<{
            amountToken: BigNumber;
            amountAVAX: BigNumber;
        }>;
    };
    removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    };
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    swapAVAXForExactTokens: {
        (params: ISwapAVAXForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapAVAXForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactAVAXForTokens: {
        (params: ISwapExactAVAXForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactAVAXForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForAVAX: {
        (params: ISwapExactTokensForAVAXParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForAVAXSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapTokensForExactAVAX: {
        (params: ISwapTokensForExactAVAXParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactAVAXParams) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    };
    private assign;
}
