
//  If user selects "multiple days", display this component so that the 
//  user can check what days that they work.
export default function DaysOfWeek(props: any) {

    //  The number of days working.
    var numberOfDaysChecked = 0;

    const updateDaysChecked = (e:any):any => {

        if(e.target.checked == true){

            numberOfDaysChecked += 1;

        } else {

            if(numberOfDaysChecked > 0){
                numberOfDaysChecked -= 1;
            }

        }

        props.selectDays(numberOfDaysChecked);

    }

    return (
        <>
            <label>What days of the week do you work?</label>
            <div>
                <input type="checkbox" name="chkMonday" value="1" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Monday</label>
                <input type="checkbox" name="chkTuesday" value="2" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Tuesday</label>
                <input type="checkbox" name="chkWednesday" value="3" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Wednesday</label>
                <input type="checkbox" name="chkThursday" value="4" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Thursday</label>
                <input type="checkbox" name="chkFriday" value="5" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Friday</label>
                <input type="checkbox" name="chkSaturday" value="6" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Saturday</label>
                <input type="checkbox" name="chkSunday" value="7" onChange={ (e)=>{ updateDaysChecked(e) } } />
                <label className="text-base m-2">Sunday</label>
            </div>
        </>
    );


}