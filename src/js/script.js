function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const anoValue = document.getElementById("ano");
  const resultado = document.getElementById("resultado");

  if (anoValue.value.length == 0 || Number(anoValue.value) > ano) {
    alert("Verifique os dados e tente novamente.");
  } else {
    let sexo = document.getElementsByName("sexo");
    const idade = ano - Number(anoValue.value);
    let genero = "";
    if (sexo[0].checked) {
      genero = "mulher";
      document.body.style.backgroundColor = "#3d0813";
      if (idade >= 0 && idade < 5) {
        resultado.innerHTML = `Detectamos uma bebê ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/bebe-menina.jpg">`;
      } else if (idade >= 5 && idade < 10) {
        resultado.innerHTML = `Detectamos uma criança ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/menina-crianca.jpg">`;
      } else if (idade >= 10 && idade < 15) {
        resultado.innerHTML = `Detectamos uma adolescente ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/adolescente-mulher.jpg">`;
      } else if (idade >= 15 && idade < 21) {
        resultado.innerHTML = `Detectamos uma jovem ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/jovem-mulher.jpg">`;
      } else if (idade >= 21 && idade < 55) {
        resultado.innerHTML = `Detectamos uma ${genero} adulta com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/mulher-adulta.jpg">`;
      } else {
        resultado.innerHTML = `Detectamos uma ${genero} idosa com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/mulher-idosa.jpg">`;
      }
    } else if (sexo[1].checked) {
      genero = "homem";
      document.body.style.backgroundColor = "#0c083d";
      if (idade >= 0 && idade < 5) {
        resultado.innerHTML = `Detectamos um bebê ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/bebe-menino.jpg">`;
      } else if (idade >= 5 && idade < 10) {
        resultado.innerHTML = `Detectamos uma criança ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/menino-crianca.jpg">`;
      } else if (idade >= 10 && idade < 15) {
        resultado.innerHTML = `Detectamos um adolescente ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/adolescente-homem.jpg">`;
      } else if (idade >= 15 && idade < 21) {
        resultado.innerHTML = `Detectamos um jovem ${genero} com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/homem-jovem.jpg">`;
      } else if (idade >= 21 && idade < 55) {
        resultado.innerHTML = `Detectamos um ${genero} adulto com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/homem-adulto.jpg">`;
      } else {
        resultado.innerHTML = `Detectamos um ${genero} idoso com ${idade} anos.`;
        resultado.innerHTML += `<img src="../src/img/homem-idoso.jpg">`;
      }
    }
  }
}
