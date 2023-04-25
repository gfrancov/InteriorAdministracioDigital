// Funcions botons mostrar procediments
function enllaçosCodi() {

    const codi = document.getElementById('codi').value;

    document.getElementById('entorn-conf').href = `https://configuracio.ovt.gencat.cat/gsitgf/AppJava/traint/renderitzar.do?reqCode=inicial&set-locale=ca_ES&idServei=${codi}`;
    document.getElementById('entorn-cepre').href = `https://configuracio.ovt.gencat.cat/gsitgf/AppJava/traint/renderitzar.do?reqCode=inicial&set-locale=ca_ES&idioma=&idServei=${codi}&origen=CE`;
    document.getElementById('entorn-pro').href = `https://ovt.gencat.cat/gsitgf/AppJava/traint/renderitzar.do?reqCode=inicial&set-locale=ca_ES&idioma=&idServei=${codi}`;
    document.getElementById('entorn-eaconf').href = `https://configuracio.novaea.intranet.gencat.cat/gsitea/tramits/config-tramits?modalitatServei=${codi}`;
    document.getElementById('entorn-eapro').href = `https://novaea.intranet.gencat.cat/gsitea/tramits/config-tramits?modalitatServei=${codi}`;

}

function enllaçosFormulari() {

    const formulari = document.getElementById('formulari').value;
    const ubicacio = document.getElementById('ubicacio').value;

    document.getElementById('diccionari').href = `https://preproduccio.autor.eformularis.intranet.gencat.cat/apps/ctti/i18n/translator.html?path=/content/forms/af/gsit/${ubicacio}/${formulari}/jcr%3Acontent/guideContainer/assets/dictionary`;

}


window.onload = function() {

    const codi = document.getElementById('codi');
    codi.addEventListener('change', enllaçosCodi);

    const formulari = document.getElementById('formulari');
    formulari.addEventListener('change', enllaçosFormulari);

    const ubicacio = document.getElementById('ubicacio');
    ubicacio.addEventListener('change', enllaçosFormulari);

}