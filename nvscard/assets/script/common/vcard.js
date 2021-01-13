
/*
    card-cfg
    uid:唯一id
    w:sizew
    h:sizeh
    data:数据
*/

var vcard = function( cfg ) {
    this.uid = cfg.uid;
    this.w = cfg.sizew;
    this.h = cfg.sizeh;
    this.gnum = this.w*this.h;
    this.data = new Array();
    for(let i=0;i<this.gnum;i++) {
        this.data.push(cfg.data[i]);
    }
}

module.exports = vcard;

//
vcard.prototype.getdata = function() {
    
}