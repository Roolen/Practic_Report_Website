$photoScroller = $("#photo-scroller");
$photoContainer = $("#photo-container");
$photo = $("#photo-container .photo");
$image = $("#photo-container .image");

let scrollerWidth = $photoScroller.width();
let photoWidth = $photo.width();

$photo.each(function (i) {
    totalContent = i * photoWidth;
    $photoContainer.css("width", totalContent + photoWidth);
});

$photoScroller.mousemove(function (e) {
    let mousePosition = (e.pageX - this.offsetLeft);
    let mousePercentY = mousePosition / scrollerWidth;
    let destinationY = -(((totalContent - (scrollerWidth - photoWidth)) - scrollerWidth) * (mousePercentY));
    let position_1 = mousePosition - destinationY;
    let position_2 = destinationY - mousePosition;

    if (mousePosition == destinationY) {
        $photoContainer.stop();
    }
    if (mousePosition > destinationY) {
        $photoContainer.css("left", -position_1);
    }
    if (mousePosition < destinationY) {
        $photoContainer.css("left", position_2);
    }
});

let $text = $(".photo p");

$text.each(function() {
    $text.css("bottom", 180);
    $text.fadeTo(100, 1);
});

$image.mousedown(function() {
    $(".full-photo-block").css("visibility", "visible");

    let src = $(".full-photo-block").attr("class");
    $(".full-photo-block p").text(src);
});