let container = document.getElementById('secondSection')
console.log(container);


let fetchData = async () =>{
    let response = await fetch('http://localhost:3000/user')
    let finalData = await response.json()
    console.log(finalData)
    finalData.forEach(value => {
        // Create the element

        let name = document.createElement('p')
        let email = document.createElement('p')
        let updateButton = document.createElement('button')
        let deleteButton = document.createElement('button')
        let buttonContainer = document.createElement('div')
        let parent = document.createElement('article')
        


        // Assign the values for the element
        name.innerHTML = value.name;
        email.innerHTML = value.email;
        updateButton.innerHTML = "Update"
        deleteButton.innerHTML = "Delete"

        //Assigning the 
        deleteButton.addEventListener('click',()=>deleteData(value.id));
        updateButton.addEventListener('click',()=>{
           updateField(value.id,value.name,value.email,value.password)
        })
        // Append the elements to the article
        buttonContainer.append(updateButton,deleteButton)
        parent.append(name,email,buttonContainer)
        container.append(parent)
    });
}
fetchData()


//create a data

let createName=document.getElementById('name')
let createEmail=document.getElementById('email')
let createPassword=document.getElementById('password')
let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(createName.value,createEmail.value,createPassword.value)
    createData(createName.value,createEmail.value,createPassword.value)
})
let createData=async (name,email,password) =>{
    await fetch('http://localhost:3000/user',{
        method:"POST",
        headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:password
        })
    })
}


//Delete the data
let deleteData=async(id)=>{
    await fetch(`http://localhost:3000/user/${id}`,{
        method:"DELETE"
    });
    fetchData();

}

//update the data
let updateField=(id,name,email,password)=>{
    let updateName=document.createElement('input')
    let updateEmail=document.createElement('input')
    let updatePassword=document.createElement('input')
    let updateButton=document.createElement('button')
    let updateContainer=document.createElement('aside')
    // let section=document.createElement('section')

    updateName.value=name
    updateEmail.value=email
    updatePassword.value=password

    updateButton.innerHTML="Update"
    updateButton.addEventListener('click',()=>{
        updateData(id,updateName.value,updateEmail.value,updatePassword.value)
    })
    //append

    updateContainer.append(updateName,updateEmail,updatePassword,updateButton)
    container.append(updateContainer)


}

let updateData =async (id,name,email,password) =>{
    await fetch(`http://localhost:3000/user/${id}`,{
        method:"PUT",
        headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:password
        })
    })
}
