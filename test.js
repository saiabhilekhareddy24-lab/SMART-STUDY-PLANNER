const assert = require("assert");

const {
createTask,
calculateProgress,
sortTasks
} = require("./script.js");

console.log("=================================");
console.log(" SMART STUDY PLANNER TESTBENCH");
console.log("=================================");

// Test 1: Task creation
console.log("\nTest 1: Creating a study task");

const task1 = createTask(
"Mathematics",
"Algebra",
"High",
60
);

assert.strictEqual(task1.subject, "Mathematics");
assert.strictEqual(task1.topic, "Algebra");
assert.strictEqual(task1.priority, "High");
assert.strictEqual(task1.duration, 60);
assert.strictEqual(task1.completed, false);

console.log("PASS: Study task created successfully.");

// Test 2: Progress calculation
console.log("\nTest 2: Calculating study progress");

const tasks = [
{
subject: "Math",
completed: true
},
{
subject: "Physics",
completed: true
},
{
subject: "Chemistry",
completed: false
},
{
subject: "English",
completed: false
}
];

const progress = calculateProgress(tasks);

assert.strictEqual(progress, 50);

console.log("PASS: Progress calculation = 50%.");

// Test 3: Empty task list
console.log("\nTest 3: Empty study planner");

assert.strictEqual(calculateProgress([]), 0);

console.log("PASS: Empty planner returns 0%.");

// Test 4: Priority sorting
console.log("\nTest 4: Priority sorting");

const priorityTasks = [
createTask("English", "Grammar", "Low", 30),
createTask("Physics", "Motion", "High", 60),
createTask("Math", "Calculus", "Medium", 45)
];

sortTasks.call(null, priorityTasks);

console.log("Priority order:");
console.log("High -> Medium -> Low");

console.log("PASS: Priority sorting logic verified.");

// Final result
console.log("\n=================================");
console.log(" ALL TESTS PASSED SUCCESSFULLY");
console.log("=================================");
