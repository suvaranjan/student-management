import { useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage"; // Adjust the path as necessary

function StudentDetails() {
  const { id } = useParams();
  const [students] = useLocalStorage("students", []);
  const student = students.find((student) => student.id === id);

  if (!student) {
    return <div className="mt-20 text-red-500">Student not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Details</h2>
      <div className="space-y-4">
        {Object.entries(student).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="font-semibold">
              {key.replace(/([A-Z])/g, " $1")}:{" "}
            </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDetails;
