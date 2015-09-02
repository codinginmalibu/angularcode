(function(){
	var app = angular.module('gemStore', []);

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
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
