const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value ==='' || emailInput.value==='')
    {
    msg.classList.add('error');
    msg.innerHTML="Please provide all Input";
    setTimeout(()=>msg.remove(),3000);
    }
    else{
    console.log("success")
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);


    //   Local Storage ----------------------------------------------------
    // to store data in local Storage  -------
    localStorage.setItem(nameInput.value,emailInput.value)
    // store using session storage ------
    // sessionStorage.setItem(nameInput.value,emailInput.value)
    // store using cookies -------
    // document.cookie = "nameInput.value=emailInput.value" , expire + new Date(2023,5,5).toUTCString()
    // console.log(localStorage.getItem(nameInput.value))


    //   Loacl Storage as Object -------------------------------------------
    // let myObj={
    //     name : nameInput.value,
    //     email : emailInput.value
    // }
    // //convert in string using json
    // let myObj_sereal = JSON.stringify(myObj); 
    // let myObj_desereal = JSON.parse(localStorage.getItem("myObj"));

    // localStorage.setItem("myObj",myObj_sereal);
    // localStorage.setItem("myObj",myObj_desereal);
    
    // console.log(myObj_sereal)
    // console.log(myObj_desereal);


    //  Delete from storage ------------------------------------------------
    // const deleteButton = document.createElement('input')
    // deleteButton.type = "button"
    // deleteButton.value = "Delete"
    // deleteButton.onclick = ()=>{
    //     localStorage.removeItem(emailInput)
    //     parentEle.removeChild(childEle)
    // }






    nameInput.value = '';
    emailInput.value = '';
    }
}