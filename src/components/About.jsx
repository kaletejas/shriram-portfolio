export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 underline">About Me</h2>
        <p className="text-lg leading-relaxed mb-12 text-gray-800 dark:text-gray-300">
          I am a passionate Civil Engineer and Construction Project Coordinator with a strong track record of successfully managing project scheduling, budgeting, procurement, and stakeholder communication. With expertise in AutoCAD, Civil 3D, Microsoft Project, and cost estimation, I have played a key role in delivering projects efficiently, ensuring quality, safety, and compliance.
        </p>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 underline">Skills</h2>
          <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">
            Tools and skills I bring to the table as a Civil Engineer:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-medium text-gray-800 dark:text-gray-300">
            <span className="before:content-['•'] before:mr-2">Project Coordination</span>
            <span className="before:content-['•'] before:mr-2">Cost Management</span>
            <span className="before:content-['•'] before:mr-2">Construction Project Scheduling</span>
            <span className="before:content-['•'] before:mr-2">MS Project</span>
            <span className="before:content-['•'] before:mr-2">AutoCAD</span>
            <span className="before:content-['•'] before:mr-2">Resource Management</span>
            <span className="before:content-['•'] before:mr-2">Civil 3D</span>
            <span className="before:content-['•'] before:mr-2">Communication</span>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>

          <div className="mb-6">
            <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400">Construction Project Coordinator – Metrocity Landmarks Private Limited</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Jan 2022 – July 2022</p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 mt-2">
              <li>Managed daily on-site operations for high-rise residential projects, ensuring adherence to project timelines, safety standards, and execution quality.</li>
              <li>Assisted project management by coordinating with subcontractors, tracking progress, maintaining site documentation (RFIs, work orders, reports), and resolving design issues with architects and engineers.</li>
              <li>Oversaw material logistics and compliance, monitored delivery schedules, and supported client/contractor meetings and progress reporting as per BOQ specifications.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400">Junior Civil Engineer – Infinity Solutions Engineers & Contractors</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Jan 2021 – Dec 2021</p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 mt-2">
              <li>Assisted senior engineers in site planning, quantity surveying, and daily execution of structural work on commercial complexes.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400">Junior Site Engineer – Pro Construction Management</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Jan 2021 – Dec 2021</p>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 mt-2">
              <li>Complete flat finishing work including plastering, gypsum finishing, flooring, plumbing, etc.</li>
            </ul>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-12 h-1 w-24 bg-gray-400 dark:bg-gray-600 rounded mx-auto" />
      </div>
    </section>
  );
}
