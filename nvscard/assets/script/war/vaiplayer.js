
//玩家

/*
    msg.uid : 角色uid
    msg.coin : 金币
    msg.name : 姓名
*/

var vaiplayer = function( msg ) {
    this.uid = msg.uid;
    this.name =  msg.name
}

module.exports = vaiplayer;