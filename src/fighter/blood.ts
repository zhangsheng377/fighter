module blood {
    /**
     * blood，利用对象池
     */
    export class Blood extends egret.DisplayObjectContainer {
        private static cacheDict: Object = {};
		/**
        /**生产*/
        public static produce(textureName: string): blood.Blood {
            if(blood.Blood.cacheDict[textureName] == null)
                blood.Blood.cacheDict[textureName] = [];
            var dict: blood.Blood[] = blood.Blood.cacheDict[textureName];
            var theBlood: blood.Blood;
            if(dict.length > 0) {
                theBlood = dict.pop();
            } else {
                theBlood = new blood.Blood(RES.getRes(textureName),textureName);
            }
            return theBlood;
        }
        /**回收*/
        public static reclaim(theBlood: blood.Blood): void {
            var textureName: string = theBlood.textureName;
            if(blood.Blood.cacheDict[textureName] == null)
                blood.Blood.cacheDict[textureName] = [];
            var dict: blood.Blood[] = blood.Blood.cacheDict[textureName];
            if(dict.indexOf(theBlood) == -1)
                dict.push(theBlood);
        }

        /*位图*/
        private bmp: egret.Bitmap;
        //可视为类型名
        public textureName: string;
        public constructor(texture: egret.Texture,textureName: string) {
            super();
            this.bmp = new egret.Bitmap(texture);
            this.textureName = textureName;
            this.addChild(this.bmp);
        }
    }
}