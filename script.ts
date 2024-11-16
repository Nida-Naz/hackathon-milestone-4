// Get references to the form and disply area
const form =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement=document.getElementById('resume-disply') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit',(event: Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input value
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('phone') as HTMLInputElement).value
    const education =(document.getElementById('education') as HTMLInputElement).value
    const experience =(document.getElementById('experience') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable resume</b><h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable"true">${name}</span></p>
    <p><b>Email:</b><span contenteditable"true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable"true">${phone}</span></p>

    <h3>Education</3>
    <p contenteditable"true">${education}</p>
    
    <h3>Experience</3>
    <p contenteditable"true">${experience}</p> 

    <h3>Skills</3>
    <p contenteditable"true">${skills}</p> 
    `;
    //display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error(`the resume disply element is missing`);
    }
})