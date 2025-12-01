'use client'
import { useParams } from "next/navigation";

export default function NavigationBar() {
  const { locale } = useParams();
  const lague=[
    {id:'fr', label:`🇫🇷 FR`},
    {id:'en', label:`🇬🇧 EN`}
  ]
  return (
    <div className='px-6 py-4 flex justify-end transition gap-4 bg-gray-900 lg:justify-between w-full text-white font-bold'>
      <h1 className="text-xl lg:text-2xl">
        Portfolio's Kevin
      </h1>
      <select>
        
        {lague.map((l)=>
        <option value={l.id}>
          {l.label}
        </option>
      )}
      </select>
    </div>
  )
}
