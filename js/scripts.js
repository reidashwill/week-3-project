function robotize(input){
  const outputs = ["Beep!"]

  for(i=input; i<=outputs.length; i ++){
    return outputs[input-1]
    debugger;
  }
}





$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#userNumber").val());
    var result = robotize(input);
    if(result){
    $(".outputField").append(" " + result);
    console.log(result)
    debugger;
  }
  
});
  
});