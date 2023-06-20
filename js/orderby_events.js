var button = document.getElementById("order-by-box-id");
var chevron = document.getElementById("chevron-down-id");
var element = document.getElementById("order-by-box-content-id");

const content_hiiden = "order-by-box-content-off";
const content_visible = "order-by-box-content";
var is_visible = false;

const buttom_click_effects = "order-by-button-clicked"

chevron.addEventListener("click", function() {

  if (!is_visible)
  {
    button.classList.toggle(buttom_click_effects);
    element.classList.remove(content_hiiden)
    element.classList.toggle(content_visible);
    is_visible = true;
  }
  else
  {
    element.classList.toggle(content_hiiden);
    element.classList.remove(content_visible)
    button.classList.remove(buttom_click_effects);
    is_visible = false;
  }

});
