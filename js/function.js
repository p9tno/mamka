$(document).ready(function() {

    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },700);

            },700);
        });
    }
    preloader();

    function showModal() {
        $('.privacy_policy_js').on('click', function (e) {
            e.preventDefault();
            $('#privacy_policy').modal('show');
        });
        $('.pop_up_js').on('click', function (e) {
            e.preventDefault();
            $('#pop_up').modal('show');
        });
        $('.pop_up_2_js').on('click', function (e) {
            e.preventDefault();
            $('#pop_up_2').modal('show');
        });
        $('.pop_up_3_js').on('click', function (e) {
            e.preventDefault();
            $('#pop_up_3').modal('show');
        });
    }
    showModal();


    $('.modal').on('show.bs.modal', () => {
        let openedModal = $('.modal');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });



    function uploadYoutubeVideoForModal() {
        if ( $( ".js-youtubeModal" ) ) {

            $( '.js-youtubeModal' ).on( 'click', function () {
                $('#modalVideo').modal('show');
                // console.log('click');

                let wrapp = $( this ).closest( '.js-youtubeModal' );
                let videoId = wrapp.attr( 'id' );
                let iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

                // доп параметры для видоса
                // if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

                // Высота и ширина iframe должны быть такими же, как и у родительского блока
                let iframe = $( '<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'allow': "autoplay"
                } )
                $(".modalVideo__wraper").append(iframe);

                $("#modalVideo").on('hide.bs.modal', function () {
                    $(".modalVideo__wraper").html('');
                });

            } );
        }
    };
    uploadYoutubeVideoForModal();


    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        // anchorPlacement: 'bottom-bottom',
        duration: 1000, // values from 0 to 3000, with step 50ms
        // offset: 20,
        once: true,
    });

    AOS.init({
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    });



    $(function(){
        $(".tel").mask("+7 999 999 99 99");
    });

    function addDataFancybox() {
       let item = $('.itemForDataFancybox_js');
       let num = 0;

       item.each(function(index, el) {
           $(this).find('a').attr('data-fancybox', num);
           num++;
       });
   }
   addDataFancybox();

});
