function robotize(input){
  var outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var inputString = input
  inputNum = parseInt(inputString);
  var outputArray = []
  console.log(typeof inputString)
  console.log(typeof inputNum);

  
  for(i=0; i<= inputNum; i++){
    testNumber = i
      while(testNumber > 0){
        if(testNumber%10 == 3){
            outputArray.push(outputs[2])
        }
        testNumber = Math.trunc(testNumber / 10);        
      }
    
    

    
  }
  

  // newArray.some(myFunction);
  // function myFunction(newArray){
  //   if(newArray.includes(3)){
  //     while(outputArray.length > 0) {
  //       outputArray.pop();
  //     }
  //   outputArray.push(outputs[2])
  //   }else if(newArray.includes(2)){
  //     while(outputArray.length > 0) {
  //       outputArray.pop();
  //     }
  //   outputArray.push(outputs[1])
  //   }else if(newArray.includes(1)){
  //     while(outputArray.length > 0) {
  //       outputArray.pop();
  //     }
  //   outputArray.push(outputs[0])
  //   }else{
  //     outputArray.push(input)
  //     while(outputArray.length > newArray.length) {
  //       outputArray.pop();
  //     }
  //   }
      
  // }
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
