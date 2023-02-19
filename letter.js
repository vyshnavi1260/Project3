function color1()
{
	var c1=document.getElementById("b").value;
	document.getElementById("heading").style.color=c1;
}
function color2()
{
	var c2=document.getElementById("c").value;
	document.getElementById("background").style.color=c2;
}
function color3()
{
	var c3=document.getElementById("d").value;
	document.getElementById("para").style.color=c3;
}
function range()
{
	var ran=document.getElementById("a").value;
	document.getElementById("heading").style.fontSize=ran+"px";
}
function left()
{
	document.getElementById("sec").style.textAlign="left"
}
function ali()
{
	document.getElementById("sec").style.textAlign="justify"
}
function right()
{
	document.getElementById("sec").style.textAlign="right"
}
function center()
{
	document.getElementById("sec").style.textAlign="center"
}
function set()
{
	
	var h=document.getElementById("sub").value;
	localStorage.setItem("subject", h);
	var col=document.getElementById("b").value;
	localStorage.setItem("colorhead", col);
	var bg=document.getElementById("c").value;
	localStorage.setItem("backgroundcolor", bg);
	var fromn=document.getElementById("fromn").value;
	localStorage.setItem("fromname", fromn);
	var froma=document.getElementById("froma").value;
	localStorage.setItem("fromaddress", froma);
	var toname=document.getElementById("toname").value;
	localStorage.setItem("toname", toname);
	var toadd=document.getElementById("toadd").value;
	localStorage.setItem("toaddress", toadd);
	var sel=document.getElementById("s").value;
	localStorage.setItem("select", sel);
	var res=document.getElementById("reason").value;
	localStorage.setItem("reason", res);
	var na=document.getElementById("fromn").value;
	localStorage.setItem("name", na);
	var dat=document.getElementById("date").value;
	localStorage.setItem("date", dat);
	var fdat=document.getElementById("fdate").value; 
	localStorage.setItem("fromdate", dat);
	var todat=document.getElementById("todate").value;
	localStorage.setItem("todate", dat);
	var cl=document.getElementById("d").value;
	localStorage.setItem("paracolor", cl);
	var ran=document.getElementById("a").value;
	localStorage.setItem("fontsize", ran);
	var left=document.getElementById("left").value;
	localStorage.setItem("left", left);
	var right=document.getElementById("right").value;
	localStorage.setItem("right", right);
}
function sub()
{
	var head=localStorage.getItem("subject");
	document.getElementById("head").innerHTML=head;
	var left=localStorage.getItem("left");
	document.getElementById("head").style.textAlign=left;
	var right=localStorage.getItem("righ");
	document.getElementById("head").style.textAlign=right;
	var col=localStorage.getItem("colorhead");
	document.getElementById("head").style.color=col;
	var ran=localStorage.getItem("fontsize");
	document.getElementById("head").style.fontSize=ran+"px";
	var bg=localStorage.getItem("backgroundcolor");
	document.getElementById("body").style.backgroundColor=bg;
	var fromn=localStorage.getItem("fromname");
	document.getElementById("a1").innerHTML=fromn;
	var froma=localStorage.getItem("fromaddress");
	document.getElementById("b1").innerHTML=froma;
	var toname=localStorage.getItem("toname");
	document.getElementById("c1").innerHTML=toname;
	var toadd=localStorage.getItem("toaddress");
	document.getElementById("d1").innerHTML=toadd;
	var sel=localStorage.getItem("select");
	document.getElementById("wish").innerHTML=sel;
	var res=localStorage.getItem("reason");
	document.getElementById("p").innerHTML=res;
	var na=localStorage.getItem("name");
	document.getElementById("e1").innerHTML=na;
	var dat=localStorage.getItem("date");
	document.getElementById("dat").innerHTML=dat;
	var fdat=localStorage.getItem("fromdate");
	document.getElementById("fr").innerHTML=fdat;
	var todat=localStorage.getItem("todate");
	document.getElementById("to").innerHTML=todat;
	var cl=localStorage.getItem("paracolor");
	var len=document.getElementsByTagName("span").length;
	var sp=document.getElementsByTagName("span")
	for (i=0;i<=len ;i++ )
	{
		sp[i].style.color=cl;
	}
	
}
