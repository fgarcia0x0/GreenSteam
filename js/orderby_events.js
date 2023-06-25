var button = document.getElementById("order-by-box-id");
var chevron = document.getElementById("chevron-down-id");
var element = document.getElementById("order-by-box-content-id");

const content_hiiden = "order-by-box-content-off";
const content_visible = "order-by-box-content";
var is_visible = false;

const buttom_click_effects = "order-by-button-clicked";

var swap_visibility = function(element_hidden, element_visible)
{
    element.classList.toggle(element_visible);
    element.classList.toggle(element_hidden);
};

button.addEventListener("click", function() {
    button.classList.toggle(buttom_click_effects);
    swap_visibility(content_hiiden, content_visible);

    is_visible = (is_visible ? false : true);

    if (is_visible)
    {
        for(var vall of order_by_values_id)
        {
            var it = document.getElementById(vall);
            it.addEventListener("click", buttonPressed);
        }
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
  swap_visibility(content_hiiden, content_visible);
  button.classList.toggle(buttom_click_effects);
  is_visible = false;
}; 

document.addEventListener('mouseup', function(e) {
    
    if ( is_visible && !element.contains(e.target) && !button.contains(e.target)) 
    {
        swap_visibility(content_hiiden, content_visible);
        button.classList.toggle(buttom_click_effects);
        is_visible = false;
    }
});