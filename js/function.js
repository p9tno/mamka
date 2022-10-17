$(document).ready(function() {

    // function showSentence() {
    //     $('.sentence_modal_js').on('click', function (e) {
    //         e.preventDefault();
    //         $('#sentence').modal('show');
    //     });
    // }
    // showSentence();




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



   // start animate numbers
function onVisible( selector, callback, repeat = false ) {

    let options = {
        threshold: [ 0.5 ]
    };
    let observer = new IntersectionObserver( onEntry, options );
    let elements = document.querySelectorAll( selector );

    for ( let elm of elements ) {
        observer.observe( elm );
    }

    function onEntry( entry ) {
        entry.forEach( change => {
            let elem = change.target;
            // console.log(change);
            // console.log(elem.innerHTML);
            if ( change.isIntersecting ) {
                if ( !elem.classList.contains( 'show' ) || repeat ) {
                    elem.classList.add( 'show' );
                    callback( elem );
                }
            }
        } );
    }
}

onVisible( '.animate_numbers_js', function ( e ) {
    animateNumber( e, e.innerHTML );
} );

function animateNumber( elem, final, duration = 1500 ) {
    let start = 0;
    // console.log('init');
    setInterval( function () {
        if ( final >= start ) {
            elem.innerHTML = start++;
        }
    }, duration / final );
}
// end animate numbers








});
