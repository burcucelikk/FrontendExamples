//1-Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)
let ay=prompt("Gün sayısını öğrenmek istediğiniz ayı giriniz")
switch(ay){
    case 'Ocak' ||'Mart'||'Mayıs'||'Temmuz'|| 'Ağustos' || 'Ekim'|| 'Aralık' :
        console.log(ay," ayı 31 gündür")
        break;
    case 'Nisan' ||'Haziran'||'Eylül'||'Kasım' :
        console.log(ay," ayı 30 gündür")
        break;
    case 'Şubat' :
        console.log(ay," ayı 28 gündür")
        break;
    default:
        console.log("Geçerli bir ay giriniz")
        break;
}
//2-BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. yaratacağınız stokDurumu değişkenini stokta "Var" veya "Yok" olarak güncellesin.
let marka=prompt("Marka giriniz (BMW, Mercedes, Audi)")
let renk=prompt("Lütfen renk giriniz (kırmızı,mavi,siyah,beyaz)")
switch(marka){
    case 'BMW':
        switch(renk){
            case 'kırmızı' ||'mavi':
                console.log(renk," rekli ",marka," stokta vardır")
                break;
            case 'beyaz' ||'siyah':
                console.log(renk," rekli ",marka," stokta yoktur")
                break;
            default:
                console.log("Geçerli bir renk giriniz")
                break;
        }
        break;
    case 'Mercedes' :
        switch(renk){
            case 'kırmızı' ||'mavi':
                console.log(renk," rekli ",marka," stokta vardır")
                break;
            case 'beyaz' ||'siyah':
                console.log(renk," rekli ",marka," stokta yoktur")
                break;
            default:
                console.log("Geçerli bir renk giriniz")
                break;
        }
        break;
    case 'Audi' :
        switch(renk){
            case 'kırmızı' ||'mavi':
                console.log(renk," rekli ",marka," stokta vardır")
                break;
            case 'beyaz' ||'siyah':
                console.log(renk," rekli ",marka," stokta yoktur")
                break;
            default:
                console.log("Geçerli bir renk giriniz")
                break;
        }
        break;
    default:
        console.log("Geçerli bir marka giriniz")
        break;
}
