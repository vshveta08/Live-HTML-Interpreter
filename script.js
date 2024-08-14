function fun()
{
    a = document.getElementById("d1");
    b = document.getElementById("d2");
        
    a.innerHTML = b.value;
    a.eval(b);
}
