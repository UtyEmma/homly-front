import * as $ from 'jquery'

export function NewListingStepper () {
    var $step = $('.new-property-step');
    if ($step.length < 1) {
        return;
    }
    var $active_item = $step.find('.nav-link.active').parent();
    var $prev_item = $active_item.prevAll();
    if ($prev_item.length > 0) {
        $prev_item.each(function () {
            $(this).find('.step').html('<i class="fal fa-check text-primary"></i>');

        });
    }
    var $tabs = $('a[data-toggle="pill"],a[data-toggle="tab"]');
    $tabs.on('show.bs.tab', function (e) {
        $(this).find('.number').html($(this).data('number'));
        var $prev_item = $(this).parent().prevAll();
        if ($prev_item.length > 0) {
            $prev_item.each(function () {
                $(this).find('.number').html('<i class="fal fa-check text-primary"></i>');

            });
        }
        var $next_item = $(this).parent().nextAll();
        if ($next_item.length > 0) {
            $next_item.each(function () {
                var number = $(this).find('.nav-link').data('number');
                $(this).find('.number').html(number);

            });
        }
    });
    $('.prev-button').on('click', function (e) {
        e.preventDefault();
        var $parent = $(this).parents('.tab-pane');
        $parent.removeClass('show active');
        $parent.prev().addClass('show active');
        $parent.find('.collapsible').removeClass('show');
        $parent.prev().find('.collapsible').addClass('show');
        var id = $parent.attr('id');
        var $nav_link = $('a[href="#' + id + '"]');
        $nav_link.removeClass('active');
        $nav_link.find('.number').html($nav_link.data('number'));
        var $prev = $nav_link.parent().prev();
        $prev.find('.nav-link').addClass('active');
        var number = $parent.find('.collapse-parent').data('number');
        $parent.find('.number').html(number);
    });
    $('.next-button').on('click', function (e) {
        e.preventDefault();
        var $parent = $(this).parents('.tab-pane');
        $parent.removeClass('show active');
        $parent.next().addClass('show active');
        $parent.find('.collapsible').removeClass('show');
        $parent.next().find('.collapsible').addClass('show');
        var id = $parent.attr('id');
        var $nav_link = $('a[href="#' + id + '"]');
        $nav_link.removeClass('active');
        $nav_link.find('.number').html($nav_link.data('number'));
        var $prev = $nav_link.parent().next();
        $prev.find('.nav-link').addClass('active');
        $nav_link.find('.number').html('<i class="fal fa-check text-primary"></i>');
        $parent.find('.number').html('<i class="fal fa-check text-primary"></i>');
    });
    $step.find('.collapsible').on('show.bs.collapse', function () {
        $(this).find('.number').html($(this).data('number'));
        var $parent = $(this).parents('.tab-pane');
        var $prev_item = $parent.prevAll();
        if ($prev_item.length > 0) {
            $prev_item.each(function () {
                $(this).find('.number').html('<i class="fal fa-check text-primary"></i>');

            });
        }
        var $next_item = $parent.nextAll();
        if ($next_item.length > 0) {
            $next_item.each(function () {
                var number = $(this).find('.collapse-parent').data('number');
                $(this).find('.number').html(number);

            });
        }
    });

}

NewListingStepper()