function  triple(numero){
    if( typeof numero ==="number"){
console.log(numero *3);
    }
    throw new Error("Esperando un valor numerico")
}




try{
    console.log(triple(ggg)); 
  }catch(e){
    console.log("Esperando un valor numerico")
  }
 