const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const countEl = document.getElementById("count");
const deleteAllBtn = document.getElementById("delete-all");
const sortBtn = document.getElementById("sort-btn");

let count = 0;

addBtn.addEventListener("click", () => {
    const value = input.value;

    // Task 4: Should prevent empty values (currently missing)

    const li = document.createElement("li");
    li.textContent = value;

    list.appendChild(li);

    //count++; // Task 3: Bug (causes incorrect count in some cases)
    updateCount();

    input.value = "";
});

function updateCount() {
    countEl.textContent = list.children.length;
}

// Task 5: Delete all not implemented
deleteAllBtn.addEventListener("click", () => {
    // TODO
});

// Task 6: Sort not implemented
sortBtn.addEventListener("click", () => {
    // TODO
});

// Task 4: Disable button logic not implemented