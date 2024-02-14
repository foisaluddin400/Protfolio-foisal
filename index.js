$("document").ready(function(){


    $(".nav-menu-1").hide();

    $(".show").click(function(){
        $(".nav-menu-1").slideDown();
        $(".show").hide();
        $(".hide").show();

    });

    $(".hide").click(function(){
        $(".nav-menu-1").slideUp();
        $(".show").show();
        $(".hide").hide();

    });
    $(".home").css("background-color", "#FF6542");


    $(".about").click(function(){
        $(".about").css("background-color", "#FF6542");
        $(".home").css("background-color", "#29233000");
        $(".services").css("background-color", "#29233000");
        $(".project").css("background-color", "#29233000");
        $(".blogs").css("background-color", "#29233000");
    });
    $(".home").click(function(){
        $(".home").css("background-color", "#FF6542");
        $(".about").css("background-color", "#29233000");
        $(".services").css("background-color", "#29233000");
        $(".project").css("background-color", "#29233000");
        $(".blogs").css("background-color", "#29233000");

    });
    $(".about").click(function(){
        $(".home").css("background-color", "#29233000");
        $(".about").css("background-color", "#FF6542");
        $(".services").css("background-color", "#29233000");
        $(".project").css("background-color", "#29233000");
        $(".blogs").css("background-color", "#29233000");

    });
    $(".services").click(function(){
        $(".home").css("background-color", "#29233000");
        $(".about").css("background-color", "#29233000");
        $(".services").css("background-color", "#FF6542");
        $(".project").css("background-color", "#29233000");
        $(".blogs").css("background-color", "#29233000");

    });
    $(".project").click(function(){
        $(".home").css("background-color", "#29233000");
        $(".about").css("background-color", "#29233000");
        $(".services").css("background-color", "#29233000");
        $(".project").css("background-color", "#FF6542");
        $(".blogs").css("background-color", "#29233000");

    });
    $(".blogs").click(function(){
        $(".home").css("background-color", "#29233000");
        $(".about").css("background-color", "#29233000");
        
        $(".services").css("background-color", "#29233000");
        $(".project").css("background-color", "#29233000");
        $(".blogs").css("background-color", "#FF6542");

    });
    



    $(".qq").click(function(){
        $(".nav-menu-1").slideUp();
        $(".hide").hide();
        $(".show").show();

    });




});










