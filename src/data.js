import library from './library.json';
import { loadlocalstorage,setLocalstorage}  from './storage';

let ans=loadlocalstorage(library);
export function getlibrary(){
    return ans;
}
export function setLibrary(newAns){
    ans=newAns;
    setLocalstorage(ans);
}