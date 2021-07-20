alert("Ano pangalan mo?")
var person= prompt("Pakilagay ang iyong pangalan.");

$("h2").text("Kamusta " + person +", tutulungan kita na mag bilang!")

$("#buttonby1").on("click",function(){
	var num=$("input").val()
	for(i=0;i<=num; i++){
	$("h4").append(i+" " )
	}

})

$("#buttonby5").on("click",function(){
	var num=$("#button").val()
	for(i=0;i<=num; i+=5){
	$("h5").append(i+" " )
	}

})

