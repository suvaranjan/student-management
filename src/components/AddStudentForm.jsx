/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";

function AddStudentForm() {
  const { id } = useParams(); // Get ID from URL for editing
  const [submittedData, setSubmittedData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [students, setStudents] = useLocalStorage("students", []);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const student = students.find((student) => student.id === id);
      if (student) {
        reset(student); // Populate the form for editing
      }
    }
  }, [id, students, reset]);

  const onSubmit = (data) => {
    if (id) {
      const updatedStudents = students.map((student) =>
        student.id === id ? { ...student, ...data } : student
      );
      setStudents(updatedStudents);
    } else {
      const newStudent = { id: uuidv4(), ...data };
      setStudents([...students, newStudent]);
    }
    navigate("/students"); // Redirect after submission
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {id ? "Edit Student" : "Add Student"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            {...register("age", { required: "Age is required", min: 1 })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="w-full border rounded-md px-3 py-2"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "Date of Birth is required" })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Father's Name */}
        <div>
          <label className="block mb-1">Father's Name</label>
          <input
            type="text"
            {...register("fatherName", {
              required: "Father's Name is required",
            })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.fatherName && (
            <p className="text-red-500 text-sm">{errors.fatherName.message}</p>
          )}
        </div>

        {/* 10th Percentage */}
        <div>
          <label className="block mb-1">10th Percentage</label>
          <input
            type="number"
            step="0.01"
            {...register("tenthPercentage", {
              required: "10th Percentage is required",
              min: 0,
              max: 100,
            })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.tenthPercentage && (
            <p className="text-red-500 text-sm">
              {errors.tenthPercentage.message}
            </p>
          )}
        </div>

        {/* 12th Percentage */}
        <div>
          <label className="block mb-1">12th Percentage</label>
          <input
            type="number"
            step="0.01"
            {...register("twelfthPercentage", {
              required: "12th Percentage is required",
              min: 0,
              max: 100,
            })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.twelfthPercentage && (
            <p className="text-red-500 text-sm">
              {errors.twelfthPercentage.message}
            </p>
          )}
        </div>

        {/* Hobby */}
        <div>
          <label className="block mb-1">Hobby</label>
          <input
            type="text"
            {...register("hobby", { required: "Hobby is required" })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.hobby && (
            <p className="text-red-500 text-sm">{errors.hobby.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {id ? "Update Student" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;
