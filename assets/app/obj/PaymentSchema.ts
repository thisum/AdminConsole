/**
 * Created by Thisum on 8/17/2016.
 */

export class PaymentSchema{

    constructor(public service: string,
                public type: string,
                public name?: string
    ) {}
}