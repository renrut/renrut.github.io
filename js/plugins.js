/*
* Resume modal plugin
*/
(function(a){a.createModal=function(b){
    defaults={title:"",message:"My Resumé",closeButton:true,scrollable:false};
    var b = a.extend({},defaults,b);
    var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";
    html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog modal-lg">';
    html+='<div class="modal-content">';
    html+='<div class="modal-header" hidden="true">';
    html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    if(b.title.length>0){
        html+='<h2 class="cover-heading" id="modal-title">'+b.title+"</h2>"
    }
    html+="</div>";
    html+='<div class="modal-body" '+c+">";
        html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    if(b.title.length>0){
        html+='<h2 class="cover-heading" id="modal-title">'+b.title+"</h2>"
    }
    html+="<br>"
    html+=b.message;html+="</div>";
    html+='<div class="modal-footer" hidden="true">';
    if(b.closeButton===true){
        html+='<button type="button" class="btn btn-primary btn-default" data-dismiss="modal">Close</button>'
    }
    html+="</div>";
    html+="</div>";
    html+="</div>";
    html+="</div>";
    a("body").prepend(html);
    a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}
})(jQuery);



$(function(){    
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="94%" height="500">No Support</object>'
        $.createModal({
            title:'My Resumé',
            message: iframe,
            closeButton:false,
            scrollable:false
        });
        return false;        
    });    
})

(function goToFacebook(){
    window.location = "http://www.facebook.com/"
})

