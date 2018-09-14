let b51s=document.querySelectorAll(".b51");
let b511s=document.querySelectorAll(".b511");
let b512s=document.querySelectorAll(".b512");
let flag=true;


for(let i=0;i<b51s.length;i++){
	b51s[i].onclick=function(){
		if(flag==true){
			b511s[i].style.zIndex="10";
			b512s[i].style.zIndex="0";
			flag=false;

		}else if(flag==false){
			b511s[i].style.zIndex="0";
			b512s[i].style.zIndex="10";
			flag=true;

		}
	}
}
let b31s=document.querySelectorAll(".b31");
let s2s=document.querySelectorAll(".s2");
let s1=document.querySelector(".s1");
console.log(s2s,s1);
for(let h=0;h<b31s.length;h++){
	b31s[h].onclick=function(){
		for(let j=0;j<b31s.length;j++){
			b31s[j].className="b31";
		}
		b31s[h].className="b31 active";
		s1.innerText=s2s[h].innerText;
	}
}
