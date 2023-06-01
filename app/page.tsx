import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main>
      
      <div className="w-11/12 bg-slate-200 border-2 border-gray-300 shadow-md ml-auto mr-auto mt-1.5 p-6">
        <h2 className='text-black text-4xl font-sans text-center'>Welcome to Wage Calculator</h2>
      </div>

      <div className='p-2 m-2'>
        <p>Click <Link className="text-blue-800 hover:underline" href="pages/annual">here</Link> for an annual breakdown of your salary.</p>
        <p>Click <Link className="text-blue-800 hover:underline" href="pages/hourlybreakdown">here</Link> for a calculation of hour hourly wages to annual.</p>

      </div>


    </main>

  )
  
}
