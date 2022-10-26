
function activador(data){
    
    let pause = "pause";
    let active = "active";
    let arr = ["news","contact","about","Home"];
    
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(data != element){
            document.getElementById(element).className = pause;
        }
        if(data == element){
            document.getElementById(data).className = active;
        }
    }
}