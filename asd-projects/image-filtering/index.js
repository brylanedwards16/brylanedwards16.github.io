// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {

  for (var row = 0; row < image. length; row++) {
  
  for (var col = 0; col < image[row].length; col++) {
  
  var rgbstring = image[row][col];
  
  var rgbNumbers = rgbstringToArray(rgbstring);
  
  filterFunction(rgbNumbers);
  
  rgbstring = rgbArrayTostring(rgbNumbers);
  
  image[row][col] = rgbstring;
  
    }
  
   }
  
  }

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground (filterFunction) {}

  // 7b) Store the background color of the image in a variable
  
  var backgroundColor = image[0][0];
  
  
  
  // Iterate over the image data
  
  for (var r = 0; r < image. length; r++) {
  
  for (var c = 0; c < image[r].length; c++) {
  
  // Get the current pixel value
  
  var currentPixel = image[r][c];
  
  
  
  // 7c) Check if the current pixel value is equal to the background pixel value
  
  if (currentPixel !== backgroundcolor) {
  
  // Apply the filter only if the current pixel is not the background color
  
  var rbstring = currentPixel;
  
  var rgbNumbers = rgbstringToArray (rgbString);
  
  
  
  // Apply the filter using the provided filter function filterFunction (rgbNumbers);
  
  // Convert the modified rgNumbers back to a string and update the image array
  
  image[r][c] = rgbArrayTostring(rgbNumbers);
  
  }
  
  
  
  // 7c) One line that
  
  
  
  // This line is outside the conditional's code block
  
     
  
   }
  
  }

// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  return number < 0 ? 0 : number > 255 ? 255: number;
}

// TODO 3: Create reddify function
function reddify(array) {
  array[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(array) {

  array[BLUE] = keepInBounds(array[BLUE] - 50);
  
  }
  
  function increaseGreenByBlue(array) {
  
  array[GREEN] = keepInBounds (array[BLUE] + array[GREEN]);
  
  }

// CHALLENGE code goes below here
