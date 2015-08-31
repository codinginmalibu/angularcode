(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 3.00,
		description: 'a nice gem',
		canPurchase: true,
		soldOut: true,
	}
})();


/*
function StoreController(){
	alert('Welcome, Shailen');
}
*/
