function robotize(input){
  const outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")

  newArray.forEach(function(newArray){
    if(newArray[0] >=1 && newArray[0] <=3)
    return outputs[newArray[0]];
    debugger;
  })
  
  // for(i=input; i<= outputs.length; i--){
  //   return outputs[(input-1)];
    
  // };
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