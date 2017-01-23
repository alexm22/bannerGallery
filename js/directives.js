angular.module('directives', [])
  .directive('card', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/card.html',
      link:function(scope, element, attribute) {
        $('.card').click (function () {
          $(this).addClass('thisactivecard'), 10;
          $(this).find('.card__bannerPreview--bannerImg').animate({height: '70px', width: '22%', borderRadius: '200px', margin: '0 39%', position: 'relative', top: '30px'},{ duration: 10, queue: false });
          $(this).find('.card__bannerPreview--heading').animate({top: '-150px'}, { duration: 10, queue: false });
          $(this).find('.card__bannerPreview--subheading').animate({top: '0', marginBottom: '0'}, { duration: 10, queue: false });
          $(this).find('.card__bannerPreview--body').animate({top: '10px'}, { duration: 10, queue: false });
          $(this).find('.card__bannerPreviewFooter').animate({top: '10px'}, { duration: 10, queue: false });
          $(this).find('.closepls').fadeIn(), 10;
        })
      }
    }
})

.directive('closecard', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="closepls"><i class="fa fa-times" aria-hidden="true"></i></div>',
    link:function(scope, element, attribute) {
      $('.closepls').click(function (e, event) {
        e.stopPropagation();
        $(this).parent().find('.card__bannerPreview--heading').animate({top: '20px'}, { duration: 10, queue: false });
        $(this).parent().find('.card__bannerPreview--body').animate({top: '150px'}, { duration: 10, queue: false });
        $(this).parent().find('.card__bannerPreview--subheading').animate({top: '150px'}, { duration: 10, queue: false });
        $(this).parent().find('.card__bannerPreview--bannerImg').animate({height: '160px', width: '100%', borderRadius: '0px', margin: '0', position: 'relative', top: '0'},{ duration: 10, queue: false });
        $(this).closest('.card').removeClass('thisactivecard'), 20;
        $(this).fadeOut(), 10;
      })
    }
  }
})
