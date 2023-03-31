// Kuwaiti
function kuwToBa(x) {
    return parseFloat(x) * 1.23;
}

function kuwToOma(x) {
    return parseFloat(x) * 1.26;
}

function conKuw() {
    let kuw = document.getElementById("kD").value;
    document.getElementById("dispBah").innerHTML = kuwToBa(kuw);
    document.getElementById("dispOman").innerHTML = kuwToOma(kuw);
}

// Bahrain
function bahToOma(y) {
    return parseFloat(y) * 1.02;
}

function bahToKuw(y) {
    return parseFloat(y) / 1.23;
}

function conBah() {
    let bah = document.getElementById("bD").value;
    document.getElementById("dispOmani").innerHTML = bahToOma(bah);
    document.getElementById("dispKuwa").innerHTML = bahToKuw(bah);
}

//Omani

function omaToKuw(y) {
    return parseFloat(y) / 1.26;
}

function omaToBah(y) {
    return parseFloat(y) / 1.02;
}

function conOma() {
    let bah = document.getElementById("oR").value;
    document.getElementById("dispKuwai").innerHTML = omaToKuw(bah);
    document.getElementById("dispBahr").innerHTML = omaToBah(bah);
}


function changeColorB2() {
    document.getElementById("dispBah").style.color = "green";
}

function changeColorC2() {
    document.getElementById("dispOman").style.color = "red";
}

function changeColorB4() {
    document.getElementById("dispOmani").style.color = "green";
}

function changeColorC4() {
    document.getElementById("dispKuwa").style.color = "red";
}
function changeColorB6() {
    document.getElementById("dispKuwai").style.color = "green";
}

function changeColorC6() {
    document.getElementById("dispBahr").style.color = "red";
}

function originalColor() {
    document.getElementById("dispBah").style.color = "black";
    document.getElementById("dispOman").style.color = "black";
    document.getElementById("dispOmani").style.color = "black";
    document.getElementById("dispKuwa").style.color = "black";
    document.getElementById("dispKuwai").style.color = "black";
    document.getElementById("dispBahr").style.color = "black";
}