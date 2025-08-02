import { useState } from 'react'
import './App.css'

function App(){

  const[count, setCount]= useState(0)

  return(
    
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
 
        <h1 className="text-blue-500 text-3xl font-bold mb-2 justify-center ">
          Lawal Hammed Olayemi
        </h1>

        <h2 className="text-green-600 text-2xl font-bold mb-2">
          Frontend Developer
        </h2>

        <p className="text-gray-500 text-base font-normal">
          I am a Software Developer, currently undergoing intensive training in modern web development, with a strong focus on React and Tailwind CSS to build real-world, responsive user interfaces.
        </p>
      </div>
  );
}

export default App;


