export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m Shriram — a Civil Engineer with hands-on experience in onsite execution and project coordination for residential and infrastructure projects. 
          I take pride in managing timelines, ensuring safety, and maintaining the highest quality standards on the field.
        </p>

        {/* 🧱 Work Experience Section */}
        <div className="mt-12 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Work Experience</h3>

          <div className="mb-6">
            <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400">Site Engineer – ABC Infrastructure</h4>
            <p className="text-sm text-gray-500 mb-1">Jan 2022 – Oct 2023</p>
            <p className="text-gray-700 dark:text-gray-300">
              Managed onsite activities for mid-scale residential projects. Supervised civil teams, coordinated with vendors, and ensured timely project execution.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium text-blue-700 dark:text-blue-400">Junior Engineer – XYZ Builders</h4>
            <p className="text-sm text-gray-500 mb-1">Jun 2020 – Dec 2021</p>
            <p className="text-gray-700 dark:text-gray-300">
              Assisted senior engineers in site planning, quantity surveying, and daily execution of structural work on commercial complexes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
