function App() {

  return (

    <div className="min-h-screen  bg-white">
      <div className="flex flex-col  min-h-[calc(100vh-4px)]">

        <header className="h-20 bg-[#f6c7c9] flex items-center justify-center">
          <p className="font-extrabold ">HEADER</p>
        </header>

        <div className="flex flex-1 ">
          <aside className="w-72 bg-[#d9c3e7] flex items-center justify-center">
            <p className="font-extrabold">ASIDE</p>
          </aside>

    
          <div className="flex flex-1 flex-col ">
            <nav className="h-14 bg-[#c7dff5] flex items-center justify-center">
              <p className="font-extrabold">NAV</p>
            </nav>

          
            <article className="flex-1 bg-[#d6e5c5] flex items-center justify-center">
              <p className="font-extrabold">ARTICLE</p>
            </article>
          </div>
        </div>

        
        <footer className="h-20 bg-[#f4e0b3] flex items-center justify-center">
          <p className="font-extrabold tracking-wide">FOOTER</p>
        </footer>
      </div>
    </div>
  );
}


export default App
