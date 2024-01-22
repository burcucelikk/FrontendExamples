//Ödev 1
let kelime= "ikhkjGSAHGJSAŞASİKLAŞÖÇWÖsSHAGjshgJS"
console.log(kelime.charAt(0).toUpperCase()+kelime.slice(1).toLowerCase())

//Ödev 2
console.log(kelime.charAt(0).toLocaleUpperCase('tr-TR')+kelime.slice(1).toLocaleLowerCase('tr-TR'))

//-------------------------------------------------------------------------------------------//

//Soru1:
function tersCevir(cumle) {
    return cumle.split(' ').map(function(kelime) {
        return kelime.split('').reverse().join('');
    }).join(' ');
}
console.log(tersCevir("Bugün hava çok bulutlu"))

//Soru2:
function cumleCevir(cumle) {
    return cumle.split('').reverse().join('');
}
console.log(cumleCevir("Bugün hava çok bulutlu"))

//Soru3:
function calcIteration(sayi){
    let count=0
    while(sayi!=1){
        if(sayi%2===0){
            sayi=sayi/2
        }
        else{
            sayi=(sayi*3)+1
        }
        count++
    }
    return count
}
console.log(calcIteration(5))

//-------------------------------------------------------------------------------------------//

//Ödev3-
// a ve b, pozitif veya negatif sayısal parametreleri kabul eden bir fonksiyon oluşturun.
// a eğer b'den büyükse, "a b den büyüktür",
// eğerki a, b den küçükse "a b den küçüktür",
// eğerki a b'ye eşitse "a b'ye eşittir"
// çıktısını verecek olan bir fonksiyon yazın. Ancak if, else, ternary operator kullanamazsınız. Bu fonksiyonu nasıl yazabilirdik?

function compare(a,b){
    const result =
    (a > b && `${a} ${b} den büyüktür`) || (a < b && `${a} ${b} den küçüktür`) || (a === b && `${a} ${b}'ye eşittir`);
    console.log(result);
}
console.log(compare(8,1));

function compareNums(num1, num2) {
    const diff = num1 - num2;              
    const status = Math.sign(diff);
    const outputs = ["küçüktür", "eşittir", "büyüktür"];
    return `${num1} ${outputs[status+1]} ${num2}`;
  }
  console.log(compareNums(6,6));