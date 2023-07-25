

  document.getElementById('abm-button').addEventListener('click', function() {
    // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
    var pdfUrl = 'C:\Users\saide\pf\Saideepak.pdf';
    
    // Create an anchor element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'downloaded_file.pdf'; // Change the downloaded file name if needed

    // Dispatch a click event on the anchor element
    var clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    link.dispatchEvent(clickEvent);
  });
