// 세션명 -> 파일명에 들어갈 sessionKey
const SESSION_KEY = {
  // Day 1 (3/25)
  "유체I": "Fluid1",
  "소재, 가공, 패키징I": "Packaging1",
  "메디컬I": "Medical1",
  "화학I": "Chem1",
  "포스터WP-I": "PosterWP1",
  "포스터WP-I (계속)": "PosterWP1Cont",
  "특별세션I (기술사업화 역량강화)": "SS1",
  "2026 MNS 춘계학술대회 평의원회": "Council",
  "신진연구자 환영회": "Welcome",

  // Day 2 (3/26)
  "융복합I-메디컬II": "ConvMed2",
  "융복합I-메디컬II / 좌장: 서민호(부산대), 유성광(인제대)" : "ConvMed2",
  "물리I": "Phys1",
  "물리I / 좌장: 조은환(금오공대), 표순재(서울과기대)": "Phys1",
  "유체II": "Fluid2",
  "유체II / 좌장: 김원정(연세대), 전형국(서울과기대)": "Fluid2",
  "물리II-소재, 가공, 패키징II": "PhysPack2",
  "물리II-소재, 가공, 패키징II / 좌장: 김회준(DGIST), 이한얼(GIST)": "PhysPack2",
  "바이오I": "Bio1",
  "바이오I / 좌장: 이현주(KAIST), 이대식(ETRI)": "Bio1",
  "유연I": "Flex1",
  "유연I / 좌장: 박인규(KAIST), 안준성(고려대)": "Flex1",
  "유체III": "Fluid3",
  "유체III / 좌장: 이종완(군산대), 김민석(금오공대)": "Fluid3",
  "소재, 가공, 패키징III": "Packaging3",
  "소재, 가공, 패키징III / 좌장: 옥종걸(서울과기대), 이재홍(DGIST)": "Packaging3",
  "포스터발표TP-II": "PosterTP2",
  "포스터발표TP-II (계속)": "PosterTP2Cont",
  "특별세션II (연구 역량강화)": "SS2",
  "만찬(기업소개)": "Banquet",
  "삼성미래기술육성사업 설명회": "SamsungBriefing",
  "개회식": "Opening",
  "기조강연I": "Keynote1",
  "기조강연II": "Keynote2",

  // Day 3 (3/27)
  "바이오II": "Bio2",
  "바이오II / 좌장: 정현호(GIST), 이소민(경희대)": "Bio2",
  "유체IV-유연II-화학III": "Fluid4Flex2Chem3",
  "유체IV-유연II-화학III / 좌장: 하지환(한밭대), 이도환(광운대)": "Fluid4Flex2Chem3",
  "포스터발표FP-III": "PosterFP3",
  "포스터발표FP-III (계속)": "PosterFP3Cont",
  "특별세션III (신진과학자 세션)": "SS3",
  "2025 MNS 학술상 수상 기념 강연": "AwardLecture",
  "우수논문 시상 및 폐회식": "ClosingAwards"
};

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
            { name: "튜토리얼 I", room: "203", note: "", talks: [{kind: "", title: "금속-유기 구조체: 나노에서 마이크로까지",
      speaker_affil: "고려대학교",speaker_name: "김현욱 교수", pdf: "pdf/hyunkim.pdf"}] },
            { name: "튜토리얼 II", room: "201A", note: "", talks: [{kind: "", title: "유체소자 개발을 위한 전통적/비전통적 마이크로/나노구조 제작",
      speaker_affil: "전남대학교",speaker_name: "배주열 교수", pdf: "pdf/배주열.pdf"}] },
            { name: "튜토리얼 III", room: "201B", note: "", talks: [{kind: "", title: "저차원 나노미터 공간에서의 물질 전달 현상",
      speaker_affil: "포항공과대학교",speaker_name: "박형규 교수", pdf: "pdf/박형규.pdf"}] }
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
            { name: "튜토리얼IV", room: "203", note: "", talks: [{kind: "", title: "3차원 Rhino SW를 이용한 논문/과제 삽화 도식화의 개념과 전략",
      speaker_affil: "고려대학교",speaker_name: "유용상 교수", pdf: "pdf/yongyou.pdf"}] }
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
            { name: "유체I / 좌장: 이충엽(경희대), 김승호(부산대)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 5편", talks: [
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
          speaker_name: "아드마스 다그나츄 테메스젠",
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
            { name: "소재, 가공, 패키징I / 좌장: 이상훈(DGIST), 홍찬화(ETRI)", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 5편", talks: [
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
          title: "Self-Regulated Photosynthesis Assistance System Using MXene-Based Multifunctional Sensors and Micro-LED Arrays",
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
            { name: "메디컬I / 좌장: 이강주(인천대), 이준(성균관대)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 5편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "14:40~15:00",
          title: "Laser Microfabrication Enabling Immune-Stealth and Soft Bioelectronic Implants",
          speaker_affil: "한국과학기술연구원",
          speaker_name: "전호정 박사",
          pdf: "pdf/D1_Medical1_INV_01.pdf"
        },

        // 일반 구두발표(Oral)
        {
          kind: "Oral",
          time: "15:00~15:12",
          title: "최소 침습적 뇌 신호 모니터링을 위한 고밀도 미세 유연 두개골 전극",
          speaker_affil: "성균관대학교",
          speaker_name: "이혜원",
          pdf: "pdf/D1_Medical1_O_01.pdf"
        },
        {
          kind: "Oral",
          time: "15:12~15:24",
          title: "아조벤젠 엘라스토머 필름을 이용한 원격 마이크로니들 약물 전달 시스템 개발",
          speaker_affil: "부경대학교",
          speaker_name: "김난경",
          pdf: "pdf/D1_Medical1_O_02.pdf"
        },
        {
          kind: "Oral",
          time: "15:24~15:36",
          title: "Hybrid Flexible-Rigid Neural Probe for Chronic Recording of Neural Signals with Reduced Tissue Damage",
          speaker_affil: "고려대학교",
          speaker_name: "조이아 나움키나",
          pdf: "pdf/D1_Medical1_O_03.pdf"
        },
        {
          kind: "Oral",
          time: "15:36~15:48",
          title: "A Natural-Biomaterial Microneedle Patch for Rapid Hemostasis and Wet-Tissue Adhesion",
          speaker_affil: "인천대학교",
          speaker_name: "김도훈",
          pdf: "pdf/D1_Medical1_O_04.pdf"
        },
        {
          kind: "Oral",
          time: "15:48~16:00",
            title: "Pre-snapback Mode Operation of CMUT for Enhanced Acoustic Performance",
          speaker_affil: "한국과학기술원",
          speaker_name: "박세영",
          pdf: "pdf/D1_Medical1_O_05.pdf"
        }
        ]
 },
            { name: "화학I / 좌장: 강윤성(경북대), 김경훈(성균관대)", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 5편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "14:40~15:00",
          title: "Current and Emerging Sensors for Per- and PolyFluoroalkyl Substances (PFAS) Sensing in Aqueous Systems",
          speaker_affil: "성균관대학교",
          speaker_name: "김경훈 교수",
          pdf: "pdf/D1_Chem1_INV_01.pdf"
        },

        // 일반 구두발표(Oral)
        {
          kind: "Oral",
          time: "15:00~15:12",
          title: "Diffusion-induced Stress and Mechanical Degradation in Alloy-type Nanoparticle Anodes for High-performance Lithium-ion Batteries",
          speaker_affil: "한국과학기술원",
          speaker_name: "Thi Thu Phuong Vu",
          pdf: "pdf/D1_Chem1_O_01.pdf"
        },
        {
          kind: "Oral",
          time: "15:12~15:24",
          title: "고민감 뇌척수액 비루 진단을 위한 금@은 나노기둥 구조 기반 인공지능 접목 SERS 플랫폼 개발",
          speaker_affil: "성균관대학교",
          speaker_name: "박현준",
          pdf: "pdf/D1_Chem1_O_02.pdf"
        },
        {
          kind: "Oral",
          time: "15:24~15:36",
          title: "Multimodal Biosensor Patch with Sphere-Shaped NPC-Supported Ti₃C₂Tx Heterostructures on Laser-Induced Graphene for Wearable Sweat Monitoring",
          speaker_affil: "광운대학교",
          speaker_name: "아부다스 사마드",
          pdf: "pdf/D1_Chem1_O_03.pdf"
        },
        {
          kind: "Oral",
          time: "15:36~15:48",
          title: "금속 산화물 가스 센서를 기반으로 한 고습도 수소 환경에서의 상온 고속 산소 모니터링 시스템",
          speaker_affil: "한국과학기술원",
          speaker_name: "권영재",
          pdf: "pdf/D1_Chem1_O_04.pdf"
        },
        {
          kind: "Oral",
          time: "15:48~16:00",
            title: "플라스몬 유도 반응을 활용한 표면 플라스몬 폴라리톤의 전파길이 특성화",
          speaker_affil: "포항공과대학교",
          speaker_name: "이장호",
          pdf: "pdf/D1_Chem1_O_05.pdf"
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
       { name: "특별세션I (기술사업화 역량) / 좌장: 이대식(ETRI)", room: "영주홀A", note: "초청강연 3편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "16:15~16:35",
          title: "Fusion and hybrid bonding – past, present and future",
          speaker_affil: "EVG코리아",
          speaker_name: "윤영식 대표",
          noPdf: true
          //pdf: ""
        },
          {
          kind: "Invited",
          time: "16:35~16:55",
          title: "Microfluidic Intracellular Delivery Platforms: Advancements, Applications, and Commercialization",
          speaker_affil: "MxT Biotech / 고려대학교",
          speaker_name: "정아람 교수",
          noPdf: true
          //pdf: ""
        },
              {
          kind: "Invited",
          time: "16:55~17:15",
          title: "스스로 청소하는 똑똑한 유리(SCG)로 세상을 바꾼다!",
          speaker_affil: "마이크로시스템 / 명지대학교",
          speaker_name: "정상국 교수",
          noPdf: true
                //pdf: ""
        }]
              },  { name: "포스터WP-I", room: "백록홀", note: "일반 포스터발표 124편\n좌장: 유재형(중앙대), 장두준(성균관대), 임종경(가천대), 안중호(성균관대), 박승현(부경대), 배주열(전남대), 김민구(연세대), 이응복(전남대)", pdfBundle: "pdf/poster/poster_WP-I.pdf", talks: [] }
          ]
        },
        {
          time: "17:15~17:55",
          sessions: [
            { name: "포스터WP-I (계속)", room: "백록홀", note: "일반 포스터발표 124편\n좌장: 유재형(중앙대), 장두준(성균관대), 임종경(가천대), 안중호(성균관대), 박승현(부경대), 배주열(전남대), 김민구(연세대), 이응복(전남대)", pdfBundle: "pdf/poster/poster_WP-I.pdf", talks: [] }
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
            { name: "신진연구자 환영회", room: "숙성돈가 제주중문본점", talks: [] }
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
            { name: "물리I / 좌장: 조은환(금오공대), 표순재(서울과기대)", room: "이벤트홀A", note: "초청강연 1편, 일반 구두발표 3편", talks: [] },
            { name: "융복합I-메디컬II / 좌장: 서민호(부산대), 유성광(인제대)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 3편", talks: [] }
          ]
        },
        { time: "08:56~09:10", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "09:10~09:30", sessions: [ { name: "개회식", room: "이벤트홀A", talks: [] } ] },
        { time: "09:30~10:10", sessions: [ { name: "기조강연I / 좌장: 이정철(한국과학기술원)", room: "이벤트홀A", Note: "", talks: [{kind: "Invited", title: "Spatial & Physical AI: Empowering the Future of Smart Cities",
      speaker_affil: "네이버랩스", speaker_name: "차재원 PM", noPdf: true}] } ] },
        { time: "10:10~11:00", sessions: [ { name: "기조강연II / 좌장: 류원형(연세대)", room: "이벤트홀A", Note: "", Note: "", talks: [{kind: "Invited", title: "로봇 기술의 발전과 활용",
      speaker_affil: "성균관대학교", speaker_name: "문형필 교수", noPdf: true}] } ] },
        { time: "11:00~11:15", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "11:15~12:23",
          sessions: [
            { name: "물리II-소재, 가공, 패키징II / 좌장: 김회준(DGIST), 이한얼(GIST)", room: "이벤트홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "유체II / 좌장: 김원정(연세대), 전형국(서울과기대)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "12:23~13:20", sessions: [ { name: "점심식사 및 전시부스 참관", room: "전시장", talks: [] } ] },
        { time: "13:20~13:50", sessions: [ { name: "특별세션II (삼성미래기술육성사업 설명회) / 좌장: 조일주(고려대)", room: "영주홀A", talks: [{kind: "Invited", title: "삼성미래기술육성사업 사업설명회",
      speaker_affil: "삼성전자 미래기술육성센터", speaker_name: "조승희 PD", noPdf: true}] } ] },
        {
          time: "13:50~14:58",
          sessions: [
            { name: "바이오I / 좌장: 이현주(KAIST), 이대식(ETRI)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "유연I / 좌장: 박인규(KAIST), 안준성(고려대)", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "14:58~15:15", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "15:15~16:23",
          sessions: [
            { name: "유체III / 좌장: 이종완(군산대), 김민석(금오공대)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "소재, 가공, 패키징III / 좌장: 옥종걸(서울과기대), 이재홍(DGIST)", room: "영주홀B", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "16:23~16:40", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "16:40~17:40",
          sessions: [
            { name: "특별세션III (연구 역량) / 좌장: 정기훈(KAIST)", room: "영주홀A", note: "초청강연 2편", talks: [
        // 초청강연(Invited)
        {
          kind: "Invited",
          time: "16:40~17:20",
          title: "국가연구개발사업 활성화 방안 및 연구지원 정책: 기초연구 중심으로",
          speaker_affil: "한국연구재단 기초연구본부",
          speaker_name: "이혁모 본부장",
          noPdf: true
        },
              {
          kind: "Invited",
          time: "17:20~17:40",
          title: "한국연구재단 연구과제 수주 전략과 선정사례 분석",
          speaker_affil: "국민대학교",
          speaker_name: "임시형 교수",
          noPdf: true
        }] },  { name: "포스터발표TP-II", room: "백록홀", note: "일반 포스터발표 90편\n좌장: 노윤수(UNIST), 박종철(NNFC), 박정환(금오공대), 김윤갑(GERI), 양다솜(중앙대), 최은표(서강대), 김해진(연세대), 안재혁(충남대)\nFocused 포스터발표 34편\n좌장: 임미경(중앙대)", pdfBundle: "pdf/poster/poster_TP-II.pdf", talks: [] }
          ]
        },
        {
          time: "17:40~18:20",
          sessions: [
            { name: "포스터발표TP-II (계속)", room: "백록홀", note: "일반 포스터발표 90편\n좌장: 노윤수(UNIST), 박종철(NNFC), 박정환(금오공대), 김윤갑(GERI), 양다솜(중앙대), 최은표(서강대), 김해진(연세대), 안재혁(충남대)\nFocused 포스터발표 34편\n좌장: 임미경(중앙대)", pdfBundle: "pdf/poster/poster_TP-II.pdf", talks: [] }
          ]
        },
        { time: "18:20~18:30", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "18:30~20:30", sessions: [ { name: "만찬(기업소개)", room: "탐라홀", talks: [] } ] }
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
            { name: "유체IV-유연II-화학III / 좌장: 하지환(한밭대), 이도환(광운대)", room: "이벤트홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] },
            { name: "바이오II / 좌장: 정현호(GIST), 이소민(경희대)", room: "영주홀A", note: "초청강연 1편, 일반 구두발표 4편", talks: [] }
          ]
        },
        { time: "09:08~09:20", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        {
          time: "09:20~10:20",
          sessions: [
            { name: "특별세션IV (신진과학자) / 좌장: 김태성(UNIST), 김준원(포항공대)", room: "영주홀A", note: "초청강연 4편", talks: [
    {
      kind: "Special",
      time: "09:20~09:35",
      title: "96-Puddle Paper Plate: A Scalable Lab-on-Paper System for On-Site Sensing and Analysis",
      speaker_affil: "고려대학교",
      speaker_name: "이태하 교수",
      noPdf: true
      //pdf: "pdf/D3_SS3_01.pdf"
    },
    {
      kind: "Special",
      time: "09:35~09:50",
      title: "Carbon Nanotube Integration for Flexible and Stretchable Electronic Applications",
      speaker_affil: "연세대학교",
      speaker_name: "심상준 교수",
      noPdf: true
      //pdf: "pdf/D3_SS3_02.pdf"
    },
    {
      kind: "Special",
      time: "09:50~10:05",
      title: "Structural Designs of Triboelectric Material for High-Performance Soft Electronics and Neuromorphic Devices",
      speaker_affil: "한국화학융합시험연구원",
      speaker_name: "박용진 박사",
      noPdf: true
      //pdf: "pdf/D3_SS3_03.pdf"
    },
    {
      kind: "Special",
      time: "10:05~10:20",
      title: "Wireless, Spatially-atched Optoelectronic Neural Interfaces for Simultaneous Optogenetics and Electrophysiology",
      speaker_affil: "한국과학기술원",
      speaker_name: "이주현 박사",
      noPdf: true
      //pdf: "pdf/D3_SS3_04.pdf"
    }
  ]
 },  { name: "포스터발표FP-III", room: "백록홀", note: "일반 포스터발표 86편\n좌장: 황순홍(강원대), 김인기(성균관대), 김현수(광운대), 한성연(경북대), 고광준(조선대), 최정일(아주대), 조인철(한국공학대), 박종성(경북대)\n학부생 포스터발표 38편\n좌장: 최영수(광주대)", pdfBundle: "pdf/poster/poster_FP-III.pdf", talks: [] }
          ]
        },
        {
          time: "10:20~11:00",
          sessions: [
            { name: "포스터발표FP-III (계속)", room: "백록홀", note: "일반 포스터발표 86편\n좌장: 황순홍(강원대), 김인기(성균관대), 김현수(광운대), 한성연(경북대), 고광준(조선대), 최정일(아주대), 조인철(한국공학대), 박종성(경북대)\n학부생 포스터발표 38편\n좌장: 최영수(광주대)", pdfBundle: "pdf/poster/poster_FP-III.pdf", talks: [] }
          ]
        },
        { time: "11:00~11:10", sessions: [ { name: "휴식 및 이동", room: "로비", talks: [] } ] },
        { time: "11:10~11:40", sessions: [ { name: "2025 MNS 학술상 수상 기념 강연 / 좌장: 윤광석(서강대)", room: "이벤트홀A", talks: [{kind: "Invited", title: "질병 치료 및 진단을 위한 마이크로니들 기술",
      speaker_affil: "연세대학교",
      speaker_name: "류원형 교수", noPdf: true}] } ] },
        { time: "11:40~12:00", sessions: [ { name: "폐회식 준비", room: "이벤트홀A", talks: [] } ] },
        { time: "12:00~12:30", sessions: [ { name: "우수논문 시상 및 폐회식", room: "이벤트홀A", talks: [] } ] }
      ]
    }
  ]
};

// === Oral sessions (from TPC excel: 2026-02-19) ===
const ORAL_TIMEBLOCKS_BY_DATE = {
  "2026-03-25": [
    {
      "time": "13:00~14:20",
      "sessions": [
        {
          "name": "유체 I",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Raman Flow Cytometry for Single-Cell Microbial Functional Phenotyping",
              "speaker_name": "이강수 교수",
              "speaker_affil": "울산과학기술원",
              "kind": "Invited"
            },
            {
              "id": "KMEMS23-006",
              "time": "",
              "title": "귀 외이 구조 모사 모세관 기반 mTBI 센싱 미세유체칩 개발",
              "speaker_name": "정종수",
              "speaker_affil": "부산대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-046",
              "time": "",
              "title": "Ionic-Conductance-Enhanced Nanofluidic Memristor for Reservoir Computing",
              "speaker_name": "곽성열",
              "speaker_affil": "서울대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-061",
              "time": "",
              "title": "Microfluidic Cell-viability Monitoring Device for 3D Bioprinted Tissue",
              "speaker_name": "아드마스다그나츄테메스젠",
              "speaker_affil": "명지대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-065",
              "time": "",
              "title": "GNR-CNC 복합필름 대면적 제조 공정을 통한 유연광열소자 응용",
              "speaker_name": "국윤혁",
              "speaker_affil": "한국과학기술원",
              "kind": ""
            }
          ]
        },
        {
          "name": "패키징 I",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Highly Anisotropic 2D van der Waals Materials for Scalable Micro/Nano Systems",
              "speaker_name": "조준현",
              "speaker_affil": "전북대학교",
              "kind": "Invited"
            },
            {
              "id": "KMEMS23-006",
              "time": "",
              "title": "레이저 어닐링 기반 나노 스케일 스텐실 박막의 제작과 스텐실 리소그래피를 통한 금속 패터닝",
              "speaker_name": "민두홍",
              "speaker_affil": "한국과학기술원",
              "kind": ""
            },
            {
              "id": "KMEMS23-046",
              "time": "",
              "title": "Poisson Effect-Assisted Replication Lithography for 3D Microstructure Fabrication",
              "speaker_name": "김민수",
              "speaker_affil": "경북대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-061",
              "time": "",
              "title": "금형 공정 기반 다중구조 CNP–PDMS 표면의 초발수 및 광열 특성을 이용한 에너지 하베스팅",
              "speaker_name": "이영석",
              "speaker_affil": "국민대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-065",
              "time": "",
              "title": "Fabrication of Aerogel-Based Transparent Haze Films for Advanced Optical Applications",
              "speaker_name": "이경완",
              "speaker_affil": "중앙대학교",
              "kind": ""
            }
          ]
        }
      ]
    },
    {
      "time": "14:40~16:00",
      "sessions": [
        {
          "name": "메디컬 I",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Microsystems for Next-Generation Digital Healthcare",
              "speaker_name": "최정원",
              "speaker_affil": "서울대학교",
              "kind": "Invited"
            },
            {
              "id": "KMEMS23-005",
              "time": "",
              "title": "암 치료용 나노기공 기반 마이크로니들 패치의 제조 및 약물 전달 성능 평가",
              "speaker_name": "김다은",
              "speaker_affil": "연세대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-038",
              "time": "",
              "title": "자기장 구동식 마이크로로봇을 이용한 표적 약물 전달 시스템",
              "speaker_name": "이상훈",
              "speaker_affil": "고려대학교",
              "kind": ""
            },
            {
              "id": "KMEMS23-041",
              "time": "",
              "title": "웨어러블 바이오센서를 위한 유연기판 기반 미세전극 어레이 개발",
              "speaker_name": "박지훈",
              "speaker_affil": "성균관대학교",
              "kind": ""
            }
          ]
        },
        {
          "name": "화학 I",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Micro/Nano Systems for Advanced Chemical Sensing",
              "speaker_name": "이성우",
              "speaker_affil": "한양대학교",
              "kind": "Invited"
            },
            {
              "id": "KMEMS23-012",
              "time": "",
              "title": "고감도 가스 센서를 위한 나노구조 금속산화물 박막 공정",
              "speaker_name": "김현수",
              "speaker_affil": "POSTECH",
              "kind": ""
            }
          ]
        }
      ]
    }
  ],

  "2026-03-26": [
    {
      "time": "08:00~08:56",
      "sessions": [
        {
          "name": "유체 II",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Microfluidics for Next-Generation Lab-on-a-Chip Systems",
              "speaker_name": "김태현",
              "speaker_affil": "서울대학교",
              "kind": "Invited"
            }
          ]
        },
        {
          "name": "패키징 II",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Advanced Packaging Technologies for Micro/Nano Systems",
              "speaker_name": "정우성",
              "speaker_affil": "성균관대학교",
              "kind": "Invited"
            }
          ]
        }
      ]
    },
    {
      "time": "09:08~10:16",
      "sessions": [
        {
          "name": "유연 I",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Flexible and Wearable Microsystems: Materials to Systems",
              "speaker_name": "박지영",
              "speaker_affil": "연세대학교",
              "kind": "Invited"
            }
          ]
        },
        {
          "name": "바이오 I",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Bio-MEMS and Organ-on-a-Chip for Precision Medicine",
              "speaker_name": "김민정",
              "speaker_affil": "한국과학기술원",
              "kind": "Invited"
            }
          ]
        }
      ]
    },
    {
      "time": "10:24~11:32",
      "sessions": [
        {
          "name": "화학 II",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Chemical Microsystems: From Sensors to Integrated Platforms",
              "speaker_name": "이준호",
              "speaker_affil": "UNIST",
              "kind": "Invited"
            }
          ]
        },
        {
          "name": "메디컬 II",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Microsystems for Diagnosis and Therapy",
              "speaker_name": "류원형",
              "speaker_affil": "서울대학교",
              "kind": "Invited"
            }
          ]
        }
      ]
    }
  ],

  "2026-03-27": [
    {
      "time": "08:00~09:08",
      "sessions": [
        {
          "name": "바이오 II",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Wearable Mechanical Interfaces for Neural Interfaces and Digital Healthcare",
              "speaker_name": "하경호",
              "speaker_affil": "한국과학기술원",
              "kind": "Invited"
            }
          ]
        },
        {
          "name": "유체 IV, 유연 II, 화학 III",
          "room": "",
          "talks": [
            {
              "id": "",
              "time": "",
              "title": "Light-Material Interaction Technologies for Wearable and Smart Electronic Systems",
              "speaker_name": "박정환",
              "speaker_affil": "금오공과대학교",
              "kind": "Invited"
            }
          ]
        }
      ]
    }
  ]
};

/* =========================================================
   Patch talks into existing APP_DATA (no concat, no new blocks)
========================================================= */

function fillTalks(date, time, sessionName, talks) {
  const day = APP_DATA.days.find(d => d.date === date);
  if (!day) return;

  const block = (day.timeBlocks || []).find(b => (b.time || '').trim() === time);
  if (!block) return;

  const sess = (block.sessions || []).find(s => (s.name || '').trim() === sessionName);
  if (!sess) return;

  // 이미 내용 있으면 덮어쓰지 않음
  if (Array.isArray(sess.talks) && sess.talks.length > 0) return;

  sess.talks = talks;
}

/* =========================================================
   Day 2 (2026-03-26) — Oral details from Excel
========================================================= */

// 08:00~08:56  융복합I-메디컬II
fillTalks("2026-03-26", "08:00~08:56", "융복합I-메디컬II / 좌장: 서민호(부산대), 유성광(인제대)", [
  { kind: "Invited", time: "08:00~08:20", title: "Pd-catalyzed SnO₂/ZnO Heterojunction Hydrogen Sensor Enabling Wide-range Detection via Hydrogen-Induced Metal-Like Conduction", speaker_affil: "부산대학교", speaker_name: "정대웅 교수" },
  { kind: "Oral",    time: "08:20~08:32", title: "비침습적 시간 간섭 기반의 선택적 뇌심부 자극을 위한 MEMS 기반 유연 전극 어레이와 임피던스 적응 형 폐루프 무선 시스템", speaker_affil: "고려대학교", speaker_name: "차지형" },
  { kind: "Oral",    time: "08:32~08:44", title: "빠른 포도당 검출을 위한 광 시냅틱 트랜지스터 기반 센서", speaker_affil: "서강대학교", speaker_name: "류승표" },
  { kind: "Oral",    time: "08:44~08:56", title: "만성 신경 질환 치료를 위한 장시간 구동 가능한 온도센서 집적된 소프트 마이크로유체 냉각 소자", speaker_affil: "부산대학교", speaker_name: "권효경" }
]);

// 08:00~08:56  물리I
fillTalks("2026-03-26", "08:00~08:56", "물리I / 좌장: 조은환(금오공대), 표순재(서울과기대)", [
  { kind: "Invited", time: "08:00~08:20", title: "Micro- and Nano-Devices for Tailoring Heat and Light", speaker_affil: "중앙대학교", speaker_name: "임미경 교수" },
  { kind: "Oral",    time: "08:20~08:32", title: "Dummy Trench 설계에 따른 SiC Trench MOSFET의 전계 재분포와 항복 특성 분석", speaker_affil: "전북대학교", speaker_name: "이동석" },
  { kind: "Oral",    time: "08:32~08:44", title: "F-Fe-MOF Functionalized PVDF-HFP Nanofibrous Mats-based Triboelectric Nanogenerator for Self-Powered Respiratory Rehabilitation Monitoring", speaker_affil: "광운대학교", speaker_name: "소피울" },
  { kind: "Oral",    time: "08:44~08:56", title: "Silicon Nanohelices for Chiral Plasmonic in Ultraviolet", speaker_affil: "광주과학기술원", speaker_name: "김주환" }
]);

// 11:15~12:23  유체II
fillTalks("2026-03-26", "11:15~12:23", "유체II / 좌장: 김원정(연세대), 전형국(서울과기대)", [
  { kind: "Invited", time: "11:15~11:35", title: "Hydrodynamics and Interfaces: Microbial Motility and Antifouling Surface Design", speaker_affil: "경희대학교", speaker_name: "이충엽 교수" },
  { kind: "Oral",    time: "11:35~11:47", title: "A Novel Resistive Pulse Sensing Using Tunable Micro-/Nanopores for Analyte Size Characterization", speaker_affil: "울산과학기술원", speaker_name: "서동우" },
  { kind: "Oral",    time: "11:47~11:59", title: "표면파 유도 음향흐름유동 기반 고속 생화학 마이크로바이오리액터 개발", speaker_affil: "전남대학교", speaker_name: "차범석" },
  { kind: "Oral",    time: "11:59~12:11", title: "µPIV-assisted Optimization of Operating Conditions and Device Geometry for a Microfluidic Cavitation-microstreaming DNA Extractor", speaker_affil: "명지대학교", speaker_name: "케드르 소포니아스 눌세파" },
  { kind: "Oral",    time: "12:11~12:23", title: "Physical AI를 위한 투명 히터 기반의 능동형 자가세정 시스템", speaker_affil: "명지대학교", speaker_name: "김영광" }
]);

// 11:15~12:23  물리II-소재, 가공, 패키징II
fillTalks("2026-03-26", "11:15~12:23", "물리II-소재, 가공, 패키징II / 좌장: 김회준(DGIST), 이한얼(GIST)", [
  { kind: "Invited", time: "11:15~11:35", title: "Bidirectional Neural Interfaces for Neuroprosthesis and Electroceuticals", speaker_affil: "한국과학기술연구원", speaker_name: "김진석 박사" },
  { kind: "Oral",    time: "11:35~11:47", title: "리간드 치환 CISe 양자점 집적에 따른 실리콘 포토다이오드의 광응답 특성 개선", speaker_affil: "전북대학교", speaker_name: "이지훈" },
  { kind: "Oral",    time: "11:47~11:59", title: "All-Optical PCR using Microspectrometer for Real-time Temperature and Multiplex Amplification Monitoring", speaker_affil: "한국과학기술원", speaker_name: "김기범" },
  { kind: "Oral",    time: "11:59~12:11", title: "고종횡비 실리콘 매크로포어 어레이 및 3차원 미세구조 제작을 위한 광여기 제어 전기화학 식각", speaker_affil: "한국과학기술원", speaker_name: "민두홍" },
  { kind: "Oral",    time: "12:11~12:23", title: "Self-Powered Omnidirectional Pressure Sensing Smart Ball Sensor for Hand Rehabilitation Monitoring", speaker_affil: "광운대학교", speaker_name: "Shital Sharma" }
]);

// 13:50~14:58  바이오I
fillTalks("2026-03-26", "13:50~14:58", "바이오I / 좌장: 이현주(KAIST), 이대식(ETRI)", [
  { kind: "Invited", time: "13:50~14:10", title: "Tunable Photonics based on Ultra-thin Films for Biosensing", speaker_affil: "한국과학기술원", speaker_name: "송영민 교수" },
  { kind: "Oral",    time: "14:10~14:22", title: "Optimization of Electrical Stimulation for Cardiomyocyte Maturation Based on Long-Term Wireless Monitoring", speaker_affil: "전남대학교", speaker_name: "유극" },
  { kind: "Oral",    time: "14:22~14:34", title: "양방향 신경 조절을 위한 마이크로 LED 집적 투명 표면 ECoG 센서 어레이", speaker_affil: "한국과학기술원", speaker_name: "리옹지아치" },
  { kind: "Oral",    time: "14:34~14:46", title: "Development of Wireless MEMS-Based Neural Probe System for Simultaneous Measurement of Electrical and Chemical Signals", speaker_affil: "고려대학교", speaker_name: "김근태" },
  { kind: "Oral",    time: "14:46~14:58", title: "MOF-Derived Transition-Metal Carbide@Polypyrrole Nanohybrids for a Highly Sensitive and Stretchable Multimodal Sweat-Sensing Patch", speaker_affil: "광운대학교", speaker_name: "자히둘 이슬람" }
]);

// 13:50~14:58  유연I
fillTalks("2026-03-26", "13:50~14:58", "유연I / 좌장: 박인규(KAIST), 안준성(고려대)", [
  { kind: "Invited", time: "13:50~14:10", title: "초고감도 금 도핑 실리콘 나노멤브레인 기반 온도 센서", speaker_affil: "가천대학교", speaker_name: "상민규 교수" },
  { kind: "Oral",    time: "14:10~14:22", title: "비침습적 다종 암 스크리닝을 위한 멀티모달 호기 패턴 기반 계층적 딥러닝 모델", speaker_affil: "한국전자통신연구원", speaker_name: "이병주" },
  { kind: "Oral",    time: "14:22~14:34", title: "Versatile Water-Floated Nanostructure for Three-Dimensional Nanotransfer Printing", speaker_affil: "한국과학기술원", speaker_name: "강병호" },
  { kind: "Oral",    time: "14:34~14:46", title: "인간수준 고밀도-고해상도 촉각센서 기반 적응형 시-촉각 융합 및 로봇 인지 기술", speaker_affil: "연세대학교", speaker_name: "박병선" },
  { kind: "Oral",    time: "14:46~14:58", title: "Sustainable Fiber-based Electronic Systems Enabled by Highly Conductive, Deformation-Invariant Biodegradable Fiber Electrodes", speaker_affil: "대구경북과학기술원", speaker_name: "김진호" }
]);

// 15:15~16:23  유체III
fillTalks("2026-03-26", "15:15~16:23", "유체III / 좌장: 이종완(군산대), 김민석(금오공대)", [
  { kind: "Invited", time: "15:15~15:35", title: "회전환 증폭을 응용한 혈액 종양 순환 DNA 및 마이크로 RNA의 민감 액체 생검 전략", speaker_affil: "금오공과대학교", speaker_name: "류준석 교수" },
  { kind: "Oral",    time: "15:35~15:47", title: "뉴턴 및 점탄성 유체 공동흐름을 이용한 박테리아 제거", speaker_affil: "전남대학교", speaker_name: "김현욱" },
  { kind: "Oral",    time: "15:47~15:59", title: "Wrinkle-Assisted Nanofluidic Memristors for Tunable Ionic Memory and Neuromorphic Learning", speaker_affil: "울산과학기술원", speaker_name: "권민수" },
  { kind: "Oral",    time: "15:59~16:11", title: "Low-Voltage Slippery Microbubble Manipulation Using Dual High-k and Lubricating Layers for Ultrasound Modulation", speaker_affil: "한국과학기술원", speaker_name: "김수빈" },
  { kind: "Oral",    time: "16:11~16:23", title: "In-situ Visualization of Surfactant-regulated Marangoni Flow during Polymer Membrane Formation at Immiscible Liquid-liquid Interface", speaker_affil: "한국과학기술원", speaker_name: "류준일" }
]);

// 15:15~16:23  소재, 가공, 패키징III
fillTalks("2026-03-26", "15:15~16:23", "소재, 가공, 패키징III / 좌장: 옥종걸(서울과기대), 이재홍(DGIST)", [
  { kind: "Invited", time: "15:15~15:35", title: "Human-Heat Interface and Its Applications in Wearable Technology", speaker_affil: "동국대학교", speaker_name: "이진우 교수" },
  { kind: "Oral",    time: "15:35~15:47", title: "Multilayer Sticker-type Anti-reflective Film for High-efficiency Optoelectronic Devices", speaker_affil: "서강대학교", speaker_name: "최지성" },
  { kind: "Oral",    time: "15:47~15:59", title: "Smart Glasses for Binocular Monitoring using High-speed Off-axis Microlens Array Camera", speaker_affil: "한국과학기술원", speaker_name: "권재명" },
  { kind: "Oral",    time: "15:59~16:11", title: "Mediator-free Ether Transfer of Discrete and Coalesced Silicon Nanostructures", speaker_affil: "한국과학기술원", speaker_name: "김태영" },
  { kind: "Oral",    time: "16:11~16:23", title: "이중 가교 전략을 통한 고하중 지지 및 가변 강성 기반의 재구성 가능한 자성 소프트 인공 근육", speaker_affil: "울산과학기술원", speaker_name: "권혁주" }
]);

/* =========================================================
   Day 3 (2026-03-27) — Oral details from Excel
========================================================= */

// 08:00~09:08  바이오II
fillTalks("2026-03-27", "08:00~09:08", "바이오II / 좌장: 정현호(GIST), 이소민(경희대)", [
  { kind: "Invited", time: "08:00~08:20", title: "Wearable Mechanical Interfaces for Neural Interfaces and Digital Healthcare", speaker_affil: "한국과학기술원", speaker_name: "하경호 교수" },
  { kind: "Oral",    time: "08:20~08:32", title: "A V₂CTx-MXene@f-MWCNTs Epidermal Patch for Sweat Glucose and Ketone Monitoring", speaker_affil: "광운대학교", speaker_name: "조후룰 이슬람" },
  { kind: "Oral",    time: "08:32~08:44", title: "A Droplet-based Microfluidic Screening System for the Discovery of Slow-growing and Novel Microbes in Environmental Samples", speaker_affil: "광운대학교", speaker_name: "오별님" },
  { kind: "Oral",    time: "08:44~08:56", title: "A Through-Hole Cantilever Platform Integrated with Silicon Strain Sensors for Physiologically Relevant Double-Layer Cardiomyocytes Culture and Monitoring", speaker_affil: "전남대학교", speaker_name: "Fusong Li" },
  { kind: "Oral",    time: "08:56~09:08", title: "전혈 기반 NK세포 분리를 위한 미세유체 면역자기 플랫폼", speaker_affil: "고려대학교 세종캠퍼스", speaker_name: "한해희" }
]);

// 08:00~09:08  유체IV-유연II-화학III
fillTalks("2026-03-27", "08:00~09:08", "유체IV-유연II-화학III / 좌장: 하지환(한밭대), 이도환(광운대)", [
  { kind: "Invited", time: "08:00~08:20", title: "Light-Material Interaction Technologies for Wearable and Smart Electronic Systems", speaker_affil: "금오공과대학교", speaker_name: "박정환 교수" },
  { kind: "Oral",    time: "08:20~08:32", title: "미세 유동의 토출량 측정을 위한 MEMS 기반의 열량식 유량 센서 시스템", speaker_affil: "아주대학교", speaker_name: "이기용" },
  { kind: "Oral",    time: "08:32~08:44", title: "Analysis of Electroconvection near Ion-Selective Membranes in Non-Newtonian Fluids", speaker_affil: "서울대학교", speaker_name: "김동현" },
  { kind: "Oral",    time: "08:44~08:56", title: "전기화학 기반 나노플라스틱 검출 센서 개발", speaker_affil: "성균관대학교", speaker_name: "김치현" },
  { kind: "Oral",    time: "08:56~09:08", title: "웨어러블 촉각 디스플레이를 위한 강-연성 구조 기반 인장 둔감형 전기유체역학 액추에이터", speaker_affil: "연세대학교", speaker_name: "조승인" }
]);

function dayNoFromDate_(dateStr) {
  if (dateStr === "2026-03-25") return 1;
  if (dateStr === "2026-03-26") return 2;
  if (dateStr === "2026-03-27") return 3;
  return 0;
}

function typeCode_(kind) {
  const k = String(kind || "").toLowerCase();
  if (k === "invited") return "INV";
  if (k === "special") return "SP";
  return "O"; // 기본은 Oral
}

function dayNoFromDate_(dateStr) {
  if (dateStr === "2026-03-25") return 1;
  if (dateStr === "2026-03-26") return 2;
  if (dateStr === "2026-03-27") return 3;
  return 0;
}

function typeCode_(kind) {
  const k = String(kind || "").toLowerCase();
  if (k === "invited") return "INV";
  if (k === "special") return "SP";
  return "O"; // 기본은 Oral
}

// ✅ Day1 포함 전부: pdf를 규칙대로 "무조건" 재생성(통일)
function autolinkPdf_({ overwrite = true } = {}) {
  for (const day of (APP_DATA.days || [])) {
    const dn = dayNoFromDate_(day.date);
    if (!dn) continue;

    for (const blk of (day.timeBlocks || [])) {
      for (const sess of (blk.sessions || [])) {
        const key = SESSION_KEY[sess.name];
        if (!key) continue;

        const talks = Array.isArray(sess.talks) ? sess.talks : [];

        // 세션 내에서 kind별 번호를 따로 매김
        let invN = 0, oralN = 0, spN = 0;

        for (const t of talks) {
          if (t.noPdf) {
            delete t.pdf;
            continue;
          }

          if (!overwrite && t.pdf) continue;
        
          const code = typeCode_(t.kind);

          let nInt = 0;
          if (code === "INV") nInt = ++invN;
          else if (code === "SP") nInt = ++spN;
          else nInt = ++oralN;

          const nn = String(nInt).padStart(2, "0");
          t.pdf = `pdf/D${dn}_${key}_${code}_${nn}.pdf`;
        }
      }
    }
  }
}

// ✅ 기본은 덮어쓰기 true
autolinkPdf_({ overwrite: true });
