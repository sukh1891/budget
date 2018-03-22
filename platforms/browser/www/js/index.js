function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
    document.addEventListener("offline", onOffline, false);
    var db = openDatabase('budget', '1.0', 'budget', 1024*1024);
    db.transaction(populateDB, failed, success);
    db.transaction(successDB, failed, success);
}
function onOffline() {
    alert("No internet. Check connection and restart the app.");
    navigator.app.exitApp();
}
function populateDB(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS members (id INTEGER PRIMARY KEY, email VARCHAR, password VARCHAR, login CHAR)");
}
function successDB(tx) {
    tx.executeSql("SELECT * FROM members WHERE login = 'yes'", [], querySuccess, failed);
}
function querySuccess(tx, results) {
    rowid = results.rows.item(0).id;
    email = results.rows.item(0).email;
    password = results.rows.item(0).password;
    var dataString="email="+email+"&password="+password+"&login=";
    var url="https://khuranatech.in/pro/budget/app/login.php";
    var data;
    if($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#login").html('Connecting...');},
            success: function(data){
                if(data=="failed") {
                    alert("Login failed. Try again.");
                    $("#login").html('Login');
                    db = openDatabase('budget', '1.0', 'budget', 1024*1024);
                    db.transaction(deleteDB, failed, success);
                } else {
                    $(".name").html('Hi, ' + data);
                    $("#login").html('Login');
                    dashboard();
                }
            }
        });
    }return false;
}
$("#login").click(function(){
    email=$("#email").val();
    password=$("#password").val();
    characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
    newchar = 'BWEu3JOxDAFYMH1mzew!V^$7GrRjCqnQ@lig&KoI465skd0Lah9fT2btPcX%U8#vp*SNZy';
    l = password.length;
    var i;
    a = "";
    for(i=0; i<l; i++) {
        var n = characters.indexOf(password.charAt(i));
        a += newchar.charAt(n);
    }
    password = a;
    dataString="email="+email+"&password="+password+"&login=";
    url="https://khuranatech.in/pro/budget/app/login.php";
    if($.trim(email).length>0 && $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#login").html('Connecting...');},
            success: function(data){
                if(data == "failed") {
                    alert("Login failed. Try again.");
                    $("#login").html('Login');
                } else {
                    name = data;
                    db = openDatabase('budget', '1.0', 'budget', 1024*1024);
                    db.transaction(insertoDB, failed, success);
                    dashboard();
                    $("#login").html('Login');
                    $(".name").html('Hi, ' + name);
                }
            }
        });
    }return false;
});
function insertoDB(tx) {
    password=$("#password").val();
    characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
    newchar = 'BWEu3JOxDAFYMH1mzew!V^$7GrRjCqnQ@lig&KoI465skd0Lah9fT2btPcX%U8#vp*SNZy';
    l = password.length;
    var i;
    a = "";
    for(i=0; i<l; i++) {
        var n = characters.indexOf(password.charAt(i));
        a += newchar.charAt(n);
    }
    password = a;
    tx.executeSql("INSERT INTO members (email, password, login) VALUES ( ?, ?, 'yes')", [ $("#email").val(), password]);
}
function success() {
    
}
function failed() {
    
}
$(".logout").click(function(){
    db = openDatabase('budget', '1.0', 'budget', 1024*1024);
    db.transaction(deleteDB, failed, success);
    $(".index").removeClass("hide");
    $(".cpanel").removeClass("show");
    menuexit();
});
function logout() {
    db = openDatabase('budget', '1.0', 'budget', 1024*1024);
    db.transaction(deleteDB, failed, success);
    $(".index").removeClass("hide");
    $(".cpanel").removeClass("show");
}
function deleteDB(tx) {
    tx.executeSql("DROP TABLE IF EXISTS members");
}
$(".menuicon").click(function(){
    $(".menuexit").fadeIn(250);
    $(".menu").addClass("show");
});
$(".menuexit").click(function(){
    $(".menuexit").delay(250).fadeOut(250);
    $(".menu").removeClass("show");
});
function menuexit() {
    $(".menuexit").delay(250).fadeOut(250);
    $(".menu").removeClass("show");
}
$(".daslink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".dashboard").delay(500).fadeIn(500);
    dashboard();
    menuexit();
});
$(".inclink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".income").delay(500).fadeIn(500);
    income();
    menuexit();
});
$(".explink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".expenses").delay(500).fadeIn(500);
    expenses();
    menuexit();
});
$(".analink").click(function(){
    $(".contdiv").fadeOut(500);
    $(".analytics").delay(500).fadeIn(500);
    analytics();
    menuexit();
});
$(".incadd img").click(function(){
    $(".newinc").fadeIn(500);
});
$(".incclose").click(function(){
    $(".newinc").fadeOut(500);
});
$(".expadd img").click(function(){
    $(".newexp").fadeIn(500);
});
$(".expclose").click(function(){
    $(".newexp").fadeOut(500);
});