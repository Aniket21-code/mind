
function sendMessage() {
  var Name = document.getElementById("Name").value;
    var location = document.getElementById("location").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var level = document.getElementById("level").value;
    var want = document.getElementById("want").value;
    var meet = document.getElementById("meet").value;
    var budget = document.getElementById("budget").value;
    var days = document.getElementById("days").value;
    var gender = document.getElementById("gender").value;
    var tutor = document.getElementById("tutor").value;
    var time = document.getElementById("time").value;
    var deadline = document.getElementById("deadline").value;

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1006793041538990180/8ZFf6KOwAGehCCjaebOfMjBvsv8nFDoa9ZT8haLX65G-DloYFykVqFd-Gh5tcURkP9kG");
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username:`${Name}`,
      avatar_url: "",
      content: `Hii, This is ${Name} .\n I stay in ${location} .\n My whatsapp number is ${whatsapp} \n  my details of requirement is ${message} \n for ${subject} subject.\n I am ${level} I want ${want} .\n I would like to join via ${meet}\n  My budget is ${budget} for ${days} \n  I would like to prefer ${gender} \n I need ${tutor} tutor \n i need ${time} and the deadline would be ${deadline} `
    }

    request.send(JSON.stringify(params));
  }
  
