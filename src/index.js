import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

// import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import jQuery from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/now-ui-kit.min.css';
// import './assets/plugins/jasny-bootstrap.min.js';


import App from './components/App'


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
	});
	  
	

})(jQuery);