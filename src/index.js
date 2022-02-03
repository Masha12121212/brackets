module.exports = function check(str, bracketsConfig) {
  let res = '';
  let a = bracketsConfig;
  let strN = str
  for(i = 0; i<strN.length; i++){
 for( let key in a){
   let c = str.indexOf(a[key][0]);
   let b = str.indexOf(a[key][1]);
    let del = a[key][0]+a[key][1];
    for (u = 0; u < strN.length; u++){
    if (str.includes(a[key][0]+a[key][1])){
      str = str.replace(del, '');
      u = 0;
    } if(str  === ''){u = strN.length}}
   if (str === ''){res = true}
   else{res = false};
    if(str  === ''){break}
 }
     if(str  === ''){i = strN.length}
}
  return res;
}

