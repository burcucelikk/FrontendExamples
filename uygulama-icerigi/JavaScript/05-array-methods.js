//1-
let myArr= ["Burcu","Çelik",25,true,"elma", "armut","çilek","çorba","havuç","patates"]
//2-
myArr[0]="Cem"
console.log(myArr)
//3-
console.log(myArr.length)
//4-
console.log(myArr.myArr.push("kedi"))
//5-
//myArr.splice(0,0,"köpek")
let deger= myArr.unshift("köpek")
console.log(deger) 
//6-
let silinen=myArr.pop()     //diziye bir şey kullanmak için kullandığımız metodlar genelde dizinin uzunluğunu döndürür
console.log(silinen)
//7-
let silinen2=myArr.shift()    //diziden bir şey çıkarmak için kullandığımız metodlar genelde silinen elemanı döndürür
console.log(silinen2)
//8-
let newArr=[]
newArr.push(silinen,silinen2,deger)
console.log(newArr)
//9-
console.log(myArr.concat(newArr))
console.log([...myArr,...newArr])
//10-
console.log(myArr.includes("Veli"))
//11-
console.log((myArr.slice(3)).includes("patates"))
//12-
console.log(myArr.indexOf("elma"))
//13-
let newValue= newArr.slice(0,3)
console.log(newValue)
//14-
newValue.splice(1,1,"yeni1","yeni2")
console.log(newValue)
//15-
newValue.splice(1,1)
newValue[2]="5"
console.log(newValue.push("y"))
//16-
console.log(newValue.join('+'))
