const APP_DATA = {
  days: [
    // =========================
    // Day 1 (Wed) — 3 parallel
    // =========================
    {
      label: "3월 25일 (수)",
      date: "2026-03-25",
      maxParallel: 3,
      timeBlocks: [
        {
          time: "09:00~10:20",
          sessions: [
            { name: "튜토리얼 I (금속-유기 구조체: 나노에서 마이크로까지)", room: "A룸", note: "고려대학교 김현욱 교수", talks: [] },
            { name: "튜토리얼 II (유체소자 개발을 위한 전통적/비전통적 마이크로/나노구조 제작)", room: "B룸", note: "전남대학교 배주열 교수", talks: [] },
            { name: "튜토리얼 III (저차원 나노미터 공간에서의 물질 전달 현상)", room: "C룸", note: "포항공과대학교 박형규 교수", talks: [] }
          ]
        },
        {
          time: "10:20~10:30",
          sessions: [
            { name: "휴식 및 이동", room: "로비", talks: [] }
          ]
        },
        {
          time: "10:30~12:00",
          sessions: [
            { name: "공통 튜토리얼 (3차원 Rhino SW를 이용한 논문/과제 삽화 도식화의 개념과 전략)", room: "이벤트홀A", note: "고려대학교 유용상 교수", talks: [] }
          ]
        },
        {
          time: "12:00~13:00",
          sessions: [
            { name: "점심식사 및 전시부스 참관", room: "전시장", talks: [] }
          ]
        },
        {
          time: "13:00~14:20",
          sessions: [
            { name: "유체I", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 5편", talks: [] },
            { name: "소재, 가공, 패키징I", room: "영주홀룸", note: "초청강연 1편, 일반 구두발표 5편", talks: [] }
          ]
        },
        {
          time: "14:20~14:40",
          sessions: [
            { name: "휴식 및 이동", room: "로비", talks: [] }
          ]
        },
        {
          time: "14:40~16:00",
          sessions: [
            { name: "메디컬I", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 5편", talks: [] },
            { name: "화학I", room: "영주홀룸", note: "초청강연 1편, 일반 구두발표 5편", talks: [] }
          ]
        },
        {
          time: "16:00~16:15",
          sessions: [
            { name: "휴식 및 이동", room: "로비", talks: [] }
          ]
        },
        {
          time: "16:15~17:15",
          sessions: [
            { name: "포스터WP-I", room: "백록홀", note: "일반 포스터발표 00편", talks: [] },
            { name: "특별세션I (기술사업화 역량강화)", room: "영주홀B", note: "초청강연 3편", talks: [] }
          ]
        },
        {
          time: "17:15~17:55",
          sessions: [
            { name: "포스터WP-I (계속)", room: "백록홀", note: "일반 포스터발표 00편", talks: [] },
            { name: "세션없음", room: "영주홀B", talks: [] }
          ]
        },
        {
          time: "18:00~18:30",
          sessions: [
            { name: "2026 MNS 춘계학술대회 평의원회", room: "영주홀A", note: "참석대상: 평의원", talks: [] }
          ]
        },
        {
          time: "18:30~19:00",
          sessions: [
            { name: "휴식 및 이동", room: "로비", talks: [] }
          ]
        },
        {
          time: "19:00~21:00",
          sessions: [
            { name: "신진연구자 환영회", room: "추후공지", talks: [] }
          ]
        }
      ]
    },

    // =========================
    // Day 2 (Thu) — 2 parallel
    // =========================
    {
      label: "3월 26일 (목)",
      date: "2026-03-26",
      maxParallel: 2,
      timeBlocks: [
        {
          time: "08:00~08:56",
          sessions: [
            { name: "융복합1-메디컬2", room: "A룸", talks: [] },
            { name: "물리1", room: "B룸", talks: [] }
          ]
        },
        { time: "08:56~09:10", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "09:10~09:30", sessions: [ { name: "개회식", room: "A룸", talks: [] } ] },
        { time: "09:30~10:10", sessions: [ { name: "기조강연1", room: "A룸", talks: [] } ] },
        { time: "10:10~11:00", sessions: [ { name: "기조강연2", room: "A룸", talks: [] } ] },
        { time: "11:00~11:15", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "11:15~12:23",
          sessions: [
            { name: "유체2", room: "A룸", talks: [] },
            { name: "물리2-소재가공패키징2", room: "B룸", talks: [] }
          ]
        },
        { time: "12:23~13:20", sessions: [ { name: "점심식사 및 전시부스 관람 (세션없음)", room: "전시장", talks: [] } ] },
        { time: "13:20~13:50", sessions: [ { name: "점심식사 및 전시부스 관람 (삼성 미리보기술 육성사업 설명회)", room: "D룸", talks: [] } ] },
        {
          time: "13:50~14:58",
          sessions: [
            { name: "바이오1", room: "A룸", talks: [] },
            { name: "유연1", room: "B룸", talks: [] }
          ]
        },
        { time: "14:58~15:15", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "15:15~16:23",
          sessions: [
            { name: "유체3", room: "A룸", talks: [] },
            { name: "소재가공패키징3", room: "B룸", talks: [] }
          ]
        },
        { time: "16:23~16:40", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "16:40~17:40",
          sessions: [
            { name: "포스터발표TP-2", room: "D룸", talks: [] },
            { name: "특별세션2", room: "E룸", talks: [] }
          ]
        },
        {
          time: "17:40~18:20",
          sessions: [
            { name: "포스터발표TP-2 (계속)", room: "D룸", talks: [] },
            { name: "세션없음", room: "E룸", talks: [] }
          ]
        },
        { time: "18:20~18:30", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "18:30~20:30", sessions: [ { name: "만찬(기업소개)", room: "연회장", talks: [] } ] }
      ]
    },

    // =========================
    // Day 3 (Fri) — 2 parallel
    // =========================
    {
      label: "3월 27일 (금)",
      date: "2026-03-27",
      maxParallel: 2,
      timeBlocks: [
        {
          time: "08:00~09:08",
          sessions: [
            { name: "바이오2", room: "A룸", talks: [] },
            { name: "유체4-유연2-화학3", room: "B룸", talks: [] }
          ]
        },
        { time: "09:08~09:20", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "09:20~10:20",
          sessions: [
            { name: "포스터발표FP-3", room: "D룸", talks: [] },
            { name: "특별세션3", room: "E룸", talks: [] }
          ]
        },
        {
          time: "10:20~11:00",
          sessions: [
            { name: "포스터발표FP-3 (계속)", room: "D룸", talks: [] },
            { name: "세션없음", room: "E룸", talks: [] }
          ]
        },
        { time: "11:00~11:10", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "11:10~11:40", sessions: [ { name: "학술상 강연", room: "A룸", talks: [] } ] },
        { time: "11:40~12:00", sessions: [ { name: "폐회식 준비", room: "A룸", talks: [] } ] },
        { time: "12:00~12:30", sessions: [ { name: "우수논문 시상 및 폐회식", room: "A룸", talks: [] } ] }
      ]
    }
  ]
};
