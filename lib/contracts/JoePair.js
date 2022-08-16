"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoePair = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const JoePair_json_1 = __importDefault(require("./JoePair.json"));
class JoePair extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, JoePair_json_1.default.abi, JoePair_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1),
            to: result.to,
            _event: event
        };
    }
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0: new eth_wallet_1.BigNumber(result.amount0),
            amount1: new eth_wallet_1.BigNumber(result.amount1),
            _event: event
        };
    }
    parseSwapEvent(receipt) {
        return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event) {
        let result = event.data;
        return {
            sender: result.sender,
            amount0In: new eth_wallet_1.BigNumber(result.amount0In),
            amount1In: new eth_wallet_1.BigNumber(result.amount1In),
            amount0Out: new eth_wallet_1.BigNumber(result.amount0Out),
            amount1Out: new eth_wallet_1.BigNumber(result.amount1Out),
            to: result.to,
            _event: event
        };
    }
    parseSyncEvent(receipt) {
        return this.parseEvents(receipt, "Sync").map(e => this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event) {
        let result = event.data;
        return {
            reserve0: new eth_wallet_1.BigNumber(result.reserve0),
            reserve1: new eth_wallet_1.BigNumber(result.reserve1),
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    assign() {
        let DOMAIN_SEPARATOR_call = async () => {
            let result = await this.call('DOMAIN_SEPARATOR');
            return result;
        };
        this.DOMAIN_SEPARATOR = DOMAIN_SEPARATOR_call;
        let MINIMUM_LIQUIDITY_call = async () => {
            let result = await this.call('MINIMUM_LIQUIDITY');
            return new eth_wallet_1.BigNumber(result);
        };
        this.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY_call;
        let PERMIT_TYPEHASH_call = async () => {
            let result = await this.call('PERMIT_TYPEHASH');
            return result;
        };
        this.PERMIT_TYPEHASH = PERMIT_TYPEHASH_call;
        let allowanceParams = (params) => [params.param1, params.param2];
        let allowance_call = async (params) => {
            let result = await this.call('allowance', allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (param1) => {
            let result = await this.call('balanceOf', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let getReserves_call = async () => {
            let result = await this.call('getReserves');
            return {
                _reserve0: new eth_wallet_1.BigNumber(result._reserve0),
                _reserve1: new eth_wallet_1.BigNumber(result._reserve1),
                _blockTimestampLast: new eth_wallet_1.BigNumber(result._blockTimestampLast)
            };
        };
        this.getReserves = getReserves_call;
        let kLast_call = async () => {
            let result = await this.call('kLast');
            return new eth_wallet_1.BigNumber(result);
        };
        this.kLast = kLast_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let nonces_call = async (param1) => {
            let result = await this.call('nonces', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.nonces = nonces_call;
        let price0CumulativeLast_call = async () => {
            let result = await this.call('price0CumulativeLast');
            return new eth_wallet_1.BigNumber(result);
        };
        this.price0CumulativeLast = price0CumulativeLast_call;
        let price1CumulativeLast_call = async () => {
            let result = await this.call('price1CumulativeLast');
            return new eth_wallet_1.BigNumber(result);
        };
        this.price1CumulativeLast = price1CumulativeLast_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let token0_call = async () => {
            let result = await this.call('token0');
            return result;
        };
        this.token0 = token0_call;
        let token1_call = async () => {
            let result = await this.call('token1');
            return result;
        };
        this.token1 = token1_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.value)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let burn_send = async (to) => {
            let result = await this.send('burn', [to]);
            return result;
        };
        let burn_call = async (to) => {
            let result = await this.call('burn', [to]);
            return {
                amount0: new eth_wallet_1.BigNumber(result.amount0),
                amount1: new eth_wallet_1.BigNumber(result.amount1)
            };
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
        });
        let initializeParams = (params) => [params.token0, params.token1];
        let initialize_send = async (params) => {
            let result = await this.send('initialize', initializeParams(params));
            return result;
        };
        let initialize_call = async (params) => {
            let result = await this.call('initialize', initializeParams(params));
            return;
        };
        this.initialize = Object.assign(initialize_send, {
            call: initialize_call
        });
        let mint_send = async (to) => {
            let result = await this.send('mint', [to]);
            return result;
        };
        let mint_call = async (to) => {
            let result = await this.call('mint', [to]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let permitParams = (params) => [params.owner, params.spender, eth_wallet_1.Utils.toString(params.value), eth_wallet_1.Utils.toString(params.deadline), eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let permit_send = async (params) => {
            let result = await this.send('permit', permitParams(params));
            return result;
        };
        let permit_call = async (params) => {
            let result = await this.call('permit', permitParams(params));
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let skim_send = async (to) => {
            let result = await this.send('skim', [to]);
            return result;
        };
        let skim_call = async (to) => {
            let result = await this.call('skim', [to]);
            return;
        };
        this.skim = Object.assign(skim_send, {
            call: skim_call
        });
        let swapParams = (params) => [eth_wallet_1.Utils.toString(params.amount0Out), eth_wallet_1.Utils.toString(params.amount1Out), params.to, eth_wallet_1.Utils.stringToBytes(params.data)];
        let swap_send = async (params) => {
            let result = await this.send('swap', swapParams(params));
            return result;
        };
        let swap_call = async (params) => {
            let result = await this.call('swap', swapParams(params));
            return;
        };
        this.swap = Object.assign(swap_send, {
            call: swap_call
        });
        let sync_send = async () => {
            let result = await this.send('sync');
            return result;
        };
        let sync_call = async () => {
            let result = await this.call('sync');
            return;
        };
        this.sync = Object.assign(sync_send, {
            call: sync_call
        });
        let transferParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.value)];
        let transfer_send = async (params) => {
            let result = await this.send('transfer', transferParams(params));
            return result;
        };
        let transfer_call = async (params) => {
            let result = await this.call('transfer', transferParams(params));
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.value)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
    }
}
exports.JoePair = JoePair;
