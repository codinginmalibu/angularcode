(function(){
	var app = angular.module('gemStore', []);

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: "product-price.html",
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 3.00,
			description: 'a nice gem',
			canPurchase: true,
			reviews: [
				{
					stars: 5,
					body: "I love this gem",
					author: "joe@thomas.com",
				},
				{
					stars: 4,
					body: "Good value for the price",
					author: "flat@landers.com",
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 12.00,
			description: 'Five Sided Gem',
			canPurchase: false,
			reviews: [
				{
					stars: 3,
					body: "Good quality",
					author: "mike@smith.com",
				},
				{
					stars: 4,
					body: "Nice Gem",
					author: "bo@duke.com",
				},
			]
		},	
	];
})();


/*
function StoreController(){
	alert('Welcome, Shailen');
}
*/
