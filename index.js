
$(document).ready(()=>{
    console.log("Script Running");
    const Content = $('.Content');
    const KnowmoreButton = $('#know-more-btn');
    const Home = $('.Home');
    const Company = $('.Company');

    function scrollBottom() {
        content.scrollTop = 1700
    }

    KnowmoreButton.click(()=>{
        Home.css("animation","disappear 500ms");
        Content.scrollTop(0);
        setTimeout(()=>{
            Home.css("display","none");
            Company.css("display","flex");
            Company.css("animation","appear 1s");
            
        },500)
    })

    $('.Slide-container').slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        fade:true,
        pauseOnHover:false,
        speed:800
    });

    // $('.Company__WhyUs').slick()


    
    // $('.Company__Certifications').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1
    // });


})

