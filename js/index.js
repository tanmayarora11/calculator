function inp(i)
    {
        document.getElementById('inp').value = i;
    }
    function sum(){
        var fno = document.getElementById('fno').value; 
        var sno = document.getElementById('sno').value;
        var add = document.getElementById('res'); 
        add.innerHTML = Number(fno)+Number(sno);
    }
    function sub(){
        var fno = document.getElementById('fno').value; 
        var sno = document.getElementById('sno').value;
        var minus = document.getElementById('res'); 
        minus.innerHTML = Number(fno)-Number(sno);
    }
    function mul(){
        var fno = document.getElementById('fno').value; 
        var sno = document.getElementById('sno').value;
        var pro = document.getElementById('res'); 
        pro.innerHTML = Number(fno)*Number(sno);  
    }
    function div(){
        var fno = document.getElementById('fno').value; 
        var sno = document.getElementById('sno').value; 
        var division = document.getElementById('res');
        if(Number(sno)!=0)
        {
            if(Number(fno)%Number(sno) != 0)
            division.innerHTML = (Number(fno)/Number(sno)).toFixed(2);
            else
            division.innerHTML = (Number(fno)/Number(sno))
        }
        else
        division.innerHTML = "Can't divide";
    }
    function val(no)
    {
        var i = document.getElementById('inp').value;
        if(i==1)
        {
            document.getElementById('fno').value = String(document.getElementById('fno').value)+String(no);
        }
        else
        {
            document.getElementById('sno').value = String(document.getElementById('sno').value)+String(no);
        }
    }