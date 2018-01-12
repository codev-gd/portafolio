



const f1 = () => {
    console.log("consola a traves de funcion flecha")
}

const click = document.getElementById("iconMenu")

const blockMenu = document.getElementById("blockMenu")

const closeMenu = document.getElementById("closeMenu")
click.addEventListener('click',()=>{
    // alert("ss")
    // setInterval(()=>{
        blockMenu.style.right = "0px";    
    
    click.style.display="none"
    
})


closeMenu.addEventListener('click',()=>{
    blockMenu.style.right="-200px"
    click.style.display="block"
})

setInterval(1000,)



///FUNCIONES DE SCROLL


$(document).ready(function(){
    $('#homemen').click(function(){
		$('body, html').animate({
			scrollTop:0
		},900);
        
    });

    $('#aboutmen').click(function(){
		$('body, html').animate({
			scrollTop:$('#about').offset().top
		},900);        
	});
    

    $('#portfoliomen').click(function(){
		$('body, html').animate({
			scrollTop:$('#portfolio').offset().top
		},900);        
    });
    

    $('#contactmen').click(function(){
		$('body, html').animate({
			scrollTop:$('#footer').offset().top
		},900);        
	});
});