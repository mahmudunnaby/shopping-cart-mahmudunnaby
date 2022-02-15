
//  Plus Button Works (phone)

document.getElementById('pos-btn-phone').addEventListener('click', function () {
    
    let inputAmountPhone = document.getElementById('iphone-input')
    let numberOfPhoneText = inputAmountPhone.value
    let numberOfPhone = parseInt(numberOfPhoneText)
    console.log (numberOfPhone)
    
    if (numberOfPhone > -1) {

    numberOfPhone = numberOfPhone + 1
    inputAmountPhone.value=numberOfPhone
    let phonePrice = numberOfPhone * 1219
    let priceOfPhone = document.getElementById('iphone-price-text')
    priceOfPhone.innerText = phonePrice
    
    }
    console.log('click')

})















// /////RAW CODES ////////

// document.getElementById('neg-btn-phone').addEventListener('cilck', function () {



// })

// document.getElementById('pos-btn-phone').addEventListener('click', function () {




// })

// document.getElementById('neg-btn-case').addEventListener('click',function(){

    
// })
// document.getElementById('pos-btn-case').addEventListener('click',function(){


// })


// if (numberOfPhone >= 0) {

//     numberOfPhone = numberOfPhone + 1


// }


// let inputAmountPhone = document.getElementById('iphone-input')
// let numberOfPhoneText = inputAmountPhone.value
// let numberOfPhone = parseInt(numberOfPhoneText)

// let inputAmountCase = document.getElementById('case-input')
// let numberOfCaseText = inputAmountCase.value
// let numberOfCase = parseInt(numberOfCaseText)


// let phonePrice = numberOfPhone * 1219
// let casePrice = numberOfCase * 59

// let priceOfPhone = document.getElementById('iphone-price-text')
// priceOfPhone.innerText = phonePrice

// let priceOfCase = document.getElementById('case-price-text')
// priceOfCase.innerText = priceOfCase






