const today = new Date();
thisYear = today.getFullYear();

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
