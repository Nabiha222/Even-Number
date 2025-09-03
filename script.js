document.getElementById("checkBtn").addEventListener("click", () => {
    let num = parseInt(document.getElementById("input-box").value);
    let result = " " ;

    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            result += i + " ";
        }
    }

    document.getElementById("output").innerHTML = result;
    document.getElementById("output").style.display = "block";

})