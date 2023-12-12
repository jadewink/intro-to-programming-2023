const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Jordyn Jones ${thisYear}`;
footer.appendChild(copyright);

const skills = ["SQL","HTML","CSS","Squarespace/Wordpress","GitHub","Google Analytics","Adobe Photoshop","Microsoft Office Suite (Word, Excel, OneNote, Publisher, PowerPoint)","Microsoft SQL Server","Microsoft Visual Studio Code","Slack/Discord","Windows/Mac OS","Zoom/Teams","Project Management"];
const skillsSection = document.getElementById('skills');

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message');
let removeButton;
const messageSection = document.getElementById('messages');
const messageList = messageSection.getElementsByTagName('ul')[0];

//When user enters form data and clicks submit, append data to Message List with a remove button for each message
messageForm[0].addEventListener('submit', (event) => {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    // console.log(usersName, usersEmail, usersMessage);
    const newMessage = document.createElement('li');

    newMessage.innerHTML = '<a href="mailto:'+ usersEmail +'">'+ usersName +'</a><span> wrote: '+ usersMessage +' </span>';

    removeButton = document.createElement('button');
    removeButton.className = "btnRemove";
    removeButton.innerHTML = "remove";
    removeButton.type = "button";

    //When remove button is clicked, remove message from Message List
    removeButton.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const entry = event.target.parentNode;
            entry.remove();
        }
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();

    });

// //When remove button is clicked, remove message from Message List
// messageList.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         const entry = event.target.parentNode;
//         entry.remove();
//     }
// });

