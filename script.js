var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML= `                                  
       
        <div class="card" style="width: 18rem;" >
        <img src="${data1[i]. flag}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${data1[i].  name}</h5>
  <h6 class="card-title">${data1[i].  region}</h6>
  <p class="card-title">${data1[i].  subregion}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</ div>
        
         
         
        

         
         
         
        
         
      
       `

        document.body.append(div);
    }
});
                                 
{/* <div class=" container">
        <div class=" row">
        <div class="col-md-4>
        <div class = "part" style="hight:300px""width:300px>
                <div class="card-deck">
        <div class="card">
          <img src="${data1[i]. flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data1[i].  name}</h5>
            <h5 class="card-title">${data1[i].  region}</h5>
            <h5 class="card-title">${data1[i].  subregion}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        </div>
        </div>

        <div class="col-md-4>
        <div class = "part" style="hight:300px""width:300px>
                <div class="card-deck">
        <div class="card">
          <img src="${data1[i]. flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data1[i].  name}</h5>
            <h5 class="card-title">${data1[i].  region}</h5>
            <h5 class="card-title">${data1[i].  subregion}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div> */}