/**
 * Created by cy183 on 2018/3/30.
 */
function jiedian(ff) {
    var xlbb = $(".xlb-box",ff)[0]; //��ȡͼƬ�Ĵ��
    var right = $(".right",ff)[0]; //��ȡ�Ұ�ť
    var left = $(".left",ff)[0]; //��ȡ��ť
    var flag = true;
    function dong() {
        if (!flag) {
            return;
        }
        flag = false;
        var img = getFirst(xlbb); //��ȡ��һ��ͼƬ
        animate(xlbb, {
            left: -170
        }, 300, function() {
            xlbb.appendChild(img); //��ͼƬ����ͼƬ�����
            xlbb.style.left = 0; //�ָ�ͼƬ���λ��
            flag=true;
        })
    }

    function dong1() {
        if (!flag) {
            return;
        }
        flag = false;
        var img = getFirst(xlbb); //��ȡ��һ��ͼƬ
        var img1 = getLast(xlbb); //��ȡ���һ��ͼƬ
        insertBefore(img1, img); //�����һ�ŷ��ڵ�һ��ǰ��
        xlbb.style.left = -170 + "px"; //ͼƬ��������ƶ�
        animate(xlbb, {
            left: 0
        }, 300,function  () {
            flag=true;
        }) //�ָ�ͼƬ���λ��
    }
    right.onclick = function() {
        dong1()
    }
    left.onclick = function() {
        dong()
    }

}