import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const initialStudents = [
    { id: 1, name: 'John Doe', progress: '85%' },
    { id: 2, name: 'Jane Smith', progress: '90%' },
    { id: 3, name: 'Emily Johnson', progress: '78%' },
];
const EducatorDashboard = ()=>{
    const [students, setStudents] = useState(initialStudents);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: '',
        password: 'defaultPassword'
    });

    const handleAddStudent = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitStudent = () => {
        if (newStudent.name && newStudent.email) {
            const newStudentObj = {
                id: students.length + 1,
                ...newStudent,
                progress: '0%',
            };
            setStudents([...students, newStudentObj]);
            setNewStudent({ name: '', email: '', password: 'defaultPassword' });
            handleCloseModal();
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleSelectStudent = (student) => {
        setSelectedStudent(student);
    };

    return (
        <div className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-2xl font-bold">Welcome, Educator!</h1>
            </header>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Student List</h2>
                <button
                    onClick={handleAddStudent}
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                >
                    <FaPlus className="mr-2" /> Add New Student
                </button>
            </div>

            <div className="flex">
                <ul className="w-1/3 border-r pr-4">
                    {students.map((student) => (
                        <li
                            key={student.id}
                            className={`cursor-pointer p-2 mb-2 border rounded ${selectedStudent?.id === student.id ? 'bg-gray-200' : ''}`}
                            onClick={() => handleSelectStudent(student)}
                        >
                            {student.name}
                        </li>
                    ))}
                </ul>

                <div className="w-2/3 pl-4">
                    {selectedStudent ? (
                        <div className="p-4 border rounded">
                            <h3 className="text-lg font-semibold">{selectedStudent.name}'s Progress</h3>
                            <p>Progress: {selectedStudent.progress}</p>
                        </div>
                    ) : (
                        <p>Select a student to view their progress.</p>
                    )}
                </div>
            </div>

            {/* Modal for Adding New Student */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">Add New Student</h3>
                        <label className="block mb-2">
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={newStudent.name}
                                onChange={handleInputChange}
                                className="border p-2 w-full mt-1"
                            />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={newStudent.email}
                                onChange={handleInputChange}
                                className="border p-2 w-full mt-1"
                            />
                        </label>
                        <label className="block mb-4">
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={newStudent.password}
                                onChange={handleInputChange}
                                className="border p-2 w-full mt-1"
                                readOnly
                            />
                        </label>
                        <div className="flex justify-end">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmitStudent}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Add Student
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default EducatorDashboard