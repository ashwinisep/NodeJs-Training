var buf = Buffer.alloc(10);  
//var buf1 = new Buffer([10, 20, 30, 40, 50]);   
//var buf2 = Buffer.alloc("Simply Easy Learning", "utf-8");  
buf = Buffer.alloc(256);  
len = buf.write("Simply Easy Learning");  
console.log("Octets written : "+  len); 

var buf1=new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {  
    buf[i] = i + 97;  
  }  
  console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz  
  console.log( buf.toString('ascii',0,5));   // outputs: abcde  
  console.log( buf.toString('utf8',0,5));    // outputs: abcde  
  console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde  