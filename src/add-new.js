import ans from './library.json';
import refresh from './list';
import { updateLeftNav } from './website';

function addnew(){
    const addi=document.getElementById("addish");
    addi.style.display="block";

    const submit=document.getElementById("submit");
    // Use onclick to avoid stacking event listeners
    submit.onclick = () => {
        const title=document.getElementById('title').value;
        const priority=document.getElementById('Priority').value;
        const project=document.getElementById('Project').value;
        const check=document.getElementById('Done').checked;
        submitForm(title,priority,project,check);
    };
}
function submitForm(title,priority,project,check){
    ans.count=ans.count+1;
    ans.list.push({
        "title":title,
        "priority": priority,
        "project":project,
        "check":check
    })
    const add=document.getElementById("add-btn");
    /*add.classList.remove("active");*/
    const addi=document.getElementById("addish");
    document.getElementById('add-book').reset();
    addi.style.display="none";
    refresh();
    updateLeftNav();
}

export default addnew;