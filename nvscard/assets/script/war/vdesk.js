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
                cc.resources.load('fk_hongse', cc.SpriteFrame,function(err,spriteFrame){
                    let j = 0;
                    // //创建一个新的节点，因为cc.Sprite是组件不能直接挂载到节点上，只能添加到为节点的一个组件
                    // var node=new cc.Node('myNode')
                    // //调用新建的node的addComponent函数，会返回一个sprite的对象
                    // const sprite=node.addComponent(cc.Sprite)
                    //给sprite的spriteFrame属性 赋值
                    t_sp.spriteFrame=spriteFrame
                    // //把新的节点追加到self.node节点去。self.node，就是脚本挂载的节点
                    // self.node.addChild(node);
               },function(err) {
                   let i = 0;
               });
                // cc.loader.loadRes("assets/texture/war", cc.SpriteAtlas, function (err, atlas) {
                //     var frame = atlas.getSpriteFrame('sheep_down_0');
                //     t_sp.spriteFrame = frame;
                // });
                
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

