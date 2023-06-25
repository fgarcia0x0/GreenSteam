var buttom_send = document.getElementById("block-comment-game-input-buttom-id");
var block_text  = document.getElementById("block-comment-game-input-text-id");
var block_comment = document.getElementById("block-comment-game-id");

var input_comment = "";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
                "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


listener_change_box_comment = (txt) =>
{
    input_comment = txt;
}

var instance_comment = (message) =>
{
    comment_date = new Date();
    var div = document.createElement("DIV");
    div.innerHTML = "<div class=\"show-comment\">" +
        "<div class=\"show-comment-left\">" +
            "<div class=\"show-comment-left-top\">" +
                "<i class=\"fa-solid fa-user\" style=\"font-size: 2rem;\"></i>" +
                "<div> Bryan D. Brauna </div>" +
            "</div>" +
            "<div class=\"show-comment-left-bottom\">" +
                "<i class=\"fa-solid fa-star\"></i>" +
                "<i class=\"fa-solid fa-star\"></i>" +
                "<i class=\"fa-regular fa-star\"></i>" +
                "<i class=\"fa-regular fa-star\"></i>" +
                "<i class=\"fa-regular fa-star\"></i>" +
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
        instance_comment(input_comment);
        block_text.value = input_comment = "";

});
