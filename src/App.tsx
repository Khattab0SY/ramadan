import { Link } from "react-router"
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";


const App = () => {

  const { width, height }: { width: number; height: number } = useWindowSize();
  
  return (
    <div className='bg-[#F7F7F7] h-screen w-full flex flex-col py-6 justify-between items-center'>
        <Confetti width={width} height={height} numberOfPieces={50} />
        <img src="ramadan.png" alt="ramadan" className="h-40"/>

        <p className="">هنئ أقربائك بحلول شهر رمضان المبارك❤️❤️</p>

        <Link to={"lazypage"} className="px-12 py-2 bg-amber-500 text-white rounded-xl cursor-pointer">تهنئة</Link>
        <br/>
        <br/>
    </div>
  )
}

export default App