/*
* @Author: philipp
* @Date:   2016-11-02 16:47:02
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-02 17:10:22
*/

'use strict';

import { Template } from 'meteor/templating';
import { Blog } from '../../../api/blog/blog.js';

import './blog-client.html';

Template.editBlogEntry.onRendered(function() {
	// const hooksObject = {
	// 	// Called when any submit operation succeeds
 //  		onSuccess: function(formType, result) {
 //  			const entry = Blog.findOne({_id: this.docId});
 //  			if(entry) {
 //  				const url = 'https://www.franz-bettenbauer.de/blog/'+entry.title.replace(/\s/g, '%20');
 //  				Meteor.call('blog.recache', url);
 //  			}
 //  			Session.set('showBlogList', true);
 //  		},
	// }
	
	AutoForm.addHooks(['insertBlogEntry', 'updateBlogEntry'], hooksObject, true);
});

Template.editBlogEntry.helpers({
	getCollection() {
		return Blog;
	},
	getDoc() {
		const id = Session.get('showEntryId');
		return Blog.findOne({_id: id});
	},
	isInsert() {
		const id = Session.get('showEntryId');
		return !id;
	}
});