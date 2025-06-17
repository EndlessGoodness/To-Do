import loadboard from "./main"
import addnew from "./add-new";
import refresh from "./list";
import ans from "./library.json"; // Import your data

function addheader(){
    const header=document.createElement("header");
    header.classList.add("head");
    const name=document.createElement("h1");
    name.textContent="To-Do";
    header.appendChild(name);
    header.appendChild(addnav());
    return header;
}
function addnav(){
    const nav=document.createElement("nav");

    const add=document.createElement("button");
    add.classList.add("add-btn");
    add.textContent="+";
    add.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
            const addi=document.getElementById("addish");
            addi.style.display="none";
        }else{
            e.target.classList.add("active");
            addnew();
        }
    });
    
    nav.appendChild(add);
        
    return nav;
}
function leftnav(){
    const leftnav=document.createElement("sidenav");
    leftnav.classList.add("leftnav");

    // "All" button
    const all=document.createElement("button");
    all.textContent="All";
    all.classList.add("learn");
    all.addEventListener("click", () => {
        refresh(); // Show all todos
    });
    leftnav.appendChild(all);

    // Get unique project names
    const projects = [...new Set(ans.list.map(item => item.project))];

    // Create a button for each project
    projects.forEach(project => {
        const btn = document.createElement("button");
        btn.textContent = project;
        btn.classList.add("learn");
        btn.addEventListener("click", () => {
            // Filter todos for this project
            const filtered = {
                count: ans.list.filter(item => item.project === project).length,
                list: ans.list.filter(item => item.project === project)
            };
            // Use passobj from list.js to render filtered todos
            import('./list').then(module => {
                module.default(); // refresh will call passobj(ans), so we override ans temporarily
                const board = document.getElementById("board");
                board.innerHTML = "";
                module.passobj(filtered);
            });
        });
        leftnav.appendChild(btn);
    });

    return leftnav;
}
function createmain(){
    const main=document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}
function initialize(){
    const cont=document.getElementById("content");
    cont.appendChild(addheader());
    const main=createmain();
    main.appendChild(leftnav());
    main.appendChild(loadboard());
    cont.appendChild(main);
    refresh();
} 
function updateLeftNav() {
    const main = document.getElementById("main");
    // Remove the old leftnav if it exists
    const oldNav = main.querySelector(".leftnav");
    if (oldNav) oldNav.remove();
    // Add the new leftnav
    main.prepend(leftnav());
}
export default initialize
export { updateLeftNav };