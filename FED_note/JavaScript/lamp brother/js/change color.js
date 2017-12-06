document.write('<table border="1px" width="800px" align="center"');
var i=0;
while(i<1000)                 //输出1000个格子
{
	if(i%10==0)
	{
		if(i%20==0)
		{
			bg="gray";
		}
		else
		{
			bg="white"
		}

		document.write('<tr bgcolor="'+bg+'" onmouseover="show(this)" onmouseout="noshow(this)" >');
	}
   document.write('<td>'+i+"</td>");
   i++;
   if(i%10==0)
	{
		document.write('</tr>')
	}
	var color=null;
    function show(obj)
    {
	color=obj.bgColor;
	obj.bgColor="red";
    }
    function noshow(obj)
    {
	obj.bgColor=color
    }
}
document.write('</table>');
