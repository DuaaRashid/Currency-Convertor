console.log("Currency Converter");
import promptSync from "prompt-sync";
let prompt=promptSync()
import inquirer from 'inquirer'
// The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.
// console.log("Currencies Available to convert from PKR to 1)TurkLira 2)IranRial 3)OmanRial 4)Algerian dinar 5)Bahraini dinar 6)Iraqi dinar 7)Yemeni rial 8)Jordanian dinar 9)Kuwaiti dinar 10)Tunisian dinar : ")
// let chanCurr=prompt("Choose currency you want to change in.")
let chanCurr=await inquirer.prompt({
type:'list',
name:'currency',
choices:["Currencies Available to convert from PKR to",
"1)Turkish Lira", 
"2)Irani Rial", 
"3)Omani Rial", 
"4)Algerian Dinar", 
"5)Bahraini Dinar", 
"6)Iraqi Dinar", 
"7)Yemeni Rial", 
"8)Jordanian Dinar", 
"9)Kuwaiti Dinar",
"10)Tunisian Dinar"
]})
switch(chanCurr.currency){
case "1)Turkish Lira": 
    let TurLi=+prompt("Enter amount you want to convert from Rupees to TurkishLira :")
    console.log(`${TurLi} PKR in Turkish Lira is ${TurLi*0.10}`)
    break;
    
case "2)Irani Rial":
    let IrRial:any=prompt("Enter amount you want to convert from Rupees to Irani Rial :")
    console.log(`${IrRial}  PKR in Irani Rial is ${IrRial*148.81}`)
    break;
    
case "3)Omani Rial" :
    let OmRial:any=prompt("Enter amount you want to convert from Rupees to Omani Riyal :")
    console.log(`${OmRial}  PKR in Omani Rial is ${OmRial*0.0014}`)
    break;
    
case "4)Algerian Dinar":
    let AlRial:any=prompt("Enter amount you want to convert from Rupees to ALgerian Riyal :")
    console.log(`${AlRial}  PKR in Algerian Rial is ${AlRial*0.47}`)
    break;

case "5)Bahraini Dinar":
    let BahDinar:any=prompt("Enter amount you want to convert from Rupees to Bahraini Dinar :")
    console.log(`${BahDinar}  PKR in Bahraini Dinar is ${BahDinar*0.0013}`)
    break;

    case "6)Iraqi Dinar":
    let IraqiDinar:any=prompt("Enter amount you want to convert from Rupees to Iaqi Dinar :")
    console.log(`${IraqiDinar}  PKR in Iraqi Dinar is ${IraqiDinar*4.62}`)
    break;

case "7)Yemeni Rial":
    let yemRial:any=prompt("Enter amount you want to convert from Rupees to Yemeni Riyal :")
    console.log(`${yemRial}  PKR in Yemeni Rial is ${yemRial*0.88}`)
    break;

case "8)Jordanian Dinar":
    let jorDin:any=prompt("Enter amount you want to convert from Rupees to Jordanian Dinar :")
    console.log(`${jorDin}  PKR in Jordanian Dinar is ${jorDin*0.0025}`)
    break;

case "9)Kuwaiti Dinar":
    let kuwDin:any=prompt("Enter amount you want to convert from Rupees to Kuwaiti Dinar :")
    console.log(`${kuwDin}  PKR in Kuwaiti Dinar is ${kuwDin*0.0011}`)
    break;

case "10)Tunisian Dinar":
    let tunDin:any=prompt("Enter amount you want to convert from Rupees to Tunisian Dinar :")
    console.log(`${tunDin}  PKR in Tunisian Dinar is ${tunDin*0.011}`)
}