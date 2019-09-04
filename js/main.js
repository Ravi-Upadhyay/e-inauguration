$(document).ready(function () {
    let mainContainer = document.getElementById('main-container');
    let pages = [
        document.getElementById('page-brands'),
        document.getElementById('page-video-fireworks'),
        document.getElementById('page-inaugration-complete')
    ]

    let videoTag = document.getElementById('myVideo');
    $('#myVideo').hide();
    $('#finalImg').hide();
    videoTag.addEventListener('ended', myHandler, false);
    function myHandler(e) {
        console.log('video completed');
        $('#finalImg').show();
        $('#finalImg').animate({ height: "100%" });
    }

    if ($("#main-container").css("zoom") === undefined) {
        $("#main-container").addClass("noZoom");
    }

    $(".drag").draggable({
        opacity: 0.75,
        stack: ".drag",
        axis: "x",
        containment: "parent",
        stop: function (e, ui) {
            selectBox($(this));
        }
    })

        .resizable({
            aspectRatio: true,
            handles: "all",
            autoHide: true
        });

    $(".drag").click(function () {
        selectBox($(this));
    });

    $("#main-container").click(function () {
        $(".drag").removeClass("selectedBorder");
    }).children().click(function () {
        return false;
    });


    function selectBox(element) {
        let circ1Position = $('#circle1').position();
        let circ2Position = $('#circle2').position();

        if (circ2Position.left - circ1Position.left < 150) {
            // $('#myVideo').show();
            // $('#circle1').hide();
            // $('#circle2').hide();
            // $('#myVideo').trigger('play');
            setTimeout(proceedWithVideo, 2000);
        }
    }

    let proceedWithVideo = function() {
        alert('Done');
        pages[0].children().hide();
    };
});
