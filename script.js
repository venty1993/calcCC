

const ccSize = {
    big : 150,
    small : 70
}

const ccType = {
    hala : {
        크림치즈 : 560/655,
        베이컨 : 43/655,
        할라피뇨 : 52/655
    },
    truffle : {
        크림치즈 : 700/715,
        후추 : 1/715,
        오일 : 14/715
    },
    salmon : {
        연어CC : 493/721.9,
        소금 :1.4/721.9,
        후추 :2.5/721.9,
        연어 :100/721.9,
        양파 :100/721.9,
        케이퍼 :25/721.9
    },
    fig : {
        연어CC : 2040/2423,
        무화과 :204 / 2423,
        호두 : 128 /2423,
        설탕 : 51 / 2423
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
    console.log(targetConatiner)
    
    let total = 0;

    total += parseInt(inputs.item(0).value)*150
    total += parseInt(inputs.item(1).value)*70

    if(isNaN(total)){
        console.log('test?')
        targetConatiner.innerHTML='숫자를 입력하쇼'
        return;
    }

    makeRow();

    function makeRow(){
        targetConatiner.innerHTML =`total : ${total}`

        const select = ccType[type];
        
        for (const key in select) {
            
                const element = select[key];
                
                const rowElement = document.createElement('div');
                rowElement.classList.add('cc-result-row')
                
                const nameElement = document.createElement('p')
                nameElement.innerText = `${key} : `;


                const weightElement = document.createElement('p') 
                const weight = total * element
                weightElement.innerText = weight.toFixed(2) + 'g';
                if(type='hala'){
                    weightElement.innerText += ` (${(weight*(70/68)).toFixed(2)}g)`
                }

                rowElement.appendChild(nameElement)
                rowElement.appendChild(weightElement)

                targetConatiner.appendChild(rowElement)
            }
        }
    
}