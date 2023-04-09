export default function GridPost({ key, url }) {

  return (
    <div className="group bg-slate-800 relative hover:cursor-pointer">
      <div id="Text-Overlay" className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 opacity-0 group-hover:opacity-100">
        <p className="text-white text-base font-sans font-semibold">Text Overlay</p>
      </div>
      <div id="Image" style={{ backgroundImage: `url(${url})`, backgroundPosition: "center", backgroundSize: "cover" }} className="image pb-[100%]  relative flex justify-center items-center group-hover:opacity-50 transition-all z-40">
      </div>
    </div>
  )
}