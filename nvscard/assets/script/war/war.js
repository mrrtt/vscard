// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

//加载战斗需要的元素和对信息

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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //
        var t_war_bg = this.node.getChildByName('war_bg');
        if(t_war_bg) {
            var t_desk = t_war_bg.getChildByName('ly_desk');
            if(t_desk) {
                var t_script = t_desk.getComponent('vdesk');
                if(t_script) {
                    t_script.setGridNull(0,0);
                }
            }
        }
    },

    start () {
        //搞战场
        
    },

    // update (dt) {},

    onEnable: function () {
        //监听卡牌被选中的时间
        this.node.on('e-card-select',  function ( event ) {
            _genTmpCard( event.getUserData() );
            event.stopPropagation();
        });
        //全局战斗
        window.war = this;
    },
    
    onDisable: function () {
        this.node.off('e-card-select', function ( event ) {
            let j = 0;
        });
        //全局战斗
        window.war = nil;
    },

    drawCard : function() {
        let i = 0;
    }

    //
});


//生成临时卡牌
var _genTmpCard = function( card ) {
    let i = 0;
    //生成一张卡牌，挂在
    var lay_center = this.node.getChildByName('ly_center');
    if(lay_center) {
        //var tmp_node = new cc.node();

    }
}
