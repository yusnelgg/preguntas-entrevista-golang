export function Title({ isHome }) {
  return (
    <h1
      className={`transition max-w-lg py-5 font-bold leading-tight tracking-tight animate-fade-in-up animate-duration-500 ${isHome ? 'text-6xl' : 'text-xl'}`}
    >
      Preguntas típicas de Go
    </h1>
  )
}
