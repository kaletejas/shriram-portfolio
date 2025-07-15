export default function Skills() {
  return (
    <section id="skills" className="pt-4 pb-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Tools and skills I bring to the table as a Civil Engineer:
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-700 dark:text-gray-300 font-medium">
            <span className="before:content-['•'] before:mr-2">AutoCAD</span>
            <span className="before:content-['•'] before:mr-2">Revit</span>
            <span className="before:content-['•'] before:mr-2">MS Project</span>
            <span className="before:content-['•'] before:mr-2">Site Execution</span>
            <span className="before:content-['•'] before:mr-2">Team Coordination</span>
            <span className="before:content-['•'] before:mr-2">Project Planning</span>
            <span className="before:content-['•'] before:mr-2">Vendor Management</span>
            <span className="before:content-['•'] before:mr-2">Communication</span>
        </div>
        <div className="mt-12 h-1 w-24 bg-gray-300 dark:bg-gray-600 rounded mx-auto" />
      </div>
    </section>
  );
}
