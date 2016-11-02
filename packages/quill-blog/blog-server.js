/*
* @Author: philipp
* @Date:   2016-11-02 16:47:08
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-02 17:41:08
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Blog = new Mongo.Collection('blog');

if(Meteor.isServer) {
	import './server/publications.js';

    Meteor.methods({
    	'blog.create'(data) {
    		Blog.insert(data);
    	},
    	'blog.update'(update, id) {
    		Blog.update(id, update);
    	},
    	'blog.delete'(id) {
    		Blog.remove(id);
    	}
    });
}

Blog.attachSchema(new SimpleSchema({
	title: {
        type: String,
        label: "Title",
        max: 200
    },
    creationDate: {
        type: Date,
        label: "Created"
    },
    published: {
        type: Boolean,
        label: "Published",
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    author: {
        type: String,
        label: "Author"
    },  
    titlePhoto: {
        type: String,
        optional: true,
        label: "Title photo",
        autoform: {
            afFieldInput: {
                type: 'cloudinary'
            }
        }
    }, 
    preview: {
        type: String,
        label: 'Preview',
        autoform: {
            rows: 3
        }
    },
    content: {
        type: String,
        label: "Content",
        autoform: {
            afFieldInput: {
                type: 'quill'
            }
        }
    }
}));