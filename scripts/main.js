let container = document.getElementById("container");
let button = document.getElementById("button");
let gridSize = 0; 
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

let col = [];
let pixel = [];
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider.addEventListener('touchend', buildGrid); 
slider.addEventListener('mouseup', buildGrid); 

async function buildGrid () {

  output.innerHTML = slider.value;
  gridSize = slider.value;
  slider.classList.add("disabled");
  
      while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
     

        
      container.style.gridTemplateRows = gridSize;
      container.style.gridTemplateColumns = gridSize;
      
      let width = container.clientWidth;
      let height = container.clientHeight;

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

        }

      }
      slider.classList.remove("disabled");
  
let pixels = document.getElementsByClassName("pixel");
for (let i = 0; i < pixels.length; ++i) {
    let item = pixels[i];  
    item.addEventListener('mouseover', function(e)
        {
           item.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    }, false);
}


};

container.addEventListener("touchmove", function(e) {
  container.backgroundColor = "red";
  // get the touch element
  var touch = e.touches[0];

  // get the DOM element
  var pixel = document.elementFromPoint(touch.clientX, touch.clientY);

  // make sure an element was found - some areas on the page may have no elements
  if (pixel) {
      let width = pixel.offsetWidth;
      let height = pixel.offsetHeight;
      console.log("width: " + width);
      if (width <= 500 && width==height) {
        // interact with the DOM element
        pixel.style.backgroundColor =  "#"+((1<<24)*Math.random()|0).toString(16);
      }
    }
});

