


document.getElementById('submit-btn').addEventListener('click',function(){
    const search = document.getElementById('search').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data.data))
})

const getData = datas => {
  //clean previous parentdiv
  const paraentDiv = document.getElementById('parent-div');
    paraentDiv.innerHTML ='';
    // clean previous more detail
    const showerDiv = document.getElementById('shower-div');
    showerDiv.innerHTML ='';
    if(datas.length == 0){
      paraentDiv.innerHTML ='Sorry,No data found...Please try again.'
    }
    for(let i = 0;i < 20;i++){
        let data = datas[i];
    const paraentDiv = document.getElementById('parent-div');
    const div = document.createElement('div');
    div.innerHTML=`<div class="col">
    <div class="card h-100 p-4">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="d-flex justify-content-between">
        <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <p class="card-text">${data.brand}</p>
          </div>
          <button class="btn btn-outline-success" type="submit" onclick = "getDetail('${data.slug}')">Detail</button>
            </div>
      </div>

      
    </div>
  </div>`;

  paraentDiv.appendChild(div)
    }
    
};

const getDetail = id => {
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => getMoreDetail(data.data))
}

const getMoreDetail = data => {
  const showerDiv = document.getElementById('shower-div');
  showerDiv.innerHTML ='';
    const div = document.createElement('div');
    div.innerHTML=`<img src="${data.image}" class="card-img-top mt-5" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">${data.brand}, ${data.releaseDate}</p>
    </div>
    <h5 class="card-title">Main Features</h5>
    <ul class="list-group list-group-flush">
      
      <li class="list-group-item"><h5 class="card-title">Display-size:</h5>${data.mainFeatures.displaySize}</li>
      <li class="list-group-item"><h5 class="card-title">Chipset:</h5>${data.mainFeatures.chipSet}</li>
      <li class="list-group-item"><h5 class="card-title">Memory:</h5> ${data.mainFeatures.memory}</li>
      <li class="list-group-item"><h5 class="card-title">Sensor:</h5>${data.mainFeatures.sensors}</li>
      <li class="list-group-item"><h5 class="card-title">Others:</h5>
      <p>WLAN - ${data.others.WLAN}</p>
      <p>Bluetooth - ${data.others.Bluetooth}</p>
      <p>GPS - ${data.others.GPS}</p>
      <p>NFC - ${data.others.NFC}</p>
      <p>Radio - ${data.others.Radio}</p>
      <p>USB - ${data.others.USB}</p>
      </li>
    </ul>`;
    showerDiv.appendChild(div)
}