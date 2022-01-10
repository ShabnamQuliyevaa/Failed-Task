let form = document.querySelector("form");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");




form.addEventListener('submit' , elaveEt);
document.addEventListener('DOMContentLoaded', localGetir);



function elaveEt(e){
   add(inp.value)
    localYaz(inp.value);

    inp.value = "";
    

}



function localYaz(not){
    let notlar;
    
    //else if yazanda storage'de qalmir

    if(localStorage.getItem('list') === null){
        notlar = [];
    }else {
        notlar = JSON.parse(localStorage.getItem('list'));
    }

    if(inp.value==""){
        alert("Bos qoymayin");
    } else {
        
    }

    notlar.push(not);

    localStorage.setItem('list', JSON.stringify(notlar));

}



function localGetir(){
    let notlar;

    if(localStorage.getItem('list') === null){
        notlar = [];
    }else {
        notlar = JSON.parse(localStorage.getItem('list'));
    }


    
    notlar.forEach(item => {
    add(item)
    });

   
}




function add(not){
    let yeniLi = document.createElement('li');
    yeniLi.classList.add('list-group-item');
    yeniLi.classList.add('d-flex');
    yeniLi.classList.add('justify-content-between');
    yeniLi.textContent = not;
    ul.appendChild(yeniLi);

    let yeniBtn = document.createElement('button');
    yeniBtn.classList.add('btn');
    yeniBtn.classList.add('btn-danger');
    yeniBtn.classList.add('btn-sm');
    yeniBtn.textContent = "Sil";
    yeniLi.appendChild(yeniBtn);
    
    yeniBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        localStorage.removeItem('list')
    })
}

