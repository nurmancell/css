<script type='text/javascript'>        
           
function changeThumbSize(id,size){
var blogGadget = document.getElementById(id);
var replacement = blogGadget.innerHTML;
blogGadget.innerHTML = replacement.replace(/s72-c/g,&quot;s&quot;+size+&quot;-c&quot;);
var thumbnails = blogGadget.getElementsByTagName(&quot;img&quot;);
for(var i=0;i&lt;thumbnails.length;i++){ 
thumbnails[i].width = size; 
thumbnails[i].height = size; 
}
}
changeThumbSize(&quot;label_with_thumbs&quot;,210);              
</script>
