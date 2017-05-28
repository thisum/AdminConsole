/**
 * Created by Thisum on 8/24/2016.
 */


export class Device{

    constructor(
        public email: string,
        public userId: string,
        public deviceId: string,
        public serialNo: string,
        public lastConnection: Date,
        public enable: boolean,
        public deviceName?: string
    ){}

}