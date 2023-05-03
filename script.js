jQuery("#frm").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    message: {
      required: true,
      maxlength: 250,
    },
  },
  messages: {
    email: {
      required: "Please enter email",
      email: "Please enter valid email",
    },
    message: {
      required: "Please enter message",
      maxlength: "Message shouldn't be more than 250 words",
    },
  },
  submitHandler: function (form) {
    form.submit();
    $("#frm").trigger("reset");
  },
});

// let btnClear = document.getElementById("mysubmit");
// let inputemail = document.getElementById("myemail");
// let inputmessage = document.getElementById("mymessage");
// console.log(inputemail,inputmessage)

// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20
//   })

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $(".togotop").fadeIn();
  } else {
    $(".togotop").fadeOut();
  }
});

$(".togotop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 2000);
});

$(document).ready(function () {
  $(".about--part1").waypoint(
    function (direction) {
      $(".about--part1").addClass("animated zoomIn");
    },
    {
      offset: "50%",
    }
  );

  $(".about--part2").waypoint(
    function (direction) {
      $(".about--part2").addClass("animated rotateInDownLeft");
    },
    {
      offset: "50%",
    }
  );

  // $(".about--part3").waypoint(
  //   function (direction) {
  //     $(".about--part3").addClass("animated fadeInUp");
  //   },
  //   {
  //     offset: "50%",
  //   }
  // );

  $(".about--part4").waypoint(
    function (direction) {
      $(".about--part4").addClass("animated rotateInDownRight");
    },
    {
      offset: "50%",
    }
  );

  $(".about--part5").waypoint(
    function (direction) {
      $(".about--part5").addClass("animated rotateInDownLeft");
    },
    {
      offset: "50%",
    }
  );
});

let title = document.querySelector(".myname");
let myname = "Amann Yadav";
let index = 1;

function typewriter() {
  let newTitle = myname.slice(0, index);
  title.innerText = newTitle;
  index > myname.length ? (index = 1) : index++;

  setTimeout(() => {
    typewriter();
  }, 500);
}

typewriter();
