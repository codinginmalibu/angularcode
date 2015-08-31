(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 3.00,
			description: 'a nice gem',
			canPurchase: true,
		},
		{
			name: 'Pentagonal Gem',
			price: 12.00,
			description: 'Five Sided Gem',
			canPurchase: false,
		},
	];
})();


/*
function StoreController(){
	alert('Welcome, Shailen');
}
*/
