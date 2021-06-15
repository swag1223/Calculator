window.onload = () => {
    let inputNum = document.querySelector("#ip");

    const btn = document.querySelector(".box");
    btn.addEventListener("click", doTask);
    
    function doTask(e) {
        const buttonData = e.target.innerText;
        switch (buttonData) {
            case "1":
                inputNum.value += "1";
                break;

            case "2":
                inputNum.value += "2";
                break;
            
            case "3":
                inputNum.value += "3";
                break;
            
            case "4":
                inputNum.value += "4";
                break;

            case "5":
                inputNum.value += "5";
                break;

            case "6":
                inputNum.value += "6";
                break;
                
            case "7":
                inputNum.value += "7";
                break;

            case "8":
                inputNum.value += "8";
                break;
            
            case "9":
                inputNum.value += "9";
                break;

            case "0":
                inputNum.value += "0";
                break;
            
            case ".":
                inputNum.value += ".";
                break;

            case "+":
                inputNum.value += "+";
                break;
            
            case "-":
                inputNum.value += "-";
                break;
            
            case "x":
                inputNum.value += "*";
                break;
            
            case "/":
                inputNum.value += "/";
                break;
            
            case "AC":
                inputNum.value = "";
                break;
            
            case "=":
                var str = inputNum.value;
                inputNum.value = eval(str);
                break;
            
            case "Del":
                var str = inputNum.value;
                inputNum.value = str.substring(0, str.length - 1);
                break;
            
        }
    }

}