//http://komitsudo.blog70.fc2.com/blog-entry-70.html �Q�l


function sendRequest( url, callback, method, data )
{
    // XMLHttpRequest�I�u�W�F�N�g����
    var req = createXMLHTTP();
    if (!req) { return; }
    // ���X�|���X�f�[�^����M���ɌĂяo���C�x���g�n���h��
    req.onreadystatechange = function(){
        getResponse(req, callback);
    }
    // GET�̏ꍇ��URL�̌�Ƀp�����[�^������
    if (method.toUpperCase() == 'GET' && data.length > 0) {
        url += '?' + data;
        data = '';
    }
    // �w��URL�ɐڑ�
    req.open(method, url, true);
    // POST�f�[�^�p�w�b�_
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    req.send(data);
}
function createXMLHTTP()
{
    if (window.XMLHttpRequest) {
        // IE�ȊO�p
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE�p �o�[�W�����ňႢ����
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
// ���X�|���X�f�[�^��M
function getResponse(req, callback)
{
    if (req.readyState == 4) {
        if (req.responseText) {
            callback(req);
        }
    }
}