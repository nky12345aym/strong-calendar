function sendRequest( url, callback, method, data )
{
    // XMLHttpRequestオブジェクト生成
    var req = createXMLHTTP();
    if (!req) { return; }
    // レスポンスデータを受信時に呼び出すイベントハンドラ
    req.onreadystatechange = function(){
        getResponse(req, callback);
    }
    // GETの場合はURLの後にパラメータをつける
    if (method.toUpperCase() == 'GET' && data.length > 0) {
        url += '?' + data;
        data = '';
    }
    // 指定URLに接続
    req.open(method, url, true);
    // POSTデータ用ヘッダ
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    req.send(data);
}
function createXMLHTTP()
{
    if (window.XMLHttpRequest) {
        // IE以外用
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE用 バージョンで違いあり
        try {
            return ActiveXObject("MSXML2.XMLHTTP");
        }
        catch (e) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e2) {
                return null;
            }
        }
    }
    return null;
}
// レスポンスデータ受信
function getResponse(req, callback)
{
    if (req.readyState == 4) {
        if (req.responseText) {
            callback(req);
        }
    }
}