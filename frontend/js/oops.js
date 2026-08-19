const units = [
    {
        number: "UNIT 1",
        title: "Java Fundamentals",
        progress: 0,
        topics: [
            {
                name: "Java Basics",
                questions: [
                    { title: "Print Hello World in Java", level: "Basic" },
                    { title: "Take input from the user", level: "Basic" },
                    { title: "Perform arithmetic operations", level: "Basic" },
                    { title: "Find the largest of three numbers", level: "Medium" },
                    { title: "Check whether a number is prime", level: "Hard" }
                ]
            },
            {
                name: "Classes, Objects & Methods",
                questions: [
                    { title: "Create a class and object", level: "Basic" },
                    { title: "Display student details using a class", level: "Basic" },
                    { title: "Create a method to add two numbers", level: "Medium" },
                    { title: "Create a method to calculate factorial", level: "Medium" },
                    { title: "Create a calculator using methods", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 2",
        title: "Core OOP Concepts",
        progress: 0,
        topics: [
            {
                name: "Constructors & Encapsulation",
                questions: [
                    { title: "Create a class using a default constructor", level: "Basic" },
                    { title: "Create a class using a parameterized constructor", level: "Basic" },
                    { title: "Create private variables with getter and setter", level: "Medium" },
                    { title: "Create an encapsulated Student class", level: "Medium" },
                    { title: "Create an encapsulated BankAccount class", level: "Hard" }
                ]
            },
            {
                name: "Inheritance & Polymorphism",
                questions: [
                    { title: "Create a parent and child class", level: "Basic" },
                    { title: "Implement multilevel inheritance", level: "Basic" },
                    { title: "Implement method overloading", level: "Medium" },
                    { title: "Implement method overriding", level: "Medium" },
                    { title: "Demonstrate runtime polymorphism", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 3",
        title: "Abstraction & Interfaces",
        progress: 0,
        topics: [
            {
                name: "Abstract Classes",
                questions: [
                    { title: "Create an abstract Shape class", level: "Basic" },
                    { title: "Implement an abstract method", level: "Basic" },
                    { title: "Calculate area using an abstract class", level: "Medium" },
                    { title: "Create an abstract Vehicle class", level: "Medium" },
                    { title: "Implement a real-world abstract class example", level: "Hard" }
                ]
            },
            {
                name: "Interfaces",
                questions: [
                    { title: "Create and implement a simple interface", level: "Basic" },
                    { title: "Create an interface for calculating area", level: "Basic" },
                    { title: "Implement multiple interfaces", level: "Medium" },
                    { title: "Create a payment interface", level: "Medium" },
                    { title: "Implement a real-world interface example", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 4",
        title: "Arrays, Strings & Collections",
        progress: 0,
        topics: [
            {
                name: "Arrays & Strings",
                questions: [
                    { title: "Find the largest element in an array", level: "Basic" },
                    { title: "Reverse an array", level: "Basic" },
                    { title: "Reverse a string", level: "Basic" },
                    { title: "Check whether a string is palindrome", level: "Medium" },
                    { title: "Check whether two strings are anagrams", level: "Hard" }
                ]
            },
            {
                name: "Java Collections",
                questions: [
                    { title: "Create and display an ArrayList", level: "Basic" },
                    { title: "Add and remove elements from ArrayList", level: "Basic" },
                    { title: "Remove duplicate values using HashSet", level: "Medium" },
                    { title: "Search for a key in HashMap", level: "Medium" },
                    { title: "Count frequency of elements using HashMap", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 5",
        title: "Exception & File Handling",
        progress: 0,
        topics: [
            {
                name: "Exception Handling",
                questions: [
                    { title: "Handle division by zero using try-catch", level: "Basic" },
                    { title: "Handle array index exception", level: "Basic" },
                    { title: "Handle multiple exceptions", level: "Medium" },
                    { title: "Use try-catch-finally", level: "Medium" },
                    { title: "Create a custom exception", level: "Hard" }
                ]
            },
            {
                name: "File Handling",
                questions: [
                    { title: "Create a file using Java", level: "Basic" },
                    { title: "Write data into a file", level: "Basic" },
                    { title: "Read data from a file", level: "Medium" },
                    { title: "Append data to an existing file", level: "Medium" },
                    { title: "Copy contents from one file to another", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 6",
        title: "Advanced Java",
        progress: 0,
        topics: [
            {
                name: "Multithreading",
                questions: [
                    { title: "Create a thread by extending Thread class", level: "Basic" },
                    { title: "Create a thread using Runnable interface", level: "Basic" },
                    { title: "Create multiple threads", level: "Medium" },
                    { title: "Implement thread synchronization", level: "Medium" },
                    { title: "Create a synchronized banking system", level: "Hard" }
                ]
            },
            {
                name: "Generics & Lambda",
                questions: [
                    { title: "Create a generic class", level: "Basic" },
                    { title: "Create a generic method", level: "Basic" },
                    { title: "Use generics with ArrayList", level: "Medium" },
                    { title: "Create a simple lambda expression", level: "Medium" },
                    { title: "Sort a list using lambda expression", level: "Hard" }
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