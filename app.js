function menubar(){
    let list = document.getElementById("list-items");

    if(list.style.display === "block"){
        list.style.display = "none";
    }else{
        list.style.display = "block"
    }
}