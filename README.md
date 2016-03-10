# json-language-management


Demo is available at / Demo bağlantısı : [Demo](plugin.softbax.com/jsonLM)


#### SUGGESTIONS / ÖNERİLER

Easy to implement your projects / Projelerinize eklemesi kolaydır.
If you develop a big project, so you should use database to provide multi language / Eğer büyük bir proje geliştiriyorsanız, dil yönetimi için database kullanmanızı öneririm.
You can use this for static pages / Statik sayfalarınız için kullanabilirsiniz.

#### HOW TO USE / NASIL KULLANIRIM

>> Include lib.js and api.js and jquery library / lib.js ve api.js ve jquery kütüphanesini ekleyin

>> Inside lib.js you can manage languages. Inside AvailableLanguages function you can add languages as json format. / lib.js dosyası içinde dilleri yönetebilirsiniz. AvailableLanguages fonksiyonu içerisine json formatında dil seçenekleri ekleyebilirsiniz
Ex. / Örn.
var languages = {
      "en" : "English",
      "tr" : "Türkçe",
      "de" : "Deutsche",
      ...
    };
    
>> Use loadLanguages function to append languages options inside select element / loadLanguages fonksiyonunu kullanarak select elementi içerisine dil seçeneklerini ekleyebilirsiniz.

>> Call LoadContent function to load language contents / LoadContent fonksiyonunu dil içeriklerini yüklemek için kullanın

>> Usage example / Kullanım örneği

`<div class="qenruJsonContent" data-label="home"></div>`

"home" Content will be appended inside div element. "home" matches with key value inside related json file.
"home" içeriği div elementi arasına basılır. "home" ilgili json dosyasındaki key value ile ile eşleştirilir.

`<input type="text" class="qenruJsonContent" data-label="user_name|placeholder"/>`

if you use key|placeholder inside data-label, you provide content for related element's placeholder attribute.
Eğer key|placeholder data-label içerisinde kullanırsanız, ilişkili elementin placeholder attribute değeri için dil yönetimi sağlarsınız.

`<input type="submit" class="qenruJsonContent" data-label="user_name|value"/>`

if you use key|value inside data-label, you provide content for related element's value attribute.
Eğer key|value data-label içerisinde kullanırsanız, ilişkili elementin value attribute değeri için dil yönetimi sağlarsınız.


