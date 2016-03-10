(function ($, window, document) {

    var GetData = {
        init : function (data, el) {
            var str = data.label;
            var split_str = str.split('|');
            str = split_str[0];
            var jsonData = eval("Content_" + data.language)[str];
            if (split_str[1] === undefined)
                el.html(jsonData);
            else if (split_str[1] == "placeholder")
                el.attr('placeholder', jsonData);
            else if (split_str[1] == "value")
                el.val(jsonData);
            
        }
    };

    $.fn.getData = function (data) {
        
       var getdata = Object.create(GetData);
       getdata.init(data, this);
   };
}(jQuery, window, document));
