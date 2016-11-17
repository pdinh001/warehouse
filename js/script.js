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

//Double Weight
function doubleWeight() {
	var totalWeight = 0;
	var skuList = document.getElementsByClassName('skuName');
	for (var i=0; i < skuList.length; i++) {
		totalWeight += skuWeight[skuList[i].value.toLowerCase()];
	}
	var doubleWeight = totalWeight*2;
	document.getElementById('weightPound').innerHTML = doubleWeight.toFixed(1) + " lb " + '<span class="label label-danger">x2</span>';
	document.getElementById('weightOz').innerHTML = (doubleWeight.toFixed(1) * 16) + " oz " + '<span class="label label-danger">x2</span>';
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