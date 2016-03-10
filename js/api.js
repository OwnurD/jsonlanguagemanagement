(function ($, window, document) {

    var GetData = {
        init : function (data, el) {
            var str = data.label;
            
            var jsonData = eval("Content_" + data.language)[str];
            
            el.html(jsonData);
        }
    };

    $.fn.getData = function (data) {
        
       var getdata = Object.create(GetData);
       getdata.init(data, this);
   };
}(jQuery, window, document));