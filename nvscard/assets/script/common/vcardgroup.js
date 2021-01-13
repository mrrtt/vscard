
var vcard = require('./vcard')

//更具消息生成卡组
var vcardgroup = function( msg ) {
    this.uid = 10000;
    this.data = new Array();
    for(let i=0;i<msg.cardnum;i++) {
        
    }
}

module.exports = vcardgroup;

//更具配置生成卡组
vcardgroup.prototype.addcard = function( cfg ) {

}

//删除卡牌
vcardgroup.prototype.defcard = function( uid ) {

}

//获取卡牌
vcardgroup.prototype.getcard = function( uid ) {

}

//验证卡牌
vcardgroup.prototype.chekcard = function( uid ) {

}


