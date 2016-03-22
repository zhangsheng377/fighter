var blood;
(function (blood) {
    /**
     * blood，利用对象池
     */
    var Blood = (function (_super) {
        __extends(Blood, _super);
        function Blood(texture, textureName) {
            _super.call(this);
            this.bmp = new egret.Bitmap(texture);
            this.textureName = textureName;
            this.addChild(this.bmp);
        }
        var d = __define,c=Blood,p=c.prototype;
        /**
        /**生产*/
        Blood.produce = function (textureName) {
            if (blood.Blood.cacheDict[textureName] == null)
                blood.Blood.cacheDict[textureName] = [];
            var dict = blood.Blood.cacheDict[textureName];
            var theBlood;
            if (dict.length > 0) {
                theBlood = dict.pop();
            }
            else {
                theBlood = new blood.Blood(RES.getRes(textureName), textureName);
            }
            return theBlood;
        };
        /**回收*/
        Blood.reclaim = function (theBlood) {
            var textureName = theBlood.textureName;
            if (blood.Blood.cacheDict[textureName] == null)
                blood.Blood.cacheDict[textureName] = [];
            var dict = blood.Blood.cacheDict[textureName];
            if (dict.indexOf(theBlood) == -1)
                dict.push(theBlood);
        };
        Blood.cacheDict = {};
        return Blood;
    }(egret.DisplayObjectContainer));
    blood.Blood = Blood;
    egret.registerClass(Blood,'blood.Blood');
})(blood || (blood = {}));
//# sourceMappingURL=blood.js.map