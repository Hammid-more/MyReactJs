import Header from "./components/Header"
import Aside from "./components/Aside"
import Nav from "./components/Nav"
import Article from "./components/Article"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      {/* header */}
     <Header/>
    

      {/* Middle container */}
      <div className="flex flex-1">
      {/* Aside */}
      <Aside/>
    

    {/* Nav bar */}
    {/* Main section (Nav + Article + Footer) */}
      <div className="flex flex-col flex-1">
      <Nav/>
  

      {/* Article  */}
      <Article/>

      {/* footer */}
      <Footer/>
     </div>
    </div>
  </div>
 )
}
    