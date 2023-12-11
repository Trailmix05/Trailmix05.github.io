function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng = 'en'){
        $("#enTranslator").css('color', '#f4623a');
        $("#frTranslator").css('color', '#212529');
    }
    if(lng == 'fr'){
        $("#frTranslator").css('color', '#212529');
        $("#enTranslator").css('color', '#f4623a');
    }
}
$(docmuent).ready(function(){
    $("#enTranslator").click(function(){
        translate('en', 'lng-tag');
    });
    $("#frTranslator").click(function(){
        translate('fr', 'lng-tag');
    });
});