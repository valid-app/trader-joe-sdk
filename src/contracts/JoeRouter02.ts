import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./JoeRouter02.json";

export interface IDeployParams {factory:string;WAVAX:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IAddLiquidityAVAXParams {token:string;amountTokenDesired:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountOutParams {amountIn:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityAVAXParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityAVAXWithPermitParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityWithPermitParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface ISwapAVAXForExactTokensParams {amountOut:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactAVAXForTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForAVAXParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactAVAXParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export class JoeRouter02 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.factory,params.WAVAX]);
    }
    WAVAX: {
        (): Promise<string>;
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
    }
    addLiquidityAVAX: {
        (params: IAddLiquidityAVAXParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityAVAXParams,_value:number|BigNumber) => Promise<{amountToken:BigNumber,amountAVAX:BigNumber,liquidity:BigNumber}>;
    }
    factory: {
        (): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    }
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    removeLiquidityAVAX: {
        (params: IRemoveLiquidityAVAXParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXParams) => Promise<{amountToken:BigNumber,amountAVAX:BigNumber}>;
    }
    removeLiquidityAVAXSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityAVAXWithPermit: {
        (params: IRemoveLiquidityAVAXWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitParams) => Promise<{amountToken:BigNumber,amountAVAX:BigNumber}>;
    }
    removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    swapAVAXForExactTokens: {
        (params: ISwapAVAXForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapAVAXForExactTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactAVAXForTokens: {
        (params: ISwapExactAVAXForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactAVAXForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber) => Promise<void>;
    }
    swapExactTokensForAVAX: {
        (params: ISwapExactTokensForAVAXParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForAVAXSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapTokensForExactAVAX: {
        (params: ISwapTokensForExactAVAXParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactAVAXParams) => Promise<BigNumber[]>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    }
    private assign(){
        let WAVAX_call = async (): Promise<string> => {
            let result = await this.call('WAVAX');
            return result;
        }
        this.WAVAX = WAVAX_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [Utils.toString(params.amountOut),Utils.toString(params.reserveIn),Utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [Utils.toString(params.amountIn),Utils.toString(params.reserveIn),Utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [Utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [Utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let quoteParams = (params: IQuoteParams) => [Utils.toString(params.amountA),Utils.toString(params.reserveA),Utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params));
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityAVAXParams = (params: IAddLiquidityAVAXParams) => [params.token,Utils.toString(params.amountTokenDesired),Utils.toString(params.amountTokenMin),Utils.toString(params.amountAVAXMin),params.to,Utils.toString(params.deadline)];
        let addLiquidityAVAX_send = async (params: IAddLiquidityAVAXParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityAVAX',addLiquidityAVAXParams(params), {value:_value});
            return result;
        }
        let addLiquidityAVAX_call = async (params: IAddLiquidityAVAXParams,_value:number|BigNumber): Promise<{amountToken:BigNumber,amountAVAX:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidityAVAX',addLiquidityAVAXParams(params), {value:_value});
            return {
                amountToken: new BigNumber(result.amountToken),
                amountAVAX: new BigNumber(result.amountAVAX),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidityAVAX = Object.assign(addLiquidityAVAX_send, {
            call:addLiquidityAVAX_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params));
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let removeLiquidityAVAXParams = (params: IRemoveLiquidityAVAXParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountAVAXMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidityAVAX_send = async (params: IRemoveLiquidityAVAXParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAX',removeLiquidityAVAXParams(params));
            return result;
        }
        let removeLiquidityAVAX_call = async (params: IRemoveLiquidityAVAXParams): Promise<{amountToken:BigNumber,amountAVAX:BigNumber}> => {
            let result = await this.call('removeLiquidityAVAX',removeLiquidityAVAXParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountAVAX: new BigNumber(result.amountAVAX)
            };
        }
        this.removeLiquidityAVAX = Object.assign(removeLiquidityAVAX_send, {
            call:removeLiquidityAVAX_call
        });
        let removeLiquidityAVAXSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountAVAXMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAXSupportingFeeOnTransferTokens',removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityAVAXSupportingFeeOnTransferTokens',removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityAVAXSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityAVAXSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityAVAXWithPermitParams = (params: IRemoveLiquidityAVAXWithPermitParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountAVAXMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermit_send = async (params: IRemoveLiquidityAVAXWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAXWithPermit',removeLiquidityAVAXWithPermitParams(params));
            return result;
        }
        let removeLiquidityAVAXWithPermit_call = async (params: IRemoveLiquidityAVAXWithPermitParams): Promise<{amountToken:BigNumber,amountAVAX:BigNumber}> => {
            let result = await this.call('removeLiquidityAVAXWithPermit',removeLiquidityAVAXWithPermitParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountAVAX: new BigNumber(result.amountAVAX)
            };
        }
        this.removeLiquidityAVAXWithPermit = Object.assign(removeLiquidityAVAXWithPermit_send, {
            call:removeLiquidityAVAXWithPermit_call
        });
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountAVAXMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens',removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens',removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params: IRemoveLiquidityWithPermitParams) => [params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return result;
        }
        let removeLiquidityWithPermit_call = async (params: IRemoveLiquidityWithPermitParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call:removeLiquidityWithPermit_call
        });
        let swapAVAXForExactTokensParams = (params: ISwapAVAXForExactTokensParams) => [Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline)];
        let swapAVAXForExactTokens_send = async (params: ISwapAVAXForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapAVAXForExactTokens',swapAVAXForExactTokensParams(params), {value:_value});
            return result;
        }
        let swapAVAXForExactTokens_call = async (params: ISwapAVAXForExactTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapAVAXForExactTokens',swapAVAXForExactTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapAVAXForExactTokens = Object.assign(swapAVAXForExactTokens_send, {
            call:swapAVAXForExactTokens_call
        });
        let swapExactAVAXForTokensParams = (params: ISwapExactAVAXForTokensParams) => [Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactAVAXForTokens_send = async (params: ISwapExactAVAXForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactAVAXForTokens',swapExactAVAXForTokensParams(params), {value:_value});
            return result;
        }
        let swapExactAVAXForTokens_call = async (params: ISwapExactAVAXForTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapExactAVAXForTokens',swapExactAVAXForTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactAVAXForTokens = Object.assign(swapExactAVAXForTokens_send, {
            call:swapExactAVAXForTokens_call
        });
        let swapExactAVAXForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactAVAXForTokensSupportingFeeOnTransferTokens',swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return result;
        }
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<void> => {
            let result = await this.call('swapExactAVAXForTokensSupportingFeeOnTransferTokens',swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return;
        }
        this.swapExactAVAXForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactAVAXForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactAVAXForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForAVAXParams = (params: ISwapExactTokensForAVAXParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForAVAX_send = async (params: ISwapExactTokensForAVAXParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForAVAX',swapExactTokensForAVAXParams(params));
            return result;
        }
        let swapExactTokensForAVAX_call = async (params: ISwapExactTokensForAVAXParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForAVAX',swapExactTokensForAVAXParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForAVAX = Object.assign(swapExactTokensForAVAX_send, {
            call:swapExactTokensForAVAX_call
        });
        let swapExactTokensForAVAXSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForAVAXSupportingFeeOnTransferTokens',swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForAVAXSupportingFeeOnTransferTokens',swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForAVAXSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForAVAXSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForAVAXSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactAVAXParams = (params: ISwapTokensForExactAVAXParams) => [Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)];
        let swapTokensForExactAVAX_send = async (params: ISwapTokensForExactAVAXParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactAVAX',swapTokensForExactAVAXParams(params));
            return result;
        }
        let swapTokensForExactAVAX_call = async (params: ISwapTokensForExactAVAXParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactAVAX',swapTokensForExactAVAXParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactAVAX = Object.assign(swapTokensForExactAVAX_send, {
            call:swapTokensForExactAVAX_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
    }
}