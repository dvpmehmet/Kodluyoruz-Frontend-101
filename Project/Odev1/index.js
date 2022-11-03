let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let Name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

if(Name){
    myName.innerHTML = `${Name} `
}else{
    alert("Bir isim giriniz.")
    location.reload();
}
/* 
Buraya kadar günleri array içerisine aldık, prompt ile kullanıcıdan isim bilgisi istedik ve ismi sayfamıza yazdırdık.
İf bloğu içerisinde eğer isim girildiyse sayfaya yazdır, girilmezse Alert göster ve sayfayı yenile yaparak kullanıcıyı giriş yapmaya zorladık.
*/
function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}
    
    setInterval(clockFunction, 1000);

/* 
Function içerisinde date bilgimizi çekiyoruz, yukarıda tanımladığımız günler arrayini sistemin bizde verdiği gün bilgisiyle eşitliyoruz , saat dakika ve saniye bilgilerini çektik sonrasında myClock idli div içerisinde bunları gösterebilmek için tanımladık. setInterval ile fonksiyonun saniyede 1 yenilenmesini sağlayıp anlık saat bilgisine eriştik.
*/