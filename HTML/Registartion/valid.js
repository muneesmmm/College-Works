ph = document.getElementById( 'phno' );
idc = document.getElementById( 'id' );
namec = document.getElementById( 'name' );
emailc = document.getElementById( 'email' );
sub = document.getElementById( 'sub' );
v_ph = document.getElementById( 'v-phone' );
v_id = document.getElementById( 'v-id' );
v_name = document.getElementById( 'v-name' );
v_emailat = document.getElementById( 'v-email@' );
v_email = document.getElementById( 'v-email.' );
function validph(){
 if( ph.value.length!=10 ){
 v_ph.innerHTML="Phone number be 10 digits" ;
 sub.disabled=true ;
 sub.style.backgroundColor='Orange'
 }
 else{
 v_ph.innerHTML="" ;
 sub.disabled = false ;
 sub.style.backgroundColor='rgb(26, 192, 90)' ;
 }
}
function idcheck (){
 if(/[^a-zA-Z0-9\- \/]/.test(idc.value) ) {
 v_id.innerHTML="Only alphanumeric";
 sub.disabled=true ;
 sub.style.backgroundColor='Orange'
 } else {
 v_id.innerHTML="" ;
 sub.disabled=false ;
 sub.style.backgroundColor='rgb(26, 192, 90)' ;
 }
}
function namecheck (){
 if(/[^a-zA-Z\-\/]/.test(namec.value)){
 v_name.innerHTML = "Only alphabets" ;
 sub.disabled=true;
 sub.style.backgroundColor='Orange' 
 } else {
 v_name.innerHTML="" ;
 sub.disabled=false;
 sub.style.backgroundColor='rgb(26, 192, 90)' ;
 }
}
function emailcheck(){
 var n ;
 if(!emailc.value.includes('@')){
 v_emailat.innerHTML="absence of '@'" ;
 sub.disabled=true;
 sub.style.backgroundColor='Orange' ;
 return ;
 }
 else{
 n=emailc.value.indexOf("@");
 v_emailat.innerHTML="" ;
 }
 if(!emailc.value.includes('.',n)){ //for checking presence of '.'after '@'
 console.log( n );
 v_email.innerHTML="absence of '.'" ;
 sub.disabled=true;
 sub.style.backgroundColor='Orange' ;
 }
 else {
 v_email.innerHTML="" ;
 sub.disabled=false;
 sub.style.backgroundColor='rgb(26, 192, 90)' ;
 }
} 