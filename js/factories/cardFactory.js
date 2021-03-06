angular.module('app').factory('cardFactory', function () {
	var service = {};

	var cards = [
		{
			id: 1,
			description: 'Fix bug',
			list_id: 1
		},
		{
			id: 2,
			description: 'Add debugger',
			list_id: 2
		},
		{
			id: 3,
			description: 'Test script',
			list_id: 3
		}
	];

	service.getCards = function (list) {
		return _.filter(cards, { list_id: list.id});
	};

	service.createCard = function (list, cardDescription) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id
		});
	};

	service.deleteCard = function (card) {
		return _.pull(cards, card);
	};

	service.updateCard = function (updatingCart) {
		var card = _.findWhere(cards, {id: updatingCart.id});
		card.description = updatingCart.description;
		card.list_id = updatingCart.list_id;
		console.log(updatingCart.list_id);
	};

	return service;
});