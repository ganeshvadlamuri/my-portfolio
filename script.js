// script.js

// Function to toggle the visibility of project details
function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
      projectDetails.style.display = "block";
    } else {
      projectDetails.style.display = "none";
    }
  }
  
  // Event listener to toggle project details on button click
  var projectButtons = document.getElementsByClassName("project-button");
  for (var i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener("click", function() {
      var projectId = this.getAttribute("data-project-id");
      toggleProjectDetails(projectId);
    });
  }
  <script src="script.js"></script>
  <h3>Project Title</h3>
<button class="project-button" data-project-id="project1">Toggle Details</button>
<div id="project1" class="project-details" style="display: none;">
  <p>Project details...</p>
</div>

<!-- Repeat the above structure for other projects -->

