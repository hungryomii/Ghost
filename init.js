$(function(){
	var wordI = 0;
	$("#loading").text("Loading dictionary... 0%");
	setTimeout(nextWord1, 100);

	function nextWord1(){
		var i = 0;
		while (nextWord2()){
			if ((i++) == 1000)
				break;
		}
		
		if (wordI != dict.length){
			$("#loading").text("Loading dictionary... " + parseInt(100 * wordI / dict.length) + "%");
			setTimeout(nextWord1, 5);
		}
			
	}

	function nextWord2(){
		if (dict[wordI].length > 3)
			insertWord(dict[wordI]);		
		wordI++;
		if (wordI == dict.length){
			$("#loading").text("Enter Desired Prefix: ");
			$("#query").attr('type', 'text');
			calc();
			return false;
		}		
		return true;
	}

	$("#query").keyup(calc);

	function calc(){
		var word = cleanOut($("#query").val());
		displayInfo(whichWinWord(word), word);		
	}

	function cleanOut(str){
		return str.replace(/[^A-Za-z]/g,'').toLowerCase();
	}

	function displayInfo(letters, word){
		$("#info").html("");
		
		if (letters == undefined)
			$("#info").html("No such prefix.");
		else if (letters == true)
			$("#info").html('"' + word + '" is already a word.');
		else{
			if (word != "")
				$("#info").html('Prefix: "' + word + '"<br>');	
			$("#info").append("Winning Letters: <br>");
			for(var let in letters){
				if (letters[let])
					$("#info").append(let + ",");
			}

			$("#info").append("<br>Losing Letters: <br>");
			for(var let in letters){
				if (!letters[let])
					$("#info").append(let + ",");
			}			
		}
	}

});

	
