const deleteBtn = document.querySelectorAll('.del')
const billItem = document.querySelectorAll('span.not')
const billComplete = document.querySelectorAll('span.paid')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteBill)
})

Array.from(billItem).forEach((el)=>{
    el.addEventListener('click', markPaid)
})

Array.from(billComplete).forEach((el)=>{
    el.addEventListener('click', markUnpaid)
})

async function deleteBill(){
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('bills/deleteBill', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markPaid(){
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('bills/markPaid', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markUnpaid(){
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('bills/markUnpaid', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Using some logic to produce the number of bills that you are able to pay with the money left in your account
function cyclesPayable(){

}

// Using logic to produce amount of money you are away from being able to pay all of your bills
function billsPayable(){
    
}