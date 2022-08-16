import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./JoePair.json";

export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {spender:string;value:number|BigNumber}
export interface IInitializeParams {token0:string;token1:string}
export interface IPermitParams {owner:string;spender:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ISwapParams {amount0Out:number|BigNumber;amount1Out:number|BigNumber;to:string;data:string}
export interface ITransferParams {to:string;value:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;value:number|BigNumber}
export class JoePair extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): JoePair.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): JoePair.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseBurnEvent(receipt: TransactionReceipt): JoePair.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): JoePair.BurnEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseMintEvent(receipt: TransactionReceipt): JoePair.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): JoePair.MintEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new BigNumber(result.amount0),
            amount1: new BigNumber(result.amount1),
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): JoePair.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): JoePair.SwapEvent{
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new BigNumber(result.amount0In),
            amount1In: new BigNumber(result.amount1In),
            amount0Out: new BigNumber(result.amount0Out),
            amount1Out: new BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt: TransactionReceipt): JoePair.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): JoePair.SyncEvent{
        let result = event.data;
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): JoePair.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): JoePair.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    DOMAIN_SEPARATOR: {
        (): Promise<string>;
    }
    MINIMUM_LIQUIDITY: {
        (): Promise<BigNumber>;
    }
    PERMIT_TYPEHASH: {
        (): Promise<string>;
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    }
    balanceOf: {
        (param1:string): Promise<BigNumber>;
    }
    burn: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<{amount0:BigNumber,amount1:BigNumber}>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    factory: {
        (): Promise<string>;
    }
    getReserves: {
        (): Promise<{_reserve0:BigNumber,_reserve1:BigNumber,_blockTimestampLast:BigNumber}>;
    }
    initialize: {
        (params: IInitializeParams): Promise<TransactionReceipt>;
        call: (params: IInitializeParams) => Promise<void>;
    }
    kLast: {
        (): Promise<BigNumber>;
    }
    mint: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<BigNumber>;
    }
    name: {
        (): Promise<string>;
    }
    nonces: {
        (param1:string): Promise<BigNumber>;
    }
    permit: {
        (params: IPermitParams): Promise<TransactionReceipt>;
        call: (params: IPermitParams) => Promise<void>;
    }
    price0CumulativeLast: {
        (): Promise<BigNumber>;
    }
    price1CumulativeLast: {
        (): Promise<BigNumber>;
    }
    skim: {
        (to:string): Promise<TransactionReceipt>;
        call: (to:string) => Promise<void>;
    }
    swap: {
        (params: ISwapParams): Promise<TransactionReceipt>;
        call: (params: ISwapParams) => Promise<void>;
    }
    symbol: {
        (): Promise<string>;
    }
    sync: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    token0: {
        (): Promise<string>;
    }
    token1: {
        (): Promise<string>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    private assign(){
        let DOMAIN_SEPARATOR_call = async (): Promise<string> => {
            let result = await this.call('DOMAIN_SEPARATOR');
            return result;
        }
        this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call
        let MINIMUM_LIQUIDITY_call = async (): Promise<BigNumber> => {
            let result = await this.call('MINIMUM_LIQUIDITY');
            return new BigNumber(result);
        }
        this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call
        let PERMIT_TYPEHASH_call = async (): Promise<string> => {
            let result = await this.call('PERMIT_TYPEHASH');
            return result;
        }
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call
        let allowanceParams = (params: IAllowanceParams) => [params.param1,params.param2];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[param1]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getReserves_call = async (): Promise<{_reserve0:BigNumber,_reserve1:BigNumber,_blockTimestampLast:BigNumber}> => {
            let result = await this.call('getReserves');
            return {
                _reserve0: new BigNumber(result._reserve0),
                _reserve1: new BigNumber(result._reserve1),
                _blockTimestampLast: new BigNumber(result._blockTimestampLast)
            };
        }
        this.getReserves = getReserves_call
        let kLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('kLast');
            return new BigNumber(result);
        }
        this.kLast = kLast_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let nonces_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('nonces',[param1]);
            return new BigNumber(result);
        }
        this.nonces = nonces_call
        let price0CumulativeLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('price0CumulativeLast');
            return new BigNumber(result);
        }
        this.price0CumulativeLast = price0CumulativeLast_call
        let price1CumulativeLast_call = async (): Promise<BigNumber> => {
            let result = await this.call('price1CumulativeLast');
            return new BigNumber(result);
        }
        this.price1CumulativeLast = price1CumulativeLast_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let token0_call = async (): Promise<string> => {
            let result = await this.call('token0');
            return result;
        }
        this.token0 = token0_call
        let token1_call = async (): Promise<string> => {
            let result = await this.call('token1');
            return result;
        }
        this.token1 = token1_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.spender,Utils.toString(params.value)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params));
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burn_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('burn',[to]);
            return result;
        }
        let burn_call = async (to:string): Promise<{amount0:BigNumber,amount1:BigNumber}> => {
            let result = await this.call('burn',[to]);
            return {
                amount0: new BigNumber(result.amount0),
                amount1: new BigNumber(result.amount1)
            };
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let initializeParams = (params: IInitializeParams) => [params.token0,params.token1];
        let initialize_send = async (params: IInitializeParams): Promise<TransactionReceipt> => {
            let result = await this.send('initialize',initializeParams(params));
            return result;
        }
        let initialize_call = async (params: IInitializeParams): Promise<void> => {
            let result = await this.call('initialize',initializeParams(params));
            return;
        }
        this.initialize = Object.assign(initialize_send, {
            call:initialize_call
        });
        let mint_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[to]);
            return result;
        }
        let mint_call = async (to:string): Promise<BigNumber> => {
            let result = await this.call('mint',[to]);
            return new BigNumber(result);
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let permitParams = (params: IPermitParams) => [params.owner,params.spender,Utils.toString(params.value),Utils.toString(params.deadline),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let permit_send = async (params: IPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('permit',permitParams(params));
            return result;
        }
        let permit_call = async (params: IPermitParams): Promise<void> => {
            let result = await this.call('permit',permitParams(params));
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let skim_send = async (to:string): Promise<TransactionReceipt> => {
            let result = await this.send('skim',[to]);
            return result;
        }
        let skim_call = async (to:string): Promise<void> => {
            let result = await this.call('skim',[to]);
            return;
        }
        this.skim = Object.assign(skim_send, {
            call:skim_call
        });
        let swapParams = (params: ISwapParams) => [Utils.toString(params.amount0Out),Utils.toString(params.amount1Out),params.to,Utils.stringToBytes(params.data)];
        let swap_send = async (params: ISwapParams): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params));
            return result;
        }
        let swap_call = async (params: ISwapParams): Promise<void> => {
            let result = await this.call('swap',swapParams(params));
            return;
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let sync_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('sync');
            return result;
        }
        let sync_call = async (): Promise<void> => {
            let result = await this.call('sync');
            return;
        }
        this.sync = Object.assign(sync_send, {
            call:sync_call
        });
        let transferParams = (params: ITransferParams) => [params.to,Utils.toString(params.value)];
        let transfer_send = async (params: ITransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params));
            return result;
        }
        let transfer_call = async (params: ITransferParams): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params));
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,Utils.toString(params.value)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
    }
}
export module JoePair{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface BurnEvent {sender:string,amount0:BigNumber,amount1:BigNumber,to:string,_event:Event}
    export interface MintEvent {sender:string,amount0:BigNumber,amount1:BigNumber,_event:Event}
    export interface SwapEvent {sender:string,amount0In:BigNumber,amount1In:BigNumber,amount0Out:BigNumber,amount1Out:BigNumber,to:string,_event:Event}
    export interface SyncEvent {reserve0:BigNumber,reserve1:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}