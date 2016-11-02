/*
* @Author: Philipp
* @Date:   2016-10-06 16:01:56
* @Last Modified by:   Philipp
* @Last Modified time: 2016-10-06 16:45:28
*/

import {Meteor} from 'meteor/meteor';

// create a local collection, 
export const ShoppingCart = new Meteor.Collection('shopping-cart', {connection: null});

// create a local persistence observer
var shoppingCartObserver = new PersistentMinimongo(ShoppingCart);

// that's it. just use the collection normally and the observer
// will keep it sync'd to browser storage. the data will be stored
// back into the collection when returning to the app (depending,
// of course, on availability of localStorage in the browser).