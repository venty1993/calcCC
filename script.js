

const ccSize = {
    big : 150,
    small : 70
}

const ccType = {
    hala : {
        크림치즈 : 560,
        베이컨 : 43,
        할라피뇨 : 52
    },
    truffle : {
        크림치즈 : 700,
        후추 : 1,
        오일 : 14
    },
    salmon : {
        연어CC : 493,
        소금 :1.4,
        후추 :2.5,
        연어 :100,
        양파 :100,
        케이퍼 :25
    },
    fig : {
        연어CC : 2040,
        무화과 :204,
        호두 : 128,
        설탕 : 51
    }
}

const allInputs = document.getElementsByTagName('input')

console.log(allInputs)
for (const element of allInputs) {
    element.addEventListener('focus', ()=>{
        element.value=''
    })

    element.addEventListener('change', ()=>{
        calcCC(element.classList[1])
    })
    
}

function calcCC(type) {
    const inputs = document.getElementsByClassName(type)
    const targetConatiner = document.querySelector(`.cc-calculate-result.${type}`)
    const raw =ccType[type]
    const total = Object.values(raw).reduce((sum,val) => sum +val, 0)

    let inputTotal = 0;

    inputTotal += parseInt(inputs.item(0).value)*150
    inputTotal += parseInt(inputs.item(1).value)*70

    if(isNaN(inputTotal)){
        targetConatiner.innerHTML='숫자를 입력하쇼'
        return;
    }

    makeRow();

    function makeRow(){
        targetConatiner.innerHTML =`total : ${inputTotal}`

        const select = ccType[type];
        
        for (const key in select) {
            
                const element = select[key];
                
                const rowElement = document.createElement('div');
                rowElement.classList.add('cc-result-row')
                
                const nameElement = document.createElement('p')
                nameElement.innerText = `${key} : `;


                const weightElement = document.createElement('p') 
                const weight = (inputTotal * element)/total
                weightElement.innerText = weight.toFixed(2) + 'g';
                if(type === 'hala'){
                    weightElement.innerText += ` (${(weight*(70/68)).toFixed(2)}g)`
                }

                rowElement.appendChild(nameElement)
                rowElement.appendChild(weightElement)

                targetConatiner.appendChild(rowElement)
            }
        }
    
}