    var lastScrollTop = 0;
                                            navbarNav = document.getElementById("navbarNav");
                                            window.addEventListener("scroll", function () {
                                                var scrollTop = window.pageYOffset || document
                                                    .documentElement.scrollTop;
                                                if (scrollTop > lastScrollTop) {
                                                    navbarNav.style.opacity= "0.0";
                                                } else {
                                                    navbarNav.style.opacity = "1";
                                                }
                                                lastScrollTop = scrollTop;
                                            })