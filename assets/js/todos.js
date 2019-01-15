// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click On X To Delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
    if(event.which === 13){
        // Grabbing New Todo Text From Input
        var todoText = $(this).val();
        $(this).val("");
        // Create New li And Add To ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    };
});
