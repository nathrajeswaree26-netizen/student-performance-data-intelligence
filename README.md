# 📊 Student Performance Data Intelligence System

## 🚀 StuDI System

**StuDI (Student Data Intelligence) System** is a data-driven student performance analytics and intelligence platform designed to analyze academic performance and convert student data into meaningful insights.

The system combines **Python-based data analysis, statistical analysis, machine learning, data visualization, and an interactive React dashboard** to understand student performance based on study hours, attendance, assignment scores, final marks, and academic results.

---

## 📌 Project Overview

Student performance depends on multiple academic factors such as:

- Study Hours
- Attendance
- Assignment Performance
- Final Examination Marks
- Overall Academic Result

Analyzing these factors manually can make it difficult to identify performance patterns and relationships.

The **Student Performance Data Intelligence System** provides a centralized platform where student data can be analyzed, visualized, and classified using data intelligence techniques.

The project uses **Pandas, NumPy, Scikit-learn, Seaborn, Matplotlib, and React.js** to perform data analysis and present the results through an interactive dashboard.

---

# 🎯 Problem Statement

Educational institutions generate large amounts of student academic data, but raw data alone does not provide meaningful insights.

There is a need for a system that can:

- Analyze student academic records
- Identify important performance patterns
- Understand relationships between academic factors
- Visualize student performance
- Classify student results
- Provide an easy-to-understand analytical dashboard

The **StuDI System** addresses these requirements through data analysis, visualization, and machine learning.

---

# 🎯 Objectives

The main objectives of the project are:

1. Analyze student academic performance using structured data.
2. Identify relationships between study hours, attendance, assignments, and final marks.
3. Perform statistical analysis using NumPy and Pandas.
4. Create meaningful visualizations using Seaborn and Matplotlib.
5. Apply machine learning for Pass/Fail classification.
6. Build an interactive dashboard using React.js.
7. Present student performance information in a simple and understandable format.
8. Create a foundation for future database and API integration.

---

# ✨ Key Features

## 📊 Data Analysis

- Student dataset loading using Pandas
- Data inspection
- Missing-value analysis
- Statistical analysis
- Average marks calculation
- Highest marks calculation
- Lowest marks calculation
- Median calculation
- Standard deviation calculation

## 📈 Data Visualization

The system provides visual analysis including:

- Study Hours vs Final Marks
- Attendance vs Final Marks
- Pass vs Fail Distribution
- Correlation Heatmap
- Student performance charts

## 🤖 Machine Learning

The project uses **Logistic Regression** to classify students into:

- PASS
- FAIL

The model uses:

- Study Hours
- Attendance
- Assignment Score

as input features.

## 🖥️ Interactive Dashboard

The React dashboard provides:

- Dashboard overview
- Student records
- Performance analytics
- Prediction interface
- Reports
- Settings
- Interactive charts
- Colorful page-wise visual design

---

# 🛠️ Technologies Used

## 🐍 Programming Language

- Python
- JavaScript

## 📊 Data Analysis

- Pandas
- NumPy

## 🤖 Machine Learning

- Scikit-learn
- Logistic Regression

## 📉 Data Visualization

- Seaborn
- Matplotlib
- Recharts

## 🌐 Frontend

- React.js
- Vite
- HTML5
- CSS3
- JavaScript

## 🔧 Development Tools

- VS Code
- Git
- GitHub
- npm
- Python Virtual Environment

---

# 📂 Dataset

The project currently uses a structured student performance dataset.

### Dataset Features

| Column | Description |
|---|---|
| `Student_ID` | Unique student identifier |
| `Study_Hours` | Number of hours spent studying |
| `Attendance` | Student attendance percentage |
| `Assignment_Score` | Assignment performance score |
| `Final_Marks` | Final examination marks |
| `Result` | Final result: Pass or Fail |

### Example

| Student_ID | Study Hours | Attendance | Assignment Score | Final Marks | Result |
|---|---:|---:|---:|---:|---|
| S001 | 5 | 85 | 78 | 80 | Pass |
| S002 | 2 | 65 | 55 | 48 | Fail |
| S003 | 7 | 92 | 88 | 91 | Pass |
| S004 | 3 | 70 | 60 | 55 | Pass |
| S005 | 1 | 50 | 40 | 35 | Fail |

---

# 🔬 Data Intelligence Process

The system follows the following data intelligence workflow:

```text
                 Student Dataset
                       │
                       ▼
                Data Collection
                       │
                       ▼
                 Data Loading
                       │
                       ▼
              Data Inspection
                       │
                       ▼
             Data Cleaning & Analysis
                       │
                       ▼
             Statistical Analysis
                       │
                       ▼
             Data Visualization
                       │
                       ▼
              Feature Selection
                       │
                       ▼
             Machine Learning
                       │
                       ▼
              Pass / Fail Result
                       │
                       ▼
             React Dashboard
                       │
                       ▼
             Performance Insights
