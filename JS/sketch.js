


$( document ).ready(function() {
  $('.astext').click(function() {
      $(this).fadeOut( "slow", function() {
        if($(this).find("button").is(':clicked')){
          $(this).appendTo(".done").addClass("done-task");
        }else{
          $(this).appendTo(".task").removeClass("done-task");
        }
        $(this).fadeIn("slow");
      });
  });
  $(".done-task button").prop( "disabled", true ); //Disable
});

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

  background('white');

  fill('tan');

  strokeWeight(.5)

  scale(10.0,10.0)
  quad(20,30,40,30,35,50,25,50)
  quad(70,30,90,30,85,50,75,50)


}

function draw(){};
