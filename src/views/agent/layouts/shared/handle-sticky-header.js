import * as $ from 'jquery'

var $body = $('body'),
$window = $(window),
$siteWrapper = $('#site-wrapper'),
$document = $(document);

export const headerSticky = {
    scroll_offset_before: 0,

    init: function () {
        this.sticky();
        this.scroll();
        this.resize();
        this.processSticky();
        this.footerBottom();
    },
    sticky: function () {
        $('.header-sticky .sticky-area').each(function () {
            var $this = $(this);
            if (!$this.is(':visible')) {
                return;
            }
            if (!$this.parent().hasClass('sticky-area-wrap')) {
                $this.wrap('<div class="sticky-area-wrap"></div>');
            }
            var $wrap = $this.parent();
            var $nav_dashbard = $('.dashboard-nav');
            $wrap.height($this.outerHeight());
            if (window.matchMedia('(max-width: 1199px)').matches) {
                $nav_dashbard.addClass('header-sticky-smart');
            } else {
                $nav_dashbard.removeClass('header-sticky-smart');
            }
        });
    },
    resize: function () {
        window.addEventListener('resize', function () {
            headerSticky.sticky();
            headerSticky.processSticky();
            headerSticky.footerBottom();
        });
    },

    scroll: function () {
        window.addEventListener('scroll', function () {
            headerSticky.processSticky();
        });
    },
    processSticky: function () {
        var current_scroll_top = $window.scrollTop();

        var $parent = $('.main-header');
        var is_dark = false;
        if ($parent.hasClass('navbar-dark') && !$parent.hasClass('bg-secondary')) {
            is_dark = true;
        }
        $('.header-sticky .sticky-area').each(function () {
            var $this = $(this);
            if (!$this.is(':visible')) {
                return;
            }

            var $wrap = $this.parent(),
                sticky_top = 0,
                sticky_current_top = $wrap.offset().top,
                borderWidth = $body.css('border-width');
            if (borderWidth !== '') {
                sticky_top += parseInt(borderWidth);
            }


            if (sticky_current_top - sticky_top < current_scroll_top) {
                $this.css('position', 'fixed');
                $this.css('top', sticky_top + 'px');
                $wrap.addClass('sticky');

                if (is_dark) {
                    $parent.removeClass('navbar-dark');
                    $parent.addClass('navbar-light');
                    $parent.addClass('navbar-light-sticky');
                }

            } else {
                if ($parent.hasClass('navbar-light-sticky')) {
                    $parent.addClass('navbar-dark');
                    $parent.removeClass('navbar-light');
                    $parent.removeClass('navbar-light-sticky');
                }
                if ($wrap.hasClass('sticky')) {
                    $this.css('position', '').css('top', '');
                    $wrap.removeClass('sticky');
                }

            }
        });

        if (headerSticky.scroll_offset_before > current_scroll_top) {
            $('.header-sticky-smart .sticky-area').each(function () {
                if ($(this).hasClass('header-hidden')) {
                    $(this).removeClass('header-hidden');
                }
            });
        } else {
            // down
            $('.header-sticky-smart .sticky-area').each(function () {
                var $wrapper = $(this).parent();
                if ($wrapper.length) {
                    if ((headerSticky.scroll_offset_before > ($wrapper.offset().top + $(this).outerHeight())) && !$(this).hasClass('header-hidden')) {
                        $(this).addClass('header-hidden');
                    }
                }

            });
        }
        headerSticky.scroll_offset_before = current_scroll_top;
    },
    footerBottom: function () {
        var $main_footer = $('.footer');
        var $wrapper_content = $('#content');
        $main_footer.css('position', '');
        $wrapper_content.css('padding-bottom', '');
        if ($body.outerHeight() < $window.outerHeight()) {
            $main_footer.css('position', 'fixed');
            $main_footer.css('bottom', '0');
            $main_footer.css('left', '0');
            $main_footer.css('right', '0');
            $main_footer.css('z-index', '0');
            $wrapper_content.css('padding-bottom', $main_footer.outerHeight() + 'px');
        } else {
            $main_footer.css('position', '');
            $wrapper_content.css('padding-bottom', '');
        }
    }
};

export const sidebarSticky = {
    init: function () {
        var header_sticky_height = 0;
        if (window.$('#site-header.header-sticky').length > 0) {
            header_sticky_height = 60;
        }

        window.$('.primary-sidebar.sidebar-sticky > .primary-sidebar-inner').hcSticky({
            stickTo: '#sidebar',
            top: header_sticky_height + 30
        });
        window.$('.primary-map.map-sticky > .primary-map-inner').hcSticky({
            stickTo: '#map-sticky',
            top: header_sticky_height
        });
    }
};