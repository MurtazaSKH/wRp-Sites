! function(e) {
    "use strict";
    var t = {
        initialised: !1,
        mobile: !1,
        container: e("#portfolio-item-container"),
        init: function() {
            if (!this.initialised) {
                this.initialised = !0, this.checkMobile(), this.addTouchClass(), this.menuHover(), this.stickyMenu(), this.mobileMenuDisplay(), this.mobileMenuCollapse(), this.scrollToTop(),this.scrollToTop2(), this.twitterFeed(), this.flickerFeed(), this.progressBars(), this.countTo(), this.scrollAnimations(), e.fn.owlCarousel && this.owlCarousels(), e.fn.magnificPopup && this.lightBox(), e.fn.mediaelementplayer && this.mediaElement();
                var t = this;
                "function" == typeof imagesLoaded && imagesLoaded(t.container, function() {
                    t.isotopeActivate(), t.isotopeFilter()
                })
            }
        },
        checkMobile: function() {
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? this.mobile = !0 : this.mobile = !1
        },
        addTouchClass: function() {
            this.mobile ? e("body").addClass("touch") : e("body").removeClass("touch")
        },
        menuHover: function() {
            e.fn.hoverIntent && e("ul.menu").hoverIntent({
                over: function() {
                    e(this).addClass("open")
                },
                out: function() {
                    e(this).removeClass("open")
                },
                selector: "li",
                timeout: 125,
                interval: 50
            })
        },
        stickyMenu: function() {
            e(".sticky-menu").length && e(window).width() >= 992 && new Waypoint.Sticky({
                element: e(".sticky-menu")[0],
                stuckClass: "fixed",
                offset: -300
            })
        },
        mobileMenuDisplay: function() {
            e(".navbar-toggle, #mobile-menu-overlay, #mobile-menu-close").on("click", function(t) {
                e("body").toggleClass("open-menu"), t.preventDefault()
            })
        },
        mobileMenuCollapse: function() {
            e(".mobile-menu").find("a").on("click", function(t) {
                e(this).closest("li").find("ul").length && (e(this).closest("li").children("ul").slideToggle(300, function() {
                    e(this).closest("li").toggleClass("open")
                }), t.preventDefault())
            })
        },
        owlCarousels: function() {
            e(".clients-carousel.owl-carousel").owlCarousel({
                loop: !1,
                margin: 30,
                responsiveClass: !0,
                nav: !0,
                navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 15e3,
                responsive: {
                    0: {
                        items: 1
                    },
                    420: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                }
            }), e(".clients-link-carousel.owl-carousel").owlCarousel({
                loop: !1,
                margin: 30,
                responsiveClass: !0,
                nav: !1,
                navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 14e3,
                responsive: {
                    0: {
                        items: 1
                    },
                    420: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                }
            }), e(".portfolio-related-carousel.owl-carousel").owlCarousel({
                loop: !1,
                margin: 0,
                responsiveClass: !0,
                nav: !1,
                navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 14e3,
                responsive: {
                    0: {
                        items: 1
                    },
                    420: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                }
            })
        },
        tooltip: function() {
            e.fn.tooltip && e('[data-toggle="tooltip"]').tooltip()
        },
        popover: function() {
            e.fn.popover && e('[data-toggle="popover"]').popover({
                trigger: "focus"
            })
        },
        scrollBtnAppear: function() {
            e(window).scrollTop() >= 10 ? e("#scroll-top").addClass("fixed") : e("#scroll-top").removeClass("fixed")
        },
        scrollToTop: function() {
            e("#scroll-top").on("click", function(t) {
                e("html, body").animate({
                    scrollTop: 0
                }, 1200), t.preventDefault()
            })
        },
        scrollBtnAppear2: function() {
            e(window).scrollTop() >= 100  ? e("#scroll-top2").addClass("fixed") : e("#scroll-top2").removeClass("fixed")
        },
        scrollToTop2: function() {
            e("#scroll-top2").on("click", function(t) {
                e("html, body").animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top
                }, 1200), t.preventDefault();
    //              event.preventDefault();
    //             e('html, body').animate({
    //     scrollTop: $( $.attr(this, 'href') ).offset().top
    // }, 500);
            })
        },
        lightBox: function() {
            e(".popup-gallery").magnificPopup({
                delegate: ".zoom-item",
                type: "image",
                closeOnContentClick: !1,
                closeBtnInside: !1,
                mainClass: "mfp-fade",
                image: {
                    verticalFit: !0,
                    titleSrc: function(e) {
                        return e.el.attr("title")
                    }
                },
                gallery: {
                    enabled: !0
                }
            })
        },
        progressBars: function() {
            e(".progress-animate").waypoint(function(t) {
                var i = e(this.element),
                    o = i.data("width");
                i.css({
                    width: o + "%"
                }, 400), setTimeout(function() {
                    i.removeClass("progress-animate"), i.find(".progress-text").fadeIn(400)
                }, 400)
            }, {
                offset: "80%",
                triggerOnce: !0
            })
        },
        countTo: function() {
            e.fn.countTo ? e.fn.waypoint ? e(".count").waypoint(function() {
                e(this.element).countTo()
            }, {
                offset: "80%",
                triggerOnce: !0
            }) : e(".count").countTo() : e(".count").each(function() {
                var t = e(this),
                    i = t.data("to");
                t.text(i)
            })
        },
        scrollAnimations: function() {
            "function" == typeof WOW && new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0
            }).init()
        },
        twitterFeed: function() {
            e.fn.tweet && e(".twitter-feed-widget").length && e(".twitter-feed-widget").tweet({
                modpath: "./assets/js/twitter/",
                avatar_size: "",
                count: 2,
                username: "envato",
                loading_text: "searching twitter...",
                join_text: "",
                retweets: !0,
                template: '<div class="twitter-icon"><i class="fa fa-twitter"></i></div><div class="tweet-content">{text}{time}</div>'
            })
        },
        flickerFeed: function() {
            e.fn.jflickrfeed && (e(".flickr-widget").jflickrfeed({
                limit: 9,
                qstrings: {
                    id: "54297118@N03"
                },
                itemTemplate: '<li><a href="{{image}}" target="_blank" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
            }), e(".sidebar-flickr-widget").jflickrfeed({
                limit: 6,
                qstrings: {
                    id: "54297118@N03"
                },
                itemTemplate: '<li><a href="{{image}}" target="_blank" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
            }))
        },
        isotopeActivate: function() {
            if (e.fn.isotope) {
                var t = this.container,
                    i = t.data("layoutmode");
                t.isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: i ? i : "masonry"
                })
            }
        },
        isotopeReinit: function() {
            e.fn.isotope && (this.container.isotope("destroy"), this.isotopeActivate())
        },
        isotopeFilter: function() {
            var t = this,
                i = e("#portfolio-filter");
            i.find("a").on("click", function(o) {
                var n = e(this),
                    s = n.attr("data-filter");
                i.find(".active").removeClass("active"), t.container.isotope({
                    filter: s,
                    transitionDuration: "0.8s"
                }), n.closest("li").addClass("active"), o.preventDefault()
            })
        }
    };
    if (e(document).ready(function() {
            t.init()
        }), e(window).on("load", function() {
            t.scrollBtnAppear();
            t.scrollBtnAppear2()
        }), e(window).on("scroll", function() {
            t.scrollBtnAppear();
            t.scrollBtnAppear2()
        }), document.getElementById("map") && "object" == typeof google) {
        var i, o, n = [
                ["<address><strong>Address:</strong> Marylebone, London C1U, UK <br> <strong>Phone:</strong> +01 026 4702411 </address>", 51.521107, -.157002]
            ],
            s = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: new google.maps.LatLng(51.521107, -.157002),
                scrollwheel: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }),
            a = new google.maps.InfoWindow;
        for (o = 0; o < n.length; o++) i = new google.maps.Marker({
            position: new google.maps.LatLng(n[o][1], n[o][2]),
            map: s,
            animation: google.maps.Animation.DROP,
            icon: "assets/images/pin.png"
        }), google.maps.event.addListener(i, "click", function(e, t) {
            return function() {
                a.setContent(n[t][0]), a.open(s, e)
            }
        }(i, o))
    }
}(jQuery);