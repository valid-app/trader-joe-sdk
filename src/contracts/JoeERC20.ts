import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./JoeERC20.json";

export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {spender:string;value:number|BigNumber}
export interface IPermitParams {owner:string;spender:string;value:number|BigNumber;deadline:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface ITransferParams {to:string;value:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;value:number|BigNumber}
export class JoeERC20 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): JoeERC20.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): JoeERC20.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): JoeERC20.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): JoeERC20.TransferEvent{
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
    decimals: {
        (): Promise<BigNumber>;
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
    symbol: {
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
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
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
export module JoeERC20{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}