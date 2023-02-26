const loadPhone = async (searchText) => {
  
const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url);
const data = await res.json();

displayPhones(data.data);

}


const displayPhones = phones => {

const phonesContainer = document.getElementById("phone-container")
phonesContainer.innerText='';
phones = phones.slice(0,15);
const warningMessage=document.getElementById('no-phone');

if(phones.length == 0){
 warningMessage.classList.remove('d-none')
}
else{
  warningMessage.classList.add('d-none');
}


phones.forEach(phone => {

const phoneDiv = document.createElement('div')
phoneDiv.classList.add('col');
phoneDiv.innerHTML=`

<div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.slug}</p>
                </div>
              </div>

`;

phonesContainer.appendChild(phoneDiv);

})

toggleLoader(false);

}




document.getElementById('search').addEventListener('click', function(){

  toggleLoader(true);

const searchField = document.getElementById('search-field');
const searchText=searchField.value;
loadPhone(searchText);
})


const toggleLoader = isLoading => {
  const loadSection = document.getElementById('loader');

  if(isLoading){
    loadSection.classList.remove('d-none');
  }
  else{
    loadSection.classList.add('d-none');
  }
}