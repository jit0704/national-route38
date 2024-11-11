// 용이2교차로 진입, 안성TG 진출 셀 개수
const cellNum = 10;

$(function () {
  $(window)
    .on('resize', function () {
      // cell-group 클래스명을 가진 모든 div 요소 선택
      var cellGroups = $('.js-aside-cell .cell-group');

      // 반복문을 통해 각 cell-group에 대한 처리
      cellGroups.each(function () {
        var $this = $(this);
        var $data = $this.data('cell'); // data 속성 가져오기

        // span 태그(cell영역)의 고정된 height
        var spanHEight = 20;

        // div 요소의 height 값 얻기
        var divHeight = $this.height();

        // 각 cell-group의 height 설정
        $this.css({ height: spanHEight * cellNum });

        // div height에 맞게 span 태그(cell영역) 개수 계산
        var spanCount = Math.ceil(divHeight / spanHEight);

        // 만약에 기존 span태그(cell영역)가 있다면 기존 span 태그들 제거
        $this.empty();

        // span 태그(cell영역) 동적으로 생성 및 추가
        for (let i = 0; i < spanCount; i++) {
          var span = $('<span></span>');
          var num = i + 1;
          span.addClass(`slice${num}`);
          span.css('height', `${spanHEight}px`);
          $this.append(span);

          // 셀 영역의 상태를 나타내는 함수
          cellCondition($data, span, num);
        }
      });
    })
    .resize();

  $(window).resize();

  /**
   * 셀 영역의 상태를 나타내는 함수 정의
   * @param {data} $data 태그의 data-cell 속성
   * @param {el} span 동적으로 생성되는 span
   * @param {number} num 동적으로 생성되는 span태그 개수
   * ※ HTML화면에서 테스트를 하기 위해서 작성한 함수 입니다. 참고만 해주시고 개발파일에서는 삭제하셔도 됩니다.
   * <상태를 표현해주는 클래스명>
   * 소통원할일 경우: slow 클래스명 삭제
   * 서행: slow
   */
  function cellCondition($data, span, num) {
    if ($data === 'road1' && num >= 5 && num <= 7) {
      span.addClass('slow');
    }

    if ($data === 'road2' && num <= 6) {
      span.addClass('slow');
    }

    if ($data === 'road3' && num >= 6) {
      span.addClass('slow');
    }
  }
});
