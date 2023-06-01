
interface IWages {
    daily:number,
    weekly:number,
    monthly:number,
    annual:number
}

//  An object to store the wage results
export default class Wages implements IWages {

    public daily: number;
    public weekly: number;
    public monthly: number;
    public annual: number;

    constructor(){
        this.daily = 0;
        this.weekly = 0;
        this.monthly = 0;
        this.annual = 0;
    }

}