// Select color input
// Select size input
let rows, cols, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  rows = $('#inputHeight').val();
  cols = $('#inputWidth').val();
  makeGrid(rows, cols);
})



function makeGrid(rows, cols) {
  // Your code goes here!
  $('tr').remove();

  for(let i = 0; i < rows; i++){
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for(let j = 0; j < cols; j++){
      $('#table' + i).append('<td></td>');
    }
  }

  $('td').click(function addColor(){
    color = $('#colorPicker').val();
    clickedBox = $(this);
    clickedBox.attr('style', 'background-color:' + color);

  })
}
