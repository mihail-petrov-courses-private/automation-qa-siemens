// Задача 1 
alert("Мазе бот v1 на Вашите услуги");

// Задача 2
let visitorFirstName = prompt("Как се казваш ?");
let visitorLastName  = prompt("Фамилия");
let visitorAge       = prompt("На колко си години ?");
let visitorGender    = prompt("Какъв е твоя пол ?");

let isVisitorUnderaged  = visitorAge < 18;
let isVisitorAdoult     = visitorAge >= 18;

let isVisitorMale       = visitorGender == "мъж";
let isVisitorFimale     = visitorGender == "жена";

// (ако клиента е от мъжки пол и пълнолетен) - Здравейте г-н {Фамилията на човека}
// (ако клиента е от женски пол и пълнолетен) - Здравейте г-жо {Фамилията на човека}
// (ако клиента е от мъжки пол и непълнолетен) - Здрасти малкия, не пускаме дечица тука - бягай за бира
// (ако клиента е от женски пол и непълнолетен) - Здрасти малката, не пускаме дечица тука - отивай да си играеш

if(isVisitorMale && isVisitorAdoult) {
    alert(`Здравейте г-н  ${visitorLastName}`);
}
else if(isVisitorFimale && isVisitorAdoult) {
    alert(`Здравейте г-жо  ${visitorLastName}`);
}
else if(isVisitorMale && isVisitorUnderaged) {
    alert("Здрасти малкия, не пускаме дечица тука - бягай за бира");
}
else if(isVisitorFimale && isVisitorUnderaged) {
    alert("Здрасти малката, не пускаме дечица тука - отивай да си играеш");
}


// if(isVisitorMale) {
//     if(isVisitorAdoult) {
//         alert(`Здравейте г-н  ${visitorLastName}`);
//     }
//     else if(isVisitorUnderaged) {
//         alert("Здрасти малкия, не пускаме дечица тука - бягай за бира");
//     }
// }
// else if(isVisitorFimale) {

//     if(isVisitorAdoult) {
//         alert(`Здравейте г-жо  ${visitorLastName}`);
//     }
//     else if(isVisitorUnderaged) {
//         alert("Здрасти малката, не пускаме дечица тука - отивай да си играеш");
//     }
// }


// if(isVisitorMale) {
//     if(isVisitorAdoult) {
//         alert(`Здравейте г-н  ${visitorLastName}`);
//     }
//     else {
//         alert("Здрасти малкия, не пускаме дечица тука - бягай за бира");
//     }
// }
// else if(isVisitorFimale) {

//     if(isVisitorAdoult) {
//         alert(`Здравейте г-жо  ${visitorLastName}`);
//     }
//     else {
//         alert("Здрасти малката, не пускаме дечица тука - отивай да си играеш");
//     }
// }



// if(isVisitorMale) {

//     let message = isVisitorAdoult
//     ? `Здравейте г-н  ${visitorLastName}`
//     : "Здрасти малкия, не пускаме дечица тука - бягай за бира";

//     alert(message);
// }
// else if(isVisitorFimale) {

//     let message = isVisitorAdoult
//     ? `Здравейте г-жо  ${visitorLastName}`
//     : "Здрасти малката, не пускаме дечица тука - отивай да си играеш";
//     alert(message);
// }

// Задача 3
alert(`Добре дошъл в мазето на баба ${visitorFirstName} ${visitorLastName}`);
alert(`Ти си на ${visitorAge} години`);


// задача 4

let productIdAppleWine          = "ябълково	вино";
let productIdSmokedMeat         = "пушено	месо";
let productIdPlumJam            = "сливов мармалад";
let productIdMarinatedPeppers   = "мариновани	чушки";
let productIdPiggyBank          = "прасенце касичка";

// задача 5
let productIdAppleWineCount          = 10;
let productIdSmokedMeatCount         = 5;
let productIdPlumJamCount            = 9;
let productIdMarinatedPeppersCount   = 4;
let productIdPiggyBankAmmount        = 184.35;

// задача 6
let productIdAppleWineSerialNumber          = `C7544_${productIdAppleWineCount}`;
let productIdSmokedMeatSerialNumber         = `M7441_${productIdSmokedMeatCount}`;
let productIdPlumJamSerialNumber            = `S6491_${productIdPlumJamCount}`;
let productIdMarinatedPeppersSerialNumber   = `P7485_${productIdMarinatedPeppersCount}`;
let productIdPiggyBankSerialNumber          = `B6584_${productIdPiggyBankAmmount}`;

// задача 7
console.log(productIdAppleWine          , productIdAppleWineCount       , productIdAppleWineSerialNumber);
console.log(productIdSmokedMeat         , productIdSmokedMeatCount      , productIdSmokedMeatSerialNumber);
console.log(productIdPlumJam            , productIdPlumJamCount         , productIdPlumJamSerialNumber);
console.log(productIdMarinatedPeppers   , productIdMarinatedPeppersCount, productIdMarinatedPeppersSerialNumber);
console.log(productIdPiggyBank          , productIdPiggyBankAmmount     , productIdPiggyBankSerialNumber);

// алтернативен вариант
// console.log(`${productIdAppleWine} ${productIdAppleWineCount} ${productIdAppleWineSerialNumber}`);

// задача 8
if(isVisitorAdoult) {

    let donationResponse        = prompt("Искате ли да направите дарение да / не");
    let isDonationProcessable   = donationResponse == "да";

    if(isDonationProcessable) {

        let donationAmmount     = prompt("Сумата на вашето дарение ?");
        console.log('**');
        console.log(donationAmmount);

        let donationTax         = (donationAmmount * 20) / 100;
        console.log(donationTax);

        let totalAmmount        = (+donationAmmount) + donationTax;
        alert(`Дължите сума от ${totalAmmount}`);
    }
    else {
        alert("Засрами се, ти си лош човек");
    }
}

