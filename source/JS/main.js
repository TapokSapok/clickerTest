const idBal = document.getElementById('bal');
const idMinus = document.getElementById('btn-')
const idPlus = document.getElementById('btn+')
const idShop1 = document.getElementById('shop1')
const idShop2 = document.getElementById('shop2')
const idShop3 = document.getElementById('shop3')
const idShop4 = document.getElementById('shop4')
const idShop5 = document.getElementById('shop5')
const idShop6 = document.getElementById('shop6')
const idBustClickInfo = document.getElementById('busterClick')
const idBustMoneyInfo = document.getElementById('busterMoney')


let balance = 0;
let busterMoney = 0;
let busterClick = 1;

setInterval(() => {
   balance += busterMoney;
   concl()
}, 1000);

function concl() {
   idBal.innerHTML = `Баланс: ${balance}`
}

function moneyconcl() {
   idBustMoneyInfo.innerHTML = `Бустер монет: ${busterMoney}`
}

function clickconcl() {
   idBustClickInfo.innerHTML = `Мощь клика: ${busterClick}`
}

idPlus.addEventListener('click', () => {
   balance += busterClick;
   idBal.innerHTML = `Баланс: ${balance}`
})

idShop1.addEventListener('click', () => {
   if (balance < 100) return;
   balance -= 100;
   busterMoney += 1;
   concl()
   moneyconcl()
})

idShop2.addEventListener('click', () => {
   if (balance < 1000) return;
   balance -= 1000;
   busterMoney += 10;
   concl()
   moneyconcl()
})

idShop3.addEventListener('click', () => {
   if (balance < 10000) return;
   balance -= 10000;
   busterMoney += 100;
   concl()
   moneyconcl()
})

idShop4.addEventListener('click', () => {
   if (balance < 100) return;
   balance -= 100;
   busterClick += 1;
   concl()
   clickconcl()
})

idShop5.addEventListener('click', () => {
   if (balance < 1000) return;
   balance -= 1000;
   busterClick += 10;
   concl()
   clickconcl()
})

idShop6.addEventListener('click', () => {
   if (balance < 10000) return;
   balance -= 10000;
   busterClick += 100;
   concl()
   clickconcl()
})






