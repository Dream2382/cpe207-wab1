console.log('This is lst JS');
for(var i=0;i<10 ;i++){
    str ='';
    console.log(i+1);
    str +=(i+1) + ' ';

}
document.querySelector('#output').innerHTML = str;