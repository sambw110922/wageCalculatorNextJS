
'use client';

import { useState } from "react";

import DaysOfWeek from "@/app/components/daysofweek/daysofweek";
import TaxExplainer from "@/app/components/taxexplainer/taxExplainer";
import TaxCalculator from "@/app/components/wagecalculator/taxCalculator";
import WageCalculator from "@/app/components/wagecalculator/wageCalculator";
import Wages from "@/app/components/wagecalculator/wages";

//  This is the one form to rule them all.
export default function MainForm (props: any) {

    //  Number of hours worked
    var [ hoursWorked, setHoursWorked] = useState(0);

    //  The annual salary as provided by the user
    var [ annualSalary, setAnnualSalary ] = useState(0);

    //  The salary as a month
    var [ monthlySalary, setMonthlySalary ] = useState(0);

    //  The salary as weekly
    var [ weeklySalary, setWeeklySalary ] = useState(0);

    //  The salary as daily
    var [ dailySalary, setDailySalary ] = useState(0);

    //  The annual tax.
    var [ annualTax, setAnnualTax ] = useState(0);

    //  The monthly tax.
    var [ monthlyTax, setMonthlyTax ] = useState(0);

    //  The weekly tax.
    var [ weeklyTax, setWeeklyTax ] = useState(0);

    //  The daily tax.
    var [ dailyTax, setDailyTax ] = useState(0);

    //  The income tax rate
    var [ incomeTaxRate, setIncTaxRate ] = useState(0);

    //  The user only works on certain days of the week.
    var [ differentDays, setDifferentDays ] = useState(false);

    //  Show the explainer option for the tax.
    var [ taxExplainer, setTaxExplainer ] = useState(false);

    //  How many days that the user works for
    //  1 = working week mon-fri
    //  2 = week plus weekends
    //  3 = weekendsd only
    //  4 = only certain days
    var [ workLength, setWorkLength ] = useState(1);

     //  if only certain days, the number of days that the user works for
     var [ noDays, setNoDays ] = useState(0);

    //  Deduct the income tax from the results or not
    var [ deductTaxOption, setDeductTaxOption ] = useState(false);

    //  Changes the number of days user selected
    const changeDays = (daysSelected: number) => {

        setNoDays(daysSelected);

    }

    //  Displays the tax if "deduct tax" is not checked
    const displayTaxResult = (theLabel:string, tax:number, wage: number) => {

        if(deductTaxOption == false){
            
            return (
                <div>
                    <label>{ theLabel } wage:</label>
                    <p>£ { wage }</p>
                    <label>{ theLabel } tax:</label>
                    <p>£{ tax } </p>
                </div>
            );

        } else {

            return (
                <div>
                    <label>{ theLabel } wage:</label>
                    <p>£ { wage - tax }</p>
                    <label>Tax deducted:</label>
                    <p>£{ tax } </p>
                </div>
            );

        }

    }

    //  Display the tax explainer.
    const displayTaxExplainer = () => {

        if(taxExplainer == true){

            return (
                <TaxExplainer
                    closeMe = {
                        ()=>{
                            setTaxExplainer(false);
                        }
                    }
                ></TaxExplainer>
            );

        }
        
    }

    //  If different days is on, then return the week panel.
    const differentDaySelector = () => {

        if(differentDays == true){

            return (
                <DaysOfWeek selectDays = { changeDays }></DaysOfWeek>
            );

        }


    }

    //  The handler for the annual form.
    const myFormHandler = (e: React.FormEvent<HTMLFormElement>) : void => {

        e.preventDefault();

        window.alert(props.formType);

        let txtHoursWorked: number = e.target.txtHours.value;
        let txtSalary: number = e.target.txtSalary.value;
        let txtTaxrate: number = e.target.txtIncomeTaxRate.value;
        
        if(e.target.chkDeduct.checked == true){
            setDeductTaxOption(true);
        } else {
            setDeductTaxOption(false);
        }

        //  false is default
        //  True = is annual 
        //  false = is hourly
        let theFormType: boolean = false;

        if(props.formType == "annual"){
            theFormType = false;
        } 

        if(props.formType == "hourly"){
            theFormType = true;
        }

        
        var results: Wages = WageCalculator(txtHoursWorked, txtSalary, noDays, theFormType)
        
        setAnnualSalary(results.annual);
        setMonthlySalary(results.monthly);
        setWeeklySalary(results.weekly);
        setDailySalary(results.daily);

        setIncTaxRate(txtTaxrate);

    }

    //  Displays the annual form.
    const displayAnnualForm = () => {

        return (

            <form className="flex flex-col" onSubmit={ myFormHandler }>

                <h3 className="text-xl">The form.</h3>
                <p className="text-base">Enter your annual salary, tax rate and number of hours worked.</p>

                <label className="text-base">Hours worked per day:</label>
                <input name="txtHours" type="number" min="0" required  className="shadow border-2"/>

                <label className="text-base">Annual salary:</label>
                <input name="txtSalary" type="number" min="0" step="0.1" required className="shadow border-2" />

                <div className="flex flex-col">

                    <label className="text-base">Income tax rate:</label>

                    <input name="txtIncomeTaxRate" type="number" required min="0" step="0.1" className="shadow border-2"  />
                    
                    <button id="btnTaxRateExplainer" type="button" onClick={ () => { setTaxExplainer(true); } } className="rounded hover:bg-white hover:border-2 text-base text-white hover:text-black w-8 hover:border-blue-500 bg-blue-500 m-2" >?</button>
                    <div>
                        {
                            displayTaxExplainer()
                        }
                    </div>

                </div>

                <div className="flex flex-col m-2">

                    <h4>How many days do you work?</h4>
                    <div>
                        <input type="radio" name="rdoDays" value="1" onClick={ () => {
                            setDifferentDays(false);
                        } } />
                        <label className="m-2 text-base">Full working week, monday-friday</label>
                    </div>
                    <div>
                        <input type="radio" name="rdoDays" value="2" onClick={ () => {
                            setDifferentDays(false);
                        } }/>
                        <label className="m-2 text-base">Full working week, including weekends</label>
                    </div>
                    <div>
                        <input type="radio" name="rdoDays" value="3" onClick={ () => {
                            setDifferentDays(false);
                        } } />
                        <label className="m-2 text-base">Only weekends</label>
                    </div>
                    <div>
                        <input type="radio" onClick={ ()=> {
                            setDifferentDays(true);
                        } } name="rdoDays" value="4" />
                        <label className="m-2 text-base">A few days per week</label>
                    </div>
                    <div>
                        {
                            differentDaySelector()
                        }
                    </div>
                </div>

                <div className="flex flex-col">
                    <label>Deduct tax rate from results?</label>
                    <input type="checkbox" name="chkDeduct" value="yes" />
                </div>

                <div>
                    <input type="submit" className="bg-white border-2 border-blue-500 hover:bg-blue-700 hover:text-white text-slate text-bold p-2 rounded m-2" value="Submit"/>
                    <input type="reset" className="bg-white border-2 border-blue-500 hover:bg-blue-700 hover:text-white text-slate text-bold p-2 rounded m-2" value="Reset"/> 
                </div>

            </form>
            
        );

    }

    //  Displays the hourly form.
    const displayHourlyForm = () => {

        return (

            <form className="flex flex-col" onSubmit={ myFormHandler }>

                <h3 className="text-xl">The form.</h3>

                <p className="text-base">Enter your hourly rate, number of hours worked, what days you work and the tax rate.</p>

                <label>Hours worked per day:</label>
                <input name="txtHours" type="number" min="0" required  className="shadow border-2" />

                <label>Hourly wage:</label>
                <input name="txtSalary" type="number" min="0" step="0.1" required className="shadow border-2" />

                <div className="flex flex-col">

                    <label className="text-base">Income tax rate:</label>

                    <input name="txtIncomeTaxRate" type="number" required min="0" step="0.1" className="shadow border-2"  />
                    
                    <button id="btnTaxRateExplainer" type="button" onClick={ () => { setTaxExplainer(true); } } className="rounded hover:bg-white hover:border-2 text-base text-white hover:text-black w-8 hover:border-blue-500 bg-blue-500 m-2" >?</button>
                    <div>
                        {
                            displayTaxExplainer()
                        }
                    </div>

                </div>

                <div className="flex flex-col m-2">

                    <h4>How many days do you work?</h4>
                    <div>
                        <input type="radio" name="rdoDays" value="1" onClick={ () => {
                            setDifferentDays(false);
                        } } />
                        <label className="m-2 text-base">Full working week, monday-friday</label>
                    </div>
                    <div>
                        <input type="radio" name="rdoDays" value="2" onClick={ () => {
                            setDifferentDays(false);
                        } }/>
                        <label className="m-2 text-base">Full working week, including weekends</label>
                    </div>
                    <div>
                        <input type="radio" name="rdoDays" value="3" onClick={ () => {
                            setDifferentDays(false);
                        } } />
                        <label className="m-2 text-base">Only weekends</label>
                    </div>
                    <div>
                        <input type="radio" onClick={ ()=> {
                            setDifferentDays(true);
                        } } name="rdoDays" value="4" />
                        <label className="m-2 text-base">A few days per week</label>
                    </div>
                    <div>
                        {
                            differentDaySelector()
                        }
                    </div>
                </div>

                <div className="flex flex-col">
                    <label>Deduct tax rate from results?</label>
                    <input type="checkbox" name="chkDeduct" value="yes" />
                </div>

                <div>
                    <input type="submit" className="bg-white border-2 border-blue-500 hover:bg-blue-700 hover:text-white text-slate text-bold p-2 rounded m-2" value="Submit"/>
                    <input type="reset" className="bg-white border-2 border-blue-500 hover:bg-blue-700 hover:text-white text-slate text-bold p-2 rounded m-2" value="Reset"/> 
                </div>

            </form>

        );

    }

    //  Displays the appropriate form depending on the formType props
    const checkFormType = () => {

        if(props.formType == "hourly") {
            return displayHourlyForm();
        } 

        if(props.formType == "annual"){
            return displayAnnualForm();
        }

    }

    //  Change the title according to page.
    const alterTitle = () => {

        let theTitle = "Default title";

        if(props.formType == "hourly"){
            theTitle = "Hourly Wage Calculations";
        } 

        if(props.formType == "annual"){
            theTitle = "Annual Salary Breakdown";
        }

        return theTitle;

    }

    return (

        <section>

            <h2 className="text-2xl text-center m-2"> { alterTitle() } </h2>

            <div className="w-11/12 ml-auto mr-auto mt-2.5 p-6 bg-slate-200 border-2 border-gray-300">

                {
                    checkFormType()
                }

            </div>

            <div className="w-11/12 ml-auto mr-auto mt-2.5 p-6 bg-slate-200 border-2 border-gray-300">
                <h3 className="text-xl">The Results.</h3>
                <div className="flex flex-col">
                    <div className="m-2">
                        {
                            displayTaxResult("Annual", TaxCalculator(annualSalary, incomeTaxRate), annualSalary)
                        }
                    </div>
                    <div className="m-2">
                        {
                            displayTaxResult("Monthly", TaxCalculator(monthlySalary, incomeTaxRate), monthlySalary)
                        }
                    </div>
                    <div className="m-2">
                        {
                            displayTaxResult("Weekly", TaxCalculator(weeklySalary, incomeTaxRate), weeklySalary)
                        }
                    </div>
                    <div className="m-2">
                        {
                            displayTaxResult("Daily", TaxCalculator(dailySalary, incomeTaxRate), dailySalary)
                        }
                    </div>
                </div>

            </div>

        </section>
        
    );

}