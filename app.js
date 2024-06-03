const formInput = document.querySelector(".form-input")
const formBtn = document.querySelector(".form-button")
const toDoList = document.querySelector(".to-do-list")


const createLiElement = () => {
    let li = document.createElement("li")
    li.innerHTML = formInput.value
    li.classList = "to-do-content"

    
    li.append(createDelBtn())
    li.append(createEditBtn())

    return li
}

const createDelBtn = () => {
    let delBtn = document.createElement("button")
    delBtn.classList = "delBtn"
    delBtn.innerHTML = "X"
    
    delBtn.addEventListener("click", (e) => {
        const del = e.target.parentElement
        del.remove()
    })
    
    return delBtn
}

const createEditBtn = () => {
    let editBtn = document.createElement("button")
    editBtn.classList = "editBtn"
    editBtn.innerHTML = "edit"
    
    editBtn.addEventListener("click", (e) => {
        const edit = e.target.parentElement
        edit.contentEditable = true;
        edit.style.backgroundColor = "red";
        edit.style.textDecoration = "none"
        
        if (editBtn.className === "editBtn") {
            editBtn.innerHTML = "save"
            editBtn.contentEditable = false; 
        } else if (editBtn.innerHTML === "save") {
                edit.contentEditable = false
                edit.style.backgroundColor = ""
                editBtn.innerHTML = "edit"
        }
        edit.append(input, editBtn)
    })
    
    return editBtn
}

    const appendTodoList = () => {
        if (formInput.value === ""){
            alert ("Can't leave this empty!")
        } else {
            toDoList.append(createLiElement())
        }
    }

formBtn.addEventListener("click", appendTodoList)

toDoList.addEventListener("click", (ev) => {
        ev.target.tagName === "li"
        ev.target.classList.toggle("checked")
}, false)


