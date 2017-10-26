// Strikes through to-do list item
// We add the listener to the parent body to make sure that when new li's are added later, we can click on them
$("ul").on("click", "li", function() {
    if ($(this).css("color") === "rgb(128, 128, 128)") {

        $(this).toggleClass("completed");
    
    } else {
      
        $(this).toggleClass("completed");
    
    }
});

// Removes a list element when the deletion span is clicked
$("ul").on("click", "span", function () {
    // Removes the li element (the parent element of the span item)
    $(this).parent().fadeOut(100, function () {
        $(this).remove();
    });
    this.stopPropogation();
});

// Adds text input to the todo list
$("input[type='text']").keypress(function(event) {
    if (event.key === "Enter") {
        // Grab item to add to list
        var item = $(this).val();
        
        // Append item to list
        $("ul").append("<li><span>X</span> "+ item.toString());

        // Empty textbox
        $(this).val(""); 
    }
});