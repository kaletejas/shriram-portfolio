export default function Contact() {
  return (
    <section id="contact" className="pt-4 py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white underline">Contact Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Let’s connect — feel free to reach out anytime.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-gray-800 dark:text-gray-300">
          <a
            href="mailto:shriramsatpute99@gmail.com"
            className="text-blue-600 hover:underline"
          >
            📧 shriramsatpute99@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shriram-satpute16/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🔗 linkedin.com/in/shriram-satpute16
          </a>
        </div>
      </div>
    </section>
  );
}
