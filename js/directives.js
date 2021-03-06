angular.module('directives', [])
  .directive('card', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/card.html',
      link:function(scope, element, attribute) {
        $('.card').click (function () {
          $(this).addClass('thisactivecard'), 10;
          $(this).find('.card__bannerPreview--bannerImg').animate({height: '70px', width: '70px', borderRadius: '200px', margin: '0 40%', position: 'relative', top: '30px'},{ duration: 10, queue: false });
          $(this).find('.card__bannerPreview--headingMain, .card__bannerPreview--heading').animate({top: '-150px'}, { duration: 10, queue: false });
          $(this).find('.card__bannerPreview--subheading').animate({top: '0', marginBottom: '0'}, { duration: 10, queue: false });
          $(this).find('.card__bannerPreview--body').animate({top: '10px'}, { duration: 10, queue: false });
          $(this).find('.card__bannerPreviewFooter').animate({top: '10px'}, { duration: 10, queue: false });
          $(this).find('.closepls').animate({opacity: 1},{duration: 02, queue: false});
          $(this).find('.closepls').addClass('closepls--x').animate({}, { duration: 600, queue: false });
          $(this).find('.closepls').removeClass('closepls--o');
          $(this).find('#yeah').css({height: '70px'}, { duration: 10, queue: false });
        })
      }
    }
})

.directive('closecard', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="closepls"></div>',
    link:function(scope, element, attribute) {
      $('.closepls').click(function (e, event) {
        e.stopPropagation();
        $(this).removeClass('closepls--x').addClass('closepls--o');
        $(this).parent().find('.card__bannerPreview--heading, .card__bannerPreview--headingMain').animate({top: '0px'}, { duration: 10, queue: false });
        $(this).parent().find('.card__bannerPreview--body').animate({top: '150px'}, { duration: 10, queue: false });
        $(this).parent().find('.card__bannerPreview--subheading').animate({top: '150px'}, { duration: 10, queue: false });
        $(this).parent().find('.card__bannerPreview--bannerImg').animate({height: '160px', width: '100%', borderRadius: '0px', margin: '0', position: 'relative', top: '0'},{ duration: 10, queue: false });
        $(this).closest('.card').removeClass('thisactivecard'), 20;
        $(this).parent().find('#yeah').css({height: '188px'}, { duration: 10, queue: false });
        $(this).animate({opacity: 0}, {duration: 10, queue: false});
      })
    }
  }
})

.directive('languages', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/languages.html'
  }
})
