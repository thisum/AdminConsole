/**
 * Created by Thisum on 8/16/2016.
 */


export class UsageInfo {

    constructor(public reqType:string,
                public noOfReq:number,
                public noOfUsers:number,
                public correctAns:number,
                public wrongAns:number,
                public noOfRes:number,
                public API?:string) {
    }
}