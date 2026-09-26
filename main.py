import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
# Load dataset
df = pd.read_csv("data/student_data.csv")

# -------------------------------
# PANDAS DATA ANALYSIS
# -------------------------------

print("\n--- First 5 Records ---")
print(df.head())

print("\n--- Dataset Information ---")
print(df.info())

print("\n--- Missing Values ---")
print(df.isnull().sum())

# -------------------------------
# NUMPY ANALYSIS
# -------------------------------

marks = df["Final_Marks"].to_numpy()

average_marks = np.mean(marks)
highest_marks = np.max(marks)
lowest_marks = np.min(marks)
median_marks = np.median(marks)
standard_deviation = np.std(marks)

print("\n--- NumPy Analysis ---")
print("Average Marks:", average_marks)
print("Highest Marks:", highest_marks)
print("Lowest Marks:", lowest_marks)
print("Median Marks:", median_marks)
print("Standard Deviation:", standard_deviation)

# -------------------------------
# SEABORN VISUALIZATION
# -------------------------------

# 1. Study Hours vs Final Marks
plt.figure(figsize=(8, 5))

sns.scatterplot(
    x="Study_Hours",
    y="Final_Marks",
    data=df,
    s=100
)

plt.title("Study Hours vs Final Marks")
plt.xlabel("Study Hours")
plt.ylabel("Final Marks")
plt.show()


# 2. Attendance vs Final Marks
plt.figure(figsize=(8, 5))

sns.scatterplot(
    x="Attendance",
    y="Final_Marks",
    data=df,
    s=100
)

plt.title("Attendance vs Final Marks")
plt.xlabel("Attendance (%)")
plt.ylabel("Final Marks")
plt.show()


# 3. Pass vs Fail Distribution
plt.figure(figsize=(7, 5))

sns.countplot(
    x="Result",
    data=df
)

plt.title("Student Result Distribution")
plt.xlabel("Result")
plt.ylabel("Number of Students")
plt.show()


# 4. Correlation Heatmap
plt.figure(figsize=(8, 6))

numeric_columns = [
    "Study_Hours",
    "Attendance",
    "Assignment_Score",
    "Final_Marks"
]

correlation = df[numeric_columns].corr()

sns.heatmap(
    correlation,
    annot=True,
    cmap="coolwarm",
    fmt=".2f"
)

plt.title("Student Performance Correlation Heatmap")
plt.show()

# -------------------------------
# MACHINE LEARNING
# -------------------------------

# Convert Result into numbers
df["Result_Number"] = df["Result"].map({
    "Fail": 0,
    "Pass": 1
})

# Features
X = df[[
    "Study_Hours",
    "Attendance",
    "Assignment_Score"
]]

# Target
y = df["Result_Number"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create Logistic Regression model
model = LogisticRegression()

# Train model
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("\n--- Machine Learning Results ---")
print("Accuracy:", accuracy)

print("\n--- Classification Report ---")
print(classification_report(
    y_test,
    y_pred,
    target_names=["Fail", "Pass"],
    zero_division=0
))

# -------------------------------
# LIVE STUDENT PREDICTION
# -------------------------------

print("\n--- Student Performance Prediction ---")

study_hours = float(input("Enter Study Hours: "))
attendance = float(input("Enter Attendance (%): "))
assignment_score = float(input("Enter Assignment Score: "))

new_student = np.array([
    [study_hours, attendance, assignment_score]
])

prediction = model.predict(new_student)

if prediction[0] == 1:
    print("\nPrediction: PASS")
else:
    print("\nPrediction: FAIL")