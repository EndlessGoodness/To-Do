function createboard(){
   const board= document.createElement("div");
   board.classList.add("board");
   board.setAttribute("id","board");
   
   return board;
}

function loadboard(){
    return createboard();
}
export default loadboard