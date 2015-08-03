/**
 * Created by zx591 on 2015.08.04.
 */
//创建ajax请求对象
function createRequest(){
    var request;
    try{
        request = new XMLHttpRequest();
    }catch(errMsg){
        try{
            request = new ActiveXObject("Msxml2.SMLHTTP");
        }catch(otherMsg){
            try{
                request = new ActiveXObject("Micosoft.SMLHTTP");
            }catch(failed){
                return null;
            }
        }
    }
    return request;
}