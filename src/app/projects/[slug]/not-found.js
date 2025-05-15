import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
      <p className="text-xl text-gray-600 mb-10">
        The project you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Browse All Projects
      </Link>
    </div>
  );
}