function robotize(input){
  const outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")
  newArray.forEach(myFunction);
  
  function myFunction(newArray){
    if(newArray[0] >=1 && newArray[0] <=3){
      console.log(outputs[parseInt(newArray[0])-1])
      debugger;
      return outputs[parseInt(newArray[0])]
    }
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