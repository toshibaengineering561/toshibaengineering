export default function WhatsAppFloat({ phone }) {
  if (!phone) return null
  const link = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white grid place-items-center shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M20 3.5A10.5 10.5 0 1 1 6.8 20.9L3 21l.2-3.9A10.5 10.5 0 1 1 20 3.5zM7 18l1.8-.5a8 8 0 1 0-2.3-2.2L7 18zm2.9-6.8c.1 2.7 2.3 4.8 4.9 4.9.5 0 .8-.3 1-.7l.3-.8c.1-.3 0-.6-.2-.8l-1-.8c-.2-.2-.5-.2-.8-.1l-.5.2c-.2.1-.4 0-.6-.1-.6-.3-1.3-1-1.6-1.6-.1-.2-.1-.4 0-.6l.2-.5c.1-.2 0-.5-.1-.8l-.8-1c-.2-.2-.5-.3-.8-.2l-.8.3c-.4.1-.7.5-.7 1z"/>
      </svg>
    </a>
  )
}


