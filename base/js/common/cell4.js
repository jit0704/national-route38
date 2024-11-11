$(function () {
  $(window)
    .on('resize', function () {
      // cell-group 클래스명을 가진 모든 div 요소 선택
      var cellGroups = $('.centered .cell-group-v2');

      // 반복문을 통해 각 cell-group에 대한 처리
      cellGroups.each(function () {
        var $this = $(this);
        var $data = $this.data('cell'); // data 속성 가져오기

        // div 요소의 width 값 얻기
        var divWidth = $this.width();

        // span 태그(cell영역)의 고정된 width
        var spanWidth = 37.96;

        // div width에 맞게 span 태그(cell영역) 개수 계산
        var spanCount = Math.floor(divWidth / spanWidth);

        // 만약에 기존 span태그(cell영역)가 있다면 기존 span 태그들 제거
        $this.empty();

        // span 태그(cell영역) 동적으로 생성 및 추가
        for (let i = 0; i < spanCount; i++) {
          var span = $('<span></span>');
          var num = i + 1;
          span.addClass(`slice${num}`);
          span.css('width', `${spanWidth}px`);
          $this.append(span);

          // 셀 영역의 상태를 나타내는 함수
          cellCondition($data, span, num);
        }
      });
    })
    .resize();

  /**
   * 셀 영역의 상태를 나타내는 함수 정의
   * @param {data} $data 태그의 data-cell 속성
   * @param {el} span 동적으로 생성되는 span
   * @param {number} num 동적으로 생성되는 span태그 개수
   * ※ HTML화면에서 테스트를 하기 위해서 작성한 함수 입니다. 참고만 해주시고 개발파일에서는 삭제하셔도 됩니다.
   * <상태를 표현해주는 클래스명>
   * 소통원할: slow, cong 클래스명 삭제
   * 서행: slow
   * 정체: cong
   * 흰색bg: bg-white
   * 회색bg: bg-gray2
   */
  function cellCondition($data, span, num) {
    // 조건: 1
    if ($data === 'road1' && num >= 1 && num <= 8) {
      span.addClass('bg-white');
    }
    if ($data === 'road1' && num >= 9 && num <= 11) {
      span.addClass('slow');
    }
    if ($data === 'road1' && num >= 15 && num <= 20) {
      span.addClass('cong');
    }

    // 조건: 2
    if ($data === 'road2' && num >= 3 && num <= 13) {
      span.addClass('cong');
    }
    if ($data === 'road2' && num >= 21 && num <= 25) {
      span.addClass('slow');
    }

    // 조건: 3
    if ($data === 'road3' && num >= 20 && num <= 25) {
      span.addClass('cong');
    }
    if ($data === 'road3' && num >= 9 && num <= 13) {
      span.addClass('slow');
    }

    // 조건: 4
    if ($data === 'road4' && num >= 10 && num <= 25) {
      span.addClass('bg-gray2');
    }
    if ($data === 'road4' && num >= 26 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 5
    if ($data === 'road5' && num >= 10 && num <= 25) {
      span.addClass('bg-gray2');
    }
    if ($data === 'road5' && num >= 26 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 6
    if ($data === 'road6' && num >= 10 && num <= 25) {
      span.addClass('bg-gray2');
    }
    if ($data === 'road6' && num >= 26 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 7
    if ($data === 'road7' && num >= 10 && num <= 25) {
      span.addClass('bg-gray2');
    }
    if ($data === 'road7' && num >= 26 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 8
    if ($data === 'road8' && num >= 10 && num <= 25) {
      span.addClass('bg-gray2');
    }
    if ($data === 'road8' && num >= 26 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 9
    if ($data === 'road9' && num >= 27 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 10
    if ($data === 'road10' && num >= 27 && num <= 28) {
      span.addClass('bg-white');
    }

    // 조건: 11
    if ($data === 'road11' && num >= 1 && num <= 20) {
      span.addClass('bg-white');
    }
    if ($data === 'road11' && num >= 27 && num <= 28) {
      span.addClass('bg-white');
    }
  }
});
