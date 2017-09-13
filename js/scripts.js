
$(document).ready(function(){
  $("button#submitButton").click(function(){
    $("form#appt").submit(function(event){
      event.preventDefault();
      var userName = $("input#nameInput").val();
      var apptDescr = $("input#descrInput").val();
      var apptDate = $("input#dateInput").val();
      var apptStartTime = $("input#startInput").val();
      var apptEndTime = $("input#endInput").val();
      $(".nameOutput").text(userName);
      $(".descrOutput").text(apptDescr);
      $(".dateOutput").text(apptDate);
      $(".startOutput").text(apptStartTime);
      $(".endOutput").text(apptEndTime);
      $(".hideAll").show();
      $("form#appt").hide();
    });
  });
});
