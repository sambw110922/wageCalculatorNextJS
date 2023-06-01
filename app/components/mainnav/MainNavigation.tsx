import Link from "next/link";

export default function MainNavigation() {

    return (
        <nav className="flex bg-black p-5">

            <Link
                href="./" 
            >
                <h1 className="text-white text-4xl font-sans hover:underline">Wages Calc 1</h1>
            </Link>

            <div className="flex space-2">
                <Link
                    href="/pages/annual"
                    className="text-white m-2 hover:underline"
                >Annual Breakdown</Link>
                <p className="text-white m-2"> | </p>
                <Link
                    href="/pages/hourlybreakdown"
                    className="text-white m-2 hover:underline"
                >Hourly to Annual</Link>
                <p className="text-white m-2"> | </p>
                <Link
                    href="/pages/aboutsite"
                    className="text-white m-2 hover:underline"
                >About</Link>
            </div>

        </nav>
    );

}