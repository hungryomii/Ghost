function isWinNode(node){
	if (node["is_word"])
		return true;
	if (node["is_win"] != undefined)
		return node["is_win"];
	for(var word in node["next"]){
		if (!isWinNode(node["next"][word])){
			node["is_win"] = true;
			return true;
		}	
	}
	node["is_win"] = false;
	return false;
}

function whichWinNode(node){
	if (node["is_word"])
		return true;
	var ans = {};
	for(var word in node["next"]){
		ans[word] = !isWinNode(node["next"][word]);
	}
	return ans;	
}

function whichWinWord(word){
	var node = getNode(word);
	if (node == undefined)
		return undefined;
	return whichWinNode(node);
}
