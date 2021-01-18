app = document.querySelector('#App')
home = document.querySelector('#home')

function getYear(){
    yr = document.querySelector('#yr').value
    console.log(yr)
    dispCal(yr)
    sh()
    return false
}

sw = false
function sh(){
    sw =!sw
    if(sw){
      app.style.display="none"
      home.style.display='flex'
    }
    else{
        app.style.display="grid"
        home.style.display='none'
    }
}
sh()