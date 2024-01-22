// 1- myObject isimli boş bir nesne oluşturun.
const myObject = {}
// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
myObject.isim="Burcu"
myObject.yas=25
myObject.cinsiyet="Female"
myObject.meslek="Developer"
// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
delete myObject.cinsiyet
// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

//let newObject={}
//Object.assign(newObject,myObject)
let newObject={...myObject}
console.log(newObject)
// 5- nesnenizin anahtarlarını konsola yazdırın.

//console.log(Object.keys(myObject))
for(const key in myObject){
  console.log(key)
}
// 6- nesnenizin değerlerini konsola yazdırın.

//console.log(Object.values(myObject))
for(const key in myObject){
  console.log(myObject[key])
}
// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.

//console.log(Object.entries(myObject))
for(const key in myObject){
  console.log(key+": "+myObject[key])
}
// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

//console.log(myObject.hasOwnPropert("isim"))
if(myObject.isim===undefined){
  console.log("Böyle bir özellik yok")
}
// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.
Object.freeze(myObject)
// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.
Object.preventExtensions(myObject)

// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
/*(örn çıktı: 
05.01.2020 balata değişimi - 1700 TL
05.01.2020 yağ değişimi - 700 TL
05.01.2020 boya koruma - 700 TL
...
...
...
28.08.2022 seramik kaplama - 4500 TL
)
*/

const aracBilgileri = {
    id: "audiA6_123",
    model: "audiA6",
    yil: 2019,
    renk: "kırmızı",
    servisKayitlari: [
      {
        id: "audiA6_123_1",
        tarih: "05.01.2020",
        km: 2500,
        ucret: 3000,
        detay: [
          {
            id: "audiA6_123_1_1",
            aciklama: "balata değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_1_2",
            aciklama: "yağ değişimi",
            ucret: 700,
          },
          {
            id: "audiA6_123_1_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_2",
        tarih: "25.06.2021",
        km: 10500,
        ucret: 5000,
        detay: [
          {
            id: "audiA6_123_2_1",
            aciklama: "balata değişimi",
            ucret: 2700,
          },
          {
            id: "audiA6_123_2_2",
            aciklama: "yağ değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_2_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_3",
        tarih: "28.08.2022",
        km: 25400,
        ucret: 10000,
        detay: [
          {
            id: "audiA6_123_3_1",
            aciklama: "balata değişimi",
            ucret: 3500,
          },
          {
            id: "audiA6_123_3_2",
            aciklama: "yağ değişimi",
            ucret: 2000,
          },
          {
            id: "audiA6_123_3_3",
            aciklama: "seramik kaplama",
            ucret: 4500,
          },
        ],
      },
    ],
  };

  
// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.
const student={
  name:"Burcu",
  surname:"Çelik",
  age:25
}
for(let key in student){
  console.log(key)
}
// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)
