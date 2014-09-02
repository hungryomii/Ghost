var root = {};


function insertWord(word){
	insertNode(root, word, 0);
}

function insertNode(node, word, index){
	if (node["next"] == undefined)
		node["next"] = {};
	if (index == word.length)
		node["is_word"] = true;
	else{
		if (node["next"][word[index]] == undefined){
			node["next"][word[index]] = {};
		}	
		insertNode(node["next"][word[index]], word, index + 1);
	}
}

function getNode(word){
	return getNode2(root, word, 0);
}

function getNode2(node, word, index){
	if (index == word.length)
		return node;
	if (node["next"][word[index]] == undefined)
		return undefined;
	return getNode2(node["next"][word[index]], word, index + 1);
}