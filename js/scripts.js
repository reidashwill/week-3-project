function robotize(input){
  const outputs = ["Beep!"]
}



$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = $("#userNumber").val();
    $(".outputField").append(" " + input);
  });
  debugger;
});