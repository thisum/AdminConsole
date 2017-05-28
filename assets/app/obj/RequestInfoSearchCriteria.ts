/**
 * Created by thisum on 2/13/2017.
 */

export class RequestInfoSearchCriteria{

    constructor(
        public reqType?: string,
        public fromDate?: number,
        public toDate?: number,
        public reqUser?: string,
        public api?: string
    ){}

}