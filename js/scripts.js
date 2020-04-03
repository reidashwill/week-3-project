function robotize(input){
  const outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")
  newArray.some(myFunction);
  
  function myFunction(newArray){
    var outputArray = []
    if(newArray === 3){
      outputArray.push(outputs[2])
      debugger;
      return true
    }else if(newArray ===2 ){
      outputArray.push(outputs[1])
      debugger;
      return true
    }else if(newArray === 1){
      outputArray.push(outputs[0])
      debugger;
      return true
    } 
    console.log(outputArray)
    return outputArray
  }
};





$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = $("#userNumber").val();
    var result = robotize(input);
    
    $("#formGroup")[0].reset();
    $(".outputField").append(" " + result);    
  });
});
