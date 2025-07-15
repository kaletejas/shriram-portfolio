export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shriram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}