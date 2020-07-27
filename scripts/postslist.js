
var title;
var author;
var cardBody;

var addCols = function (num) {
    for (var i = 1; i <= num; i++) {
        var myCol = $('<div class="col-lg-5 col-md-3 pb-2"></div>');
        var myPanel = document.getElementById('card');
        //$('<div class="card card-outline-info" id="'+i+'Panel"><div class="card-block"><div class="card-title"><span>Card #'+i+'</span><button type="button" class="close" data-target="#'+i+'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>Some text in '+i+' </p><img src="//placehold.it/50/eeeeee" class="rounded rounded-circle"></div></div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
    }


    $('.close').on('click', function (e) {
        e.stopPropagation();
        var $target = $(this).parents('.col-sm-3');
        $target.hide('slow', function () { $target.remove(); });
    });
};

$(document).ready(function () {
    addCols('5');
    return false;
});

function myFunction(id) {
    location.href = "./post.html#{id}";
}

function setValues(author, cardTitle, cardBody) {
    title = document.getElementById(cardTitle).innerHTML;
    author = document.getElementById(author).innerHTML;
    cardBody = document.getElementById(cardBody).innerHTML;

    localStorage.setItem("titleVal", title);
    localStorage.setItem("author", author);
    localStorage.setItem("cardBody", cardBody);

    location.href = "./post.html";


}

