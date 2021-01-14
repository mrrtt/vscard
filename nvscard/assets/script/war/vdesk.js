// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

        //格子空
    setGridNull : function( x ,y ) {
        var t_aim = this.node.getChildByName('fk00');
        if(t_aim) {
            var t_sp = t_aim.getComponent(cc.Sprite);
            if(t_sp) {

                cc.loader.loadRes("assets/texture/war", cc.SpriteAtlas, function (err, atlas) {
                    var frame = atlas.getSpriteFrame('sheep_down_0');
                    t_sp.spriteFrame = frame;
                });
                //cc.loader.
                //t_sp.spriteFrame = new cc.SpriteFrame(texture);
                //t_sp.setSpriteFrame('');
            }
        }
    },

    //格子命中
    setGridHit : function( x ,y ) {

    },

    //格子被占有
    setGridFill : function( x ,y ) {

    },

    //格子消除
     setGridDisappear : function( x ,y ) {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});

