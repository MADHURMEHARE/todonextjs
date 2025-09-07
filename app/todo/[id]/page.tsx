"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function TaskDetail() {
  const searchParams = useSearchParams();
  const text = searchParams.get('text');
  const time = searchParams.get('time');

  if (!text || !time) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600">Task not found</h1>
          <p className="text-gray-500 mt-2">The requested task could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="max-w-2xl mx-auto p-8 border-2 border-gray-800 rounded-lg bg-white bg-opacity-90 shadow-xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-600">Task Details</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{text}</h2>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-medium">Scheduled for:</span> {new Date(time).toLocaleString()}
          </p>
          
          <div className="mt-6">
            <Link 
              href="/" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 inline-block"
            >
              Back to Tasks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
