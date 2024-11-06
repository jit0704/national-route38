$(function () {
  $(window)
    .on('resize', function () {
      // cell-group 클래스명을 가진 모든 div 요소 선택
      var cellGroups = $('.cell-group');

      // 반복문을 통해 각 cell-group에 대한 처리
      cellGroups.each(function () {
        var $this = $(this);
        var $data = $this.data('cell'); // data 속성 가져오기

        // div 요소의 width 값 얻기
        var divWidth = $this.width();

        // span 태그(cell영역)의 고정된 width
        var spanWidth = 37.56;

        // div width에 맞게 span 태그(cell영역) 개수 계산
        var spanCount = Math.ceil(divWidth / spanWidth);

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
   */
  function cellCondition($data, span, num) {
    // 조건: 기타 차로
    // if ($data === 'road-etc1-1' && num >= 1 && num <= 15) {
    //   span.addClass('cong');
    // }

    // var etc = ['road-etc2-1', 'road-etc2-2', 'road-etc2-3'];
    // etc.map(function (data) {
    //   if ($data === data && num >= 1 && num <= 15) {
    //     span.addClass('cong');
    //   }
    // });

    // 조건: TG 진입로 및 감속차로
    // if ($data === 'road-tg1' && num >= 1 && num <= 10) {
    //   span.addClass('cong');
    // }
    // if ($data === 'road-tg2' && num >= 10 && num <= 20) {
    //   span.addClass('cong');
    // }
    // if ($data === 'road-tg3' && num >= 1 && num <= 20) {
    //   span.addClass('slow');
    // }

    // 조건: 2차로
    // if ($data === 'road2' && num > 28) {
    //   span.addClass('cong');
    // }
    // if ($data === 'road2' && num >= 41 && num <= 50) {
    //   span.addClass('slow');
    // }
    // if ($data === 'road2' && num >= 51 && num <= 70) {
    //   span.addClass('cong');
    // }

    // 조건: 1차로
    // if ($data === 'road1' && num > 28) {
    //   span.addClass('slow');
    // }
  }
});
