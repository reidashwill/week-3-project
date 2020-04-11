function robotize(input){
  var outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var inputString = input
  inputNum = parseInt(inputString);
  console.log(typeof inputString)
  console.log(typeof inputNum);

  
  for(i=0; i<= inputNum; i++){
    testNumber = i
    if (i.toString().includes("3")) {
      testNumber = "Won't you be my neighbor?"
    }else if (i.toString().includes("2")) {
      testNumber = "Boop!"
    }else if (i.toString().includes("1")){
      testNumber = "Beep!"
    }
  
    console.log(testNumber)
    
    
    

    
  }
  
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
