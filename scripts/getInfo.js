/**
 * Created by zx591 on 2015.08.04.
 */
//    创建ajax对象
var request = createRequest();

var loadInfo = {
    //响应
    getResponse: function (){
        if(request.readyState == 4){//响应完成
            if(request.status == 200){//状态码为200
                var data = JSON.parse( request.responseText );//解析json
                if(data){
                    console.log(data.info[0].info_detail);
                    this.getDetail(data);
                }
            }
        }
    },
    //基本信息
    getInfoDetail: function(data){
        var ul = document.getElementById('info_detail');
        for(var i = 0; i<data.length;i++){
                var li = document.createElement('li');
                li.innerHTML = data[i].info_detail;
                ul.appendChild(li);
            }
    },
    //技能
    getSkill: function (data){
        var ul =  document.getElementById('skill');
        for(var i = 0; i<data.length;i++){
                var li = document.createElement('li');
                li.innerHTML = data[i].skill_detail;
                ul.appendChild(li);
        }
    },
    //项目经历
    getProject: function (data){
        var ul =  document.getElementById('project');
            for(var i = 0; i<data.length;i++){
                var li = document.createElement('li');
                li.innerHTML = data[i].project_detail;
                ul.appendChild(li);
        }
    },
    //个人荣誉
    getlanguage: function (data){
        var ul =  document.getElementById('language');
        var li_0 = document.createElement('li');
        li_0.innerHTML = data.english;
        ul.appendChild(li_0);

        var li_1 = document.createElement('li');
        li_1.innerHTML = data.chinese;
        ul.appendChild(li_1);
    },
    //自我评价
    getMyself: function (data){
        var ul =  document.getElementById('myself');
        var li = document.createElement('li');
        li.innerHTML = data;
        ul.appendChild(li);
    },
    //加载详细信息
    getDetail: function (data){
        loadInfo.getInfoDetail(data.info);
        loadInfo.getSkill(data.skill);
        loadInfo.getProject(data.project);
        loadInfo.getlanguage(data.language);
        loadInfo.getMyself(data.myself);
    }
}



window.onload = getInfo;//文档加载完毕，加载信息


function getInfo(){
    if(!request){
        alert("抱歉，无法创建请求对象");
        return false;
    }

    var url = "info.json";
    request.onreadystatechange =loadInfo.getResponse;
    request.open("GET",url,true);//get 方法
    request.send(null);// 不递交数据
}












