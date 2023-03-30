let menuVisible = false;
function mostrarOocultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible=true;
    }
}