const assert = require("assert");

const {
createTask,
calculateProgress,
priorityValue
} = require("./script.js");

console.log("=================================");
console.log(" SMART STUDY PLANNER TESTBENCH");
console.log("=================================");

// Test 1: Task creation
console.log("\nTest 1: Task Creation");

const task = createTask(
"Mathematics",
"Algebra",
"High",
60
);

assert.strictEqual(task.subject, "Mathematics");
assert.strictEqual(task.topic, "Algebra");
assert.strictEqual(task.priority, "High");
assert.strictEqual(task.duration, 60);
assert.strictEqual(task.completed, false);

console.log("PASS");

// Test 2: Progress calculation
console.log("\nTest 2: Progress Calculation");

const tasks = [
{ completed: true },
{ completed: true },
{ completed: false },
{ completed: false }
];

const progress = calculateProgress(tasks);

assert.strictEqual(progress, 50);

console.log("PASS: Progress = 50%");

// Test 3: Empty planner
console.log("\nTest 3: Empty Planner");

assert.strictEqual(calculateProgress([]), 0);

console.log("PASS: Empty planner = 0%");

// Test 4: Priority values
console.log("\nTest 4: Priority Verification");

assert.strictEqual(priorityValue.High, 1);
assert.strictEqual(priorityValue.Medium, 2);
assert.strictEqual(priorityValue.Low, 3);

console.log("PASS: High -> Medium -> Low");

// Test 5: Different task durations
console.log("\nTest 5: Duration Verification");

const physics = createTask(
"Physics",
"Motion",
"Medium",
45
);

assert.strictEqual(physics.duration, 45);

console.log("PASS: Duration = 45 minutes");

console.log("\n=================================");
console.log(" ALL TESTS PASSED SUCCESSFULLY");
console.log("=================================");
