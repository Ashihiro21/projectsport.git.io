// script.js
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'resume.pdf' with the actual path to your resume file
    var fileUrl = 'Elexis_Falceso_Resume1.pdf';
    
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Elexis_Falceso_Resume1.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  
