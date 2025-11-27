import img from "../assets/icon.png"
export default function Loader() {
  return (
    <div className="h-dvh w-full flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Logo Circle */}
        <img className="w-16 h-16 animate-pulse" src={img}/>

        {/* Text */}
        <p className="text-white text-sm tracking-wide">
          Loading data...
        </p>
      </div>
    </div>
  )
}
