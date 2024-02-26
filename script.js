const inputName = document.querySelector('input[type="text"]');
const type = document.querySelector('#type');
const result = document.querySelector('#result');
const obesidadeGrave = document.querySelector('#obsidadeGrave');
const obesidade = document.querySelector('#obesidade');
const sobrepeso = document.querySelector('#sobrepeso');
const normal = document.querySelector('#normal');
const magreza = document.querySelector('#magreza');
const spanIMC = document.querySelector('#spanIMC');

/*Desabilitando o button e chamando a função IMC*/
function disableBtn() {
    document.addEventListener('DOMContentLoaded', function () {
        const btnCalculate = document.querySelector('#buttonCalculate')
        btnCalculate.addEventListener('click', function (event) {
            event.preventDefault();
            calculateIMC();
        });
    });
}

/*IMC*/
function calculateIMC(imc) {

    limpaClasses();

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const name = inputName.value;

    /*Verifica entrada do nome*/
    if (!verificaInputs(name)) {
        alert('Nome inválido.');
        return
    }

    /*Operação do IMC*/
    imc = weight / (height ** 2);
    imc = imc.toFixed(2);
    /*Imprimindo na tela o resultado*/
    result.innerHTML = `${name}, o seu IMC é: <br> <span class="imc-value ${getIMCClass(imc)}">${imc}. 
    <br> ${grauIMC(imc)}</span> <br> A sua altura é: ${height}, logo o seu peso ideal é entre <br> ${pesoIdeal(height)}.`;
};

/*Limpa classes*/
function limpaClasses() {
    magreza.classList.remove('select');
    normal.classList.remove('select');
    sobrepeso.classList.remove('select');
    obesidade.classList.remove('select');
    obesidadeGrave.classList.remove('select');
}

/*Logica para verifica o IMC*/
function grauIMC(imc) {

    if (imc > 40.0) {
        obesidadeGrave.classList.add('select');
        return 'Obesidade Grave (Grau: III)';
    }
    if (imc >= 30.0 && imc <= 39.9) {
        obesidade.classList.add('select');
        return 'Obesidade (Grau: II)';
    }
    if (imc >= 25.0 && imc <= 29.9) {
        sobrepeso.classList.add('select');
        return 'Sobrepeso (Grau: I)';
    }
    if (imc >= 18.5 && imc <= 24.9) {
        normal.classList.add('select');
        return 'Normal (Grau: 0)';
    }
    if (imc < 18.5) {
        magreza.classList.add('select');
        return 'Magreza (Grau: 0)';
    }

}
/*Função do Peso Ideal*/
function pesoIdeal(height) {
    if (height >= 1.50 && height < 1.55) {
        return '41,6 - 56kg';
    } else if (height >= 1.55 && height < 1.60) {
        return '44,4 - 59,8kg';
    } else if (height >= 1.60 && height < 1.65) {
        return '44,4 - 63,7kg';
    } else if (height >= 1.65 && height < 1.70) {
        return '50,4 - 67,8kg';
    } else if (height >= 1.70 && height < 1.75) {
        return '53,5 - 72kg';
    } else if (height >= 1.75 && height < 1.80) {
        return '56,7 - 76,3kg';
    } else if (height >= 1.80 && height < 1.85) {
        return '59,9 - 80,7kg';
    } else if (height >= 1.85) {
        return '63,3 - 85,2kg';
    } else {
        return 'Altura inválida';
    }
}

/* Função para obter a classe do IMC com base no valor */
function getIMCClass(imc) {
    if (imc > 40.0) {
        return 'imc-obesidade-grave';
    }
    if (imc >= 30.0 && imc <= 39.9) {
        return 'imc-obesidade';
    }
    if (imc >= 25.0 && imc <= 29.9) {
        return 'imc-sobrepeso';
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return 'imc-normal';
    }
    if (imc < 18.5) {
        return 'imc-magreza';
    }
}

/*Verifica inputs */
function verificaInputs(name) {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/;
    return regex.test(name);
}

/*Chamando Função*/
disableBtn();

