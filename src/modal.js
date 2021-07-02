const validateFields = (form, fieldArray) => {
    fieldArray.forEach(field => {
        field.removeClass("input-error");
        if (field.val().trim() == "") {
            field.addClass("input-error");
        }
    });

    const inputError = form.find(".input-error");

    return inputError.length == 0;
}


$('.form').submit((e) => {
    e.preventDefault();
    

    const form = $(e.currentTarget);
    const name = form.find("[name = 'name']");
    const phone = form.find("[name = 'phone']");
    const comment = form.find("[name = 'comment']");
    const to = form.find("[name = 'to']");
    const modal = $('#modal');
    const content = modal.find(".modal__content");

    content.removeClass("error-modal");

    const isValid = validateFields(form, [name, phone, comment, to])





    if (isValid) {
        const request = $.ajax({
            type: "method",
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },

        });

        request.done((data) => {
            content.text(data.message);
            e.target.reset();
        });

        request.fail((data) => {
            const message = data.responseJSON.message;
            content.text(message);
            console.log(data);
            content.addClass("error-modal");
        });

        request.always(() => {
            $.fancybox.open({
                src: "#modal",
                type: "inline"
            });
        });
    }
});



$('.app-submit-btn').click((e) => {
    e.preventDefault();

    $.fancybox.close();
});