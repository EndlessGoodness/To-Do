const STORAGE_KEY="todo-library";
export function setLocalstorage(ans){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(ans));
}
export function loadlocalstorage(defaultLibrary){
    const data=localStorage.getItem(STORAGE_KEY);
    if(data){
        try{
            return JSON.parse(data);
        }catch{
            defaultLibrary;
        }
    }
    return defaultLibrary;
}