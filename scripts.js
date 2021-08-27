let USD = "USD"
let EUR = "EUR"
let CFA = "CFA"
let CHF = "CHF"
let defaultIndex = document.getElementById('defaultCurrency')
// defaultIndex.addEventListener('change', setIndex)
function setIndex(e){
    this.defaultCurrency = defaultIndex.options[defaultIndex.selectedIndex].value
}




const app = Vue.createApp({
    data() {
        return {
            defaultCurrency: USD,
            totalBalance: 0.0,
            currencies : [ 
            {name: "USD", balance : 0.0},
            {name: "EUR", balance : 0.0},
            {name: "CFA", balance : 0.0},
            {name: "CHF", balance : 0.0},
        ]
        }
    },

    methods: {

        deposit(){
            let select = document.getElementById("depositSelect").selectedIndex
            amount = parseFloat(document.getElementById('depositAmount').value) || 0
            if(select == 0){
              this.currencies[0].balance = amount + this.currencies[0].balance 
               
            }
            if(select == 1){
               this.currencies[1].balance  = this.currencies[1].balance + amount 
            
            }
            if(select == 2){
                this.currencies[2].balance  = this.currencies[2].balance + amount
       
            }

            if(select == 3){
                this.currencies[3].balance = this.currencies[3].balance +  amount
               
            }

            this.calculateTotalBalance()
           },

           transfer(){
            let transferTo = document.getElementById("transferTo").selectedIndex   
            let transferFrom = document.getElementById("transferFrom").selectedIndex
            amount = parseFloat(document.getElementById('transferAmount').value) || 0

            if(this.subtractFromStart(transferFrom, amount)){
                this.addToDestination(transferTo, amount)
            } else{
                alert("operation failed. this could be because of insufficient balance or transfering to same currency")
            }
            
           },

           addToDestination(transferTo, amount)  {
            if(transferTo == 0 ){
                this.currencies[0].balance =this.currencies[0].balance + amount 
                 return true
              }
              if(transferTo == 1){
                 this.currencies[1].balance  = this.currencies[1].balance + amount 
                 return true
              }
              if(transferTo == 2){
                  this.currencies[2].balance  = this.currencies[2].balance + amount
                  return true
              }
  
              if(transferTo == 3){
                  this.currencies[3].balance = this.currencies[3].balance +  amount
                  return true
              }

              return false
           },

           subtractFromStart(transferFrom, amount){
            if(transferFrom == 0 && this.currencies[0].balance >= amount ){
                this.currencies[0].balance =this.currencies[0].balance - amount 
                 return true
              }
              if(transferFrom == 1 && this.currencies[1].balance >= amount ){
                 this.currencies[1].balance  = this.currencies[1].balance - amount 
              return true
              }
              if(transferFrom == 2 && this.currencies[2].balance >= amount ){
                  this.currencies[2].balance  = this.currencies[2].balance - amount
              return true
              }
  
              if(transferFrom == 3 && this.currencies[3].balance >= amount ){
                  this.currencies[3].balance = this.currencies[3].balance -  amount
                 return true
              }

              return false
           },
           

        getBalance (index){
            if(index == 0){
                return this.currencies[0].balance + " ".concat(this.currencies[0].name)
            }
            if(index == 1){
                return this.currencies[1].balance + " ".concat(this.currencies[1].name)

            }
            if(index == 2){
                return this.currencies[2].balance + " ".concat(this.currencies[2].name)

            }
            if(index == 3){
                return this.currencies[3].balance + " ".concat(this.currencies[3].name)

            }
        },

        calculateTotalBalance(){
           for(currency in this.currencies){
               console.log(currency.name);
           }
            console.log(this.totalBalance)
            console.log("calculated")
        }, 
       





    },

    computed: {

        getTotalBalance() {
            return "Total Balance" + " ".concat(this.totalBalance) + " " + this.defaultCurrency
        }
        
    }
})

// let AUSD = 550
// let AEUR = 650

// function convertToUSD(){
//     let balance = 0
//     for(currency in currencies){
//         if(currency.name  == USD){
//             balance += currency.balance
//         }
//         if(currency.name  == EUR){
//             balance += currency.balance * 0.85
//         }
//         if(currency.name  == CFA){
//             balance += currency.balance * 550
//         }
//         if(currency.name  == CHF){
//             balance += currency.balance * 0.91
//         }

//     }

//     return balance
// }
// function convertToEUR(){
//     let balance = 0
//     for(currency in currencies){
//         if(currency.name  == USD){
//             balance += currency.balance * 
//         }
//         if(currency.name  == EUR){
//             balance += currency.balance * 0.85
//         }
//         if(currency.name  == CFA){
//             balance += currency.balance * 550
//         }
//         if(currency.name  == CHF){
//             balance += currency.balance * 0.91
//         }

//     }

//     return balance
// }
    

// const app = Vue.creatApp({
    
//     // data() {
//     //     return{
//     //         USD : ["1", "USD", 0 ],
//     //         EUR : ["2", "EUR", 0 ],
//     //         CFA : ["3", "CFA", 0 ],
//     //         CHF : ["4", "CHF", 0 ],
//     //         defaultCurrency : USD,
//     //     }
//     // }
// })