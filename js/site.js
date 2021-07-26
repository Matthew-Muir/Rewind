function reverseStr() {
    let str = document.getElementById("userString").value;
    let arr = str.split("");
    let revArr = arr.reverse()
    let returnStr = revArr.join("");

    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("msg").innerHTML = returnStr;
}