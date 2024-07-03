var val=1;
$("#decrease").click(function(){
    val-=1;
    $('.content').animate({
        fontSize:val+"rem",
        
    })
    if (val <= 1) {
        $(".error").text("you reach small value")
    }else{
        $(".error").text("")
    }
})



$("#increase").click(function(){
    val+=1;
    $('.content').animate({
        fontSize:val+"rem",
        
    })
    if (val >= 4) {
        $(".error").text("you reach max value")
    }else{
        $(".error").text("")
    }
})

$.fn.changeSize=function(){
    
    if(val>4){
        
        this.css('font-size',1+"rem")
        this.css('color','green')
    }
    else{
        this.css('font-size',4+"rem")
        this.css('color','blue')
    }
}

$('.btn').click(function(){
    $('.content').changeSize()
})