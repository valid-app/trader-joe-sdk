import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./JoeFactory.json";

export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export class JoeFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(feeToSetter:string): Promise<string>{
        return this.__deploy([feeToSetter]);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): JoeFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): JoeFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new BigNumber(result[3]),
            _event: event
        };
    }
    allPairs: {
        (param1:number|BigNumber): Promise<string>;
    }
    allPairsLength: {
        (): Promise<BigNumber>;
    }
    createPair: {
        (params: ICreatePairParams): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams) => Promise<string>;
    }
    feeTo: {
        (): Promise<string>;
    }
    feeToSetter: {
        (): Promise<string>;
    }
    getPair: {
        (params: IGetPairParams): Promise<string>;
    }
    migrator: {
        (): Promise<string>;
    }
    pairCodeHash: {
        (): Promise<string>;
    }
    setFeeTo: {
        (feeTo:string): Promise<TransactionReceipt>;
        call: (feeTo:string) => Promise<void>;
    }
    setFeeToSetter: {
        (feeToSetter:string): Promise<TransactionReceipt>;
        call: (feeToSetter:string) => Promise<void>;
    }
    setMigrator: {
        (migrator:string): Promise<TransactionReceipt>;
        call: (migrator:string) => Promise<void>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('allPairs',[Utils.toString(param1)]);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('allPairsLength');
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let feeTo_call = async (): Promise<string> => {
            let result = await this.call('feeTo');
            return result;
        }
        this.feeTo = feeTo_call
        let feeToSetter_call = async (): Promise<string> => {
            let result = await this.call('feeToSetter');
            return result;
        }
        this.feeToSetter = feeToSetter_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params));
            return result;
        }
        this.getPair = getPair_call
        let migrator_call = async (): Promise<string> => {
            let result = await this.call('migrator');
            return result;
        }
        this.migrator = migrator_call
        let pairCodeHash_call = async (): Promise<string> => {
            let result = await this.call('pairCodeHash');
            return result;
        }
        this.pairCodeHash = pairCodeHash_call
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params));
            return result;
        }
        let createPair_call = async (params: ICreatePairParams): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params));
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
        let setFeeTo_send = async (feeTo:string): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeTo',[feeTo]);
            return result;
        }
        let setFeeTo_call = async (feeTo:string): Promise<void> => {
            let result = await this.call('setFeeTo',[feeTo]);
            return;
        }
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call:setFeeTo_call
        });
        let setFeeToSetter_send = async (feeToSetter:string): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeToSetter',[feeToSetter]);
            return result;
        }
        let setFeeToSetter_call = async (feeToSetter:string): Promise<void> => {
            let result = await this.call('setFeeToSetter',[feeToSetter]);
            return;
        }
        this.setFeeToSetter = Object.assign(setFeeToSetter_send, {
            call:setFeeToSetter_call
        });
        let setMigrator_send = async (migrator:string): Promise<TransactionReceipt> => {
            let result = await this.send('setMigrator',[migrator]);
            return result;
        }
        let setMigrator_call = async (migrator:string): Promise<void> => {
            let result = await this.call('setMigrator',[migrator]);
            return;
        }
        this.setMigrator = Object.assign(setMigrator_send, {
            call:setMigrator_call
        });
    }
}
export module JoeFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,param4:BigNumber,_event:Event}
}