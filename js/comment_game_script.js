var buttom_send = document.getElementById("block-comment-game-input-buttom-id");
var block_text  = document.getElementById("block-comment-game-input-text-id");
var block_comment = document.getElementById("block-comment-game-id");
var popup_comment_star = document.getElementById("popup-satisfation-star-id");
var popup_buttom_cancel = document.getElementById("popup-buttom-id");

var star_1 = document.getElementById("star-1");
var star_2 = document.getElementById("star-2");
var star_3 = document.getElementById("star-3");
var star_4 = document.getElementById("star-4");
var star_5 = document.getElementById("star-5");

var input_comment = "";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
                "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const popup_comment_hidden = "popup-satisfation-star-off";
const popup_comment_visible = "popup-satisfation-star";          

var is_popup_comment_show = false;

const star_solid = "<i class=\"fa-solid fa-star\"></i>";
const star_regular = "<i class=\"fa-regular fa-star\"></i>";

const build_degree_star = (num) =>
{
    var stars = "";

    for (var idx = 0; idx < 5; ++idx) {
       if (idx < num)
       {
            stars += star_solid;
       }
       else
       {
            stars += star_regular;
       }
    }
    
    return stars;
};

listener_change_box_comment = (txt) =>
{
    input_comment = txt;
}

var instance_comment = (message, num_stars) =>
{
    comment_date = new Date();
    var div = document.createElement("DIV");
    div.innerHTML = "<div class=\"show-comment\">" +
        "<div class=\"show-comment-left\">" +
            "<div class=\"show-comment-left-top\">" +
                "<i class=\"fa-solid fa-user\" style=\"font-size: 2rem;\"></i>" +
                "<div> Anonymus </div>" +
            "</div>" +
            "<div class=\"show-comment-left-bottom\">" +
                build_degree_star(num_stars) +
                /* "<i class=\"fa-solid fa-star\"></i>" +
                "<i class=\"fa-solid fa-star\"></i>" +
                "<i class=\"fa-regular fa-star\"></i>" +
                "<i class=\"fa-regular fa-star\"></i>" +
                "<i class=\"fa-regular fa-star\"></i>" + */
            "</div>" +
        "</div>" +
        "<div class=\"show-comment-right\">" +
            "<div class=\"show-comment-right-top\">" +
                message +
            "</div>" +
            "<div class=\"show-comment-right-bottom\">" +
                comment_date.getDate().toString().padStart(2,'0') + " " +
                months[comment_date.getMonth()] + " " +
                comment_date.getFullYear() + " " +
                comment_date.getHours().toString().padStart(2,'0') + ":" + 
                comment_date.getMinutes().toString().padStart(2,'0') + 
            "</div>" +
        "</div>" +
    "</div>";

    block_comment.appendChild(div);
}

buttom_send.addEventListener("click", function() {

    if(input_comment.length != 0)
    {
        popup_comment_star.classList.remove(popup_comment_hidden);
        popup_comment_star.classList.toggle(popup_comment_visible);

        /* if (is_popup_comment_show)
        {
            popup_comment_star.classList.remove(popup_comment_visible);
            popup_comment_star.classList.toggle(popup_comment_hidden);
            instance_comment(input_comment);
            block_text.value = input_comment = "";
        } */
    }

});

popup_buttom_cancel.addEventListener("click", function() {

    popup_comment_star.classList.remove(popup_comment_visible);
    popup_comment_star.classList.toggle(popup_comment_hidden);
});

star_1.addEventListener("click", function() {

    popup_comment_star.classList.remove(popup_comment_visible);
    popup_comment_star.classList.toggle(popup_comment_hidden);

    instance_comment(input_comment, 5);
    block_text.value = input_comment = "";
});

star_2.addEventListener("click", function() {

    popup_comment_star.classList.remove(popup_comment_visible);
    popup_comment_star.classList.toggle(popup_comment_hidden);

    instance_comment(input_comment, 4);
    block_text.value = input_comment = "";
});

star_3.addEventListener("click", function() {

    popup_comment_star.classList.remove(popup_comment_visible);
    popup_comment_star.classList.toggle(popup_comment_hidden);

    instance_comment(input_comment, 3);
    block_text.value = input_comment = "";
});

star_4.addEventListener("click", function() {

    popup_comment_star.classList.remove(popup_comment_visible);
    popup_comment_star.classList.toggle(popup_comment_hidden);

    instance_comment(input_comment, 2);
    block_text.value = input_comment = "";
});

star_5.addEventListener("click", function() {

    popup_comment_star.classList.remove(popup_comment_visible);
    popup_comment_star.classList.toggle(popup_comment_hidden);

    instance_comment(input_comment, 1);
    block_text.value = input_comment = "";
});