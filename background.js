let getURL = "No Data";

let $makeBtn = $("#make");
let imgcont = $("#imgcont");
let $final = $("#final")
let $rescont = $("#rescont")

$final.hide();

chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function (tabs) {
    getURL = tabs[0].url;
});

$makeBtn.click(function () {
    $makeBtn.hide();
    $final.show();
    $rescont.hide();
    $rescont.html("<img id='res' src='https://api.qrserver.com/v1/create-qr-code/?data=" + getURL + "&size=200x200'>");

    $("#res").on("load", function () {
        $final.hide();
        $rescont.show();
    });

});