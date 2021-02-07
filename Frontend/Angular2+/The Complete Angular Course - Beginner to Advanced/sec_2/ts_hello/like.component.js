"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCnt, _isSel) {
        this._likeCnt = _likeCnt;
        this._isSel = _isSel;
    }
    LikeComponent.prototype.onClick = function () {
        this._likeCnt += (this._isSel) ? 1 : -1;
        this._isSel = !this._isSel;
    };
    Object.defineProperty(LikeComponent.prototype, "likeCnt", {
        get: function () {
            return this._likeCnt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSel", {
        get: function () {
            return this._isSel;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
