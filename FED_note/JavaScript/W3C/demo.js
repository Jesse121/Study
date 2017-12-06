/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-15 10:34:20
 * @version $Id$
 */
 function myFunction()
 {
 	var x;
 	var txt="";
 	var person={fname:"Bill",lname:"Gates",age:56};
 	for (x in person)
 	{
 		txt=txt+person[x];
 	}
 	document.getElementById("demo").innerHTML=txt;
 }

