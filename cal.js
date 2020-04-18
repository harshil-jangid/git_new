var op1=0;
var dot_count=0;
var op2=0;
var operator=null;
var buttons=document.getElementsByClassName("buttons");
var display=document.getElementById("r");

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){
        var temp = this.getAttribute('data-value');
        if(temp=='+')
        {
            op1=display.innerText;
            display.innerText='';
            operator='+';
            dot_count=0;
        }
        else if(temp=='/')
        {
            op1=display.innerText;
            display.innerText='';
            operator='/';
            dot_count=0;
        }
        else if(temp=='%')
        {
            op1=display.innerText;
            display.innerText='';
            operator='%';
            dot_count=0;
        }
        else if(temp=='*')
        {
            op1=display.innerText;
            display.innerText='';
            operator='*';   
            dot_count=0;
        }
        else if(temp=='-')
        {
            op1=display.innerText;
            display.innerText='';
            operator='-';
            dot_count=0;
        }
        else if(temp=='.')
        {
            if(dot_count==0)
            {
                display.innerText+='.';
                dot_count=1;
            }
        }
        else if(temp=='-1')
        {
            display.innerText=-1*display.innerText;
        }
        else if(temp=="AC")
        {
            display.innerText='';
            dot_count=0;
        }
        else if(temp=='=')
        {
            op2=display.innerText;
            display.innerText=eval(op1 + operator + op2);
            op1=display.innerText;
            dot_count=0;
        }
        else
        {
            display.innerText+=temp;
        }
    })
}