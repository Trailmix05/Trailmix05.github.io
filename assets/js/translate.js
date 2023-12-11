function Translate(){
    this.init = function(attribute, lng){
        this.attribute = attribute;
        this.lng = lng;
    }

    this.process=function(){
        _self=this;
        var xrhFile = new XMLHttpRequest();
        xrhFile.open("GET", "lng/"+this.lng+".json", false);
        xrhFile.onreadystatechange = function()
        {
            if(xrhFile.readyState === 4)
            {
                if(xrhFile.readyState === 200 || xrhFile.status == 0)
                {
                    var LgnObject = JSON.parse(xrhFile.responseText);
                    var allDom=document.getElementsByTagName("*");
                    if(key != null) {
                        Element.innerHTML=LgnObject[key];
                    }
                }
            }
        }
        xrhFile.send()
    }
}