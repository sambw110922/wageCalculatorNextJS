
export default function TaxExplainer (props:any) {

    return (
        <div className="bg-white w-120 p-2" >
            <button onClick={ props.closeMe } className="bg-blue-500 rounded text-white w-20 hover:bg-white hover:border-2 hover:border-blue-500 hover:text-black float-right" type="button">X</button>
            <h3>What income tax do I pay?</h3>
            <p className="text-base">There are different rates of income tax that you pay every time that you get a wage slip.</p>
            <p className="text-base">Please note that there are other types of taxes (such as national insurance, student loans etc.)</p>
            <p className="text-base">Please click <a className="bold underline" href="https://www.gov.uk/income-tax-rates" target="_blank">here</a> for more.</p>
        </div>
    );


}