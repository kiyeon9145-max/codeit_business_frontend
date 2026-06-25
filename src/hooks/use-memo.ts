const useMemoService = () => {
    const memos = [
        {
          id: 1,
          title: "오늘의 회의 요약",
          content: "팀 전체 미팅에서 Q3 목표를 재검토했다. 주요 KPI는 사용자 유지율 15% 향상과 신규 기능 3개 출시.",
          createdAt: "2026.06.25",
        },
        {
          id: 2,
          title: "아이디어 노트",
          content: "대시보드에 드래그앤드롭 기능 추가하면 어떨까? 사용자들이 카드를 자유롭게 배치할 수 있으면 UX가 크게 개선될 것 같다.",
          createdAt: "2026.06.24",
        },
        {
          id: 3,
          title: "읽은 책 감상",
          content: "\"린 스타트업\"을 다 읽었다. 빠른 실험과 피드백 루프의 중요성을 다시 한번 실감했다. MVP를 먼저 만들고 검증하자.",
          createdAt: "2026.06.23",
        },
        {
          id: 4,
          title: "버그 수정 목록",
          content: "로그인 시 토큰 만료 처리 누락, 모바일에서 버튼 클릭 영역 좁음, 다크모드에서 텍스트 색상 미적용 — 이번 주 안에 처리.",
          createdAt: "2026.06.22",
        },
        {
          id: 5,
          title: "주간 목표",
          content: "메모 기능 완성, 코드 리뷰 3건, 운동 월/수/금. 집중력 유지를 위해 오전 9시~12시는 딥워크 시간으로 지정.",
          createdAt: "2026.06.21",
        },
      ];

      return { memos };
}
export default useMemoService;