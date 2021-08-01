//種別セレクト設定
$(document).ready(function(){
    $("#typeId").change(function(){
        var typeId = $("#typeId").val();
        if(typeId==""){
            $("#product_type_id").prop("disabled",false);
        }else{
            $("#product_type_id").prop("disabled",true);               
        }
        $.ajax({
            url:"select_product_type_id.php",
            type:"POST",
            data:{type_name:$(this).val()}
        }).done(function(data){      
            $("#product_type_id").html(data);
            $("#product_type_id_hidden").html(data);
            //商品種別IDによって、種別Noを表示
            $.ajax({
                url:"select_product_type_id.php",
                type:"POST",
                data:{type_id:$("#product_type_id").val()}
            }).done(function(data){
                $("#numberId").val(data);
                $("#numberId_hidden").val(data);                      
            }).fail(function(html){
                alert("データが存在しません");
            });                       
        }).fail(function(html){
            alert("データが存在しません");
        });
    });
});
//商品種別IDセレクト設定
$(document).ready(function(){
    $("#product_type_id").change(function(){
        $.ajax({
            url:"select_product_type_id.php",
            type:"POST",
            data:{type_ids:$(this).val()}
        }).done(function(data){
            $("#numberId").val(data);
            $("#numberId_hidden").val(data);                                     
        }).fail(function(html){
            alert("データが存在しません");
        });
    });
});
$(document).on('click','#okBtn',function(){
    $('.modal_class').fadeOut(0.0001);
});
$(document).on('click','.closeBtn',function(){
    $('.modal_toroku').fadeOut(0.0001);
});
function torokuFunction(){
    var product_type_id = document.getElementById("product_type_id").value;
    document.getElementById("idh5").style.display = "none";
    if(product_type_id==""){          
        $('.modal_class').fadeIn(0.001);
        return false;
    }
}