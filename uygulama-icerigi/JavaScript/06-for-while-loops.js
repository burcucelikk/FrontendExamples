// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------
// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)
let val=0
let sum=0
while(val==0){ //true yapıp da foru break ile kırabiliriz
    let startingCount=parseInt(prompt("Lütfen başlangıç değeri giriniz"))
    let endingCount=parseInt(prompt("Lütfen bitiş değeri giriniz"))
    if(startingCount<endingCount){
        for(var i=startingCount;i<endingCount;i++){
            sum=sum+i
        }
        val=1; //break;
    }
    else{
        console.log("Başlangıç değeri bitiş değerinden büyük olamaz")
    }
}
console.log(sum)
// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.
let total=0
for(var i=1;i<=5;i++){
    let notlar=parseInt(prompt(`${i}. öğrencinin notunu giriniz: `))
    total=total+notlar
}   //todo
                                //todo
                                                    //todo
console.log(total/5)
// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.
let hak=1
let rand= Math.floor((Math.random()*10)+1)
while(hak<=3){
    let guess=parseInt(prompt(`${hak} . tahmininizi giriniz: `))
    hak++
    if(guess===rand){
        console.log("Tebrikler doğru tahmin: ",guess)
        hak=3
    }
    else if(guess<rand){
        console.log("Tahmin edilen sayı istenilen sayıdan küçüktür, kalan hakkınız:",hak)
    }
    else{
        console.log("Tahmin edilen sayı istenilen sayıdan büyüktür, kalan hakkınız:",hak)
    }
    
}
// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.
let totalPrice=0
do{
    let product= prompt("Lütfen bir ürün adı giriniz")
    if(product.toLowerCase()!="onayla"){
        let price= parseInt(prompt("Lütfen ürün fiyatı giriniz"))
        totalPrice=totalPrice+price
    }
}while(product.toLowerCase()=="onayla")
console.log(totalPrice)