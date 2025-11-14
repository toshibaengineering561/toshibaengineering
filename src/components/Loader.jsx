export default function Loader() {
  return (
    <div className="h-dvh w-full flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Logo Circle */}
        <div className="w-16 h-16 rounded-md bg-blue-600 flex items-center justify-center animate-pulse">
          <span className="text-white text-3xl font-bold">T</span>
        </div>

        {/* Text */}
        <p className="text-blue-600 text-sm tracking-wide">
          Loading data...
        </p>
      </div>
    </div>
  )
}
