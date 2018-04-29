function dashboard() {
    $(".index").addClass("hide");
    $(".cpanel").addClass("show");
    password = $("#password").val();
    dataString = "email=" + email + "&password=" + password + "&login=";
    url="https://khuranatech.in/pro/budget/app/dashboard.php";
    if($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#last5").html('loading...'); },
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    logout();
                } else {
                    $("#last5").html('');
                    $.each(data, function(i, field){
                        var date = field.date;
                        var dateSplit = date.split("-");
                        date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0].substring(2);
                        var amount = field.amount;
                        var remarks = field.remarks;
                        var category = field.category;
                        if(category != "") {
                            category = "<u>" + category + "</u>: ";
                        }
                        var type = field.type;
                        type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
                        $("#last5").append("<div class='data'><div class='date'>" + date + "</div><div class='type'>" + type + "</div><div class='remarks'>" + category + remarks + "</div><div class='amount'>" + amount + "</div></div>");
                    });
                    $("#login").html('Login');
                }
            }
        });
    }return false;
}
function income() {
    var month = $(".incmon").val();
    var year = $(".incyea").val();
    if(month == '0' || year == '0') {
        var d = new Date();
        var month = d.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        year = d.getFullYear();
    }
    password = $("#password").val();
    dataString = "email=" + email + "&password=" + password + "&month=" + month + "&year=" + year + "&login=";
    url="https://khuranatech.in/pro/budget/app/income.php";
    if($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#income").html('loading...'); },
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    logout();
                } else {
                    $("#income").html('');
                    $(".incyea").val(year);
                    $(".incmon").val(month);
                    $.each(data, function(i, field){
                        var date = field.date;
                        var dateSplit = date.split("-");
                        date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0].substring(2);
                        var amount = field.amount;
                        var remarks = field.remarks;
                        $("#income").append("<div class='data'><div class='date'>" + date + "</div><div class='remarks'>" + remarks + "</div><div class='amount'>" + amount + "</div></div>");
                    });
                }
            }
        });
    }return false;
}
function expenses() {
    var month = $(".expmon").val();
    var year = $(".expyea").val();
    if(month == '0' || year == '0') {
        var d = new Date();
        var month = d.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        year = d.getFullYear();
    }
    password = $("#password").val();
    dataString = "email=" + email + "&password=" + password + "&month=" + month + "&year=" + year + "&login=";
    url="https://khuranatech.in/pro/budget/app/expenses.php";
    if($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#expenses").html('loading...'); },
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    logout();
                } else {
                    $("#expenses").html('');
                    $(".expyea").val(year);
                    $(".expmon").val(month);
                    $.each(data, function(i, field){
                        var date = field.date;
                        var dateSplit = date.split("-");
                        date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0].substring(2);
                        var amount = field.amount;
                        var remarks = field.remarks;
                        var category = field.category;
                        category = "<u>" + category + "</u>: ";
                        $("#expenses").append("<div class='data'><div class='date'>" + date + "</div><div class='remarks'>" + category + remarks + "</div><div class='amount'>" + amount + "</div></div>");
                    });
                }
            }
        });
    }return false;
}
function analytics() {
    password = $("#password").val();
    dataString = "email=" + email + "&password=" + password + "&login=";
    url="https://khuranatech.in/pro/budget/app/analytics.php";
    if($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            dataType: "json",
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $(".inc1").html('loading...'); },
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    logout();
                } else {
                    $.each(data, function(i, field){
                        var my1 = field.my1;
                        var exp1 = field.exp1;
                        var inc1 = field.inc1;
                        var sav1 = field.sav1;
                        var my2 = field.my2;
                        var exp2 = field.exp2;
                        var inc2 = field.inc2;
                        var sav2 = field.sav2;
                        var my3 = field.my3;
                        var exp3 = field.exp3;
                        var inc3 = field.inc3;
                        var sav3 = field.sav3;
                        $(".my1").html(my1);
                        $(".my2").html(my2);
                        $(".my3").html(my3);
                        $(".inc1").html(inc1);
                        $(".inc2").html(inc2);
                        $(".inc3").html(inc3);
                        $(".exp1").html(exp1);
                        $(".exp2").html(exp2);
                        $(".exp3").html(exp3);
                        $(".sav1").html(sav1);
                        $(".sav2").html(sav2);
                        $(".sav3").html(sav3);
                    });
                }
            }
        });
    }return false;
}
function refer() {
    password = $("#password").val();
    dataString = "email=" + email + "&password=" + password + "&login=";
    url="https://khuranatech.in/pro/budget/app/refer.php";
    if($.trim(email).length>0 & $.trim(password).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#refurl").val('loading...'); },
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    logout();
                } else {
                    var refurl = "https://khuranatech.in/pro/budget/?ref=" + data;
                    $("#refurl").val(refurl);
                    var fburl = "https://www.facebook.com/sharer/sharer.php?u=" + refurl;
                    var twurl = "https://twitter.com/intent/tweet?text=" + refurl;
                    var emurl = "mailto:?body=" + refurl;
                    var whurl = "whatsapp://send?text=" + refurl;
                    $("#shfb").attr("href", fburl);
                    $("#shtw").attr("href", twurl);
                    $("#shem").attr("href", emurl);
                    $("#shwh").attr("href", whurl);
                }
            }
        });
    }return false;
}
$("#incsubmit").click(function(){
    date=$("#incdate").val();
    var dateSplit = date.split("-");
    date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0].substring(2);
    amount=$("#incamount").val();
    remarks=$("#incremarks").val();
    $(".confirm").html("<b>Date: </b>" + date + "<br/><br/><b>Amount: </b>" + amount + "<br/><br/><b>Remarks: </b>" + remarks + "<br/><br/><a class='conlink' onclick='addIncome()'>Confirm</a><a onclick='conclose()' class='conclose'>Edit</a><div><br/><b>Note:</b> Check carefully before you hit <i>Confirm</i>. Once submitted, an entry cannot be edited or deleted through the app. You will have to log in to the website to do so.</div>");
    $(".confirm").fadeIn(100);
});
$("#expsubmit").click(function(){
    date=$("#expdate").val();
    var dateSplit = date.split("-");
    date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0].substring(2);
    amount=$("#expamount").val();
    remarks=$("#expremarks").val();
    category=$("#expcategory").val();
    $(".confirm").html("<b>Date: </b>" + date + "<br/><br/><b>Amount: </b>" + amount + "<br/><br/><b>Category: </b>" + category + "<br/><br/><b>Remarks: </b>" + remarks + "<br/><br/><a class='conlink' onclick='addExpense()'>Confirm</a><a onclick='conclose()' class='conclose'>Edit</a><div><br/><b>Note:</b> Check carefully before you hit <i>Confirm</i>. Once submitted, an entry cannot be edited or deleted through the app. You will have to log in to the website to do so.</div>");
    $(".confirm").fadeIn(100);
});
function conclose(){
    $(".confirm").fadeOut(100);
}
function addIncome(){
    date=$("#incdate").val();
    amount=$("#incamount").val();
    remarks=$("#incremarks").val();
    dataString="email="+email+"&password="+password+"&date="+date+"&amount="+amount+"&remarks="+remarks+"&login=";
    url="https://khuranatech.in/pro/budget/app/addinc.php";
    if($.trim(email).length>0 && $.trim(password).length>0 && $.trim(date).length>0 && $.trim(amount).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $(".loading").fadeIn(100);},
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    $(".newinc").fadeOut(100);
                    $(".confirm").fadeOut(100);
                    $(".loading").fadeOut(100);
                } else {
                    income();
                    $(".newinc").fadeOut(100);
                    $(".loading").fadeOut(100);
                    $(".confirm").fadeOut(100);
                }
            }
        });
    }return false;
}
function addExpense(){
    date=$("#expdate").val();
    amount=$("#expamount").val();
    remarks=$("#expremarks").val();
    category=$("#expcategory").val();
    dataString="email="+email+"&password="+password+"&date="+date+"&amount="+amount+"&category="+category+"&remarks="+remarks+"&login=";
    url="https://khuranatech.in/pro/budget/app/addexp.php";
    if($.trim(email).length>0 && $.trim(password).length>0 && $.trim(date).length>0 && $.trim(amount).length>0 && $.trim(category).length>0) {
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $(".loading").fadeIn(100);},
            success: function(data){
                if(data == "failed") {
                    alert("Unknown error. Try again.");
                    $(".newexp").fadeOut(100);
                    $(".confirm").fadeOut(100);
                    $(".loading").fadeOut(100);
                } else {
                    expenses();
                    $(".newexp").fadeOut(100);
                    $(".loading").fadeOut(100);
                    $(".confirm").fadeOut(100);
                }
            }
        });
    }return false;
}