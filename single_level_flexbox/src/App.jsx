function App() {


  return (

    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      
      <h1 className="text-orange-400 text-5xl font-extrabold tracking-widest mb-2">
    
      </h1>
      <p className="text-gray-300 mb-10">Affordable quality, every time.</p>

    
      <div className="flex gap-10">
        
        
        <div className="border border-white p-6 w-64 text-center">
          <div className="bg-pink-600 w-24 h-24 rounded-full mx-auto mb-4"></div>
          <h2 className="font-bold text-lg">MATTE</h2>
          <div className="w-8 border-t border-white mx-auto my-2"></div>
          <p className="text-gray-300 mb-4">
            a subtle but elegant finish for low-touch and delicate surfaces
          </p>
          <a href="#" className="text-sky-400 font-bold">EXPLORE</a>
        </div>

       
        <div className="border border-white p-6 w-64 text-center">
          <div className="bg-pink-600 w-24 h-24 rounded-full mx-auto mb-4"></div>
          <h2 className="font-bold text-lg">SEMI-GLOSS</h2>
          <div className="w-8 border-t border-white mx-auto my-2"></div>
          <p className="text-gray-300 mb-4">
            our signature finish for high-wear parts, details and surfaces
          </p>
          <a href="#" className="text-sky-400 font-bold">EXPLORE</a>
        </div>

        
        <div className="border border-white p-6 w-64 text-center">
          <div className="bg-pink-600 w-24 h-24 rounded-full mx-auto mb-4"></div>
          <h2 className="font-bold text-lg">HIGH-GLOSS</h2>
          <div className="w-8 border-t border-white mx-auto my-2"></div>
          <p className="text-gray-300 mb-4">
            an eye-stopping shine best for metal and other smooth surfaces
          </p>
          <a href="#" className="text-sky-400 font-bold">EXPLORE</a>
        </div>

      </div>
    </div>
  );
}

export default App;
