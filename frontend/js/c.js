const units = [
    {
        number: "UNIT 1",
        title: "C Programming Basics",
        progress: 0,
        topics: [
            {
                name: "Basics & Input Output",
                questions: [
                    { title: "Print Hello World", level: "Basic" },
                    { title: "Take input and display output", level: "Basic" },
                    { title: "Perform arithmetic operations", level: "Basic" },
                    { title: "Find the largest of three numbers", level: "Medium" },
                    { title: "Check whether a number is positive, negative or zero", level: "Medium" }
                ]
            },
            {
                name: "Conditional Statements",
                questions: [
                    { title: "Check whether a number is even or odd", level: "Basic" },
                    { title: "Check whether a number is positive or negative", level: "Basic" },
                    { title: "Find the largest of three numbers using if-else", level: "Medium" },
                    { title: "Create a simple calculator using switch", level: "Medium" },
                    { title: "Create a menu-driven program using switch", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 2",
        title: "Loops & Functions",
        progress: 0,
        topics: [
            {
                name: "Loops",
                questions: [
                    { title: "Print numbers from 1 to N", level: "Basic" },
                    { title: "Find the sum of first N natural numbers", level: "Basic" },
                    { title: "Print multiplication table", level: "Basic" },
                    { title: "Find factorial of a number", level: "Medium" },
                    { title: "Check whether a number is prime", level: "Hard" }
                ]
            },
            {
                name: "Functions",
                questions: [
                    { title: "Create a function to add two numbers", level: "Basic" },
                    { title: "Find factorial using a function", level: "Basic" },
                    { title: "Check prime number using a function", level: "Medium" },
                    { title: "Find GCD using a function", level: "Medium" },
                    { title: "Create a calculator using functions", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 3",
        title: "Arrays & Strings",
        progress: 0,
        topics: [
            {
                name: "Arrays",
                questions: [
                    { title: "Find the sum of array elements", level: "Basic" },
                    { title: "Find the largest element in an array", level: "Basic" },
                    { title: "Find the smallest element in an array", level: "Basic" },
                    { title: "Reverse an array", level: "Medium" },
                    { title: "Find the second largest element", level: "Hard" }
                ]
            },
            {
                name: "Strings",
                questions: [
                    { title: "Find the length of a string", level: "Basic" },
                    { title: "Reverse a string", level: "Basic" },
                    { title: "Count vowels and consonants", level: "Medium" },
                    { title: "Check whether a string is palindrome", level: "Medium" },
                    { title: "Check whether two strings are anagrams", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 4",
        title: "Pointers & Structures",
        progress: 0,
        topics: [
            {
                name: "Pointers",
                questions: [
                    { title: "Print the address of a variable", level: "Basic" },
                    { title: "Access a variable using a pointer", level: "Basic" },
                    { title: "Swap two numbers using pointers", level: "Medium" },
                    { title: "Find array elements using pointers", level: "Medium" },
                    { title: "Perform string operations using pointers", level: "Hard" }
                ]
            },
            {
                name: "Structures",
                questions: [
                    { title: "Create a structure for student details", level: "Basic" },
                    { title: "Display structure members", level: "Basic" },
                    { title: "Store details of multiple students", level: "Medium" },
                    { title: "Find student with highest marks", level: "Medium" },
                    { title: "Create a student record management program", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 5",
        title: "Searching & Sorting",
        progress: 0,
        topics: [
            {
                name: "Searching",
                questions: [
                    { title: "Implement Linear Search", level: "Basic" },
                    { title: "Find the first occurrence of an element", level: "Basic" },
                    { title: "Count occurrences of an element", level: "Medium" },
                    { title: "Implement Binary Search", level: "Medium" },
                    { title: "Find the missing number in an array", level: "Hard" }
                ]
            },
            {
                name: "Sorting",
                questions: [
                    { title: "Implement Bubble Sort", level: "Basic" },
                    { title: "Implement Selection Sort", level: "Basic" },
                    { title: "Implement Insertion Sort", level: "Medium" },
                    { title: "Sort an array in ascending order", level: "Medium" },
                    { title: "Sort an array using a user-defined function", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 6",
        title: "Advanced C Programming",
        progress: 0,
        topics: [
            {
                name: "Dynamic Memory & Files",
                questions: [
                    { title: "Allocate memory using malloc", level: "Basic" },
                    { title: "Allocate memory using calloc", level: "Basic" },
                    { title: "Resize memory using realloc", level: "Medium" },
                    { title: "Write data into a file", level: "Medium" },
                    { title: "Read and display data from a file", level: "Hard" }
                ]
            },
            {
                name: "Recursion",
                questions: [
                    { title: "Print numbers using recursion", level: "Basic" },
                    { title: "Find factorial using recursion", level: "Basic" },
                    { title: "Generate Fibonacci series using recursion", level: "Medium" },
                    { title: "Find GCD using recursion", level: "Medium" },
                    { title: "Solve Tower of Hanoi using recursion", level: "Hard" }
                ]
            }
        ]
    }
];

// GET MAIN CONTAINER

const unitsContainer = document.getElementById("units");


// CREATE ALL UNITS

units.forEach((unit, unitIndex) => {

    const unitElement = document.createElement("section");

    unitElement.className = "unit";

    unitElement.innerHTML = `

        <div class="unit-header">

            <div class="unit-title">

                <span class="unit-number">
                    ${unit.number}
                </span>

                <h2>
                    ${unit.title}
                </h2>

            </div>


            <div class="unit-progress">

                <div class="progress-bar">

                    <span style="width: ${unit.progress}%"></span>

                </div>

                <span class="unit-arrow">
                    ⌄
                </span>

            </div>

        </div>


        <div class="unit-content"></div>

    `;


    const content = unitElement.querySelector(".unit-content");


    // CREATE TOPICS

    unit.topics.forEach((topic, topicIndex) => {

        const topicElement = document.createElement("div");

        topicElement.className = "topic";


        topicElement.innerHTML = `

            <div class="topic-header">

                <div class="topic-name">

                    <span class="topic-arrow">
                        ›
                    </span>

                    <strong>
                        ${topic.name}
                    </strong>

                </div>

                <span class="question-count">
                    ${topic.questions.length} questions
                </span>

            </div>


            <div class="questions"></div>

        `;


        const questionsContainer =
            topicElement.querySelector(".questions");


        // CREATE QUESTIONS

        topic.questions.forEach((question, questionIndex) => {

            const questionElement =
                document.createElement("div");

            questionElement.className = "question";


            questionElement.innerHTML = `

                <span class="number">
                    ${questionIndex + 1}.
                </span>

                <span class="question-name">
                    ${question.title}
                </span>

                <span class="difficulty ${question.level.toLowerCase()}">
                    ${question.level}
                </span>

                <button class="solve-btn">
                    Solve
                </button>

            `;


            // SOLVE BUTTON

            const solveButton =
                questionElement.querySelector(".solve-btn");


            solveButton.addEventListener("click", function () {

                openQuestion(
                    unitIndex,
                    topicIndex,
                    questionIndex
                );

            });


            questionsContainer.appendChild(
                questionElement
            );

        });


        // TOPIC CLICK

        const topicHeader =
            topicElement.querySelector(".topic-header");


        topicHeader.addEventListener("click", function () {

            topicHeader.classList.toggle("active");

        });


        content.appendChild(topicElement);

    });


    // UNIT CLICK

    const unitHeader =
        unitElement.querySelector(".unit-header");


    unitHeader.addEventListener("click", function () {

        unitHeader.classList.toggle("active");

    });


    unitsContainer.appendChild(unitElement);

});


// OPEN QUESTION

function openQuestion(unit, topic, question) {

    console.log(
        "Unit:",
        unit,
        "Topic:",
        topic,
        "Question:",
        question
    );

    alert(
        "Opening Question " +
        (question + 1)
    );

}