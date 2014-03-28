/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var action_del = $(function() {
$('[name="delete_name"]').on('click',function(){
        var flag=confirm("Are you sure you wanna delete");
        if(flag==true){
          $(this).closest('form').attr('action','users/delete');
          
        }
       
    });
   });