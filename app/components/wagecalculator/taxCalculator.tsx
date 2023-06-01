
//  Calculates the tax of an ammount
export default function TaxCalculator (wage: number, rate: number) : number {

    //  The calculation
    var res: number = 0;


    if(wage > 0  && rate > 0){
        
       let div: number = rate / 100;
       res = div * wage;

    }   

    return res;

}