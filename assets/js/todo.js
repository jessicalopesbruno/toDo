import { addTask, getAllTasks } from "./utils/domFunctions.js";

// Tarefas.Armazenar em algum lugar. Por enquanto, armazenas em memória.
// usamos uma constante. Armazenamenton em memória é volátil.

// Em localStorage e sessionStorage.

// NodeJS - MongoDB ou Firebase. Armazenamento em banco de dados. Armazenamento Persistente.

//

const db = [
    {
        id: 1,
        title: 'Concluir App Conexão Arte',
        steps: [
            {step: 'Ajustar textos'},
            {step: 'Trocar imagerns para imagens públicas'},
            {step: 'Publicar no Expo'},
            {step: 'Publicar no Expo Store Connect'},
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00', 
    },

    {
        id: 2,
        title: 'Aula 4 Fiap - Avanade',
        steps: [{step: 'Atributos Globais'},{step: 'Estrutura CSS'}],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00', 
    },
];

getAllTasks(db);

// console.log(db[0].title);

const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector('#addNewTask');
form.addEventListener("submit", (e) => {
       e.preventDefault();
})

newTask.addEventListener('keyup', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        if (!newTask.value) {
            alert("Digite alguma coisa")
        } else {
            alert (newTask.value);
            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

            db.push ({
                id: Number(db.length) + 1,
                title: newTask.value, 
                done:false, 
                dueDate: today
            });

            newTask.value = "";
            console.log(db);
        }
        
    }
    
});