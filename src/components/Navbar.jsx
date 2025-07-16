export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 bg-white shadow fixed top-0 left-0 z-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition duration-200">
          Shriram
        </a>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
