document.addEventListener('DOMContentLoaded', () => {
  // 캔버스를 가져오고 2D 컨텍스트를 설정
  const canvas = document.getElementById('geomjiCanvas3');
  const ctx = canvas.getContext('2d');

  // 사각형의 속성 정의
  const rectWidth = 6.4; // 각 사각형의 너비
  const rectHeight = 2.5; // 각 사각형의 높이
  const rowHeight = 9; // 각 행의 높이
  const verticalPadding = 1.5; // 행 간의 위아래 간격
  const borderLineWidth = 1.5; // 경계 선의 두께
  const extraPadding = 10; // 5번째 행과 6번째 행 사이의 추가 간격

  // 각 행의 기본 배경 색상 설정
  const backgroundColor = '#ECECEC'; // 회색 배경
  ctx.fillStyle = backgroundColor;

  // 각 행의 사각형 위치 정의
  const positions = [
    [500, 640, 780, 820, 960], // 1번째 행
    [0, 40, 80, 120], // 2번째 행
    [0, 40, 80, 120, 160], // 3번째 행
    [0, 40, 80, 120, 160], // 4번째 행
    [0, 40, 80, 120, 160], // 5번째 행
    [0, 40, 80, 120, 160], // 6번째 행
    [0, 40, 80, 120, 160], // 7번째 행
    [0, 40, 80, 120, 160], // 8번째 행
    [0, 40, 80, 120, 160], // 9번째 행
    [0, 40, 80, 120, 160], // 10번째 행
    [], // 11번째 행 (사각형 없음)
  ];

  // 각 행의 배경 및 사각형 그리기
  positions.forEach((row, rowIndex) => {
    // 행의 Y 위치 계산
    let yPosition = rowIndex * (rowHeight + verticalPadding);
    if (rowIndex >= 5) {
      yPosition += extraPadding; // 5번째 행 이후에 추가 간격 적용(위 아래 구분선 <hr />태그를 넣기위해서 간격을 별도로 설정)
    }

    // 첫 번째 행의 배경 처리
    if (rowIndex === 0) {
      ctx.fillStyle = '#FFFFFF'; // 흰색 배경
      ctx.fillRect(0, yPosition, canvas.width * 0.3, rowHeight); // 왼쪽 30% 흰색 배경
      ctx.fillStyle = backgroundColor; // 회색 배경
      ctx.fillRect(canvas.width * 0.3, yPosition, canvas.width * 0.7, rowHeight); // 나머지 70% 회색 배경
    } else if (rowIndex === 3 || rowIndex === 4) {
      // 4번째 및 5번째 행의 오른쪽 60% 흰색 배경 처리
      ctx.fillStyle = backgroundColor; // 회색 배경
      ctx.fillRect(0, yPosition, canvas.width, rowHeight); // 전체 배경을 회색으로 설정

      ctx.fillStyle = '#FFFFFF'; // 흰색 배경
      ctx.fillRect(canvas.width * 0.29, yPosition, canvas.width * 0.71, rowHeight); // 오른쪽 71% 흰색 배경
    } else {
      // 나머지 행의 배경 그리기
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, yPosition, canvas.width, rowHeight);
    }

    // 5, 6, 7 번째 행의 오른쪽 60% 흰색 배경 처리
    if (rowIndex >= 4 && rowIndex <= 7) {
      ctx.fillStyle = '#FFFFFF'; // 흰색 배경
      ctx.fillRect(canvas.width * 0.4, yPosition, canvas.width * 0.6, rowHeight); // 오른쪽 60% 흰색 배경
    }

    // 8, 9 번째 행의 오른쪽 30% 흰색 배경 처리
    if (rowIndex >= 8 && rowIndex <= 9) {
      ctx.fillStyle = '#FFFFFF'; // 흰색 배경
      ctx.fillRect(
        canvas.width * 0.7, // 오른쪽 30% 시작 위치
        yPosition,
        canvas.width * 0.3, // 오른쪽 30%
        rowHeight,
      ); // 오른쪽 30% 배경
    }

    // 11번째 행의 배경 처리
    if (rowIndex === 10) {
      ctx.fillStyle = '#FFFFFF'; // 흰색 배경
      ctx.fillRect(0, yPosition, canvas.width * 0.6, rowHeight); // 좌측 60% 흰색 배경
      ctx.fillStyle = backgroundColor; // 회색 배경
      ctx.fillRect(canvas.width * 0.6, yPosition, canvas.width * 0.2, rowHeight); // 우측 20% 회색 배경
      ctx.fillStyle = '#FFFFFF'; // 흰색 배경
      ctx.fillRect(
        canvas.width * 0.8, // 우측 30% 시작 위치
        yPosition,
        canvas.width * 0.3, // 우측 30%
        rowHeight,
      ); // 우측 30% 배경
    }

    // 각 행에 사각형 그리기
    ctx.fillStyle = '#1E5F8D'; // 사각형의 색상 (파란색)
    row.forEach((x) => {
      // 각 X 위치에 사각형을 그립니다.
      ctx.fillRect(x, yPosition + (rowHeight - rectHeight) / 2, rectWidth, rectHeight);
    });

    // 흰색 배경 부분의 border 그리기
    ctx.strokeStyle = '#FFFFFF'; // border 색상 (흰색)
    ctx.lineWidth = borderLineWidth; // border 두께 설정

    // 5, 6, 7 번째 행의 오른쪽 60% 경계
    if (rowIndex >= 4 && rowIndex <= 7) {
      ctx.strokeRect(canvas.width * 0.4, yPosition, canvas.width * 0.6, rowHeight); // 오른쪽 60% 경계
    }

    // 8, 9 번째 행의 오른쪽 30% 경계
    if (rowIndex >= 8 && rowIndex <= 9) {
      ctx.strokeRect(
        canvas.width * 0.7, // 오른쪽 30% 시작 위치
        yPosition,
        canvas.width * 0.3, // 오른쪽 30%
        rowHeight,
      ); // 오른쪽 30% 배경 경계
    }

    // 5번째 행과 6번째 행 사이에 흰색 배경 간격 추가
    if (rowIndex === 4) {
      ctx.fillStyle = '#FFFFFF'; // 흰색
      ctx.fillRect(0, yPosition + rowHeight + verticalPadding, canvas.width, extraPadding); // 추가 간격을 흰색으로 채우기
    }

    // 도로 배경 색상 설정
    ctx.fillStyle = backgroundColor;
  });
});
