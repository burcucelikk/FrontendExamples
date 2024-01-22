// DATA TYPES
// 1- Primitive : number, string, boolean, null, undefined
//2-Non-Primitive : object, array

//let ve var her zaman değiştirebildiğin değerleri tanımlar. Aralarındaki fark let scope içinde 
//tanımlanırsa başka yerden çekme, değişiklik ya da tanımlama yapamazsın, var ise scope içinde olmasına rağmen
//her yerden ulaşılabilir.
//const: sabit değişkenleri tanımlarken kullanırız

const piNumber=3.14
console.log(piNumber);

const myArr=[]
const myObj= {
    name:"Burcu",
    age:25
}
const myFunction= () => {
    let counter=0;
    console.log(counter);
}
myFunction();

const myFunction2= () => {
    let counter=0;
}
//console.log(counter);   YAPILAMAZ SCOPE İÇİNDE OLMALI

// myArr.push("Kedi")       push metodu ile dizinin sonuna ekleme yapabiliriz
// myArr.push(2)

let myStory='Bir köyde , eski bir evin bahçesinde, renkli çiçeklerle dolu bir bahçe vardı. Bu köyde yaşayan küçük bir çocuk, her sabah bahçede oyun oynayarak mutlu anlar geçiriyordu.'
// 1- Yazdığınız hikayenin uzunluğunu yazdırın.
console.log(myStory.length);
// 2- Hikayenin index sayısının uzunluğunu bulun.
console.log(myStory.length-1);
// 3- string içerisinde bir kelimenin indexini ve son indexini sorgulayın.
let kelime='köyde'
console.log("İlk indeks:",myStory.indexOf('köyde')," Son indeks:", myStory.lastIndexOf(kelime))
// 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(0,15))
console.log(myStory.slice(0,15))
// 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring(15)) //başlayacağı indeksi yazmak yeterli sonuna kadar alıyor
console.log(myStory.slice(15))
// 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
console.log(myStory.substring((myStory.length-5)))
console.log(myStory.slice(-5))
// 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
console.log((myStory.substring(10,(myStory.length))).substring(0,10))   //(10,20) yapılabilirdi
console.log((myStory.slice(10,(myStory.length))).slice(0,10))
// 8- Son 5 karakter haric hikayenizi yazdırın.
console.log(myStory.substring(0,(myStory.length-5)))
console.log(myStory.slice(0,(myStory.length-5)))
// 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
console.log(myStory.includes('bir'))
// 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
console.log(myStory.replaceAll('i', 'ı'))
// 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
console.log(myStory.replace('a', 'e'))
// 12- Bütün metni büyük harfe çevirin.
console.log(myStory.toUpperCase())
// 13- Bütün metni küçük harfe çevirin.
console.log(myStory.toLowerCase())
// 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
let userName = prompt("İsminizi giriniz.")
//   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
console.log("Hoşgeldin, " + userName);
//   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
let degisken = `Benim adım: ${userName.trim()}`
console.log(degisken);
// 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun. 
//   a- Başındaki boşlukları kaldırın.
let yeniHikaye='      Bir köyde , eski bir evin bahçesinde, renkli çiçeklerle dolu bir bahçe vardı. Bu köyde yaşayan küçük bir çocuk, her sabah bahçede oyun oynayarak mutlu anlar geçiriyordu.      '
//   b- Sonundaki boşlukları kaldırın.
console.log(userName.trimEnd());
//   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
let trimedDegisken = degisken
console.log(trimedDegisken);
// 16- 14. sorudaki çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
console.log(trimedDegisken.substring(0,7).toUpperCase() + trimedDegisken.substring(7,11)+ " " + userName.trim());
// 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"
alert("Ara vakti iyi dinlenmeler")