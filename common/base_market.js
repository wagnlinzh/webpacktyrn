
//author:Cao YaHui

var ActivitiesID = 201605301;
var url = ""
var dealerId = 0;
var chexingId = 0;
var buytimeId = 0;
$(document).ready(function () {

    var focusstus = false;
    $(':input').focus(function () {
        focusstus = true;
    });
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];

        if (e && e.keyCode == 13) { // enter 键
            if (focusstus) {
                submitLogin();
            }
        }
    };
});


$(document).ready(function () {
    LoadingProvInfo();

    $('#prov dl dd').click(function () {
        $('#prov input').val($(this).text());
        LoadingCityInfo($(this).text());
        $('#city dl dd').click(function () {
            //cityId = $(this).attr('data-value');
            LoadingDealerInfo($(this).text());
            $('#city input').val($(this).text());
            $('#dealer dl dd').click(function () {
                dealerId = $(this).attr('data-value');
                $('#dealer input').val($(this).text());
            });
            $('#dealer input').val('经销商');
        });
        $('#city input').val('城市');
    });
    $('#chexing dl dd').click(function () {
        chexingId = $(this).attr('data-value');
        //chekuanId = $(this).attr('data-value');
        $('#chexing input').val($(this).text());
    });
    $('#buytime dl dd').click(function () {
        buytimeId = $(this).attr('data-value');
        $('#buytime input').val($(this).text());
    });
    $('#denging').unbind().bind("click", submitLogin);
    url = BitautoMarketSk.webapiCommonurl + "Api/Handler1.ashx";
    //url = "http://market1.bitauto.com/CMBActivities.Web/Api/Handler1.ashx";
});
function LoadingProvInfo() {
    var prostr = "";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (prostr.indexOf(JSonData.Information[i].prov) < 0) {
            prostr += "<dd data-value=" + JSonData.Information[i].provId + ">" + JSonData.Information[i].prov + "</dd>";
        }
    }
    $('#prov dl').html(prostr);
}

function LoadingCityInfo(prov) {
    var ctystr = "";
    //alert(prov);
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (JSonData.Information[i].prov == prov) {
            if (ctystr.indexOf(JSonData.Information[i].city) < 0) {
                ctystr += "<dd data-value=" + JSonData.Information[i].cityId + ">" + JSonData.Information[i].city + "</dd>";
            }
        }
    }

    $('#city dl').html(ctystr);
}

function LoadingDealerInfo(city) {
    var delstr = "";
    for (var i = 0; i < JSonData.Information.length; i++) {
        if (JSonData.Information[i].city == city) {
            delstr += "<dd data-value=" + JSonData.Information[i].dealerId + ">" + JSonData.Information[i].dealer + "</dd>";
        }
    }
    $('#dealer dl').html(delstr);
}


//解析参数
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}
function isMobile(mobile) {
    return (/^(?:13\d|15\d|17\d|18\d|145|147)-?\d{5}(\d{3}|\*{3})$/.test(mobile));
}
function isMail(mail) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(mail));
}

function is15sfz(sfz) {
    return (/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(sfz));
}
function is18sfz(sfz) {
    return (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(sfz));
}
function GetStringRealLength(str) {
    var bytesCount = 0;
    if (str) {
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c))   //匹配双字节
            {
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
        }
    }
    return bytesCount;
}


//写cookies函数
function SetCookie(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escapeStr(value) + ";expires=" + exp.toGMTString() + ';domain=bitauto.com;path=/;';
}

//写cookies函数
function SetCookie2(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 1 * 1 * 60 * 1000);
    document.cookie = name + "=" + escapeStr(value) + ";expires=" + exp.toGMTString() + ';domain=bitauto.com;path=/;';
}
function GetCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;

}
function DelCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";domain=bitauto.com;path=/;";
}

function escapeStr(str) {
    return escape(str).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');
}


function exist(id) {
    var s = document.getElementById(id);

    if (s) {
        return true;
    }
}
function VerifyLogin() {
    var LoginName = $.trim($('#LoginName').val());
    var LoginPhone = $.trim($('#LoginPhone').val());
    var prov = $.trim($('#prov input').val());
    var city = $.trim($('#city input').val());
    var dealer = $.trim($('#dealer input').val());

    var chexing = $.trim($('#chexing input').val());
    var buytime = $.trim($('#buytime input').val());
    var chex1 = $("#checkbox1").prop("checked");
    var chex2 = $("#checkbox2").prop("checked");

    if (exist("LoginName")) {
        if (LoginName == "" || LoginName == "姓名") {
            alert('请输入您的姓名');
            return false;
        } else {
            if (GetStringRealLength(LoginName) > 20) {
                alert('请输入正确的姓名');
                return false;
            }
        }
    }
    if (exist("LoginPhone")) {
        if (LoginPhone == "" || LoginPhone == "电话") {
            alert('请填写手机号');
            return false;
        }
        else {
            if (!isMobile(LoginPhone)) {
                alert('请填写正确的手机号，如:13012345678');
                return false;
            }
        }
    }

    if (exist("prov")) {
        if (prov == "请选择" || prov == "省份") {
            alert('请选择省份');
            return false;
        }

    }

    if (exist("city")) {
        if (city == "请选择" || city == "城市") {
            alert('请选择城市');
            return false;
        }

    }
    if (exist("dealer")) {
        if (dealer == "请选择" || dealer == "经销商") {
            alert('请选择经销商');
            return false;
        }

    }
    if (exist("chexing")) {
        if (chexing == "请选择" || chexing == "意向车型") {
            alert('请选择意向车型');
            return false;
        }
    }
    if (exist("buytime")) {
        if (buytime == "请选择" || buytime == "预购时间") {
            alert('请选择预购时间');
            return false;
        }
    }

    if (!chex1) {
        alert('请确认 同意并已阅读《一汽丰田顾客个人信息保护基本方针》');
        return false;
    }
    if (!chex2) {
        alert('请确认 我同意和接受本活动组织方及其合作公司向我发送商业性信息');
        return false;
    }
    return true;
}
function Empty() {
    $('#LoginName').val('姓名');
    $('#LoginPhone').val('电话');
    $('#chexing input').val('意向车型');
    $('#prov input').val('省份');
    $('#city input').val('城市');
    $('#dealer input').val('经销商');
    $('#buytime input').val('预约时间');
    $("#checkbox1").attr("checked", false);
    $("#checkbox2").attr("checked", false);
}


function submitLogin() {
    if (VerifyLogin()) {
        var YOrderTypeID = 1; //订单类型
        var YDealerID = dealerId; //经销商ID 销售提供
        var YLocationID = ""; //地区id
        var YUserIP = ""; //用户IP
        var YCarSerialId = chexingId;  //车型ID 销售提供
        var YCarId = 0; //车款ID 销售提供

        //消息推送参数开始
        var msgUserId = 0; //易车会员ID
        var msgAddress = 0;  //地址
        var msgbsid = "7"; //车型品牌
        var msgcsid = chexingId; //车型
        try {
            if (Bitauto.Login.result.isLogined == true) {
                msgUserId = Bitauto.Login.result.userId;
            }
        } catch (err) {

        }

        try {
            YLocationID = bit_locationInfo.cityId
        } catch (e) {

        }
        try {
            YUserIP = bit_locationInfo.IP;
        } catch (e1) {

        }
        var xcweblog = "";
        try {
            xcweblog = XCWEBLOG_ID;
        } catch (err1)
        { }



        //  alert(msgAddress);

        var LoginName = jQuery('#LoginName').val() == undefined ? "" : jQuery('#LoginName').val();
        var LoginPhone = jQuery('#LoginPhone').val() == undefined ? "" : jQuery('#LoginPhone').val();
        var prov = jQuery('#prov input').val() == undefined ? "" : jQuery('#prov input').val();
        var city = jQuery('#city input').val() == undefined ? "" : jQuery('#city input').val();
        var dealer = jQuery('#dealer input').val() == undefined ? "" : jQuery('#dealer input').val();
        var chexing = jQuery('#chexing input').val() == undefined ? "" : jQuery('#chexing input').val();
        //var Email = jQuery('#Email').val() == undefined ? "" : jQuery('#Email').val();
        var buytime = jQuery('#buytime input').val() == undefined ? "" : jQuery('#buytime input').val();

        var filedgstr = "";
        var marketfromad = request("marketfromad");
        try {
            var fgcx = request("fgcx");
            if (fgcx == "yes") {
                if (filedgstr == "") {
                    filedgstr = "6";
                }
                else {
                    filedgstr += "(6)";
                }
            }
        } catch (err2) {

        }

        if (marketfromad == "") {
            filedgstr += marketfromad;
        }
        else {
            filedgstr += "(" + marketfromad + ")";
        }


        var SMARTCODE = request("SMARTCODE");


        //        var provid = "17";
        //        var cityid = jQuery('#dealer').find("option:selected").attr("cityid");
        //        var dealerid = $('#dealer').val();

        var cityName = "";
        try {
            cityName = bit_locationInfo.cityName;
        } catch (e) {

        }
        //var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + prov + ',' + city + ',' + dealer + ',' + filedgstr + ',' + sex + ',' + chexing + ',' + Email + ',' + buytime + ',' + ',' + ',,,' + xcweblog + ',' + provid + ',' + cityid + ',' + dealerid);                      //生成以","为分隔符的字符串
        var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + prov + ',' + city + ',' + dealer + ',' + filedgstr + ',' + ',' + chexing + ',' + ',' + buytime + ',' + buytimeId + ',' + ',,,' + xcweblog);
        var body = "isonlyphone=3&istdata=1&SMARTCODE=" + escapeStr(SMARTCODE) + "&strC=" + escapeStr(cityName); //常规参数
        body += "&isPostYiPai=0&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
        //消息推送传参开始
        body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
        //消息推送传参结束
        body += "&action=insert&actid=" + ActivitiesID + "&data=" + str; //报名参数

        $('#denging').unbind();
        $.getJSON(url + "?callback=?", body, function (data) {
            if (data.success) {
                alert('报名成功！');
                Empty();
            }
            else {
                if (data.result == '-2') {
                    alert('此手机号已报过名，无法再参加');
                }
                else {
                    if (data.result == "-3") {
                        alert('验证码输入有误');
                    }

                    else {
                        alert('报名失败');
                    }

                }
            }
            $('#denging').bind("click", submitLogin);
        });


    }
}


