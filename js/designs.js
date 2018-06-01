// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})



function makeGrid(height, width) {
  // Your code goes here!
  $('tr').remove();

  for(let i = 0; i < height; i++){
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for(let j = 0; j < width; j++){
      $('#table' + i).append('<td></td>');
    }
  }

  $('td').click(function addColor(){
    color = $('#colorPicker').val();

    if($(this).attr('style')) {
      $(this).removeAttr('style');
    }else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
