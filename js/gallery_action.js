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

/* let fadeSpeed = 300;

 $image.each(function () {
    let $this = $(this);
    $this.fadeTo(fadeSpeed, 1);
});  */

 /* $image.hover(
    function () {
        let $this = $(this);
        $this.stop().fadeTo(fadeSpeed, 1);
    },
    function () {
        let $this = $(this);
        $this.stop().fadeTo(fadeSpeed, 1);
    })  */

let $text = $(".photo p");

$text.each(function(i) {
    $text.css("bottom", 180);
    $text.fadeTo(100, 1);
});