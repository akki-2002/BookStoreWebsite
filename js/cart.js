var q1=document.getElementById('q1');
var p1=document.getElementById('p1');
var atc1=document.getElementById('atc1');
var amt1=document.getElementById('amt1');
var q2=document.getElementById('q2');
var p2=document.getElementById('p2');
var atc2=document.getElementById('atc2');
var amt2=document.getElementById('amt2');
var q3=document.getElementById('q3');
var p3=document.getElementById('p3');
var atc3=document.getElementById('atc3');
var amt3=document.getElementById('amt3');
var q4=document.getElementById('q4');
var p4=document.getElementById('p4');
var atc4=document.getElementById('atc4');
var amt4=document.getElementById('amt4');

var q5=document.getElementById('q5');
var p5=document.getElementById('p5');
var atc5=document.getElementById('atc5');
var amt5=document.getElementById('amt5');
var q6=document.getElementById('q6');
var p6=document.getElementById('p6');
var atc6=document.getElementById('atc6');
var amt6=document.getElementById('amt6');
var q7=document.getElementById('q7');
var p7=document.getElementById('p7');
var atc7=document.getElementById('atc7');
var amt7=document.getElementById('amt7');
var q8=document.getElementById('q8');
var p8=document.getElementById('p8');
var atc8=document.getElementById('atc8');
var amt8=document.getElementById('amt8');
var q9=document.getElementById('q9');
var p9=document.getElementById('p9');
var atc9=document.getElementById('atc9');
var amt9=document.getElementById('amt9');
var q10=document.getElementById('q10');
var p10=document.getElementById('p10');
var atc10=document.getElementById('atc10');
var amt10=document.getElementById('amt10');
var q11=document.getElementById('q11');
var p11=document.getElementById('p11');
var atc11=document.getElementById('atc11');
var amt11=document.getElementById('amt11');
var q12=document.getElementById('q12');
var p12=document.getElementById('p12');
var atc12=document.getElementById('atc12');
var amt12=document.getElementById('amt12');
var q13=document.getElementById('q13');
var p13=document.getElementById('p13');
var atc13=document.getElementById('atc13');
var amt13=document.getElementById('amt13');
var q14=document.getElementById('q14');
var p14=document.getElementById('p14');
var atc14=document.getElementById('atc14');
var amt14=document.getElementById('amt14');
var q15=document.getElementById('q15');
var p15=document.getElementById('p15');
var atc15=document.getElementById('atc15');
var amt15=document.getElementById('amt15');
var q16=document.getElementById('q16');
var p16=document.getElementById('p16');
var atc16=document.getElementById('atc16');
var amt16=document.getElementById('amt16');


var tm=document.getElementById('tm');

var tm_amt=0;

atc1.addEventListener('click', ()=>{
    if(q1.value=="" || q1.value<0)
    {
        q1.value=1;
    }
    amt1.innerHTML = p1.innerHTML * q1.value;
    var amtv=parseInt(amt1.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc2.addEventListener('click', ()=>{
    if(q2.value=="" || q2.value<0)
    {
        q2.value=1;
    }
    amt2.innerHTML = p2.innerHTML * q2.value;
    var amtv=parseInt(amt2.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc3.addEventListener('click', ()=>{
    if(q3.value=="" || q3.value<0)
    {
        q3.value=1;
    }
    amt3.innerHTML = p3.innerHTML * q3.value;
    var amtv=parseInt(amt3.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc4.addEventListener('click', ()=>{
    if(q4.value=="" || q4.value<0)
    {
        q4.value=1;
    }
    amt4.innerHTML = p4.innerHTML * q4.value;
    var amtv=parseInt(amt4.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})


atc5.addEventListener('click', ()=>{
    if(q5.value=="" || q5.value<0)
    {
        q5.value=1;
    }
    amt5.innerHTML = p5.innerHTML * q5.value;
    var amtv=parseInt(amt5.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc6.addEventListener('click', ()=>{
    if(q6.value=="" || q6.value<0)
    {
        q6.value=1;
    }
    amt6.innerHTML = p6.innerHTML * q6.value;
    var amtv=parseInt(amt6.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc7.addEventListener('click', ()=>{
    if(q7.value=="" || q7.value<0)
    {
        q7.value=1;
    }
    amt7.innerHTML = p7.innerHTML * q7.value;
    var amtv=parseInt(amt7.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc8.addEventListener('click', ()=>{
    if(q8.value=="" || q8.value<0)
    {
        q8.value=1;
    }
    amt8.innerHTML = p8.innerHTML * q8.value;
    var amtv=parseInt(amt8.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})


atc9.addEventListener('click', ()=>{
    if(q9.value=="" || q9.value<0)
    {
        q9.value=1;
    }
    amt9.innerHTML = p9.innerHTML * q9.value;
    var amtv=parseInt(amt9.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc10.addEventListener('click', ()=>{
    if(q10.value=="" || q10.value<0)
    {
        q10.value=1;
    }
    amt10.innerHTML = p10.innerHTML * q10.value;
    var amtv=parseInt(amt10.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc11.addEventListener('click', ()=>{
    if(q11.value=="" || q11.value<0)
    {
        q11.value=1;
    }
    amt11.innerHTML = p11.innerHTML * q11.value;
    var amtv=parseInt(amt11.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc12.addEventListener('click', ()=>{
    if(q12.value=="" || q12.value<0)
    {
        q12.value=1;
    }
    amt12.innerHTML = p12.innerHTML * q12.value;
    var amtv=parseInt(amt12.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})



atc13.addEventListener('click', ()=>{
    if(q13.value=="" || q13.value<0)
    {
        q13.value=1;
    }
    amt13.innerHTML = p13.innerHTML * q13.value;
    var amtv=parseInt(amt13.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc14.addEventListener('click', ()=>{
    if(q14.value=="" || q14.value<0)
    {
        q14.value=1;
    }
    amt14.innerHTML = p14.innerHTML * q14.value;
    var amtv=parseInt(amt14.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc15.addEventListener('click', ()=>{
    if(q15.value=="" || q15.value<0)
    {
        q15.value=1;
    }
    amt15.innerHTML = p15.innerHTML * q15.value;
    var amtv=parseInt(amt15.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})
atc16.addEventListener('click', ()=>{
    if(q16.value=="" || q16.value<0)
    {
        q16.value=1;
    }
    amt16.innerHTML = p16.innerHTML * q16.value;
    var amtv=parseInt(amt16.innerHTML);
    tm_amt+=amtv;
    // console.log(tm_amt);
    tm.innerHTML=tm_amt;
})

