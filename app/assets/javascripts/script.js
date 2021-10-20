$('document').ready(function() {
    $(".collapse").hide();
    $("#alertDismissButton").click(function() {
        $("#alertDismiss").toggle();
    });
    


    $(".btn-primary").click(function(e) {
        e.preventDefault();
        $("#collapseExample").slideToggle('slow');
    })

    $("#headingOne").click(function(e) {
        e.preventDefault();
        $("#collapseOne").toggle();
        $("#collapseTwo").hide();
        $("#collapseThree").hide();
    })

    $("#headingTwo").click(function(e) {
        e.preventDefault();
        $("#collapseOne").hide();
        $("#collapseTwo").toggle();
        $("#collapseThree").hide();
    })
    
    $("#headingThree").click(function(e) {
        e.preventDefault();
        $("#collapseOne").hide();
        $("#collapseTwo").hide();
        $("#collapseThree").toggle();
    })

    
})