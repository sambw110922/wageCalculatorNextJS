

import Wages from "./wages";
import TaxCalculator from "./taxCalculator";


//  The main wage calculator.
//  operation type is if to either multiply or divide
export default function WageCalculator(hoursWorked:number, ammount:number, daysWorked:number, operationType:boolean):Wages {

    //  The number of hours to work.
    var hoursWorked:number = hoursWorked;

    //  The wages to be produced.
    var wagesProduced:Wages;

    //  Calculate the daily.
    const calculateDaily = (hoursWorked: number, amount: number, operationType: boolean): number => {

        var totalDaily: number = 0;

        if(operationType == true){
            totalDaily = amount * hoursWorked;
        } else {
            totalDaily = amount / hoursWorked;
        }

        return totalDaily;

    }

    //  Calculate the weekends.
    const calculateWeekends = (amount: number, operationType: boolean): number => {

        //  2 days in a weekend.
        const weekends: number = 2;

        var weekendTotal: number = 0;

        if(operationType == true){
            weekendTotal = ammount * weekends;
        } else {
            weekendTotal = amount / weekends;
        }

        return weekendTotal;

    }

    //  Calculate the full week (mon-fri including weekends)
    const calculateFullWeek = (amount: number, operationType: boolean): number => {

        //  Full working week
        const fullWeek: number = 7;

        var fullWeekTotal = 0;

        if(operationType == true){
            fullWeekTotal = amount * fullWeek;
        } else {
            fullWeekTotal = amount / fullWeek;
        }

        return fullWeekTotal;

    }

    //  Calculate the working week (mon-fri)
    const calculateWorkingWeek = (amount: number, operationType:boolean): number => {

        //  A working week, mon-fri
        const workingWeek: number = 5;

        var workingWeekTotal = 0;

        if(operationType == true){
            workingWeekTotal = amount * workingWeek;
        } else {
            workingWeekTotal = amount / workingWeek;
        }

        return workingWeekTotal;

    }

    //  calculate different working days
    const calculateDifferentWorkingDays = (amount: number, workingDays: number, operationType: boolean): number => {

        var differentTotal = 0;

        if(operationType == true){
            differentTotal = amount * workingDays;
        } else {
            differentTotal = amount / workingDays;
        }

        return differentTotal;

    }

    //  Calculate monthly
    const calculateMonthly = (amount: number, operationType: boolean): number => {

        //  Number of weeks in a month, typically 4 
        const weeksInMonth: number = 4;

        var monthlyTotal = 0;

        if(operationType == true){
            monthlyTotal = amount * weeksInMonth;
        } else {
            monthlyTotal = amount / weeksInMonth;
        }

        return monthlyTotal;

    }

    //  Calculte the year.
    //  OperationType: true is calculating upwards, false is calcuating downwards.
    const calculateYear = (amount:number, operationType:boolean): number => {

        //  Months in a year, 12
        const monthsInYear: number = 12;

        var totalYear: number = 0;

        if(operationType == true){
            totalYear = amount * monthsInYear;
        } else {
            totalYear = amount / monthsInYear;
        }

        return totalYear;

    }

    //  New instance of wages.
    var wage1 = new Wages();

    switch(daysWorked){

        //  Full working week including weekends
        case 2:

            if(operationType == true){

                //  calculating up
                wage1.daily = calculateDaily(hoursWorked, ammount, true);
                wage1.weekly = calculateFullWeek(wage1.daily, true);
                wage1.monthly = calculateMonthly(wage1.weekly, true);
                wage1.annual = calculateYear(wage1.monthly, true);

            } else {

                //  caluclating down
                wage1.annual = ammount;
                wage1.monthly = calculateYear(wage1.annual, false);
                wage1.weekly = calculateMonthly(wage1.monthly, false);
                wage1.daily = calculateFullWeek(wage1.weekly, false);

            }

            break;

        //  Weekends only
        case 3:

            if(operationType == true){

                //  calculating up
                wage1.daily = calculateDaily(hoursWorked, ammount, true);
                wage1.weekly = calculateWeekends(wage1.daily, true);
                wage1.monthly = calculateMonthly(wage1.weekly, true);
                wage1.annual = calculateYear(wage1.monthly, true);

            } else {

                //  caluclating down
                wage1.annual = ammount;
                wage1.monthly = calculateYear(wage1.annual, false);
                wage1.weekly = calculateMonthly(wage1.monthly, false);
                wage1.daily = calculateWeekends(wage1.weekly, false);
                
            }

            break;

        //  Only certain days provided by user
        case 4:

            if(operationType == true){

                wage1.daily = calculateDaily(ammount, hoursWorked, true);
                wage1.weekly = calculateDifferentWorkingDays(wage1.daily, daysWorked, true);
                wage1.monthly = calculateMonthly(wage1.weekly, true);
                wage1.annual = calculateYear(wage1.monthly, true);



            } else {

                //  caluclating down
                wage1.annual = ammount;
                wage1.monthly = calculateYear(wage1.annual, false);
                wage1.weekly = calculateMonthly(wage1.monthly, false);
                wage1.daily = calculateDifferentWorkingDays(wage1.weekly, daysWorked, false);

            }

            break;

        //  Will default to a working week (mon-fri)
        default:

            if(operationType == true){

                //  calculating up
                wage1.daily = calculateDaily(hoursWorked, ammount, true);
                wage1.weekly = calculateWorkingWeek(wage1.daily, true);
                wage1.monthly = calculateMonthly(wage1.weekly, true);
                wage1.annual = calculateYear(wage1.monthly, true);

            } else {

                //  caluclating down
                wage1.annual = ammount;
                wage1.monthly = calculateYear(wage1.annual, false);
                wage1.weekly = calculateMonthly(wage1.monthly, false);
                wage1.daily = calculateWorkingWeek(wage1.weekly, false);
            }

            break;

    }

    return wage1;

}