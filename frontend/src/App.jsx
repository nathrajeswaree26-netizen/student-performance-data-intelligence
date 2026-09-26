import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import students from "./students";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const totalStudents = students.length;

  const passedStudents = students.filter(
    (student) => student.result === "Pass"
  ).length;

  const failedStudents = students.filter(
    (student) => student.result === "Fail"
  ).length;

  const averageMarks =
    students.reduce((sum, student) => sum + student.finalMarks, 0) /
    totalStudents;

  const averageAttendance =
    students.reduce((sum, student) => sum + student.attendance, 0) /
    totalStudents;

  const highestMarks = Math.max(
    ...students.map((student) => student.finalMarks)
  );

  const lowestMarks = Math.min(
    ...students.map((student) => student.finalMarks)
  );

  const sortedMarks = students
    .map((student) => student.finalMarks)
    .sort((a, b) => a - b);

  const medianMarks = sortedMarks[Math.floor(sortedMarks.length / 2)];

  const resultData = [
    { name: "Pass", value: passedStudents },
    { name: "Fail", value: failedStudents },
  ];

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">S</div>
          <div>
            <h2>StuDI</h2>
            <span>Data Intelligence</span>
          </div>
        </div>

        <nav>

          <button
            className={activePage === "Dashboard" ? "active" : ""}
            onClick={() => setActivePage("Dashboard")}
          >
            📊 Dashboard
          </button>

          <button
            className={activePage === "Students" ? "active" : ""}
            onClick={() => setActivePage("Students")}
          >
            👨‍🎓 Students
          </button>

          <button
            className={activePage === "Prediction" ? "active" : ""}
            onClick={() => setActivePage("Prediction")}
          >
            🤖 Prediction
          </button>

          <button
            className={activePage === "Analytics" ? "active" : ""}
            onClick={() => setActivePage("Analytics")}
          >
            📈 Analytics
          </button>

          <button
            className={activePage === "Reports" ? "active" : ""}
            onClick={() => setActivePage("Reports")}
          >
            📄 Reports
          </button>

          <button
            className={activePage === "Settings" ? "active" : ""}
            onClick={() => setActivePage("Settings")}
          >
            ⚙️ Settings
          </button>

        </nav>

        <div className="sidebar-bottom">
          <p>Student Performance</p>
          <small>Data Intelligence System</small>
        </div>

      </aside>


      {/* Main Content */}
      <main className="main-content">

        {/* Header */}
        <header className="topbar">

          <div>
            <h1>{activePage}</h1>

            <p>
              {activePage === "Dashboard"
                ? "Overview of student performance"
                : `Manage ${activePage.toLowerCase()} information`}
            </p>
          </div>

          <div className="profile">
            <div className="profile-avatar">RN</div>

            <div>
              <strong>Student Admin</strong>
              <span>Administrator</span>
            </div>
          </div>

        </header>


        {/* Dashboard */}
        {activePage === "Dashboard" && (
          <Dashboard
            totalStudents={totalStudents}
            averageMarks={averageMarks}
            passedStudents={passedStudents}
            failedStudents={failedStudents}
            highestMarks={highestMarks}
            lowestMarks={lowestMarks}
            medianMarks={medianMarks}
            averageAttendance={averageAttendance}
            students={students}
            resultData={resultData}
          />
        )}


        {/* Students */}
        {activePage === "Students" && (
          <StudentsPage students={students} />
        )}


        {/* Prediction */}
        {activePage === "Prediction" && (
          <PredictionPage />
        )}


        {/* Analytics */}
        {activePage === "Analytics" && (
          <AnalyticsPage
            students={students}
            averageMarks={averageMarks}
            averageAttendance={averageAttendance}
          />
        )}


        {/* Reports */}
        {activePage === "Reports" && (
          <ReportsPage
            students={students}
            averageMarks={averageMarks}
            passedStudents={passedStudents}
            failedStudents={failedStudents}
          />
        )}


        {/* Settings */}
        {activePage === "Settings" && (
          <SettingsPage />
        )}

      </main>

    </div>
  );
}


/* =========================
   DASHBOARD
========================= */

function Dashboard({
  totalStudents,
  averageMarks,
  passedStudents,
  failedStudents,
  highestMarks,
  lowestMarks,
  medianMarks,
  averageAttendance,
  students,
  resultData,
}) {

  return (
    <div>

      {/* Stats */}
      <div className="stats-grid">

        <StatCard
          title="Total Students"
          value={totalStudents}
          icon="👨‍🎓"
        />

        <StatCard
          title="Average Marks"
          value={averageMarks.toFixed(1)}
          icon="📚"
        />

        <StatCard
          title="Passed Students"
          value={passedStudents}
          icon="✅"
        />

        <StatCard
          title="Failed Students"
          value={failedStudents}
          icon="⚠️"
        />

      </div>


      {/* Charts */}
      <div className="charts-grid">

        {/* Study Hours Chart */}
        <div className="card chart-card">

          <div className="card-header">

            <div>
              <h3>Study Hours vs Final Marks</h3>
              <p>Relationship between study time and performance</p>
            </div>

          </div>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={students}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="studyHours"
                label={{
                  value: "Study Hours",
                  position: "insideBottom",
                  offset: -5,
                }}
              />

              <YAxis
                label={{
                  value: "Final Marks",
                  angle: -90,
                  position: "insideLeft",
                }}
              />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="finalMarks"
                name="Final Marks"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ r: 5 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>


        {/* Result Distribution */}
        <div className="card chart-card">

          <div className="card-header">

            <div>
              <h3>Result Distribution</h3>
              <p>Pass and fail overview</p>
            </div>

          </div>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={resultData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={105}
                paddingAngle={5}
                dataKey="value"
                label
              >

                <Cell fill="#22c55e" />
                <Cell fill="#ef4444" />

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* Attendance Chart */}
      <div className="card chart-card full-width">

        <div className="card-header">

          <div>
            <h3>Attendance vs Final Marks</h3>
            <p>Student attendance and academic performance</p>
          </div>

        </div>

        <ResponsiveContainer width="100%" height={320}>

          <BarChart data={students}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="id" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="attendance"
              name="Attendance %"
              fill="#6366f1"
            />

            <Bar
              dataKey="finalMarks"
              name="Final Marks"
              fill="#14b8a6"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>


      {/* Performance Summary */}
      <div className="card summary-card">

        <div className="card-header">

          <div>
            <h3>Performance Summary</h3>
            <p>Key student performance indicators</p>
          </div>

        </div>

        <div className="summary-grid">

          <SummaryItem
            title="Highest Marks"
            value={highestMarks}
          />

          <SummaryItem
            title="Lowest Marks"
            value={lowestMarks}
          />

          <SummaryItem
            title="Median Marks"
            value={medianMarks}
          />

          <SummaryItem
            title="Average Attendance"
            value={`${averageAttendance.toFixed(1)}%`}
          />

        </div>

      </div>

    </div>
  );
}


/* =========================
   STAT CARD
========================= */

function StatCard({ title, value, icon }) {

  return (

    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

    </div>

  );
}


/* =========================
   SUMMARY ITEM
========================= */

function SummaryItem({ title, value }) {

  return (

    <div className="summary-item">

      <span>{title}</span>

      <strong>{value}</strong>

    </div>

  );
}


/* =========================
   STUDENTS PAGE
========================= */

function StudentsPage({ students }) {

  return (

    <div className="page-section">

      <div className="section-header">

        <div>
          <h2>Student Records</h2>
          <p>Complete student performance information</p>
        </div>

      </div>


      <div className="table-card">

        <table>

          <thead>

            <tr>
              <th>Student ID</th>
              <th>Study Hours</th>
              <th>Attendance</th>
              <th>Assignment</th>
              <th>Final Marks</th>
              <th>Result</th>
            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>
                  <strong>{student.id}</strong>
                </td>

                <td>{student.studyHours} hrs</td>

                <td>{student.attendance}%</td>

                <td>{student.assignmentScore}</td>

                <td>
                  <strong>{student.finalMarks}</strong>
                </td>

                <td>

                  <span
                    className={
                      student.result === "Pass"
                        ? "status pass"
                        : "status fail"
                    }
                  >
                    {student.result}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}


/* =========================
   PREDICTION PAGE
========================= */

function PredictionPage() {

  const [studyHours, setStudyHours] = useState("");
  const [attendance, setAttendance] = useState("");
  const [assignment, setAssignment] = useState("");
  const [prediction, setPrediction] = useState("");

  const predictResult = () => {

    const study = Number(studyHours);
    const attend = Number(attendance);
    const assign = Number(assignment);

    const score =
      study * 5 +
      attend * 0.4 +
      assign * 0.3;

    if (score >= 65) {
      setPrediction("PASS");
    } else {
      setPrediction("FAIL");
    }
  };


  return (

    <div className="prediction-container">

      <div className="prediction-card">

        <h2>Student Performance Prediction</h2>

        <p>
          Enter student information to estimate the result.
        </p>


        <label>Study Hours</label>

        <input
          type="number"
          placeholder="Example: 5"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
        />


        <label>Attendance (%)</label>

        <input
          type="number"
          placeholder="Example: 85"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />


        <label>Assignment Score</label>

        <input
          type="number"
          placeholder="Example: 80"
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
        />


        <button
          className="predict-button"
          onClick={predictResult}
        >
          Predict Result
        </button>


        {prediction && (

          <div
            className={
              prediction === "PASS"
                ? "prediction-result pass-result"
                : "prediction-result fail-result"
            }
          >

            Prediction: <strong>{prediction}</strong>

          </div>

        )}

      </div>

    </div>

  );
}


/* =========================
   ANALYTICS PAGE
========================= */

function AnalyticsPage({
  students,
  averageMarks,
  averageAttendance,
}) {

  return (

    <div className="page-section">

      <div className="section-header">

        <div>
          <h2>Performance Analytics</h2>
          <p>Data-driven analysis of student performance</p>
        </div>

      </div>


      <div className="analytics-grid">

        <div className="analytics-card">

          <h3>Average Marks</h3>

          <strong>{averageMarks.toFixed(2)}</strong>

          <p>Average final marks across all students</p>

        </div>


        <div className="analytics-card">

          <h3>Average Attendance</h3>

          <strong>{averageAttendance.toFixed(2)}%</strong>

          <p>Average attendance percentage</p>

        </div>


        <div className="analytics-card">

          <h3>Top Performer</h3>

          <strong>
            {students.reduce((top, student) =>
              student.finalMarks > top.finalMarks
                ? student
                : top
            ).id}
          </strong>

          <p>Highest final marks</p>

        </div>

      </div>

    </div>

  );
}


/* =========================
   REPORTS PAGE
========================= */

function ReportsPage({
  students,
  averageMarks,
  passedStudents,
  failedStudents,
}) {

  return (

    <div className="page-section">

      <div className="section-header">

        <div>
          <h2>Performance Report</h2>
          <p>Summary of student performance data</p>
        </div>

      </div>


      <div className="report-card">

        <h3>Student Performance Report</h3>

        <div className="report-row">
          <span>Total Students</span>
          <strong>{students.length}</strong>
        </div>

        <div className="report-row">
          <span>Passed Students</span>
          <strong>{passedStudents}</strong>
        </div>

        <div className="report-row">
          <span>Failed Students</span>
          <strong>{failedStudents}</strong>
        </div>

        <div className="report-row">
          <span>Average Marks</span>
          <strong>{averageMarks.toFixed(2)}</strong>
        </div>

      </div>

    </div>

  );
}


/* =========================
   SETTINGS PAGE
========================= */

function SettingsPage() {

  return (

    <div className="page-section">

      <div className="section-header">

        <div>
          <h2>Settings</h2>
          <p>System configuration</p>
        </div>

      </div>


      <div className="settings-card">

        <h3>StuDI System</h3>

        <p>
          Student Performance Data Intelligence System
        </p>

        <p>
          Current data source: CSV Dataset
        </p>

        <p>
          Database integration: MySQL — Coming Next
        </p>

      </div>

    </div>

  );
}


export default App;