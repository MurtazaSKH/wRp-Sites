! function(e) {
    "use strict";
    if (e.fn.validate) {
        var a = e("#contact-form"),
            t = a.find(".btn");
        a.validate({
            rules: {
                name: "required",
                contactwebsite: {
                    required: !0,
                    url: !0
                },
                contactsubject: "required",
                email: {
                    required: !0,
                    email: !0
                },
                message: {
                    required: !0,
                    minlength: 50
                }
            },
            messages: {
                name: "This field is required. Please enter your name.",
                contactwebsite: {
                    required: "This field is required. Please enter your website.",
                    email: "Please enter a valid url."
                },
                contactsubject: "This field is required. Please enter a subject.",
                email: {
                    required: "This field is required. Please enter your email address.",
                    email: "Please enter a valid email address."
                },
                message: {
                    required: "This field is required. Please enter your comment.",
                    minlength: "Your message must be at least 50 characters long."
                }
            },
            submitHandler: function(a) {
                return e(document).ajaxStart(function() {
                    t.button("loading")
                }).ajaxStop(function() {
                    t.button("reset")
                }), e.ajax({
                    type: "post",
                    url: "sendmail.php",
                    data: e(a).serialize()
                }).done(function(e) {
                    "success" == e ? alert("Thank you! we'll stay in touch.") : "already" == e ? alert("You already sent a message. Please try again later") : alert("There is an error please try again later!")
                }).error(function() {
                    alert("Unable to proceed at this time, please try again later.")
                }), !1
            }
        })
    }
}(jQuery);