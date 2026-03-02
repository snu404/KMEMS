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
            { name: "튜토리얼 I (금속-유기 구조체: 나노에서 마이크로까지)", room: "203", note: "고려대학교 김현욱 교수", talks: [] },
            { name: "튜토리얼 II (유체소자 개발을 위한 전통적/비전통적 마이크로/나노구조 제작)", room: "201A", note: "전남대학교 배주열 교수", talks: [] },
            { name: "튜토리얼 III (저차원 나노미터 공간에서의 물질 전달 현상)", room: "201B", note: "포항공과대학교 박형규 교수", talks: [] }
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
            { name: "유체I", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 5편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "13:00~13:20",
          title: "Raman Flow Cytometry for Single-Cell Microbial Functional Phenotyping",
          speaker_affil: "울산과학기술원",
          speaker_name: "이강수 교수",
          pdf: "pdf/D1_Fluid1_INV_01.pdf"
        },

        // 일반 구두발표(Oral)
        {
          kind: "Oral",
          time: "13:20~13:32",
          title: "투과형 멤브레인 기반 마이크로 패터닝과 전기분무증착을 이용한 Chip-Scale 균일 SERS 어레이 제작 및 공정 최적화",
          speaker_affil: "금오공과대학교",
          speaker_name: "이명석",
          pdf: "pdf/D1_Fluid1_O_01.pdf"
        },
        {
          kind: "Oral",
          time: "13:32~13:44",
          title: "귀 외이 구조 모사 모세관 기반 mTBI 센싱 미세유체칩 개발",
          speaker_affil: "부산대학교",
          speaker_name: "정종수",
          pdf: "pdf/D1_Fluid1_O_02.pdf"
        },
        {
          kind: "Oral",
          time: "13:44~13:56",
          title: "Ionic-Conductance-Enhanced Nanofluidic Memristor Enabling Low-Voltage Neuromorphic Computing",
          speaker_affil: "서울대학교",
          speaker_name: "곽성열",
          pdf: "pdf/D1_Fluid1_O_03.pdf"
        },
        {
          kind: "Oral",
          time: "13:56~14:08",
          title: "Microfluidic Cell-viability Monitoring Device based on Sharp-edge Acoustic Streaming",
          speaker_affil: "명지대학교",
          speaker_name: "아드마스다그나츄테메스젠",
          pdf: "pdf/D1_Fluid1_O_04.pdf"
        },
        {
          kind: "Oral",
          time: "14:08~14:20",
            title: "GNR-CNC 복합필름 대면적 제조 공정을 통한 유연광열소자 응용",
          speaker_affil: "한국과학기술원",
          speaker_name: "국윤혁",
          pdf: "pdf/D1_Fluid1_O_05.pdf"
        }
      ]
 },
            { name: "소재, 가공, 패키징I", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 5편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "13:00~13:20",
          title: "Highly Anisotropic 2D van der Waals Materials for Spintronic Device Applications",
          speaker_affil: "전북대학교",
          speaker_name: "조준현 교수",
          pdf: "pdf/D1_Packaging1_INV_01.pdf"
        },

        // 일반 구두발표(Oral)
        {
          kind: "Oral",
          time: "13:20~13:32",
          title: "Self-Regulated Photosynthesis Assistance System Using MXene-Based Multifunctional",
          speaker_affil: "전북대학교",
          speaker_name: "고유진",
          pdf: "pdf/D1_Packaging1_O_01.pdf"
        },
        {
          kind: "Oral",
          time: "13:32~13:44",
          title: "레이저 어닐링 기반 나노 스케일 스텐실 박막의 제작과 스텐실 리소그래피를 통한 금속 나노디스크 배열 제작",
          speaker_affil: "한국과학기술원",
          speaker_name: "민두홍",
          pdf: "pdf/D1_Packaging1_O_02.pdf"
        },
        {
          kind: "Oral",
          time: "13:44~13:56",
          title: "Poisson Effect-Assisted Replication Lithography and Its Implementation in a Roll-to-Roll Continuous Fabrication System",
          speaker_affil: "경북대학교",
          speaker_name: "김민수",
          pdf: "pdf/D1_Packaging1_O_03.pdf"
        },
        {
          kind: "Oral",
          time: "13:56~14:08",
          title: "금형 공정 기반 다중구조 CNP-PDMS 표면의 초발수 및 광열 특성을 이용한 에너지프리 방빙 기술",
          speaker_affil: "국민대학교",
          speaker_name: "이영석",
          pdf: "pdf/D1_Packaging1_O_04.pdf"
        },
        {
          kind: "Oral",
          time: "14:08~14:20",
            title: "Fabrication of Aerogel-Based Transparent Haze Film for Enhanced Forward Light Scattering and Passive Radiative Cooling in Solar Cells",
          speaker_affil: "중앙대학교",
          speaker_name: "이경완",
          pdf: "pdf/D1_Fluid1_O_05.pdf"
        }
      ] }
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
            { name: "메디컬I", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 5편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "14:00~14:20",
          title: "Laser Microfabrication Enabling Immune-Stealth and Soft Bioelectronic Implants",
          speaker_affil: "한국과학기술연구원",
          speaker_name: "전호정 박사",
          pdf: "pdf/D1_Medical1_INV_01.pdf"
        },

        // 일반 구두발표(Oral)
        {
          kind: "Oral",
          time: "14:20~14:32",
          title: "최소 침습적 뇌 신호 모니터링을 위한 고밀도 미세 유연 두개골 전극",
          speaker_affil: "성균관대학교",
          speaker_name: "이혜원",
          pdf: "pdf/D1_Medical1_O_01.pdf"
        },
        {
          kind: "Oral",
          time: "14:32~14:44",
          title: "아조벤젠 엘라스토머 필름을 이용한 원격 마이크로니들 약물 전달 시스템 개발",
          speaker_affil: "부경대학교",
          speaker_name: "김난경",
          pdf: "pdf/D1_Medical1_O_02.pdf"
        },
        {
          kind: "Oral",
          time: "14:44~14:56",
          title: "Hybrid Flexible-Rigid Neural Probe for Chronic Recording of Neural Signals with Reduced Tissue Damage",
          speaker_affil: "고려대학교",
          speaker_name: "조이아 나움키나",
          pdf: "pdf/D1_Medical1_O_03.pdf"
        },
        {
          kind: "Oral",
          time: "14:56~15:08",
          title: "A Natural-Biomaterial Microneedle Patch for Rapid Hemostasis and Wet-Tissue Adhesion",
          speaker_affil: "인천대학교",
          speaker_name: "김도훈",
          pdf: "pdf/D1_Medical1_O_04.pdf"
        },
        {
          kind: "Oral",
          time: "15:08~15:20",
            title: "Pre-snapback Mode Operation of CMUT for Enhanced Acoustic Performance",
          speaker_affil: "한국과학기술원",
          speaker_name: "박세영",
          pdf: "pdf/D1_Medical1_O_05.pdf"
        }
        ]
 },
            { name: "화학I", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 5편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "14:00~14:20",
          title: "Laser Microfabrication Enabling Immune-Stealth and Soft Bioelectronic Implants",
          speaker_affil: "한국과학기술연구원",
          speaker_name: "전호정 박사",
          pdf: "pdf/D1_Medical1_INV_01.pdf"
        },

        // 일반 구두발표(Oral)
        {
          kind: "Oral",
          time: "14:20~14:32",
          title: "최소 침습적 뇌 신호 모니터링을 위한 고밀도 미세 유연 두개골 전극",
          speaker_affil: "성균관대학교",
          speaker_name: "이혜원",
          pdf: "pdf/D1_Medical1_O_01.pdf"
        },
        {
          kind: "Oral",
          time: "14:32~14:44",
          title: "아조벤젠 엘라스토머 필름을 이용한 원격 마이크로니들 약물 전달 시스템 개발",
          speaker_affil: "부경대학교",
          speaker_name: "김난경",
          pdf: "pdf/D1_Medical1_O_02.pdf"
        },
        {
          kind: "Oral",
          time: "14:44~14:56",
          title: "Hybrid Flexible-Rigid Neural Probe for Chronic Recording of Neural Signals with Reduced Tissue Damage",
          speaker_affil: "고려대학교",
          speaker_name: "조이아 나움키나",
          pdf: "pdf/D1_Medical1_O_03.pdf"
        },
        {
          kind: "Oral",
          time: "14:56~15:08",
          title: "A Natural-Biomaterial Microneedle Patch for Rapid Hemostasis and Wet-Tissue Adhesion",
          speaker_affil: "인천대학교",
          speaker_name: "김도훈",
          pdf: "pdf/D1_Medical1_O_04.pdf"
        },
        {
          kind: "Oral",
          time: "15:08~15:20",
            title: "Pre-snapback Mode Operation of CMUT for Enhanced Acoustic Performance",
          speaker_affil: "한국과학기술원",
          speaker_name: "박세영",
          pdf: "pdf/D1_Medical1_O_05.pdf"
        }
        ] }
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
            { name: "세션없음", room: "", talks: [] }
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
            { name: "융복합I-메디컬II", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 3편", talks: [] },
            { name: "물리I", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 3편", talks: [] }
          ]
        },
        { time: "08:56~09:10", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "09:10~09:30", sessions: [ { name: "개회식", room: "이벤트홀A", talks: [] } ] },
        { time: "09:30~10:10", sessions: [ { name: "기조강연I", room: "이벤트홀A", Note: "Spatial & Physical AI: Empowering the Future of Smart Cities, 네이버랩스 차재원 박사", talks: [] } ] },
        { time: "10:10~11:00", sessions: [ { name: "기조강연II", room: "이벤트홀A", Note: "로봇 기술의 발전과 활용, 성균관대학교 문형필 교수", talks: [] } ] },
        { time: "11:00~11:15", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "11:15~12:23",
          sessions: [
            { name: "유체II", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "물리II-소재, 가공, 패키징II", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "12:23~13:20", sessions: [ { name: "점심식사 및 전시부스 참관", room: "전시장", talks: [] } ] },
        { time: "13:20~13:50", sessions: [ { name: "삼성미래기술육성사업 설명회", room: "영주홀B", talks: [] } ] },
        {
          time: "13:50~14:58",
          sessions: [
            { name: "바이오I", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "유연I", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "14:58~15:15", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "15:15~16:23",
          sessions: [
            { name: "유체III", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "소재, 가공, 패키징III", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "16:23~16:40", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "16:40~17:40",
          sessions: [
            { name: "포스터발표TP-II", room: "백록홀", note: "일반 포스터발표 00편", talks: [] },
            { name: "특별세션II (연구 역량강화)", room: "영주홀B", note: "초청강연 2편", talks: [] }
          ]
        },
        {
          time: "17:40~18:20",
          sessions: [
            { name: "포스터발표TP-II (계속)", room: "백록홀", note: "일반 포스터발표 00편", talks: [] },
            { name: "세션없음", room: "", talks: [] }
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
            { name: "바이오II", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "유체IV-유연II-화학III", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "09:08~09:20", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "09:20~10:20",
          sessions: [
            { name: "포스터발표FP-III", room: "백록홀", note: "일반 포스터발표 00편", talks: [] },
            { name: "특별세션III (신진과학자 세션)", room: "영주홀B", note: "초청강연 4편", talks: [
    {
      kind: "Special",
      time: "09:20~09:35",
      title: "96-Puddle Paper Plate: A Scalable Lab-on-Paper System for On-Site Sensing and Analysis",
      speaker_affil: "고려대학교",
      speaker_name: "이태하 교수",
      pdf: "pdf/D3_SS3_01.pdf"
    },
    {
      kind: "Special",
      time: "09:35~09:50",
      title: "Carbon Nanotube Integration for Flexible and Stretchable Electronic Applications",
      speaker_affil: "연세대학교",
      speaker_name: "심상준 교수",
      pdf: "pdf/D3_SS3_02.pdf"
    },
    {
      kind: "Special",
      time: "09:50~10:05",
      title: "Structural Designs of Triboelectric Material for High-Performance Soft Electronics and Neuromorphic Devices",
      speaker_affil: "한국화학융합시험연구원",
      speaker_name: "박용진 박사",
      pdf: "pdf/D3_SS3_03.pdf"
    },
    {
      kind: "Special",
      time: "10:05~10:20",
      title: "Wireless, spatially-matched optoelectronic neural interfaces for simultaneous optogenetics and electrophysiology",
      speaker_affil: "한국과학기술원",
      speaker_name: "이주현 교수",
      pdf: "pdf/D3_SS3_04.pdf"
    }
  ]
 }
          ]
        },
        {
          time: "10:20~11:00",
          sessions: [
            { name: "포스터발표FP-III (계속)", room: "백록홀", note: "일반 포스터발표 00편", talks: [] },
            { name: "세션없음", room: "", talks: [] }
          ]
        },
        { time: "11:00~11:10", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "11:10~11:40", sessions: [ { name: "2025 MNS 학술상 수상 기념 강연", room: "이벤트홀", talks: [{kind: "Invited", title: "질병 치료 및 진단을 위한 마이크로니들 기술",
      speaker_affil: "연세대학교",
      speaker_name: "류원형 교수",}] } ] },
        { time: "11:40~12:00", sessions: [ { name: "폐회식 준비", room: "이벤트홀", talks: [] } ] },
        { time: "12:00~12:30", sessions: [ { name: "우수논문 시상 및 폐회식", room: "이벤트홀", talks: [] } ] }
      ]
    }
  ]
};
