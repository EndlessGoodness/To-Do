import { getlibrary, setLibrary} from './data';
import { updateLeftNav } from './website';

async function refresh(){
   passobj(getlibrary());
}
export function passobj(obj){
    const count = obj.count;
    const boardi = document.getElementById("board");
    boardi.innerHTML = "";
    for(let i = 0; i < count; i++){
        const chida = document.createElement("div");
        chida.classList.add("chida");

        const check = document.createElement("input");
        check.classList.add("checkboxa");
        check.type = "checkbox";
        check.checked = obj.list[i].check;

        const name = document.createElement("h2");
        name.textContent = obj.list[i].title;

        const prior = document.createElement("p");
        prior.classList.add("prio");
        prior.textContent = "Priority : " + `${obj.list[i].priority}`;

        const proj = document.createElement("p");
        proj.classList.add("proj");
        proj.textContent = "Project : " + `${obj.list[i].project}`;

        // Strikethrough if checked
        if(check.checked){
            name.style.textDecoration = "line-through";
        }
        check.addEventListener("change", () => {
            const ans = getlibrary();
            // Find the corresponding todo in the main ans.list
            const idx = ans.list.findIndex(
                item => item.title === obj.list[i].title &&
                        item.priority === obj.list[i].priority &&
                        item.project === obj.list[i].project
            );
            if (idx !== -1) {
                ans.list[idx].check = check.checked;
                setLibrary(ans);
            }
            if(check.checked){
                name.style.textDecoration = "line-through";
            } else {
                name.style.textDecoration = "none";
            }
        });

        // Delete button (text)
        const trash = document.createElement("button");
        trash.textContent = "Delete";
        trash.classList.add("delete-btn");
        trash.style.marginLeft = "auto";
        trash.style.alignSelf = "center";
        trash.title = "Delete";

        // Delete handler
        trash.onclick = () => {
            const ans=getlibrary();
            // Find the index in the main ans.list (not just filtered obj.list)
            const idx = ans.list.findIndex(
                item => item.title === obj.list[i].title &&
                        item.priority === obj.list[i].priority &&
                        item.project === obj.list[i].project
            );
            if(idx !== -1) {
                ans.list.splice(idx, 1);
                ans.count = ans.list.length;
                setLibrary(ans);
                // Refresh board and leftnav
                import('./list').then(module => module.default());
                updateLeftNav();
            }
        };

        chida.appendChild(check);
        chida.appendChild(name);
        chida.appendChild(prior);
        chida.appendChild(proj);
        chida.appendChild(trash);

        boardi.appendChild(chida);
    }
}

export default refresh;