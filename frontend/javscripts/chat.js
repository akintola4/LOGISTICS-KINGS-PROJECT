
//create a function that will add the user's chat to the chat box
//create a variable that will get the value of the user's input
//create a variable that will create a div element
//create a variable that will create a p element
//create a variable that will create a label element
//create a variable that will create a text node
function addUserChat() {
    let chatInput = document.getElementById("myTextarea").value;
    let div = document.createElement('div')
    
    div.classList.add("user", "d-flex", "flex-row", "justify-content-end", "mb-4")
    let para = document.createElement('p')
    para.classList.add("bg-light", "row","purple-btn", "user", "rounded-4", "p-3", "col-lg-6")
    let label = document.createElement('label')
    label.classList.add("userName")
    label.innerText = "User"
    let i = document.createElement('i')
    i.classList.add("fa-regular", "fa-user", "p-2")
    let text = document.createTextNode(chatInput)
    label.appendChild(i)
    para.appendChild(label)
    para.appendChild(text)



    div.appendChild(para)

    document.getElementById("chats").appendChild(div)

}
function addSenderChat() {
    let chatInput = document.getElementById("myTextarea").value;
    console.log(chatInput)
    let div = document.createElement('div')
    
    div.classList.add("user", "d-flex", "flex-row", "justify-content-end", "mb-4")
    let para = document.createElement('p')
    para.classList.add("bg-light", "row","purple-btn", "user", "rounded-4", "p-3", "col-lg-6")
    let label = document.createElement('label')
    label.classList.add("userName")
    label.innerText = "Sender"
    let i = document.createElement('i')
    i.classList.add("fa-regular", "fa-user", "p-2")
    let text = document.createTextNode(chatInput)
    label.appendChild(i)
    para.appendChild(label)
    para.appendChild(text)



    div.appendChild(para)

    document.getElementById("chats").appendChild(div)

}

function addAdminChat() {
    let chatInput = document.getElementById("myTextarea").value;
    console.log(chatInput)
    let div = document.createElement('div')
    
    div.classList.add( "d-flex", "flex-row", "justify-content-end", "mb-4")
    let para = document.createElement('p')
    para.classList.add("bg-light", "row","purple-btn", "user", "rounded-4", "p-3", "col-lg-6")

    let label = document.createElement('label')
    label.classList.add("userName")
    label.innerText = "MODERATOR   TOSIN"
    let i = document.createElement('i')
    i.classList.add("fa-regular", "fa-user", "p-2")
    let text = document.createTextNode(chatInput)
    label.appendChild(i)
    para.appendChild(label)
    para.appendChild(text)



    div.appendChild(para)

    document.getElementById("chats").appendChild(div)

}


function addRiderChat() {
    let chatInput = document.getElementById("myTextarea").value;
    console.log(chatInput)
    let div = document.createElement('div')
    
    div.classList.add("user", "d-flex", "flex-row", "justify-content-end", "mb-4")
    let para = document.createElement('p')
    para.classList.add("bg-light", "row","purple-btn", "user", "rounded-4", "p-3", "col-lg-6")
    let label = document.createElement('label')
    label.classList.add("userName")
    label.innerText = "RIDER TOSIN"
    let i = document.createElement('i')
    i.classList.add("fa-regular", "fa-user", "p-2")
    let text = document.createTextNode(chatInput)
    label.appendChild(i)
    para.appendChild(label)
    para.appendChild(text)



    div.appendChild(para)

    document.getElementById("chats").appendChild(div)

}