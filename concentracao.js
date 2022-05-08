
function Dados() {
  var Bifloc = document.getElementById("Bifloc").value;
  var Fluxo = document.getElementById("Fluxo").value;
  var Polimero = document.getElementById("QTD").value;
  var Rosca = document.getElementById("RPM").value;
  var Força = document.getElementById("f").value;
  var elemento = document.getElementById("resultado");
  var Concentraçao = (Polimero * 60) / Fluxo / 10;
  

  console.log("Bifloc: " + Bifloc);
  console.log("O Fluxo de Agua: " + Fluxo + " m3");
  console.log("Quantidade de Polimero: " + Polimero + " Gramas");
  console.log("A velocidade da Rosca: " + Rosca + " RPM");
  console.log("A Força sobre a dosadora: " + Força + " F");
  console.log("Concentraçao:" + Concentraçao.toFixed(2) + " %");
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;
  console.log(dataAtual);
}
function Cc() {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;
  console.log(dataAtual);
  var Bifloc = document.getElementById("Bifloc").value;
  var Fluxo = document.getElementById("Fluxo").value;
  var Polimero = document.getElementById("QTD").value;
  var elemento = document.getElementById("resultado");
  var Concentraçao = (Polimero * 60) / Fluxo / 10;
  elemento.textContent =
    "A concentração do Bifloc " +
    Bifloc +
    " é " +
    Concentraçao.toFixed(2) +
    " %                           " +
    dataAtual;
}
  function Cc(){
 var Bifloc = document.getElementById("Bifloc").value; 
 var Fluxo =   document.getElementById("Fluxo").value;
 var Polimero =  document.getElementById("QTD").value;
 var Concentraçao = (Polimero * 60) / Fluxo / 10;
 var cc =Concentraçao.toFixed(2)
 var elemento = document.getElementById("resultado");
 var elemento = document.getElementById("resultado");  
 console.log(cc)
    if(Bifloc == 9 && cc != 0.15 )
    elemento.textContent =
    "A concentração do Bifloc "+ Bifloc + " está em "+
      Concentraçao.toFixed(2) +
      
     " está fora dos parâmetros ideias, O melhor parâmetro é 8700 L de fluxo e 220 Gramas de polímero.";
    if(Bifloc == 9 && cc == 0.15)
      elemento.textContent =
    "A concentração do Bifloc " +
    Bifloc +
    " é   " +
    Concentraçao.toFixed(2) +
    " %                           " + " , "+
    "está no parâmetro ideal.";
     document.getElementById("C").innerHTML = " Concentração do desejada é 0.15 %";
     if(Bifloc == 9 && cc != 0.15 )
    elemento.textContent =
    "A concentração do Bifloc "+ Bifloc + " está em "+
      Concentraçao.toFixed(2) +
      
     " está fora dos parâmetros ideias, O melhor parâmetro é 7700 L de fluxo e 200 Gramas de polímero.";
    if(Bifloc == 9 && cc == 0.15)
      elemento.textContent =
    "A concentração do Bifloc " +
    Bifloc +
    " é   " +
    Concentraçao.toFixed(2) +
    " %                           " + " , "+
    "está no parâmetro ideal.";
     document.getElementById("C").innerHTML = " Concentração desejada é 0.15 %";
  if(Bifloc >= 9  && cc != 0.15)
    elemento.textContent =
    "A concentração do Bifloc "+ Bifloc + " está em "+
      Concentraçao.toFixed(2) +
      
     " está fora dos parâmetros ideias, O melhor parâmetro é 11000 L de fluxo e 280 Gramas de polímero.";
    if(Bifloc >= 9  && cc == 0.15)
      elemento.textContent =
    "A concentraçao do Bifloc " +
    Bifloc +
    " é   " +
    Concentraçao.toFixed(2) +
    " %                           " + " , "+
    "está no parametro ideal.";
     document.getElementById("C").innerHTML = "A Concentração do Bifloc "+Bifloc +" está em "+ cc + "%.";
}
