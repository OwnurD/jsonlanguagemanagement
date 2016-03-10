function loadScript( lan, url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  script.id = "myLanguage";
  script.setAttribute("data-language", lan);
  if(script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "body" )[0].appendChild( script );
}

function loadContent(language){

  $('.qenruJsonContent').each(function(e){
    var base = $(this);
    var label = base.attr("data-label");

    base.getData({
      language : language,
      label : label
    });
  });
}

function loadLanguages()
{
  var language = sessionStorage.getItem("myLanguage");
  language = language == null ? "tr" : language;
  var allLanguages = availableLanguages();
  var languageName = allLanguages[language];

  var selected_option = "<option value='"+language+"'>"+languageName+"</option>";
  var other_options = "";

  $.each(allLanguages, function(i, val) {
    if(language != i)
      other_options += "<option value='"+i+"'>" + val + "</option>";
  });

  return selected_option + other_options;
}

function availableLanguages()
{
    var languages = {
      "en" : "English",
      "tr" : "Türkçe",
      "de" : "Deutsche"
    };

    return languages;
}

function changeLanguage(language) {
    $("#myLanguage").remove();
    var baseURL = getBaseUrl();
    var src = baseURL + "json/" + language + "Data.json";
    loadScript(language, src, function () {
        loadContent(language);
        sessionStorage.setItem("myLanguage", language);
    });
}

function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}
