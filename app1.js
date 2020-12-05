//ex02
// var uname = prompt("enter username")
//var wmsg = "welcome" + uname;
// alert(wmsg)

var btnrewrite = document.querySelector("#btnrewrite")
var txtinput = document.querySelector("#txtinput")
var output = document.querySelector("#output")
//serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
serverUrl="https://api.funtranslations.com/translate/article_rewrite.json"
serverUrl1= "https://api.funtranslations.com/translate/dothraki.json"

function translateUrl(text){
    return(serverUrl1 + "?" + "text=" +text)
}

function clickHandler() {
    var inputtxt= txtinput.value

    //call the server

    fetch(translateUrl(inputtxt))
    .then(response=>response.json())
    .then(json=> {
        var transtxt = json.contents.translated
        output.innerText= transtxt
    })
    .catch(errorHandler)
}

    btnrewrite.addEventListener("click",clickHandler)

function errorHandler(error) {
   console.log("error occurred", error)
   alert("Something is wrong with the server") 
}