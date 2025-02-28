import { useState } from "react";

interface ShareProps {
  state: boolean;
  setChange: any;
}
//${state ? "absolute" : "hidden"}
const share = ({ state, setChange }: ShareProps) => {
  const [copy, setCopy] = useState<string>("");
  const link = decodeURIComponent(window.location.href);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopy("تم النسخ");
    setTimeout(() => {
      setCopy("");
    }, 2000);
  };

  return (
    <div
      className={`${
        state ? "absolute" : "hidden"
      } h-screen w-screen bg-gray-200  flex flex-col justify-center items-center gap-16`}
    >
      <h1 className="text-xl">شارك الرابط وهنئ احبابك</h1>
      <div className="w-full text-lg flex bg-gray-300 rounded">
        <p className="w-full truncate flex items-center">{link}</p>
        <button className="px-4 h-full py-2 bg-amber-400" onClick={handleCopy}>
          نسخ
        </button>
      </div>
      <p>{copy}</p>

      <button
        onClick={() => setChange(!state)}
        className="px-6 py-2 bg-amber-400 rounded"
      >
        عودة
      </button>
    </div>
  );
};

export default share;
