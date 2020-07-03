// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      const id = $(this).data("id");
      const newburger = $(this).data("newburger");
  
      const newburgertype = {
        devoured: newburger
      };
  
      // Send the PUT request.
      $.ajax("/api/burger_name/" + id, {
        type: "PUT",
        data: newburgertype
      }).then(
        function() {
          console.log("changed devoured to", newburger);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newburger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burger_name", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  