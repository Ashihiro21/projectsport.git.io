// script.js
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'resume.pdf' with the actual path to your resume file
    var fileUrl = 'ELEXIS_FALCESO.pdf';
    
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'ELEXIS_FALCESO.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  
