var count = 0;
var pass,num,eml;
function validateM(){
    var str = document.getElementById("mobile").value;
    var regx = /^[2-9]\d{2}[2-9]\d{6}$/;
    
    if(regx.test(str)){
        document.getElementById("mobile").style.borderColor = "green";
        document.getElementById("mno").innerHTML = "Valid";
        document.getElementById("mno").style.display = "block";
        document.getElementById("mno").style.color="green";
        count = count+1;
        num = str;
        document.getElementById("mobile").setAttribute('readonly',true);
    }
    else{
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("mno").innerHTML = "Invalid";
        document.getElementById("mno").style.color="red";
    }
}

function validateE(){
    var str = document.getElementById("email").value;
    var regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+).([a-z]{1,10})(.[a-z]{2,8})?$/;
    if(regex.test(str)){
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("eid").innerHTML = "Valid";
        document.getElementById("eid").style.display = "block";
        document.getElementById("eid").style.color="green";
        count = count+1;
        eml= str;
    }
    else{
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("eid").innerHTML = "Invalid";
        document.getElementById("eid").style.color="red";
    }
}

function validateP(){
    var pwd = document.getElementById("password").value;
    var preg = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!?])[a-zA-Z0-9!?]{8,}/;
    var srt = "valid";
    var rst = "invalid";
    if(preg.test(pwd)){
        document.getElementById("pid").innerHTML = srt;
        document.getElementById("pid").style.display = "block";
        document.getElementById("pid").style.color = "green";
        document.getElementById("password").setAttribute('readonly',true);
        count = count+1;
        pass = pwd;
    }
    else{
        document.getElementById("pid").innerHTML = rst;
        document.getElementById("pid").style.display = "block";
        document.getElementById("pid").style.color = "red";
    }

}

function neverEmpty(e){
    e.preventDefault();
    if(eml==""||pass==""||num==""){
        alert("Fill in every detail");
        return false;
    }
    else{
        return true;
    }
}

function settingVals(){
    document.getElementById("email-id").innerText = eml;
    document.getElementById("mobile-no").innerHTML = num;  
}