// publishing UI javascript
$(function () {
  if ($('[include-html]').length !== 0) {
    includeHTML(); // HTML include (퍼블리싱 확인용)
  }
  cmmnui();
});

function cmmnui() {
  // 240518추가: 달력 날짜 초기화
  function dateInit() {
    return new Date().toISOString().substring(0, 10);
  }
  $('[data-start="date-start"]').attr('value', dateInit());
  $('[data-end="date-end"]').attr('value', dateInit());

  // 210930 추가 : input autocomplete 비활성화
  var $txtInput0 = $('[type="text"], [type="number"]');
  $txtInput0.attr('autocomplete', 'off');

  // 210930 추가 : 로그인 폼 영역 포커스
  var $txtInput = $('.loginbox-input input');
  $txtInput.on('focus', function () {
    $(this).parent().addClass('active');
  });
  $txtInput.on('blur', function () {
    $(this).parent().removeClass('active');
  });

  // 모달 팝업
  $('.btn-modal-open').on('click', function () {
    $(this).modal({
      closeExisting: false,
      clickClose: false,
      fadeDuration: 100,
    });
    return false;
  });

  //gnb
  setTimeout(function () {
    // setTimeout()은 퍼블리싱 확인용으로 개발에서는 적용하지 마세요.
    var $gnbSelector = '.gnb > li';
    $(document).on('mouseenter', $gnbSelector, function () {
      if ($(this).find('.depth2').length !== 0) {
        $(this).children('.depth2').stop().slideDown(200);
      } else {
        return;
      }
    });

    $(document).on('mouseleave', $gnbSelector, function () {
      $(this).children('.depth2').stop().slideUp(200);
    });
  }, 100);

  $('[data-toggle="datepicker"]').datepicker({
    language: 'ko-KR',
    format: 'yyyy-mm-dd',
    autoHide: true,
    zIndex: 10,
  });

  (function () {
    var inputTxt = $('[type="text"], [type="number"]');
    var inputCalendar = $('.input-calendar');
    inputTxt.not(inputCalendar).attr('autocomplete', 'off');
  })();

  // 241119 영상 팝업 확대 클릭 이벤트
  $(document).on('click', '.camera-popup-container .is-reduce', function (e) {
    e.preventDefault();
    const $parent = $(this).closest('.camera-popup-container');
    const $popContent = $parent.find('.camera-popup-content');
    $parent.css({
      width: '700px',
      height: '500px',
    });
    $popContent.css({
      width: '100%',
      height: 'calc(100% - 30px)',
    });

    // 영상 확대시 좌표값이 containment 밖으로 넘어가는 현상 수정
    // 드래그를 위해 .camera-popup-header를 트리거
    const $header = $parent.find('.camera-popup-header');
    const offset = $header.offset();

    // mousedown 이벤트 트리거
    $header.trigger(
      $.Event('mousedown', {
        which: 1, // 왼쪽 마우스 버튼
        pageX: offset.left, // 클릭 위치 X
        pageY: offset.top, // 클릭 위치 Y
      }),
    );

    // mousemove 이벤트 트리거
    $(document).trigger(
      $.Event('mousemove', {
        pageX: offset.left - 1, // 드래그할 위치 X
        pageY: offset.top - 1, // 드래그할 위치 Y
      }),
    );

    // mouseup 이벤트 트리거
    $(document).trigger($.Event('mouseup'));

    // '확대' 버튼명을 '축소'로 변경하고 is-expansion클래스명 추가
    $(this).text('축소').removeClass('is-reduce').addClass('is-expansion');
  });

  // 241119 영상 팝업 축소 클릭 이벤트
  $(document).on('click', '.camera-popup-container .is-expansion', function (e) {
    e.preventDefault();
    const $parent = $(this).closest('.camera-popup-container');
    const $popContent = $parent.find('.camera-popup-content');
    $parent.css({
      width: '300px',
      height: '211px',
    });
    $popContent.css({
      width: '280px',
      height: '161px',
    });

    // '축소' 버튼명을 '확대'로 변경하고 is-reduce클래스명 추가
    $(this).text('확대').removeClass('is-expansion').addClass('is-reduce');
  });

  // 241116추가: HTML Include sideEffect가 생겨서 setTimeout함수 사용(개발파일에서는 setTimeout함수 삭제해주세요.)
  setTimeout(() => {
    // 영상 팝업 리사이징
    $('.camera-popup-container').resizable({
      containment: '.ly-content',
      minWidth: 300,
      minHeight: 211,
      resize: function (e, ui) {
        $(ui.element).css({
          width: ui.size.width + 20,
          height: ui.size.height + 20,
        });
        $(e.target)
          .children('.camera-popup-content')
          .css({
            width: ui.size.width,
            height: ui.size.height - 30,
          });
      },
    });

    // 영상 팝업 드래그
    $('.camera-popup-container').draggable({
      handle: '.camera-popup-header',
      containment: '.ly-content',
      scroll: false,
    });
  }, 200);
}
