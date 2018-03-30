/**
 * Created by cy183 on 2018/3/30.
 */
function jiedian(ff) {
    var xlbb = $(".xlb-box",ff)[0]; //获取图片的大框
    var right = $(".right",ff)[0]; //获取右按钮
    var left = $(".left",ff)[0]; //获取左按钮
    var flag = true;
    function dong() {
        if (!flag) {
            return;
        }
        flag = false;
        var img = getFirst(xlbb); //获取第一张图片
        animate(xlbb, {
            left: -170
        }, 300, function() {
            xlbb.appendChild(img); //将图片放在图片框最后
            xlbb.style.left = 0; //恢复图片框的位置
            flag=true;
        })
    }

    function dong1() {
        if (!flag) {
            return;
        }
        flag = false;
        var img = getFirst(xlbb); //获取第一张图片
        var img1 = getLast(xlbb); //获取最后一张图片
        insertBefore(img1, img); //用最后一张放在第一张前边
        xlbb.style.left = -170 + "px"; //图片框的向左移动
        animate(xlbb, {
            left: 0
        }, 300,function  () {
            flag=true;
        }) //恢复图片框的位置
    }
    right.onclick = function() {
        dong1()
    }
    left.onclick = function() {
        dong()
    }

}