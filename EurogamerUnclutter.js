// ==UserScript==
// @name         EurogamerUnclutter
// @namespace    https://github.com/BunjiquoBianco
// @version      1.0
// @description  Hides all comments, social junk and ads from Eurogamer articles.
// @match        http://www.eurogamer.net/*
// @copyright    None. Feel free to use as you wish.
// ==/UserScript==

//'j' is the eurogamer reference to jQuery as they have '$' do something else

//Hide anything to do with comments
j('#new-comments').hide();
j('#reply-box').hide();
j('.comment-count').hide();

//Hide pestering about signing up
j('#account').hide();

//Hide anything to do with social media
j('.facebook').hide();
j('.twitter').hide();
j('.social').hide();

//Hide adverts and "from around the web" trash
j('.related').hide();
j('.affiliate').hide();