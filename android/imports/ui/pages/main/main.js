/*
* @Author: Philipp
* @Date:   2016-10-05 16:32:13
* @Last Modified by:   Philipp
* @Last Modified time: 2016-10-06 16:53:05
*/

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {ShoppingCart} from '/imports/db/db.js';

// Templates
import '/imports/ui/components/header/header.js';

import './main.html';

Template.main.onCreated(function created() {});

Template.main.helpers({
	getShoppingCart() {
		return ShoppingCart.find().fetch();	
	}
});

Template.main.events({
	'click [data-action="add"]'() {
		const length = ShoppingCart.find({}).fetch().length
		,	desc = 'Discover Meteor Book ' + length;
		ShoppingCart.insert({ item: 'DMB-01', desc: desc, index: length });
	},
	'click [data-action="remove"]'() {
		const last = ShoppingCart.find({}, {sort: {index: -1}, limit: 1}).fetch()[0];
		ShoppingCart.remove({_id: last._id});
	}
});