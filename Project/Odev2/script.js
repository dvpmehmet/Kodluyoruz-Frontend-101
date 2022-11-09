// HTML Sayfasındaki Elementlerin Seçilmesi ve Atama İşleminin Yapılması.

let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("li");


// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); //Butona "close" class'ını ekledik.
    closeButton.onclick = removeButton; //Çarpı işareti ile "removeButton" fonsiyonunu çalıştırdık.
    ullength[i].append(closeButton); // "closeButton" değişkenini ullength'in 0, 1, 2... indexlerine ekleyerek for döngüsü ile listeye çarpı butonunu ekledik. 
    ullength[i].onclick = check; // üzerine tıklayınca "check"fonksiyonunu çalıştırdık
}





// Butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', elemanEkle)  // addEventListener ile "click" butonuna tıklandığında "elemanEkle" fonksiyonu çalışacak.


//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); // "toggle switch" genelde iki şıklı (Evet-Hayır veya Aktif-Pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton(){
  this.parentElement.remove();  // Burada çarpının bulunduğu maddeyi silmek için "parentElement.remove" classını kullandık.
}


//ELEMAN EKLEMEK İÇİN GEREKENLER
function elemanEkle() {
 
    if (taskDOM.value == "")  {  // input değeri boş girildiğinde ve girilmediğinde 
    $(".error").toast("show"); //"error"clasını kullanarak 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') //Yeni bir "li" elementi yaratacagımızı ilan edip yaratacagımız "li"elementini "liDOM" değişkenine atıyoruz.
    listDOM.appendChild(liDOM); // Yaratacağımız "liDOM" değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
    liDOM.innerHTML = task.value; // Burda ise "inputID.değer" diyerek inputa girilen değerlerin "liDOM"a atanmasını belirttik.
    taskDOM.value = "";
  
   
    
    
   
   //Sonradan Eklenen Maddeleri Silmek İçin Aynı İşlemlerin Tekrarlanması
         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

        
}
}    








 

 






 



