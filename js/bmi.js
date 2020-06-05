function bmi() {
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var result = weight / (height / 100 * height / 100);
    cal = result.toFixed(2)

    if (cal <= 18.5) {
        document.getElementById("message").innerHTML = "Info : You are in Underweight condition";
    }
    else if (cal >= 19 && cal < 25) {
        document.getElementById("message").innerHTML = "Info : You are in Normal Weight condition";
    }
    else if (cal >= 25 && cal < 30) {
        document.getElementById("message").innerHTML = "Info : You are in Overweight condition";
    }
    else {
        document.getElementById("message").innerHTML = "Info : You are in Obesity condition";
    }

    document.getElementById("result").innerHTML = "Status : " + cal;
}