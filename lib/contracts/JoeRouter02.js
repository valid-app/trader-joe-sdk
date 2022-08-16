"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoeRouter02 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const JoeRouter02_json_1 = __importDefault(require("./JoeRouter02.json"));
class JoeRouter02 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, JoeRouter02_json_1.default.abi, JoeRouter02_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.factory, params.WAVAX]);
    }
    assign() {
        let WAVAX_call = async () => {
            let result = await this.call('WAVAX');
            return result;
        };
        this.WAVAX = WAVAX_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveIn), eth_wallet_1.Utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params) => {
            let result = await this.call('getAmountIn', getAmountInParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.reserveIn), eth_wallet_1.Utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.path];
        let getAmountsIn_call = async (params) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), params.path];
        let getAmountsOut_call = async (params) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let quoteParams = (params) => [eth_wallet_1.Utils.toString(params.amountA), eth_wallet_1.Utils.toString(params.reserveA), eth_wallet_1.Utils.toString(params.reserveB)];
        let quote_call = async (params) => {
            let result = await this.call('quote', quoteParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.quote = quote_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let addLiquidity_send = async (params) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params));
            return result;
        };
        let addLiquidity_call = async (params) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB),
                liquidity: new eth_wallet_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityAVAXParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.amountTokenDesired), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountAVAXMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let addLiquidityAVAX_send = async (params, _value) => {
            let result = await this.send('addLiquidityAVAX', addLiquidityAVAXParams(params), { value: _value });
            return result;
        };
        let addLiquidityAVAX_call = async (params, _value) => {
            let result = await this.call('addLiquidityAVAX', addLiquidityAVAXParams(params), { value: _value });
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountAVAX: new eth_wallet_1.BigNumber(result.amountAVAX),
                liquidity: new eth_wallet_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidityAVAX = Object.assign(addLiquidityAVAX_send, {
            call: addLiquidityAVAX_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidity_send = async (params) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params));
            return result;
        };
        let removeLiquidity_call = async (params) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let removeLiquidityAVAXParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountAVAXMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidityAVAX_send = async (params) => {
            let result = await this.send('removeLiquidityAVAX', removeLiquidityAVAXParams(params));
            return result;
        };
        let removeLiquidityAVAX_call = async (params) => {
            let result = await this.call('removeLiquidityAVAX', removeLiquidityAVAXParams(params));
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountAVAX: new eth_wallet_1.BigNumber(result.amountAVAX)
            };
        };
        this.removeLiquidityAVAX = Object.assign(removeLiquidityAVAX_send, {
            call: removeLiquidityAVAX_call
        });
        let removeLiquidityAVAXSupportingFeeOnTransferTokensParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountAVAXMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('removeLiquidityAVAXSupportingFeeOnTransferTokens', removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('removeLiquidityAVAXSupportingFeeOnTransferTokens', removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.removeLiquidityAVAXSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityAVAXSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityAVAXWithPermitParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountAVAXMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermit_send = async (params) => {
            let result = await this.send('removeLiquidityAVAXWithPermit', removeLiquidityAVAXWithPermitParams(params));
            return result;
        };
        let removeLiquidityAVAXWithPermit_call = async (params) => {
            let result = await this.call('removeLiquidityAVAXWithPermit', removeLiquidityAVAXWithPermitParams(params));
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountAVAX: new eth_wallet_1.BigNumber(result.amountAVAX)
            };
        };
        this.removeLiquidityAVAXWithPermit = Object.assign(removeLiquidityAVAXWithPermit_send, {
            call: removeLiquidityAVAXWithPermit_call
        });
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountAVAXMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens', removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens', removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params) => {
            let result = await this.send('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params));
            return result;
        };
        let removeLiquidityWithPermit_call = async (params) => {
            let result = await this.call('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call: removeLiquidityWithPermit_call
        });
        let swapAVAXForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapAVAXForExactTokens_send = async (params, _value) => {
            let result = await this.send('swapAVAXForExactTokens', swapAVAXForExactTokensParams(params), { value: _value });
            return result;
        };
        let swapAVAXForExactTokens_call = async (params, _value) => {
            let result = await this.call('swapAVAXForExactTokens', swapAVAXForExactTokensParams(params), { value: _value });
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapAVAXForExactTokens = Object.assign(swapAVAXForExactTokens_send, {
            call: swapAVAXForExactTokens_call
        });
        let swapExactAVAXForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactAVAXForTokens_send = async (params, _value) => {
            let result = await this.send('swapExactAVAXForTokens', swapExactAVAXForTokensParams(params), { value: _value });
            return result;
        };
        let swapExactAVAXForTokens_call = async (params, _value) => {
            let result = await this.call('swapExactAVAXForTokens', swapExactAVAXForTokensParams(params), { value: _value });
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactAVAXForTokens = Object.assign(swapExactAVAXForTokens_send, {
            call: swapExactAVAXForTokens_call
        });
        let swapExactAVAXForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_send = async (params, _value) => {
            let result = await this.send('swapExactAVAXForTokensSupportingFeeOnTransferTokens', swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return result;
        };
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_call = async (params, _value) => {
            let result = await this.call('swapExactAVAXForTokensSupportingFeeOnTransferTokens', swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return;
        };
        this.swapExactAVAXForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactAVAXForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactAVAXForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForAVAXParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForAVAX_send = async (params) => {
            let result = await this.send('swapExactTokensForAVAX', swapExactTokensForAVAXParams(params));
            return result;
        };
        let swapExactTokensForAVAX_call = async (params) => {
            let result = await this.call('swapExactTokensForAVAX', swapExactTokensForAVAXParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactTokensForAVAX = Object.assign(swapExactTokensForAVAX_send, {
            call: swapExactTokensForAVAX_call
        });
        let swapExactTokensForAVAXSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForAVAXSupportingFeeOnTransferTokens', swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForAVAXSupportingFeeOnTransferTokens', swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params));
            return;
        };
        this.swapExactTokensForAVAXSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForAVAXSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForAVAXSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result;
        };
        let swapExactTokensForTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactAVAXParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapTokensForExactAVAX_send = async (params) => {
            let result = await this.send('swapTokensForExactAVAX', swapTokensForExactAVAXParams(params));
            return result;
        };
        let swapTokensForExactAVAX_call = async (params) => {
            let result = await this.call('swapTokensForExactAVAX', swapTokensForExactAVAXParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapTokensForExactAVAX = Object.assign(swapTokensForExactAVAX_send, {
            call: swapTokensForExactAVAX_call
        });
        let swapTokensForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result;
        };
        let swapTokensForExactTokens_call = async (params) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.JoeRouter02 = JoeRouter02;
