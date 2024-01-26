const reverseString = function(str) {
    if (str.length<2){
        return str;
    }else{
        let final='';
        for (let i=str.length-1;i>=0;i--){
            final=final.concat(str[i]);
        }
        return final;
    }
};

// Do not edit below this line
module.exports = reverseString;
