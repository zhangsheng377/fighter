/**
 * Created by shaorui on 14-6-6.
 */
module fighter
{
    export class GameUtil
    {
        /**基于矩形的碰撞检测*/
        public static hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
        {
            var rect1:egret.Rectangle = obj1.getBounds();
            var rect2:egret.Rectangle = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        }
        public static hitTestMyfighter(obj1: egret.DisplayObject,obj2: egret.DisplayObject): boolean {
            var rect1: egret.Rectangle = obj1.getBounds();
            var rect2: egret.Rectangle = obj2.getBounds();
            rect1.x = obj1.x + obj1.width / 6.0;
            rect1.width = rect1.width * 2.0 / 3.0;
            rect1.y = obj1.y + obj1.height / 8.0;
            rect1.height = rect1.height * 3.0 / 4.0;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        }
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    export function createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}