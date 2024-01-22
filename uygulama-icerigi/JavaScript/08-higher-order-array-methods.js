// Kullanılacak diziler
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi1.forEach(meyve => {
    console.log(meyve)
});
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
});
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const newArr = [];
dizi.forEach(number =>newArr.push(num*2))
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let sum=0
dizi2.forEach(num =>{
    sum+=num
})
console.log("Toplam: ",sum)
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
dizi.forEach(eleman,index,arr=>{
    console.log(eleman);
    if(index===arr.length-1){
        console.log("Son eleman:", eleman);
    }
});
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
const buyukHarfDizi =dizi1.map(meyve=> meyve.toUpperCase())
// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
const rastgeleToplamDizi =dizi3.map(sayi=> sayi+Math.floor((Math.random()*10)+1))
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const tersCevrilmisKelimeler = dizi1.map(meyve=>meyve.reverse())
// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const stringDizi =dizi2.map(val=> val.toString())
// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const tersDizi= dizi1.map(meyve=> {
    let ters ="";
    for(let i=meyve.length-1; i>=0;i--){
        ters+=meyve[i]
    }
    return ters
})
// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const ciftSayilar=dizi3.filter(number => num%2===0)
console.log(ciftSayilar)
// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
const uzunluk= dizi1.filter(str=> str.length===4)
console.log(uzunluk)
// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
const toplam= dizi.reduce((acc,val)=> acc+val+2,0)
console.log(toplam)
// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
const ilkCift=dizi.find(num=>num%2===0)
console.log(ilkCift)
// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
const sonCift=dizi.reverse().find(num=>num%2===0)
//const sonCift=dizi.findLast(num=>num%2===0)
console.log(sonCift)
// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const negatifSayi=dizi2.some(number=> number<0)
console(negatifSayi)
// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const pozitifSayi=dizi2.every(number=> number>0)
console(pozitifSayi)
// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const siraliDizi= dizi2.sort(a,b => a-b)
console.log(siraliDizi)
