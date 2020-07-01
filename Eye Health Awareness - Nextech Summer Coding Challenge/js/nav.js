document.write(
    '<script src="js/tracker.js"></script>\
    <script src="js/scrollbar_visibility.js"></script>\
    <div class ="progress-container">\
      <div class ="progress-bar" id = "myBar"></div>\
    </div>\
    <a href="#" id = "upbtn" class="upbtn" onClick = "myFunction()" style = "visibility: hidden"> <i class="fas fa-arrow-up" color="#FFC802"></i></a>\
    <div id = "downbtn" onClick = "myFunction()"><a href = "#gohere"><div class = "scroll-down"></div></a></div>\
    <div id="navbar" class="site-wrap">\
        <div class="site-navbar mt-4 ">\
            <div class="container py-1">\
                <div class="row align-items-center">\
                    <div class="col-8 col-md-8 col-lg-4">\
                        <h1 class="mb-0">\
                            <a href="index.html" class="text-white h2 mb-0">\
							<img class="col-3 d-none d-sm-inline" src="img/screen time logo.png">\
								<strong>Eye Health</strong>\
							</a>\
						</h1>\
                    </div>\
                    <div class="col-4 col-md-4 col-lg-8">\
                        <nav class="site-navigation text-right text-md-right" role="navigation">\
                            <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>\
                            <ul class="site-menu js-clone-nav d-none d-lg-block">\
                                <li onclick="setActive(target)" class="">\
                                    <a href="index.html">Home</a>\
                                </li>\
                                <li><a href="tracker.html">Screen Time</a></li>\
                                <li><a href="faq.html">FAQ</a></li>\
                            </ul>\
                            </li>\
                            </ul>\
                        </nav>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
	    <div class="site-mobile-menu">\
        <div class="site-mobile-menu-header">\
            <div class="site-mobile-menu-close mt-3">\
                <span class="icon-close2 js-menu-toggle"></span>\
            </div>\
        </div>\
        <div class="site-mobile-menu-body"></div>\
    </div>\
    <!-- .site-mobile-menu -->'
);