const units = [
    {
        number: "UNIT 1",
        title: "C++ Basics",
        progress: 65,

        topics: [
            {
                name: "Introduction to C++",

                questions: [
                    {
                        title: "Understand Introduction to C++",
                        level: "Basic"
                    },
                    {
                        title: "Write your first C++ program",
                        level: "Basic"
                    },
                    {
                        title: "Understand C++ syntax",
                        level: "Medium"
                    },
                    {
                        title: "Solve a C++ basics challenge",
                        level: "Hard"
                    }
                ]
            },

            {
                name: "Variables and Data Types",

                questions: [
                    {
                        title: "Understand Variables and Data Types",
                        level: "Basic"
                    },
                    {
                        title: "Practice Variables and Data Types fundamentals",
                        level: "Basic"
                    },
                    {
                        title: "Apply Variables and Data Types in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve a Variables and Data Types challenge",
                        level: "Hard"
                    }
                ]
            },

            {
                name: "Input and Output",

                questions: [
                    {
                        title: "Understand input and output",
                        level: "Basic"
                    },
                    {
                        title: "Take input from the user",
                        level: "Basic"
                    },
                    {
                        title: "Format output using print()",
                        level: "Medium"
                    },
                    {
                        title: "Solve an input-output challenge",
                        level: "Hard"
                    }
                ]
            },

            {
                name: "Operators",

                questions: [
                    {
                        title: "Understand arithmetic operators",
                        level: "Basic"
                    },
                    {
                        title: "Practice comparison operators",
                        level: "Basic"
                    },
                    {
                        title: "Use logical operators",
                        level: "Medium"
                    },
                    {
                        title: "Solve an operators challenge",
                        level: "Hard"
                    }
                ]
            },

            {
                name: "Type Conversion",

                questions: [
                    {
                        title: "Understand type conversion",
                        level: "Basic"
                    },
                    {
                        title: "Convert string to integer",
                        level: "Basic"
                    },
                    {
                        title: "Use int(), float() and str()",
                        level: "Medium"
                    },
                    {
                        title: "Solve a type conversion challenge",
                        level: "Hard"
                    }
                ]
            }
        ]
    },

    {
        number: "UNIT 2",
        title: "Conditional Statements",
        progress: 45,

        topics: [
            {
                name: "if Statement",

                questions: [
                    {
                        title: "Understand if statement",
                        level: "Basic"
                    },
                    {
                        title: "Practice if statement",
                        level: "Basic"
                    },
                    {
                        title: "Apply if statement in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve an if statement challenge",
                        level: "Hard"
                    }
                ]
            },
            {
                name: "if-else Statement",

                questions: [
                    {
                        title: "Understand if-else",
                        level: "Basic"
                    },
                    {
                        title: "Practice if-else",
                        level: "Basic"
                    },
                    {
                        title: "Apply if-else in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve an if-else challenge",
                        level: "Hard"
                    }
                ]
            },

            {
                name: "elif Statement",

                questions: [
                    {
                        title: "Understand elif",
                        level: "Basic"
                    },
                    {
                        title: "Practice elif",
                        level: "Basic"
                    },
                    {
                        title: "Apply elif in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve an elif challenge",
                        level: "Hard"
                    }
                ]
            },
            {
                name: "Nested if Statements",
                questions: [
                    {
                        title: "Understand nested if",
                        level: "Basic"
                    },
                    {
                        title: "Practice nested if",
                        level: "Basic"
                    },
                    {
                        title: "Apply nested if in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve a nested if challenge",
                        level: "Hard"
                    }
                ]
            },
            {
                name: "Logical Operators",
                questions: [
                    {
                        title: "Understand logical operators",
                        level: "Basic"
                    },
                    {
                        title: "Practice logical operators",
                        level: "Basic"
                    },
                    {
                        title: "Apply logical operators in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve a logical operators challenge",
                        level: "Hard"
                    }
                ]
            }
            
        ]
    },
    {
        number: "UNIT 3",
        title: "Loops",
        progress: 30,
        topics: [
            {
                name: "for Loop",
                questions: [
                    {   
                    title: "Understand for loop",
                    level: "Basic"
                    },
                    {
                        title: "Practice for loop",
                        level: "Basic"
                    },  
                    {
                        title: "Apply for loop in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve a for loop challenge",
                        level: "Hard"
                    }
                ]
            },
            {
                name: "while Loop",
                questions: [
                    {
                        title: "Understand while loop",
                        level: "Basic"
                    },
                    {
                        title: "Practice while loop",
                        level: "Basic"
                    },
                    {
                        title: "Apply while loop in a program",
                        level: "Medium"
                    },
                    {
                        title: "Solve a while loop challenge",
                        level: "Hard"
                    }
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