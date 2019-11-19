
export class LikeComponent {

    constructor(private _likeCnt: number, private _isSel: boolean) {

    }

    onClick() {
        this._likeCnt += (this._isSel) ? 1 : -1;
        this._isSel = !this._isSel;
    }

    get likeCnt() {
        return this._likeCnt;
    }

    get isSel() {
        return this._isSel;
    }

}
