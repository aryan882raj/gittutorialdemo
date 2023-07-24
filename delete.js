function saveToLocalStorage(event)
{
    event.preventDefault();
    // const name = event.target.username.value;
    // const email = event.target.emailId.value;
    // const phonenumber = event.target.phonenumber.value;   
    console.log(event.target)      
}
// console.log(target)

const obj={
    name,
    email,
    phonenumber
}

localStorage.setItem(obj, JSON.stringify(obj))
showUserOnScreen(obj)


function showUserOnScreen(obj)
{
    const parentEle = document.getElementById('listOfItems')
    const childEle = document.createElement('li')
    childEle.textContent = obj.name + "-" + obj.email +"-"+obj.phonenumber;
    parentEle.appendChild(childEle)    

}
