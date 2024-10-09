let num = (function(){
    let privateValue = 12 ;
    return{
        getter: function(){
            console.log(privateValue);
        } ,
        setter: function(val){
            privateValue = val ;
        }
    }
})()