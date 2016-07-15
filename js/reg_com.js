
function ABC(){


$(function () {
    $(".simulate-select input").attr("readOnly", true);
    $('.simulate-select').click(function (e) {
        if (!$(this).hasClass("on_ie7_hack")) {
            var index = $('.simulate-select').index($(this));
            $('.simulate-select').removeClass("on_ie7_hack").eq(index).addClass("on_ie7_hack");
            $('.simulate-select').eq(index).css("background-position", "right bottom");
            $('.simulate-select').find('dl').hide().eq(index).show();
            e.stopPropagation();
        }
    });

    /*	$('.simulate-select dl dd').hover(function(e) {
     $(this).toggleClass('on');
     e.stopPropagation()
     });*/

    if (jQuery.fn.on) {
        jQuery('.simulate-select dl').on("click", "dd",
            function (e) {
                var indexInput = $(this).parents('.simulate-select').find('input');
                var val = $(this).text();
                var dataVal = $(this).attr('data-value');

                indexInput.val(jQuery.trim(val));

                indexInput.attr('dataid', dataVal);
                $('.simulate-select').removeClass("on_ie7_hack");
                $('.simulate-select dl').hide();
                $('.simulate-select').css("background-position", "right top");
                e.stopPropagation();
            }
        )
        ;
    } else {
        jQuery('.simulate-select dl dd').bind("click", function (e) {
            var indexInput = $(this).parents('.simulate-select').find('input');
            var val = $(this).text();
            var dataVal = $(this).attr('data-value');

            indexInput.val(jQuery.trim(val));

            indexInput.attr('dataid', dataVal);
            $('.simulate-select').removeClass("on_ie7_hack");
            $('.simulate-select dl').hide();
            $('.simulate-select').css("background-position", "right top");
            e.stopPropagation();
        });
    }


    $(document).click(function () {
        $('.simulate-select').css("background-position", "right top");
        $('.simulate-select dl').hide();
        $('.simulate-select').removeClass("on_ie7_hack");
    });

    $("input[name='form-input']").bind({
        focus: function () {
            if (this.value == this.defaultValue) {
                this.value = "";
            }
        },
        blur: function () {
            if (this.value === "") {
                this.value = this.defaultValue;
            }
        }
    });
});
    
}

module.exports=ABC;