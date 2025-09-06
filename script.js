document.getElementById("checkBtn").addEventListener("click", () => {
    let num = parseInt(document.getElementById("input-box").value);
    let result = "";

    if(num >= 1 && num <= 30) {
        for(let i = 1; i <= num; i++) {
            if(i % 2 === 0) {
                result += i + " ";
            }
        }
        document.getElementById("output").innerHTML = result;
        document.getElementById("output").style.display = "block";
    } else {
        document.getElementById("output").innerHTML = "⚠️ Please enter a number between 1 and 30.";
        document.getElementById("output").style.display = "block";
    }
});
