let container = document.getElementById("container");
let button = document.getElementById("button");
let gridSize = 0; 
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

let col = [];
let pixel = [];
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider.addEventListener('mouseup', async e => {

//slider.oninput = async function() {
  output.innerHTML = slider.value;
  gridSize = slider.value;
  slider.classList.add("disabled");

  console.log(gridSize);
  
      while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
     

        
      container.style.gridTemplateRows = gridSize;
      container.style.gridTemplateColumns = gridSize;
      
      let width = container.clientWidth;
      let height = container.clientHeight;
      console.log(width, height, gridSize);


      for (let i=0; i<gridSize; i++) {

        col[i] = document.createElement("div");
        container.append(col[i]);
        for (let j=0; j<gridSize; j++) {

          pixel[j] =document.createElement("div");
          pixel[j].style.height = height/gridSize + "px";
          pixel[j].style.width = width/gridSize + "px";
          pixel[j].className = "pixel";
          pixel[j].style.backgroundColor = "white";
          //pixel[j].style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);     
          col[i].appendChild(pixel[j]);
          pixel[j].addEventListener('mouseover', function(e) {
          	item.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
          }, false);

        }

      }
      slider.classList.remove("disabled");
  
let pixels = document.getElementsByClassName("pixel");
for (let i = 0; i < pixels.length; ++i) {
    let item = pixels[i];  

}


});


