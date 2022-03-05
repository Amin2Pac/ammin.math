function submitanswers(){
    var total=7;
    var score=0;
    var q1=document.forms["quizForms"]["q1"].value;
    var q2=document.forms["quizForms"]["q2"].value;
    var q3=document.forms["quizForms"]["q3"].value;
    var q4=document.forms["quizForms"]["q4"].value;
    var q5=document.forms["quizForms"]["q5"].value;
    var q6=document.forms["quizForms"]["q6"].value;
    var q7=document.forms["quizForms"]["q7"].value;

    for (var i = 1; i <= total; i++) {
        if( eval('q'+i)==null || eval('q'+i)=='')
        {
            alert("Your Missed Question "+i);
            return false;
        }
    }
    var ansewer=["b","a","a","c","b","c","a"];

    for (var i = 1; i <= total; i++) {
        if( eval('q'+i)==ansewer[i-1])
        {
            score++;
        }
    }

    var result=document.getElementById('result');
    result.innerHTML='<h3>Your Score <span>'+score+'</span> out of <span>'+total+'</span> </h3>';
    return false;
}
 