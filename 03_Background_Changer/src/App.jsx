import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2'>
            <button className='outline-none bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor('green')}>Green</button>
            <button className='outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor('blue')}>Blue</button>
            <button className='outline-none bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor('orange')}>Yellow</button>
            <button className='outline-none bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor('purple')}>Purple</button>
            <button className='outline-none bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor('black')}>Black</button>
            <button className='outline-none bg-slate-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded shadow-lg' onClick={()=>setColor('white')}>White</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
