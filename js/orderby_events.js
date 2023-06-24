var button = document.getElementById("order-by-box-id");
var chevron = document.getElementById("chevron-down-id");
var element = document.getElementById("order-by-box-content-id");

const content_hiiden = "order-by-box-content-off";
const content_visible = "order-by-box-content";
var is_visible = false;

const buttom_click_effects = "order-by-button-clicked"

button.addEventListener("click", function() {

  if (!is_visible)
  {
    button.classList.toggle(buttom_click_effects);
    element.classList.remove(content_hiiden);
    element.classList.toggle(content_visible);
    is_visible = true;
  }
  else
  {
    element.classList.toggle(content_hiiden);
    element.classList.remove(content_visible);
    button.classList.remove(buttom_click_effects);
    is_visible = false;
  }

});

var order_by_values_id = [
  "order_by_item_id_0",
  "order_by_item_id_1",
  "order_by_item_id_2",
  "order_by_item_id_3",
  "order_by_item_id_4",
  "order_by_item_id_5",
  "order_by_item_id_6"
];

var order_by_text_bottom = document.getElementById("order-by-box-text-bottom-id");

const buttonPressed = e => {
  order_by_text_bottom.textContent = e.target.textContent;  // Get ID of Clicked Element
}; 

for(var vall of order_by_values_id)
{
    var it = document.getElementById(vall);
    it.addEventListener("click", buttonPressed);
}
