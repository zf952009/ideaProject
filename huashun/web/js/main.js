/*������*/
/*
�������ͣ�
title	����
url		�����url
id		��Ҫ����������id
w		�������ȣ�ȱʡ��Ĭ��ֵ��
h		������߶ȣ�ȱʡ��Ĭ��ֵ��
*/
function layer_show(title, url, w, h) {
    if (title == null || title == '') {
        title = false;
    };
    if (url == null || url == '') {
        url = "404.html";
    };
    if (w == null || w == '') {
        w = 800;
    };
    if (h == null || h == '') {
        h = ($(window).height() - 50);
    };
    layer.open({
        type: 2,
        area: [w + 'px', h + 'px'],
        fix: false, //���̶�
        maxmin: true,
        shade: 0.4,
        title: title,
        content: url
    });
}
/*�رյ������*/
function layer_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}