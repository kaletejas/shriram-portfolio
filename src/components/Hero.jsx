export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/hero-bg.png')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I’m Shriram</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-xl">
          A passionate Civil Engineer focused on the advancements in the Civil Industry with a focus in onsite execution and project management.
        </p>
        <a
          href="/aryan-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          📄 View CV
        </a>
      </div>
    </section>
  )
}
