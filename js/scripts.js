function robotize(input){
  const outputs = ["0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7","8","9"]
  for(i=input; i<= outputs.length; i--){
    return outputs[(input)];
    
  };
};





$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userNumber").val());
    var result = robotize(input);
    $("#formGroup")[0].reset();
    $(".outputField").append(" " + result);    
  debugger;
  });
});