var contagem;



function reset(){
    if(frameCount % 90 === 0 )
    var contagem = 0;
    var contagem = contagem + 1;
}
function draw(){
    textSize(50);
    text("Contador" + contagem, 15500, 600 )

}