// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak.
// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)
const carpim=(sayi1,sayi2) => sayi1 * sayi2
console.log(carpim(5,3))
// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
const kelime= (cumle) => cumle.split(" ").length
console.log(kelime("Merhaba ben Burcu Çelik. Bugün hava çok soğuk."))
// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
function faktHesapla (sayi) {
    const fakt=1
    if(sayi<0){
        return "Negatif sayıların faktöriyeli yoktur"
    }
    else{
        for(let i=1;i<=sayi;i++){
            fakt=fakt*i
        }
        return fakt
    }
}
console.log(faktHesapla(4))
// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
const asalMi = function(asal){
    if (asal <= 1) {
        return false;
    }
    else{
        for(let i=2;i<=Math.sqrt(asal);i++){
            if(asal%i===0){
                return false
            }
        }
        return true
    }
}
if(asalMi(5)){
    console.log("Asaldır")
}
else{
    console.log("Asal değildir")
}
// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
const enBuyukSayiBul= function(dizi){
    if(dizi.length===0){
        return "Dizi boştur"
    }
    else{
        let enBuyukSayi= dizi[0]
        for(let i=1;i<dizi.length;i++){
            if(dizi[i]>=enBuyukSayi){
                enBuyukSayi=dizi[i]
            }
        }
        return enBuyukSayi
    }
    console.log(enBuyukSayiBul([5,48,28,433]))
}
// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
const toplamHesapla= function(dizi2){
    if(dizi2.length===0){
        return "Dizi boştur"
    }
    else{
        let sum=0
        for(let i=0;i<dizi2.length;i++){
            sum=sum+dizi[i]
        }
        return sum
    }
}
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
const enBuyukSayiBulArrow= (dizi) =>{
    if(dizi.length===0){
        return "Dizi boştur"
    }
    else{
        let enBuyukSayi= dizi[0]
        for(let i=1;i<dizi.length;i++){
            if(dizi[i]>=enBuyukSayi){
                enBuyukSayi=dizi[i]
            }
        }
        return enBuyukSayi
    }
    
}
const toplamHesaplaArrow= (dizi2) =>{
    if(dizi2.length===0){
        return "Dizi boştur"
    }
    else{
        let sum=0
        for(let i=0;i<dizi2.length;i++){
            sum=sum+dizi[i]
        }
        return sum
    }
}
// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
const tersCevir= (duz) => duz.reverse()
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.