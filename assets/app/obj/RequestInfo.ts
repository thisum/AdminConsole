/**
 * Created by thisum on 2/13/2017.
 */

export class RequestInfo{

    private _remarks: string[] = [];

    constructor(
        public user: string,
        public image: string,
        public reqType: string,
        public response: string,
        public reqTime: string,
        public resTime: string
    ){}

    public _getRemarks(): string[] {
        return this._remarks;
    }

    public _setRemarks(remarks: string[]){
        this._remarks = remarks;
    }
}