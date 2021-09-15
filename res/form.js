$(function() {
    $('#contactForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting

        /* Validate */
        $(".input-name").attr('style', 'display: none;');
        $(".input-email").attr('style', 'display: none;');
        $(".input-cbox").attr('style', 'display: none;');

        var check = true;
        var name = document.forms["contactForm"]["name"].value;
        var cbox = document.forms["contactForm"]["cbox"].checked;

        if( cbox == false){
            $(".input-cbox").attr('style', 'display: inline;');
            check=false;
        }

        if( name.trim() == ''){
            $(".input-name").attr('style', 'display: inline;');
            check=false;
        }

        let email = document.forms["contactForm"]["email"].value;
        if(email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            $(".input-email").attr('style', 'display: inline;');
            check=false;
        }

        if(!check) return false;

        /* Validate */

        if ($('#message:visible').length == 0) { var type = 'Newsletter'; }
        else { var type = 'Contact'; }

        var post_data =  $("#contactForm").serialize() + '&type=' + type

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwmxKOxPAHC1j4JPyPHBjAeN831YceA26sIzpThNLt3aOPeKj_EHz9Hh_EKqSjaQya38g/exec",
            method: "POST",
            dataType: "json",     
            data: post_data,
            success: function(response) {

                if(response.result == "success") {
                    $('#contactForm')[0].reset();
                    $(".mode-send").attr('style', 'display: none !important;');
                    $(".mode-sent").attr('style', 'display: inline !important;');
                } else { alert("Something went wrong. Please try again.") }
            },
            error: function() { alert("Something went wrong. Please try again.")  }
        })


    });
});
