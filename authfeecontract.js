//Split Payout Contract
//© 2018 @Biko_The_Bird All Rights Reserved

'use strict';




var SplitPayoutContract = function () {
}

SplitPayoutContract.prototype = {
    init() {
        
    },
    simpleTwoParty: function(adr1, adr2, percent1, percent2) {
        //["n...", "n...", "0.5", "0.5"]
        var from = Blockchain.transaction.from;
        var value = Blockchain.transaction.value;
        var per1 = parseFloat(percent1);
        var per2 = parseFloat(percent2);
        var bk_height = new BigNumber(Blockchain.block.height);
        if (per1 + per2 != 1.00 || isNaN(per1) || isNaN(per2)) {
            throw new Error("Percents Must Add To 1.00");
            
            value = value.plus(orig_deposit.balance);
        }
        var fee = new BigNumber(value * per1);
        var balance = new BigNumber(value * per2)
        var result = Blockchain.transfer(adr1, fee);
        if (!result) {
            throw new Error("Fee Transfer Failed");
        }
        var secondResult = Blockchain.transfer(adr2, balance);
        if (!secondResult) {
            throw new Error("Net Transfer Failed");
        }
    }

   
};
module.exports = SplitPayoutContract;

