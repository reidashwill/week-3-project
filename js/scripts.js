function robotize(input){
  var outputs = ["Beep!","Boop!","Won't you be my neighbor?"]
  var newArray = input.split("")
  var outputArray = []
  console.log(newArray)

  
  for(i=0; i<= newArray; i++){
    outputArray.push(i)
    
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
