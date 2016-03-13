//empty object to to filled with form values
var value = {};

$(document).ready(function () {
  $('#calculator').submit(function (event) {
    event.preventDefault();
  });

    clickyClicks();

  });
//event listeners for button clicks to call functions
  function clickyClicks(){
    $('#buttonOperators').on('click', operationMath);
    $('#equalButton').on('click', serializeFunction);
    $('#clear').on('click', remove);
  }


  function operationMath(){
    var mathStuff = event.target.id;
    value.mathStuff = mathStuff;
  }

//create an array of objects
  function serializeFunction(){
    $.each($('#inputForm').serializeArray(), function (i, field){
      value[field.name] = field.value;
    });

    $('#inputForm').find("input[type=text]").val("");

    phoneCallForAjax();

  }

//set up path for the calculations to be done
    function phoneCallForAjax(){
      $.ajax({
        type: "POST",
        url: "/data",
        data: value,
        success: function(data){
          appendIt(data);
        }
      })
    }

//append the answer to the DOM. the data.message references the index.js response.
    function appendIt(data){
      $('#answer').append('<div class="answer">' + data.message + '</div>');
    }

//once the clear button is pressed, empty the contents so that it is back to normal
    function remove(){
      $('#calculator').empty();
      value = {};
    }
