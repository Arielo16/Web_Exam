const questions = [
    {
        question: "¿Qué es HTML?",
        options: [
            "Lenguaje de marcado de hipertexto",
            "Lenguaje de programación",
            "Base de datos",
            "Sistema operativo"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa CSS?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de las siguientes no es un lenguaje de programación?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa SQL?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "Stylish Query Language",
            "Systematic Query Language"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el resultado de 5 + 3 * 2?",
        options: [
            "16",
            "11",
            "10",
            "13"
        ],
        correctAnswer: 1
    },
    {
        question: "En JavaScript, ¿qué función se utiliza para imprimir algo en la consola?",
        options: [
            "console.print()",
            "print()",
            "console.log()",
            "log()"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué tipo de variable no cambia su valor durante la ejecución de un programa en JavaScript?",
        options: [
            "Variable global",
            "Variable local",
            "Variable constante",
            "Variable mutable"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es un bucle 'for' en programación?",
        options: [
            "Una estructura de control",
            "Una base de datos",
            "Un tipo de variable",
            "Una función matemática"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es un array en JavaScript?",
        options: [
            "Una estructura de datos para almacenar varios elementos",
            "Una función para sumar números",
            "Un tipo de variable booleana",
            "Un método para seleccionar elementos del DOM"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué hace el método push() en JavaScript?",
        options: [
            "Agrega un elemento al final de un array",
            "Elimina el primer elemento de un array",
            "Reemplaza un elemento en un array",
            "Invierte el orden de los elementos en un array"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa API en el contexto de desarrollo web?",
        options: [
            "Application Program Interface",
            "Application Programming Interface",
            "Advanced Programming Interface",
            "Advanced Program Interaction"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué hace el método addEventListener() en JavaScript?",
        options: [
            "Registra un evento a un elemento HTML",
            "Cambia el estilo de un elemento HTML",
            "Añade un nuevo elemento al DOM",
            "Elimina un evento de un elemento HTML"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es JSON?",
        options: [
            "JavaScript Object Networking",
            "JavaScript Order Number",
            "JavaScript Online Network",
            "JavaScript Object Notation"
        ],
        correctAnswer: 3
    },
    {
        question: "¿Qué es Git?",
        options: [
            "Una base de datos",
            "Un sistema de control de versiones",
            "Un lenguaje de programación",
            "Una red social para desarrolladores"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué hace el comando git commit?",
        options: [
            "Confirma los cambios en el repositorio local",
            "Sube los cambios al repositorio remoto",
            "Elimina el último commit",
            "Crea una nueva rama en el repositorio"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es un breakpoint en el contexto de depuración de código?",
        options: [
            "Un error crítico en el programa",
            "Una línea de código con errores",
            "Un punto donde el programa se detiene para inspeccionar variables",
            "Un punto de inicio en el código"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué hace el comando npm install en Node.js?",
        options: [
            "Configura el entorno de desarrollo",
            "Inicia un nuevo proyecto",
            "Ejecuta el código",
            "Instala paquetes de Node.js"
        ],
        correctAnswer: 3
    },
    {
        question: "¿Qué es un servidor HTTP?",
        options: [
            "Un programa que sirve páginas web",
            "Un lenguaje de programación",
            "Un sistema operativo",
            "Una base de datos"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es un bucle 'while' en programación?",
        options: [
            "Un tipo de variable",
            "Una estructura de control",
            "Un método de array",
            "Un tipo de dato booleano"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es AJAX en el desarrollo web?",
        options: [
            "Asynchronous JavaScript and XML",
            "Advanced JavaScript and XML",
            "Asynchronous Java and XML",
            "Advanced Java and XML"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es una función en programación?",
        options: [
            "Una página web",
            "Una base de datos",
            "Un tipo de variable",
            "Un bloque de código reutilizable"
        ],
        correctAnswer: 3
    },
    {
        question: "¿Qué significa JVM en Java?",
        options: [
            "JavaScript Virtual Machine",
            "Java Variable Machine",
            "Java Virtual Machine",
            "JavaScript Variable Machine"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué hace el comando javac en Java?",
        options: [
            "Compila código Java a bytecode",
            "Ejecuta código Java",
            "Crea un nuevo proyecto en Java",
            "Instala Java en el sistema"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es MVC en arquitectura de software?",
        options: [
            "Model-View-Command",
            "Most Valuable Code",
            "Multi-Version Control",
            "Model-View-Controller"
        ],
        correctAnswer: 3
    },
    {
        question: "¿Qué significa HTML5?",
        options: [
            "HyperText Markup Language version 5",
            "HyperText Machine Language version 5",
            "High-level Text Markup Language version 5",
            "High-level Machine Language version 5"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es un framework en desarrollo web?",
        options: [
            "Una estructura de trabajo",
            "Un tipo de variable",
            "Un sistema operativo",
            "Un entorno de desarrollo"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es XSS (Cross-Site Scripting) en seguridad web?",
        options: [
            "Un método de autenticación",
            "Un lenguaje de programación",
            "Un tipo de ataque",
            "Un tipo de base de datos"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es un IDE en desarrollo de software?",
        options: [
            "Integrated Development Environment",
            "Interactive Development Environment",
            "Intelligent Development Environment",
            "Integrated Deployment Environment"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es un método en programación orientada a objetos?",
        options: [
            "Una función asociada a una clase",
            "Un tipo de variable",
            "Un sistema de control",
            "Una base de datos"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa CRUD en desarrollo de aplicaciones?",
        options: [
            "Control, Restart, Update, Debug",
            "Control, Read, Update, Delete",
            "Create, Reset, Update, Debug",
            "Create, Read, Update, Delete"
        ],
        correctAnswer: 3
    }
];

const NUM_QUESTIONS_IN_EXAM = 10; 
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let examQuestions = [];

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('rules-screen').classList.remove('hidden');
});

document.getElementById('begin-btn').addEventListener('click', () => {
    document.getElementById('rules-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    startQuiz();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < NUM_QUESTIONS_IN_EXAM) {
        showQuestion();
    } else {
        endQuiz();
    }
});

document.getElementById('retry-btn').addEventListener('click', () => {
    resetQuiz();
});

document.getElementById('exit-btn').addEventListener('click', () => {
    location.reload();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    examQuestions = selectRandomQuestions(questions, NUM_QUESTIONS_IN_EXAM);
    showQuestion();
}

function selectRandomQuestions(allQuestions, numQuestions) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

function showQuestion() {
    resetTimer();
    const questionObj = examQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionObj.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionObj.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index, questionObj.correctAnswer));
        optionsContainer.appendChild(button);
    });
    updateProgress();
}

function selectAnswer(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('#options button');
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
    });
    if (selectedIndex === correctIndex) {
        score++;
    }
    document.getElementById('next-btn').classList.remove('hidden');
    clearInterval(timer);
}

function resetTimer() {
    timeLeft = 15;
    document.getElementById('timer').textContent = timeLeft;
    document.getElementById('next-btn').classList.add('hidden');
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showCorrectAnswer();
            document.getElementById('next-btn').classList.remove('hidden');
        }
    }, 1000);
}

function showCorrectAnswer() {
    const options = document.querySelectorAll('#options button');
    const questionObj = examQuestions[currentQuestionIndex];
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === questionObj.correctAnswer) {
            option.classList.add('correct');
        }
    });
}

function updateProgress() {
    if (currentQuestionIndex < NUM_QUESTIONS_IN_EXAM) {
        const progressText = document.getElementById('progress-text');
        progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${NUM_QUESTIONS_IN_EXAM}`;
    }
}

function endQuiz() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    const scoreText = document.getElementById('score');
    scoreText.textContent = `Puntuación: ${score}/${NUM_QUESTIONS_IN_EXAM}`;
    if (score >= 8) {
        scoreText.textContent += ' ¡Felicitaciones! ';
    } else if (score >= 5) {
        scoreText.textContent += ' ¡Que bien!';
    } else if (score >= 1) {
        scoreText.textContent += ' ¡Hay que estudiar!';
    } else {
        scoreText.textContent += ' Lo siento.';
    }
}

function resetQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}
