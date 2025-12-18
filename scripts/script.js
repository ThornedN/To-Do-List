let addButton = document.getElementById("add-button");
let selectAllButton = document.getElementById("select-all");
let clearButton = document.getElementById("clear-button");

selectAllButton.checked = false;
function clearSelections() {
    // Remove only checked items
    let items = todoList.querySelectorAll("li");
    items.forEach(function(li) {
        let cb = li.querySelector('input[type="checkbox"]');
        if (cb && cb.checked) {
            li.remove();
        }
    });
    // reset select-all checkbox
    selectAllButton.checked = false;
}

// Attach clear handler once
clearButton.addEventListener("click", clearSelections);

// Toggle selection for all items and check/uncheck their checkboxes
selectAllButton.addEventListener("click", function() {
    let items = todoList.querySelectorAll("li");
    let checked = selectAllButton.checked;
    items.forEach(function(li) {
        li.classList.toggle("selected", checked);
        let cb = li.querySelector('input[type="checkbox"]');
        if (cb) cb.checked = checked;
    });
});

addButton.addEventListener("click", function() {
    let todoText = todoInput.value.trim();
    if (todoText !== "") {
        // Create a list item with a checkbox and visible text
        let listItem = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox";
        // Make the text visible by using a span/label element
        let label = document.createElement("span");
        label.className = "todo-text";
        label.textContent = todoText;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        todoList.appendChild(listItem);
        todoInput.value = "";
        console.log(todoText);
    }

});