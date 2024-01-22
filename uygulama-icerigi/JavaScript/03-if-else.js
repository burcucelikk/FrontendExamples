// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
let sayi=3472
if(sayi>0) {
    console.log(sayi," sayısı pozitiftir")
}
else if(sayi<0){
    console.log(sayi," sayısı negatiftir")
}
else if(sayi==0){
    console.log(sayi," sayısı pozitif ya da negatif değildir")
}
// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.
let birinci= 2763
let ikinci=4334
if(birinci>ikinci){
    console.log(birinci," sayı ",ikinci," sayıdan büyüktür")
}
else{
    console.log(ikinci," sayı ",birinci," sayıdan büyüktür")
}
// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
let kelime= 'merhaba'
let terskelime=''
for(var i=kelime.length-1;i>=0;i--)
{
    terskelime= terskelime+kelime.charAt(i)
}
if(kelime==terskelime){
    console.log(kelime," kelimesi palindrom kelimedir")
}
else{
    console.log(kelime," kelimesi palindrom kelime değildir")
}
// 4- Kullanıcıdan temsili bir oy verme ve aday olma durum sorgusu yapmak için yaş ve uyruk bilgisi alın. Aşağıdaki koşulları uygulayan bir if sorgusu yazın.
// a- Türk vatandaşı ve 30 yaşından büyük ise aday olabilir.
// b- Türk vatandaşı ve 18 yaşından büyük ise oy kullanabilir.
// c- Türk vatandaşı değilse ancak 18 yaşından büyük ise aday olamaz ama oy verebilir.
let yas=parseInt(prompt("Yaşınızı girin"))
let uyruk= prompt("Uyruğunuzu girin")
if(yas>=30 && uyruk=='TC'){
    console.log("Aday olabilirsiniz ve oy kullanabilirsiniz")
}
else if(yas>=18 && yas<30 && uyruk=='TC' || uyruk=='Yabancı'){
    console.log("Oy kullanabilirsiniz, aday olamazsınız")
}
else{
    console.log("Oy kullanamazsınız, aday olamazsınız")
}