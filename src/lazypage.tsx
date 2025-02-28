import React from "react";
import { useSearchParams } from "react-router";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Share from "./component/share"

const lazypage = () => {
  const [name, setName] = React.useState<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = React.useState<boolean>(false)

  const { width, height }: { width: number; height: number } = useWindowSize();

  const saveNameHandler = () => {
    setSearchParams({ user: name });
    setOpen(!open)
  };
    React.useEffect(() => {
      const audio = new Audio("duaa.m4a");
  
      const playAudio = () => {
        audio.play().catch(error => console.error("Error playing audio:", error));
      };
  
      audio.onended = playAudio;
  
      document.addEventListener("click", playAudio, { once: true });
  
      return () => {
        audio.pause();
        audio.onended = null;
      };
    }, []);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <img
        src="fanos.png"
        alt="fanos"
        className="w-full absolute sm:hidden top-0"
      />
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl animated-text text-center">
          <p>
          {searchParams.get("user") || "الموقع"}
            </p>
            <p className="text-sm">
                يهنئك بالشهر الفضيل
            </p>
        </h1>

        <img src="hilal.png" alt="hilal" className="w-40" />
        <img src="ramdan2.png" alt="hilal" className="w-40" />
        <h1 className="text-2xl animated-text text-center">
            <p className="text-sm pb-1">ويقول لك</p>
            <p className="text-lg">اهنئكم بقدوم شهر الطاعة والإحسان</p>
            <p className="text-lg">شدوا الهمة في طاعات الرحمن</p>
            <p className="text-lg">واستغلوا فرص التوبة والإيمان</p>
            <p className="text-lg">اللهم اغفر لنا ولكم العصيان</p>
        <p className="text-lg animate-spin pt-10">{searchParams.get("user") || "الموقع"}</p>
        </h1>
        
      </div>

      <div className="py-3 w-full flex absolute bottom-0 sm:px-40 px-2">
        <input
          className="outline-none px-4 text-right w-full bg-gray-200"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="اكتب اسمك"
        />
        <button
          className={`w-32 py-2 h-full ${
            name ? "bg-amber-400 cursor-none" : "bg-gray-400 cursor-pointer"
          }`}
          onClick={saveNameHandler}
        >
          مشاركة
        </button>
      </div>
      <Confetti width={width} height={height} numberOfPieces={50} />
      <Share state={open} setChange={setOpen}/>

    </div>
  );
};

export default lazypage;
