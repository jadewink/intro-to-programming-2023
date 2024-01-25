const skills = ["JavaScript","HTML","CSS","SQL","GitHub","Squarespace","Wordpress","Project Management","Google Analytics","Adobe Photoshop","Microsoft Office Suite","Microsoft SQL Server","Microsoft VS Code","Windows/Mac OS","Slack/Discord","Zoom/Teams"];
const skillsSection = document.getElementById('skills');

let skillsList = skillsSection.querySelector('ul');

//For each skill in skills array, create li html element containing and append to list
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.classList.add("block");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message');
let removeButton;
const messageSection = document.getElementById('message-list');
const messageList = messageSection.getElementsByTagName('ul')[0];

//When user enters form data and clicks submit, append data to Message List with a remove button for each message
messageForm[0].addEventListener('submit', (event) => {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  const newMessage = document.createElement('li');
  newMessage.classList.add("message-list");
  // const dateStamp = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

  newMessage.innerHTML = '<a href="mailto:'+ usersEmail +'">'+ usersName +'</a><span>&nbsp;wrote: '+ usersMessage +' </span>';

  //Create remove button
  removeButton = document.createElement('button');
  removeButton.className = "btnRemove";
  removeButton.innerHTML = "Remove";
  removeButton.type = "button";

  //When remove button is clicked, remove message from Message List
  removeButton.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const entry = event.target.parentNode;
      entry.remove();
    }
  });

  //Append a remove button to each new message in the list
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm[0].reset();

});

// Fetch API Get request for repository links
fetch('https://api.github.com/users/jadewink/repos', {
  "method": "GET"
})
  .then(response => response.json())
  .then(data => generateLinks(data))
  .catch(error => console.error('There was a problem with the Fetch operation:',error))

//Iterate through response data to generate links to github repository urls
function generateLinks(data) {
  let projectSection = document.getElementById('projects');
  let projectList = projectSection.querySelector('ul');

  for (let i = 0; i < data.length; i++) {
    let project = document.createElement('li');
    let url = data[i].html_url;
    let description = data[i].description;
    project.innerHTML = description + "<br /><a href=" + url + " target='new' >" + data[i].name + "</a>";
    projectList.appendChild(project);
  }
}

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.getElementById('main-footer');
const copyright = document.createElement('p');

//Set footer html value with current year
copyright.innerHTML = `Jordyn Jones &#169; ${thisYear}`;
footer.appendChild(copyright);

let originalImage;

//Onmouseover function that changes social icon image from blue to white
//Passes in the img tag id, removes last 4 char file extention from the img source, adds _w.png to display white social icon while mouse is hovering
function hover(imgId) {
  originalImage = document.getElementById(imgId).src; 
  let whiteImage = document.getElementById(imgId).src;
  whiteImage = whiteImage.slice(0,-4); 
  whiteImage += "_w.png";
  document.getElementById(imgId).src=whiteImage;
}
//Onmouseout function to return social icon image the color returns to the original color  
function restore(imgId) {
  document.getElementById(imgId).src=originalImage;
}

