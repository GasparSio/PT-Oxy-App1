const selectUnit = document.getElementById('select-units')
const input = document.getElementById('input-value')
const unitToConvert = document.getElementById('unit-to-convert')
const resultNumber = document.getElementById('result-number')
const resultUnit = document.getElementById('result-unit')
const favIcon = document.getElementById('corazon-vaforito')

const eventListener = input.addEventListener("input", (event) =>{
  const tipoConversion = selectUnit.value;
  const numero = event.target.value;

    let resultado;
    if(tipoConversion === 'kmsMil'){
        resultado = numero * 0.62137119;
    }else if(tipoConversion === 'milKms'){
        resultado = numero / 0.62137119;
    }else if(tipoConversion === 'pieMts'){
        resultado = numero * 0.3048;
    }else if(tipoConversion === 'mtsPie'){
        resultado = numero / 0.3048;
    }else if(tipoConversion === 'cmsPul'){
        resultado = numero / 2.54;
    }else if(tipoConversion === 'pulCms'){
        resultado = numero * 2.54;
    }
    
    resultNumber.innerHTML = resultado.toFixed(2)
})

selectUnit.addEventListener("change", function() {
    const opcionSeleccionada = selectUnit.value;
    switch (opcionSeleccionada) {
      case "kmsMil":
        unitToConvert.textContent = "kms";
        resultUnit.textContent = "millas";
        input.value = '';
        resultNumber.innerHTML = '';

        break;
      case "milKms":
        unitToConvert.textContent = "millas";
        resultUnit.textContent = "kms";
        input.value = '';
        resultNumber.innerHTML = '';
        break;
      case "pieMts":
        unitToConvert.textContent = "pies";
        resultUnit.textContent = "metros";
        input.value = '';
        resultNumber.innerHTML = '';
        break;
      case "mtsPie":
        unitToConvert.textContent = "metros";
        resultUnit.textContent = "pies";
        input.value = '';
        resultNumber.innerHTML = '';
        break;
      case "cmsPul":
        unitToConvert.textContent = "cms";
        resultUnit.textContent = "pulgadas";
        input.value = '';
        resultNumber.innerHTML = '';
        break;
      case "pulCms":
        unitToConvert.textContent = "pulgadas";
        resultUnit.textContent = "cms";
        input.value = '';
        resultNumber.innerHTML = '';
        break;
    }
    return 
})

let savedItem = [];

function guardarValor() {
  // Obtener el valor del input y el texto de la etiqueta span
  const inputValueFav = document.getElementById("input-value").value;
  const unitConvertValueFav= document.getElementById("unit-to-convert").textContent;
  const resultValueFav= document.getElementById("result-number").textContent;
  const unitToConvertValueFav = document.getElementById("result-unit").textContent;
  const valores = `${inputValueFav} ${unitConvertValueFav} → ${resultValueFav} ${unitToConvertValueFav}`;
  const newSection = document.getElementById("saved-list");

    savedItem.push(valores)
    guardarFavLocalSto();
    console.log(savedItem);
    
    savedItem.forEach(element => {
      const newElement = document.createElement("div");
      newElement.classList.add('divFav')
      newElement.append(element)
      newSection.append(newElement);
      savedItem.shift()
    });
  }

function guardarFavLocalSto(){
    localStorage.setItem('savedList', savedItem);
} 


favIcon.addEventListener('click', ()=>{
    guardarValor();
})

// const ValueSaved = localStorage.getItem('savedList');
// if(ValueSaved){
//     document.getElementById('divFav').textContent = ValueSaved;
// }








