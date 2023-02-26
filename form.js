



function enterpassword(){
    const psw=document.getElementById("psw1").value;
    const psw_check= /^(?=.*[A-Z])(?=.*[\W])(?=.{8,})/;
    if(!psw_check.test(psw)){
        alert("Password should contain 8 characters minimum, one special character minimum, at least one upper case letter,  etc");
        return false;
    }
    return true;
}

function emailvalidation(){
    const email_input=document.getElementById("email1").value;
    const email_check=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if(!email_check.test(email_input)){
        alert("Email have different format!");
        return false;
    }else{
    return true;}
}
function validateForm(){
    const email_input=document.getElementById("email1").value;
    const psw=document.getElementById("psw1").value;
    const string1=document.getElementById("str1").value;
    const result=document.getElementById("result1");
    const age1=parseInt(document.getElementById("age").value);
    const resultElement=document.getElementById("result2");

    if(!enterpassword() || !emailvalidation()){
    return false;
    }

    const saving_info={
        email: email_input,
        password: psw
    };
    console.log(saving_info);


    if(!ispalindrom(string1)){
        
    result.textContent=`"${string1}" is not palindrome!`;}
    
    result.textContent=`"${string1}" is palindrome!`;

    const numbers=[];
    for(let i=0;i<10;i++){
    const number=prompt(`Enter number ${i+1}`);
    numbers.push(parseInt(number));
}

const sorting_Numbers=mergesort(numbers);
console.log(sorting_Numbers);


if(prime(age1)){
    resultElement.textContent=`You age is ${age1} and its prime`;
}
else{
    resultElement.textContent=`Your age is ${age1} and its not prime`;
}

}


function mergesort(array){
    if (array.length<=1){
        return array;
    }
    const middle=Math.floor(array.length/2);
    const leftside=array.slice(0,middle);
    const rightside=array.slice(middle);
    return merge(mergesort(leftside), mergesort(rightside));
}

function merge(leftside,rightside){
    const res=[];
    while (leftside.length && rightside.length){
    if(leftside[0]<rightside[0]){
        res.push(leftside.shift());

    }
    else{
        res.push(rightside.shift());
    }
}
return res.concat(leftside,rightside);
}

//checking if the input string is palindrom or not

function ispalindrom(x){
    if(x.length<=1){
        return true;
    }
    if(x[0]===x[x.length-1]){
        return ispalindrom(x.slice(1,-1))
    }
    else{
        return false;
    }

    }


var registerForm = document.getElementById('registerform');
registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    validateForm();


});

  
  //entering the age and calculating 

  function prime(nb){
    if(nb<=1) return false;
    for(var j=2;j<=Math.sqrt(nb);j++){
        if(nb%j===0){return false;}
    }
    return true;
  }
