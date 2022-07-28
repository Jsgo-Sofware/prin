var code, getIt, errorMessage;

getIt = document.getElementById("get-link");
errorMessage = document.getElementById("P-For-Errors");

getIt.addEventListener("click", callLinks);

function callLinks (){
  code = document.getElementById("code").value;

  switch (code){
    case "1":
      window.location.href = "https://sardamsadq.ml/app";
      break;
    case "2":
      window.location.href = "https://drive.google.com/drive/u/0/mobile/folders/1KyA0vPq9Bgr4eswLF7VZ-hBr4YFP-usu";
      break;
    case "3":
      window.location.href = "tg://setlanguage?lang=1kurdish";
      break;
    case "4":
      window.location.href = "tg://setlanguage?lang=en";
      break;      
    case "5":
      window.location.href = "itms-appss://apps.apple.com/us/app/bro-browser/id1615529311";
      break;      








      errorMessage.innerHTML = "ژمارا ڤی بابەتی نه هاتیە توماڕکرن";
      errorMessage.style = "color: white; margin-top: 10px; font-family: Speda-bd;";
      break;
  }
}
