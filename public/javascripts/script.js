$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: '/users',
        success: function(resp) {
            console.log(resp);
        }
    });
    $.ajax({
        type: "POST",
        url: '/users',
        data: {'user': 'testUser'},
        success: function(resp) {
            console.log(resp);
        }
    });
    $.ajax({
        type: "DELETE",
        url: '/users/56',
        success: function(resp) {
            console.log(resp);
        }
    });
    $.ajax({
        type: "PUT",
        url: '/users',
        data: {'user': 'Anamol', 'id':81},
        success: function(resp) {
            console.log(resp);
        }
    });
});