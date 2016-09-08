  // CFC Modal
  // Get the modal
  var cfcModal = document.getElementById("cfcModal");

  // Get the button that opens the modal
  var cfcBtn = document.getElementById("cfcButton");

  // Get the <span> element that closes the modal
  var cfcSpan = document.getElementsByClassName("cfc close")[0];

  // When the user clicks the button, open the modal
  cfcBtn.onclick = function() {
      cfcModal.style.display = "block";
      document.body.style["overflow"] = "hidden";
      document.body.style["position"] = "absolute";
  }

  // When the user clicks on <span> (x), close the modal
  cfcSpan.onclick = function() {
      cfcModal.style.display = "none";
      document.body.style["overflow-y"] = "scroll";
      document.body.style["position"] = "static";
  }



  // Praxis ECE Modal
  // Get the modal
  var praxisModal = document.getElementById("praxisModal");

  // Get the button that opens the modal
  var praxisBtn = document.getElementById("praxisButton");

  // Get the <span> element that closes the modal
  var praxisSpan = document.getElementsByClassName("praxis close")[0];

  // When the user clicks the button, open the modal
  praxisBtn.onclick = function() {
      praxisModal.style.display = "block";
      document.body.style["overflow"] = "hidden";
      document.body.style["position"] = "absolute";
  }

  // When the user clicks on <span> (x), close the modal
  praxisSpan.onclick = function() {
      praxisModal.style.display = "none";
      document.body.style["overflow-y"] = "scroll";
      document.body.style["position"] = "static";
  }


  // Disable modals for screen sizes that are smaller than 1029px
  var mq = window.matchMedia("(max-width: 1029px)");
  if(mq.matches) {
    document.getElementById("cfcButton").onclick = function() {
        location.href='http://goo.gl/SDfXLD';
      }
    document.getElementById("praxisButton").onclick = function() {
        location.href='http://www.goo.gl/YZmSyP';
      }
  }
