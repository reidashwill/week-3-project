function robotize(input){
  var inputString = input
  var inputNum = parseInt(inputString);
  var outputArray = [];
  
  for(i=0; i<= inputNum; i++){
    testNumber = i;
    
    if (i.toString().includes("3")) {
      outputArray.push(" Won't you be my neighbor?")
    }else if (i.toString().includes("2")) {
      outputArray.push(" Boop!")
    }else if (i.toString().includes("1")){
      outputArray.push(" Beep!")
    }else{
      outputArray.push(" " + i)
    }
    console.log(outputArray)
  }
  console.log(outputArray)
  return outputArray
};



$(document).ready(function(){
  $("form#formGroup").submit(function(event){
    event.preventDefault();
    var input = $("#userNumber").val();
    var output = robotize(input);
    $("#formGroup")[0].reset();
    $(".outputField").html("")
    $(".outputField").append(" " + output);    
  });
});
