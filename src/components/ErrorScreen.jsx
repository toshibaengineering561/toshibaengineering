export default function ErrorScreen() {
  return (
    <div className="h-dvh w-full flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">!</span>
        </div>

        <p className="text-red-600 text-sm tracking-wide">
          Failed to load data. Please try again later.
        </p>
      </div>
    </div>
  )
}
