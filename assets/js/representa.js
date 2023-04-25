var readXml=null;
$('#boto').click(function(event) {
    event.preventDefault();

    // Aconseguir fitxer
    var selectedFile = document.getElementById('xml').files[0];

    // Llegir fitxer
    var reader = new FileReader();
    reader.onload = function(e) {
        readXml = e.target.result;
        var parser = new DOMParser();
        var doc = parser.parseFromString(readXml, "application/xml");

        if( doc.getElementsByTagName('ns4:codi')[0] ) {

            // Utilitza ns4
            codi = doc.getElementsByTagName('ns4:codi')[0].innerHTML;
            descripcio = doc.getElementsByTagName('ns4:descripcio')[0].innerHTML;


        } else {

            // Utilitza ns9
            codi = doc.getElementsByTagName('ns9:codi')[0].innerHTML;
            descripcio = doc.getElementsByTagName('ns9:descripcio')[0].innerHTML;

        }

        if(codi != '0') {
            console.log("ERROR!");
        } else {
            console.log("OK :)");
        }




    }
    reader.readAsText(selectedFile);
});
