import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage"; // Adjust the path as necessary
import { EyeOpenIcon, TrashIcon, Pencil2Icon } from "@radix-ui/react-icons"; // Import the Edit icon

function StudentList() {
  const [students, setStudents] = useLocalStorage("students", []);

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <>
          <button
            onClick={handleClearAll}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 mb-4"
          >
            Clear All
          </button>
          <ul className="space-y-4">
            {students.map((student, index) => (
              <li
                key={student.id}
                className="flex justify-between items-center"
              >
                <span>
                  {index + 1}. {student.name}
                </span>
                <div className="flex space-x-4">
                  <Link
                    to={`/students/${student.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    <EyeOpenIcon width="20px" height="20px" />
                  </Link>
                  <Link
                    to={`/students/edit/${student.id}`} // Link to edit the student
                    className="text-yellow-500 hover:underline"
                  >
                    <Pencil2Icon width="20px" height="20px" />
                  </Link>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-500"
                  >
                    <TrashIcon width="20px" height="20px" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default StudentList;
