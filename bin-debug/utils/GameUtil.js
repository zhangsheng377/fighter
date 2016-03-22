/**
 * Created by shaorui on 14-6-6.
 */
var fighter;
(function (fighter) {
    var GameUtil = (function () {
        function GameUtil() {
        }
        var d = __define,c=GameUtil,p=c.prototype;
        /**基于矩形的碰撞检测*/
        GameUtil.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        };
        GameUtil.hitTestMyfighter = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x + obj1.width / 6.0;
            rect1.width = rect1.width * 2.0 / 3.0;
            rect1.y = obj1.y + obj1.height / 8.0;
            rect1.height = rect1.height * 3.0 / 4.0;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        };
        return GameUtil;
    }());
    fighter.GameUtil = GameUtil;
    egret.registerClass(GameUtil,'fighter.GameUtil');
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    fighter.createBitmapByName = createBitmapByName;
})(fighter || (fighter = {}));
//# sourceMappingURL=GameUtil.js.map