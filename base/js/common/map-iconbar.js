// 퍼블리싱 산출물 관리용 js (개발쪽에서는 이 부분 개발파일에서 별도 관리)

$(function () {
  setTimeout(() => {
    // 지도 우측 상단 아이콘바 영역 버튼 토글
    var $mapIconBarwrap = $('.map-iconbar-container');
    $('.btn-display', $mapIconBarwrap).on('click', function () {
      $(this).parent().toggleClass('open');
    });

    // 아이콘바 영역 버튼아이콘 리스트 클릭 이벤트
    $('.map-icon-list button', $mapIconBarwrap).on('click', function () {
      var $this = $(this);

      $this.toggleClass('active');
      if ($this.parent().find('.active').length === 0) {
        setTimeout(function () {
          $this.closest('.map-iconbar-container').children('.btn-display').removeClass().addClass('btn-display');
        }, 50);
      }

      if ($this.hasClass('ic1')) {
        classNameReplace($this, 'ic1');
      } else if ($this.hasClass('ic2')) {
        classNameReplace($this, 'ic2');
      } else if ($this.hasClass('ic3')) {
        classNameReplace($this, 'ic3');
      } else if ($this.hasClass('ic4')) {
        classNameReplace($this, 'ic4');
      } else if ($this.hasClass('ic5')) {
        classNameReplace($this, 'ic5');
      }
    });

    // 최초 지도 접속시 마커 전체 노출
    $('.map-iconbar-container').addClass('open');
  }, 100);

  // 아이콘들에 대한 표출 여부를 정할 수 있게 해주는 버튼의 아이콘 클래스명을 교체해주는 helper함수
  function classNameReplace(_this, className) {
    _this.closest('.map-iconbar-container').children('.btn-display').removeClass().addClass(`btn-display ${className}`);
  }
});
