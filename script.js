// script.js
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'resume.pdf' with the actual path to your resume file
    var fileUrl = 'Elexis Falceso_Resume_CV.pdf';
    
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Elexis Falceso_Resume_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  
