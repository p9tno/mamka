// ФОРМА
function submitForm() {
    let modal = $('#info');
    let message = modal.find('.form__message');
        // при закрытии окна, чистим
    modal.on('hidden.bs.modal', function (e) {
    message.html('');
});
    // проверка клавиши enter
    $("[type=submit]").keyup(function(event){
        if(event.keyCode == 13){
            $(this).click();
        }
    });

    $('[type=submit]').on('click tab', function (e) {
        e.preventDefault();
        let form = $(this).closest('.form');
        let notspam = form.find('[name="notspam"]');
        notspam.val('Not spam');
        let fields = form.find('[required]');
        let url = form.attr('action');
        let formData = form.serialize();
        let empty = 0;

        fields.each(function (index, el) {
            if ($(this).val() === '') {
                $(this).addClass('invalid');
                empty++;
            } else {
                $(this).removeClass('invalid');
            }
        });

        setTimeout(function () {
            fields.removeClass('invalid');
        }, 1500);


        if (empty === 0) {
            $.ajax({
                url:url,
                type: "POST",
                dataType: "html",
                data: formData,
                success: function (responce) {
                    // $('#success').modal('show');
                    // console.log('success');
                    // console.log(formData);
                    document.location.href = "/thank/";
                    },
                    error: function (responce) {
                        // console.log('error');
                        modal.modal('show');
                        message.html('Произошла ошибка при отправке. <br> Попробуйте отправить форму позже.');
                        }
                    })
                }
            });
}
submitForm();
