var div = document.getElementById("slider");
var ul = document.getElementsByTagName("ul");
var liQuantity = document.getElementsByTagName("li");
var ulWidth = liQuantity.length * 942;
ul[0].style.width = ulWidth + "px";
//Настройка слайдера
var imgQuantity = 1; // Количество показываемых изображений
div.style.width = 942 * imgQuantity + "px";
//div.style.overflow="hidden";
div.style.backgroundColor="gray";
next.onclick = scrollToRight;
previous.onclick = scrollToLeft;
function scrollToRight() {
    div.scrollLeft = div.scrollLeft + div.clientWidth;
    }
function scrollToLeft() {
    div.scrollLeft = div.scrollLeft - div.clientWidth;
}
