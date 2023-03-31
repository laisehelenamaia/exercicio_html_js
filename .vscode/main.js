const formulario = document.querySelector("#formulario");
const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("campoB");
const menInfo = document.querySelector("menInfo");

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    if (parseInt(campoB.value) > parseInt(campoA.value)) {
        menInfo.textContent = "Formulário válido";
    }
    else {
        menInfo.textContent = "Formulário Inválido, B não é maior que A";
        campoA.value = '';
        campoB.value = '';
    }
});