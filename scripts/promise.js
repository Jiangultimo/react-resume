function Ajax(url,data,method){
    this.url = url;
    this.data = data;
    this.method = method;
}

Ajax.prototype.getPromise = function(url,data,method){
    method = typeof(method) === 'undefined' ? 'GET' : method.toUpperCase();
    data = typeof(data) === 'undefined' ? {} : data;
    let reqData = this.formatParam(data).join('&');
    let getJSON = new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status <= 300) {
                    resolve(xhr.response);
                }else{
                    reject(xhr.reponseText);
                }
            }
        };

        switch(method){
            case 'POST':
                xhr.open('POST',url,true);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(reqData);
                break;
            case 'GET':
                xhr.open('GET',url + '?' + reqData,true);
                xhr.send(null);
                break;
            default:break;
        }
    });

    return getJSON;
}

Ajax.prototype.formatParam = function( data ){
    let resultArr = [];
    for(let key in data){
        let param = '';
        if(typeof(data[key]) !== 'undefined'){
            param = encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            resultArr.push(param);
        }
    }
    return resultArr;
}

module.exports = Ajax;
