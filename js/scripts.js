function robotize(input){
  const outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")
  newArray.some(myFunction);
  
  function myFunction(newArray){
    var outputArray = []
    if(newArray >=1 && newArray <=3){
      outputArray.push(outputs[newArray-1])
      debugger;
      console.log(outputArray)
      return true
    };
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


// for(i=input; i<= outputs.length; i--){
  //   return outputs[(input-1)];
    
  // };