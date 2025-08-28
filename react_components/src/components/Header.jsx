export default function Header() {
  return (
     <div className="bg-pink-200 h-[60px] flex justify-between items-center px-4 py-2">
        <div className="font-bold"> LOGO </div>
        <div className="flex gap-4">
        <button className="font-bold">SIGN UP</button>
        <button className="font-bold">LOG IN</button>
      </div>
    </div>
  )
}