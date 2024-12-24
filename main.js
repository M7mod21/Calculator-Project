let result = document.getElementById("result")

function appendToResult(value){
    result.value += value
    console.log(result.value)
}

function clearResult(){
    result.value = ""
}

function calculateResult(){
    if(typeof +result.value === "number"){
        result.value = eval(result.value)
    }else{
        result.value = "There is an Error"
    }
}

