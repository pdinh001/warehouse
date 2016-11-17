//Display searched image
function getSkuImage() {
	var skuInput = document.getElementById('skuSearch');
	document.getElementById('skuImage').src = "images/sku/" + skuInput.value + ".jpg";
	skuInput.value = "";
}

//Calculate Total Weight
function calculateWeight() {
	var totalWeight = 0;
	var skuList = document.getElementsByClassName('skuName');
	for (var i=0; i < skuList.length; i++) {
		totalWeight += skuWeight[skuList[i].value.toLowerCase()];
	}
	document.getElementById('weightPound').innerHTML = totalWeight.toFixed(1) + " lb";
	document.getElementById('weightOz').innerHTML = (totalWeight.toFixed(1) * 16) + " oz";
}

//Reset weight search form
function reset() {
	var skuList = document.getElementsByClassName('skuName');
	for (var i=0; i < skuList.length; i++) {
		skuList[i].value = "";
	}
	document.getElementById('weightPound').innerHTML = "";
	document.getElementById('weightOz').innerHTML = "";
}