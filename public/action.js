var action_update = $(function() {
    $('[name="update_name"]').on('click',function(){
        var flg =confirm("You are going to update this user");
        if(flg==true){
            $(this).closest('form').attr('action','users/update');
        
        }
    });
    
});