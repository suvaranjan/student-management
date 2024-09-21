import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mt-20 w-full h-[80vh] flex flex-col items-center justify-center space-y-4">
      <h1 className="text-xl  mb-4 text-center">
        Welcome to the Student Management System
      </h1>
      <div className="flex space-x-4">
        <Link
          to="/students/add-student"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Student
        </Link>
        <Link
          to="/students"
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400 transition duration-200"
        >
          View Students
        </Link>
      </div>
    </div>
  );
}

export default Home;
