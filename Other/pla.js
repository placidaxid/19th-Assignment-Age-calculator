//Takes two numbers and sums up
//Question one
//var num1 = parseInt(prompt("Input first Number"));
//var num2 = parseInt(prompt("Input second Number"));
//sum = num1 + num2
//output1 = "The sum of " + num1 + " & " + num2 + " = " + sum 
//alert(output1)


function lifeInWeeks(age) {
   
    /************Don't change the code above************/    
    document.querySelector("#submit").addEventListener("click", function lifeInWeeks(age){
        const update = function lifeInWeeks(age){
        let dob = document.querySelector("#dob").value,
        day = new Date(dob),
        time = day.getTime(),
        today = new Date(),
        timenow = today.getTime(),
        value = timenow-time,
        days = Math.floor(value/(1000*60*60*24)),
        week = Math.floor(value/(1000*60*60*24*7)),
        month = Math.floor(value/(1000*60*60*24*30.4375)),
        year = Math.floor(value/(1000*60*60*24*365.25)),

        insert = function(x,y){
            document.querySelector(x).innerHTML = y;
        }
        insert("#year",year + "-Years");
        insert("#month",month + "-Months");
        insert("#week",week + "-Weeks");
        insert("#day",days + "-Days");

    }
    setInterval(update,1000);
})
    /*************Don't change the code below**********/
}