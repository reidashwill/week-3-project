function robotize(input){
  const outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  for(i=input; i<= outputs.length; i++){
    return outputs[(input - 1)];
  };
  
  
};





$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userNumber").val());
    console.log("test")
    var result = robotize(input);
    console.log("test")
    $(".outputField").append(" " + result); 
    
  });
});