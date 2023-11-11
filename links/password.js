function password() 
{ var testV = 1; 
var pass1 = prompt('请输入访问密码！',''); 
while (testV < 3) { 
if (!pass1) 
history.go(-1); 
if (pass1 == "909903") { 
break; 
} 

testV+=1; 
var pass1 = 
prompt('密码错误！'); 
} 
if (pass1!="password" & testV ==3) 
window.close();
} 
document.write(password());
