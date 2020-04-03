function robotize(input){
  var outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")
  var outputArray = []
  
  newArray.some(myFunction);
  function myFunction(newArray){
      if(newArray.includes(3)){
      outputArray.push(outputs[2])
      
    }
    
  }
  console.log(outputArray.join());
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

// function result(outputArray){
//   console.log(outputArray);
//   $("#formGroup")[0].reset();
//   $(".outputField").append(" " + output);
//   console.log(output);