
export default function AboutSite(){

    return (
        <section>
            <div id="aboutus" className="w-11/12 bg-slate-200 border-2 border-gray-300 shadow-md ml-auto mr-auto mt-1.5 p-6">
                <h2 className="text-xl text-bold">About this app</h2>
                <p className="text-lg">Hello, world! This is a test project for me, using Tailwind, NextJS and TypeScript.</p>
                <h3 className="text-xl mt-2">What does this app do?</h3>
                <p className="text-lg">This app can do two things:</p>
                <ol className="list-decimal text-lg ml-6">
                    <li className="text-lg">Takes your annual wage and hours worked, and then breaks it down into months, weeks, days and hours.</li>
                    <li className="text-lg">Takes your hourly wage and hours worked, and then converts it into days, weeks, months and years.</li>
                </ol>
            </div>
        </section>
    );

}