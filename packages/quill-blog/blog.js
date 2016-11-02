/*
* @Author: philipp
* @Date:   2016-11-02 16:54:28
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-02 17:10:37
*/

'use strict';

import { Template } from 'meteor/templating';
import { Blog } from 'blog-server.js';

import './blog.html';

Template.blog.helpers({
	blogs() {
		return Blog.find({});
	}
});
