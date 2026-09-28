function StudentList() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Sara", score: 45 },
    { id: 3, name: "Ahmed", score: 60 },
    { id: 4, name: "Ayesha", score: 35 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Score: {student.score}</p>

          {student.score >= 50 ? (
            <p style={{ color: "green" }}>Pass</p>
          ) : (
            <p style={{ color: "red" }}>Fail</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;