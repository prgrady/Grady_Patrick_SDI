/**
 * Created by Pat1 on 1/29/15.
 */
function solveForCircumference(Pi, radius){
    radius *= radius;
    return Pi * radius;
}

var num = solveForCircumference(3.14, 2);
alert(num);