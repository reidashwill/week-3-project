function robotize(input){
  var outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")
  var outputArray = []
  console.log(newArray)
  
  newArray.some(myFunction);
  function myFunction(newArray){
      if(newArray.includes(3)){
      outputArray.push(outputs[2])
      return true
      }else if(newArray.includes(2)){
        outputArray.push(outputs[1])
        return true
      }else if(newArray.includes(1)){
        outputArray.push(outputs[0])
        return true
      }

      
    }
  return (outputArray.join())
};


$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = $("#userNumber").val();
    var output = robotize(input);
    $("#formGroup")[0].reset();
    $(".outputField").append(" " + output);    
  });
});
