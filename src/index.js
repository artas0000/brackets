module.exports = function check(str, bracketsConfig) {
    function toSearch() {
        for (let k = 0; k < newArray.length;) {
            if (str.indexOf(newArray[k]) === -1) {
                k++;
            } else if (str.indexOf(newArray[k]) !== -1) {
				let itemNumber = str.indexOf(newArray[k]);
				str = str.slice(0, itemNumber) + str.slice(itemNumber + 2);
                k = 0;
            }
        }
    }

    let newArray = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        let full = bracketsConfig[i][0] + bracketsConfig[i][1];
        newArray.push(full);
    }

	
    toSearch();
    if (str.length > 0) {
        return false;
    } else {
        return true;
    }
}
