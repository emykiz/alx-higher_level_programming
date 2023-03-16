#!/urs/bin/node
// a function that returns number of occurence in a list
exports.nbOccurences = function (list, searchElement) {
	searchElement() {
		let nOccurence = 0;
		for (let i = 0; i < list.length; i++) {
			if (searchElement === list[i]) {
				nOccurence++;
			}
		}
		return nOccurence;
	};

