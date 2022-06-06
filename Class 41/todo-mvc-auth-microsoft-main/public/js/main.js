const deleteBtn = document.querySelectorAll('.del') //selects all items with class of 'del'
const todoItem = document.querySelectorAll('span.not') //selects all incomplete list items
const todoComplete = document.querySelectorAll('span.completed') //selects all complete list items

Array.from(deleteBtn).forEach((el)=>{ //adds an event listener to all delete buttons
    el.addEventListener('click', deleteTodo) //deletes list item
})

Array.from(todoItem).forEach((el)=>{ //adds an event listener to all incomplete list items
    el.addEventListener('click', markComplete) //updates list item as complete
})

Array.from(todoComplete).forEach((el)=>{//adds an event listener to all complete items
    el.addEventListener('click', markIncomplete)//updates list item as incomplete
})

async function deleteTodo(){//function called to delete list item
    const todoId = this.parentNode.dataset.id //gets list item ID
    try{
        const response = await fetch('todos/deleteTodo', { //sends request to proper url path
            method: 'delete', //requests deletion
            headers: {'Content-type': 'application/json'}, //sets headers for json
            body: JSON.stringify({
                'todoIdFromJSFile': todoId //sends item list ID as json
            })
        })
        const data = await response.json() //waits for server response
        console.log(data) //logs response from server
        location.reload() //refreshes web page to show changes
    }catch(err){
        console.log(err) //logs any caught errors into console
    }
}

async function markComplete(){ //function called to mark incomplete item as complete
    const todoId = this.parentNode.dataset.id //gets list item's ID
    try{
        const response = await fetch('todos/markComplete', { //sends put request to proper url path
            method: 'put', //update request
            headers: {'Content-type': 'application/json'}, //sets headers for json
            body: JSON.stringify({
                'todoIdFromJSFile': todoId //sends list item ID as json
            })
        })
        const data = await response.json()//waits for response from server
        console.log(data) //logs server response
        location.reload() //refreshes web page to show changes
    }catch(err){
        console.log(err) //logs any caught errors
    }
}

async function markIncomplete(){//function called to mark complete item as incomplete
    const todoId = this.parentNode.dataset.id //gets list item's ID
    try{
        const response = await fetch('todos/markIncomplete', { //send update request to proper url path
            method: 'put', //update request
            headers: {'Content-type': 'application/json'}, //sets headers for json
            body: JSON.stringify({
                'todoIdFromJSFile': todoId //sends ID as json
            })
        })
        const data = await response.json() //waits for server response
        console.log(data) //logs server response
        location.reload() //refreshes webpage to show changes
    }catch(err){
        console.log(err) //logs any caught errors
    }
}