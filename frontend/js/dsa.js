const units = [
    {
        number: "UNIT 1",
        title: "DSA Basics",
        progress: 0,
        topics: [
            {
                name: "Arrays Basics",
                questions: [
                    { title: "Find the sum of all elements in an array", level: "Basic" },
                    { title: "Find the largest element in an array", level: "Basic" },
                    { title: "Find the smallest element in an array", level: "Medium" },
                    { title: "Find the second largest element", level: "Medium" },
                    { title: "Reverse an array", level: "Hard" }
                ]
            },
            {
                name: "Array Searching",
                questions: [
                    { title: "Implement Linear Search", level: "Basic" },
                    { title: "Find the first occurrence of an element", level: "Basic" },
                    { title: "Count occurrences of an element", level: "Basic" },
                    { title: "Implement Binary Search", level: "Medium" },
                    { title: "Find the missing number from an array", level: "Medium" }
                ]
            }
        ]
    },

    {
        number: "UNIT 2",
        title: "Strings",
        progress: 0,
        topics: [
            {
                name: "String Basics",
                questions: [
                    { title: "Reverse a string", level: "Basic" },
                    { title: "Count vowels and consonants", level: "Basic" },
                    { title: "Count the frequency of each character", level: "Medium" },
                    { title: "Check whether a string is a palindrome", level: "Medium" },
                    { title: "Find the first non-repeating character", level: "Hard" }
                ]
            },
            {
                name: "String Manipulation",
                questions: [
                    { title: "Remove spaces from a string", level: "Basic" },
                    { title: "Convert lowercase characters to uppercase", level: "Basic" },
                    { title: "Remove duplicate characters", level: "Medium" },
                    { title: "Check whether two strings are anagrams", level: "Medium" },
                    { title: "Find the longest word in a sentence", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 3",
        title: "Linked List",
        progress: 0,
        topics: [
            {
                name: "Singly Linked List",
                questions: [
                    { title: "Create and display a linked list", level: "Basic" },
                    { title: "Insert a node at the beginning", level: "Basic" },
                    { title: "Insert a node at the end", level: "Medium" },
                    { title: "Delete a node from a linked list", level: "Medium" },
                    { title: "Search for an element", level: "Hard" }
                ]
            },
            {
                name: "Linked List Problems",
                questions: [
                    { title: "Find the length of a linked list", level: "Basic" },
                    { title: "Reverse a linked list", level: "Basic" },
                    { title: "Find the middle node", level: "Medium" },
                    { title: "Find the nth node from the end", level: "Medium" },
                    { title: "Detect a cycle in a linked list", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 4",
        title: "Stack",
        progress: 0,
        topics: [
            {
                name: "Stack Implementation",
                questions: [
                    { title: "Implement stack using an array", level: "Basic" },
                    { title: "Implement Push operation", level: "Basic" },
                    { title: "Implement Pop operation", level: "Medium" },
                    { title: "Implement Peek operation", level: "Medium" },
                    { title: "Display all stack elements", level: "Hard" }
                ]
            },
            {
                name: "Stack Applications",
                questions: [
                    { title: "Reverse a string using stack", level: "Basic" },
                    { title: "Check balanced parentheses", level: "Basic" },
                    { title: "Convert infix expression to postfix", level: "Medium" },
                    { title: "Evaluate a postfix expression", level: "Medium" },
                    { title: "Find the next greater element", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 5",
        title: "Queue",
        progress: 0,
        topics: [
            {
                name: "Queue Implementation",
                questions: [
                    { title: "Implement a queue using an array", level: "Basic" },
                    { title: "Implement Enqueue operation", level: "Basic" },
                    { title: "Implement Dequeue operation", level: "Medium" },
                    { title: "Display queue elements", level: "Medium" },
                    { title: "Check whether the queue is empty or full", level: "Hard" }
                ]
            },
            {
                name: "Circular Queue",
                questions: [
                    { title: "Implement a circular queue", level: "Basic" },
                    { title: "Insert an element into circular queue", level: "Basic" },
                    { title: "Delete an element from circular queue", level: "Medium" },
                    { title: "Display circular queue", level: "Medium" },
                    { title: "Implement circular queue using an array", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 6",
        title: "Recursion",
        progress: 0,
        topics: [
            {
                name: "Basic Recursion",
                questions: [
                    { title: "Print numbers from 1 to N", level: "Basic" },
                    { title: "Find factorial of a number", level: "Basic" },
                    { title: "Find the sum of first N natural numbers", level: "Medium" },
                    { title: "Generate Fibonacci series", level: "Medium" },
                    { title: "Find the power of a number", level: "Hard" }
                ]
            },
            {
                name: "Recursive Problems",
                questions: [
                    { title: "Reverse a number using recursion", level: "Basic" },
                    { title: "Find GCD using recursion", level: "Basic" },
                    { title: "Binary search using recursion", level: "Medium" },
                    { title: "Calculate sum of digits using recursion", level: "Medium" },
                    { title: "Solve Tower of Hanoi", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 7",
        title: "Searching & Sorting",
        progress: 0,
        topics: [
            {
                name: "Searching",
                questions: [
                    { title: "Implement Linear Search", level: "Basic" },
                    { title: "Implement Binary Search", level: "Basic" },
                    { title: "Find first and last position of an element", level: "Medium" },
                    { title: "Search an element in a sorted array", level: "Medium" },
                    { title: "Search in a rotated sorted array", level: "Hard" }
                ]
            },
            {
                name: "Sorting",
                questions: [
                    { title: "Implement Bubble Sort", level: "Basic" },
                    { title: "Implement Selection Sort", level: "Basic" },
                    { title: "Implement Insertion Sort", level: "Basic" },
                    { title: "Implement Merge Sort", level: "Medium" },
                    { title: "Implement Quick Sort", level: "Medium" },
                    { title: "Sort an array containing only 0, 1 and 2", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 8",
        title: "Trees",
        progress: 0,
        topics: [
            {
                name: "Binary Tree",
                questions: [
                    { title: "Create a binary tree", level: "Basic" },
                    { title: "Perform Inorder traversal", level: "Basic" },
                    { title: "Perform Preorder traversal", level: "Medium" },
                    { title: "Perform Postorder traversal", level: "Medium" },
                    { title: "Find the height of a binary tree", level: "Hard" }
                ]
            },
            {
                name: "Binary Search Tree",
                questions: [
                    { title: "Insert elements into a BST", level: "Basic" },
                    { title: "Search for an element in BST", level: "Basic" },
                    { title: "Find minimum element in BST", level: "Medium" },
                    { title: "Find maximum element in BST", level: "Medium" },
                    { title: "Delete a node from BST", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 9",
        title: "Heap & Hashing",
        progress: 0,
        topics: [
            {
                name: "Heap",
                questions: [
                    { title: "Implement Max Heap", level: "Basic" },
                    { title: "Implement Min Heap", level: "Basic" },
                    { title: "Insert an element into a heap", level: "Medium" },
                    { title: "Delete an element from a heap", level: "Medium" },
                    { title: "Implement Heap Sort", level: "Hard" }
                ]
            },
            {
                name: "Hashing",
                questions: [
                    { title: "Implement a basic hash table", level: "Basic" },
                    { title: "Insert an element into a hash table", level: "Basic" },
                    { title: "Search an element in a hash table", level: "Medium" },
                    { title: "Implement Linear Probing", level: "Medium" },
                    { title: "Handle collisions using chaining", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 10",
        title: "Graph",
        progress: 0,
        topics: [
            {
                name: "Graph Representation",
                questions: [
                    { title: "Implement graph using adjacency matrix", level: "Basic" },
                    { title: "Implement graph using adjacency list", level: "Basic" },
                    { title: "Add an edge to a graph", level: "Medium" },
                    { title: "Display all vertices and edges", level: "Hard" }
                ]
            },
            {
                name: "Graph Traversal",
                questions: [
                    { title: "Implement BFS", level: "Basic" },
                    { title: "Implement DFS", level: "Basic" },
                    { title: "Count connected components", level: "Medium" },
                    { title: "Detect a cycle in a graph", level: "Hard" }
                ]
            },
            {
                name: "Shortest Path",
                questions: [
                    { title: "Find shortest path using BFS", level: "Basic" },
                    { title: "Implement Dijkstra's Algorithm", level: "Medium" },
                    { title: "Implement Floyd-Warshall Algorithm", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 11",
        title: "Greedy Algorithms",
        progress: 0,
        topics: [
            {
                name: "Greedy Problems",
                questions: [
                    { title: "Solve the Activity Selection Problem", level: "Basic" },
                    { title: "Solve the Fractional Knapsack Problem", level: "Basic" },
                    { title: "Find the minimum number of coins", level: "Medium" },
                    { title: "Solve the Job Sequencing Problem", level: "Medium" },
                    { title: "Solve the Minimum Platforms Problem", level: "Hard" }
                ]
            }
        ]
    },

    {
        number: "UNIT 12",
        title: "Dynamic Programming",
        progress: 0,
        topics: [
            {
                name: "Basic DP",
                questions: [
                    { title: "Implement Fibonacci using Dynamic Programming", level: "Basic" },
                    { title: "Solve the Climbing Stairs problem", level: "Basic" },
                    { title: "Solve Minimum Cost Climbing Stairs", level: "Medium" },
                    { title: "Find Maximum Sum of Non-Adjacent Elements", level: "Hard" }
                ]
            },
            {
                name: "Advanced DP",
                questions: [
                    { title: "Solve the 0/1 Knapsack Problem", level: "Basic" },
                    { title: "Find Longest Common Subsequence", level: "Medium" },
                    { title: "Find Longest Increasing Subsequence", level: "Medium" },
                    { title: "Solve the Coin Change Problem", level: "Medium" },
                    { title: "Solve Matrix Chain Multiplication", level: "Hard" }
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