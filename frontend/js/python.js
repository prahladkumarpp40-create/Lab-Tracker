const units = [
    {
        number: "UNIT 1",
        title: "Python Basics",
        progress: 0,
        topics: [
            {
                name: "Basics & Input Output",
                questions: [
                    { title: "Print Hello World", level: "Basic" },
                    { title: "Take input from the user and display it", level: "Basic" },
                    { title: "Perform arithmetic operations on two numbers", level: "Basic" },
                    { title: "Find the largest of three numbers", level: "Medium" },
                    { title: "Check whether a number is positive, negative or zero", level: "Medium" }
                ]
            },
            {
                name: "Conditional Statements",
                questions: [
                    { title: "Check whether a number is even or odd", level: "Basic" },
                    { title: "Check whether a year is a leap year", level: "Basic" },
                    { title: "Find the largest of three numbers using if-else", level: "Medium" },
                    { title: "Create a simple calculator using if-elif", level: "Medium" },
                    { title: "Create a menu-driven program", level: "Hard" }
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
                    { title: "Print the multiplication table of a number", level: "Basic" },
                    { title: "Find the factorial of a number", level: "Medium" },
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
        title: "Lists, Tuples & Dictionaries",
        progress: 0,
        topics: [
            {
                name: "Lists & Tuples",
                questions: [
                    { title: "Find the sum of elements in a list", level: "Basic" },
                    { title: "Find the largest element in a list", level: "Basic" },
                    { title: "Reverse a list", level: "Basic" },
                    { title: "Remove duplicate elements from a list", level: "Medium" },
                    { title: "Find common elements in two lists", level: "Hard" }
                ]
            },
            {
                name: "Dictionaries & Sets",
                questions: [
                    { title: "Create and display a dictionary", level: "Basic" },
                    { title: "Add and remove elements from a dictionary", level: "Basic" },
                    { title: "Count frequency of elements using a dictionary", level: "Medium" },
                    { title: "Find common elements in two sets", level: "Medium" },
                    { title: "Remove duplicate values using a set", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 4",
        title: "Strings & Recursion",
        progress: 0,
        topics: [
            {
                name: "Strings",
                questions: [
                    { title: "Find the length of a string", level: "Basic" },
                    { title: "Reverse a string", level: "Basic" },
                    { title: "Count vowels and consonants", level: "Medium" },
                    { title: "Check whether a string is palindrome", level: "Medium" },
                    { title: "Check whether two strings are anagrams", level: "Hard" }
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
    },

    {
        number: "UNIT 5",
        title: "Object Oriented Programming",
        progress: 0,
        topics: [
            {
                name: "Classes & Objects",
                questions: [
                    { title: "Create a class and object", level: "Basic" },
                    { title: "Create a Student class and display details", level: "Basic" },
                    { title: "Create a class with methods", level: "Medium" },
                    { title: "Create a class using a constructor", level: "Medium" },
                    { title: "Create a simple Bank Account class", level: "Hard" }
                ]
            },
            {
                name: "Inheritance & Polymorphism",
                questions: [
                    { title: "Create a parent and child class", level: "Basic" },
                    { title: "Implement single inheritance", level: "Basic" },
                    { title: "Implement multilevel inheritance", level: "Medium" },
                    { title: "Demonstrate method overriding", level: "Medium" },
                    { title: "Create a real-world inheritance example", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 6",
        title: "Advanced Python",
        progress: 0,
        topics: [
            {
                name: "File Handling & Exceptions",
                questions: [
                    { title: "Create and write to a file", level: "Basic" },
                    { title: "Read data from a file", level: "Basic" },
                    { title: "Append data to a file", level: "Medium" },
                    { title: "Handle division by zero using exception handling", level: "Medium" },
                    { title: "Create a program using multiple exception types", level: "Hard" }
                ]
            },
            {
                name: "Modules & Lambda",
                questions: [
                    { title: "Import and use a Python module", level: "Basic" },
                    { title: "Create a user-defined module", level: "Basic" },
                    { title: "Create a simple lambda function", level: "Medium" },
                    { title: "Sort a list using lambda", level: "Medium" },
                    { title: "Filter elements using lambda", level: "Hard" }
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
                    v
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
                        >
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