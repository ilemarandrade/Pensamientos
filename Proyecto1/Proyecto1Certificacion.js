let n=0;
let nTexto=0;
cambiarColor=()=>{
	let colores=["#3b768a","#3b8a47","#8a3b6c","#543b8a","#3b8a88","#9a4545","#5782a5","#333333","#ce7575","#758ece"];
 $("body").css("background",colores[n]).css("color",colores[n]);
 $("#new-quote").css("background",colores[n]);
 $(".button").css("background",colores[n]);
 if(n===colores.length){
 	return n=0;
 }
 n+=1;
} 

cambiarTexto=()=>{
	let text=[["Yo puedo aceptar un fallo. Cualquiera puede fallar. Pero no puedo aceptar el no intentarlo.","Michael Jordan"],
	["El que este libre de pecado que lance la primera piedra","Jesus"],
	["Puedes estar lejos de mis ojos, pero no de mis pensamientos","Anonymo"],
	["Sin duda ahora puedo decir con total convencimiento, que los sueños se pueden hacer realidad si los deseas con las suficientes ganas","Anonymo"],
	["Dios ha sido bueno y me ayudara en la tribulacion, porque la tribulacion produce paciencia, prueba y la esperanza no averguenza por su amor","Ilemar y Pablo"]
	]
	let n=text.length-1;
	$("#frase").text('""'+text[nTexto][0]);
	$("#author").children().text("-"+text[nTexto][1]);
	if(nTexto===n){
 	return nTexto=0;
 }
 nTexto+=1;
}

//let text=["Hola como estas?","Sabes Te amo mucho","Te extraño tanto no te imaginas","TE VEO","Dios te siga guardando y guiando"]