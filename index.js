window.addEventListener('load', () => {
    const input = document.querySelector('.input');
    const add = document.querySelector('.add'); 
    const taskList = document.querySelector('.taskList'); 
    
    add.addEventListener('click', (e)=> {
        e.preventDefault();

        const task = input.value;

        if (!task) { 
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("main");

        const retask_el = document.createElement("div");
        retask_el.classList.add("main");

        const input_task = document.createElement("input");
        task_el.classList.add("input");
        input_task.value = task;
        input_task.setAttribute("readonly", "readonly");

        const close = document.createElement("button");
        close.classList.add("close");
        close.innerHTML = "Delete";

        const tick = document.createElement("button");
        tick.classList.add("tick");
        tick.innerHTML = "Edit";

        retask_el.appendChild(input_task);
        retask_el.appendChild(tick);
        retask_el.appendChild(close);

        taskList.appendChild(retask_el);
        
        input.value = "";

        tick.addEventListener("click", () =>  {
            if (tick.innerHTML == "Edit"){
                input_task.removeAttribute("readonly");
                tick.innerHTML = "Save";
            }else {
                input_task.setAttribute("readonly", "readonly");
                tick.innerHTML = "Edit";
            }
        })

        close.addEventListener("click", () => {
            taskList.removeChild(retask_el);
        })
    })
});


