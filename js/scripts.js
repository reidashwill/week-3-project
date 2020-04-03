(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    
    $(".outputField").text(result);
  });
});