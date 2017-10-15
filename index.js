let eur;
let usd;

const convertor = function(bam) {
	eur = bam/1.95;
	usd = bam*0.61;

	return (
		eur, usd
		)
}

convertor(10);
console.log("Iznos u EUR: "+eur);
console.log("Iznos u USD: "+usd);