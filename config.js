let calcButton = document.querySelector(".calcButton");
let useHours = document.getElementById("useHours");
let kw = document.getElementById("KW");
let selector = document.querySelector(".ItensToSelect");
let dayUse = document.querySelector(".dayKWH");
let monthUse = document.querySelector(".monthKWH");
let tipsText = document.querySelector(".tipsText");

calcButton.addEventListener("click", function(e) {
    e.preventDefault();

    let tvConsumePerDay = (100 / 1000) * useHours.value * kw.value;
    let tvConsumePerMonth = tvConsumePerDay * 30;
    let geladeiraConsumePerDay = (200 / 1000) * useHours.value * kw.value;
    let geladeiraConsumePerMonth = geladeiraConsumePerDay * 30;
    let computerConsumePerDay = (220 / 1000) * useHours.value * kw.value;
    let computerConsumePerMonth = computerConsumePerDay * 30;
    let microondasConsumePerDay = (1200 / 1000) * useHours.value * kw.value;
    let microondasConsumePerMonth = microondasConsumePerDay * 30;
    let chuveiroConsumePerDay = (5500 / 1000) * useHours.value * kw.value;
    let chuveiroConsumePerMonth = chuveiroConsumePerDay * 30;

    switch (selector.value){
        case "geladeira":
            dayUse.innerHTML = formatCurrencyBRL(geladeiraConsumePerDay);
            monthUse.innerHTML = formatCurrencyBRL(geladeiraConsumePerMonth);
            tipsText.style.display = "block";
            tipsText.innerHTML = "Não secar roupas atrás da geladeira. Além de sobrecarregar o aparelho e gerar risco de choque, isso aumenta o consumo de energia.";
            break;
        case "tv":
            dayUse.innerHTML = formatCurrencyBRL(tvConsumePerDay);
            monthUse.innerHTML = formatCurrencyBRL(tvConsumePerMonth);
            tipsText.style.display = "block";
            tipsText.innerHTML = "Lembrar sempre de desligar quando sair daquele cômodo mesmo que seja por um curto período de tempo.";
            break;
        case "computer":
            dayUse.innerHTML = formatCurrencyBRL(computerConsumePerDay);
            monthUse.innerHTML = formatCurrencyBRL(computerConsumePerMonth);
            tipsText.style.display = "block";
            tipsText.innerHTML = "Desligar o computador da tomada quando não estiver sendo utilizado.";
            break;
        case "microondas":
            dayUse.innerHTML = formatCurrencyBRL(microondasConsumePerDay);
            monthUse.innerHTML = formatCurrencyBRL(microondasConsumePerMonth);
            tipsText.style.display = "block";
            tipsText.innerHTML = "Preferir alimentos frescos aos congelados, que demandam mais tempo de preparo e, consequentemente, mais energia.";
            break;
        case "chuveiro":
            dayUse.innerHTML = formatCurrencyBRL(chuveiroConsumePerDay);
            monthUse.innerHTML = formatCurrencyBRL(chuveiroConsumePerMonth);
            tipsText.style.display = "block";
            tipsText.innerHTML = "Dar preferência aos sistemas solares para aquecimento de água - eles são mais econômicos e ainda ajudam a preservar o meio ambiente.";
            break;
        // case "empty":
        //     alert("Por favor, selecione um eletrodoméstico.");
        //     break;
        default:
            alert("Por favor, selecione um eletrodoméstico.");
            break;
    }
    // if(selector.value === "empty"){
    //     alert("Por favor, selecione um eletrodoméstico.");
    // }
});

function formatCurrencyBRL(value){
    // Precisa sempre fazer essa conversão em número para poder usar o toLocaleString
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}