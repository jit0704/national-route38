// 좌우검지현황 함수 정의
const 좌우검지현황 = (id) => {
  // 주어진 id로 캔버스 요소를 가져옴
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d'); // 2D 컨텍스트를 가져옴

  const barWidth = 30; // 막대의 너비
  const barHeight = 192; // 막대의 높이
  const spaceBetweenBars = 2; // 막대 사이의 간격

  // 막대기 그리기
  for (let i = 0; i < 3; i++) {
    // 3개의 막대를 그리기 위한 반복문
    const x = i * (barWidth + spaceBetweenBars); // 각 막대의 x 좌표 계산
    ctx.fillStyle = '#ECECEC'; // 막대의 배경 색상 설정
    ctx.fillRect(x, 0, barWidth, barHeight); // 막대 그리기

    ctx.fillStyle = '#1E5F8D'; // 자동차 도형의 색상 설정
    for (let j = 0; j < 6; j++) {
      // 각 막대에 6개의 사각형을 그리기 위한 반복문
      // 랜덤 y 위치 설정
      const randomY = Math.random() * (barHeight - 10) + 10; // 10에서 barHeight - 10 사이의 랜덤 값
      ctx.fillRect(x + 13, randomY, 2.5, 6.4); // 사각형 그리기
    }
  }
};

// 화면 UI 테스트
document.addEventListener('DOMContentLoaded', () => {
  좌우검지현황('geomjiCanvas1'); // 좌측 검지현황 함수 호출
  좌우검지현황('geomjiCanvas2'); // 우측 검지현황 함수 호출

  // 1초마다 두 개의 캔버스에 좌우검지현황 함수 호출하여 갱신
  setInterval(() => {
    좌우검지현황('geomjiCanvas1'); // 좌측 검지현황 함수 갱신
    좌우검지현황('geomjiCanvas2'); // 우측 검지현황 함수 갱신
  }, 1000);
});
