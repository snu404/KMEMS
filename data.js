const APP_DATA = {
  days: [
    {
      label: "Day 1 (Wed)",
      date: "2026-03-25",
      sessions: [
        {
          name: "Session 1: Keynote",
          time: "09:00–10:30",
          room: "Hall A",
          talks: [
            {
              id: "D1-S1-01",
              time: "09:00",
              title: "Opening Keynote: Future of MEMS",
              authors: "J. Lee (KAIST)",
              keywords: ["MEMS", "Future"],
              pdf: "pdf/dummy.pdf"
            },
            {
              id: "D1-S1-02",
              time: "09:45",
              title: "Wafer-scale Platforms for ...",
              authors: "T. Kim et al.",
              keywords: ["wafer", "platform"],
              pdf: "pdf/D1_S1_02.pdf"
            }
          ]
        },
        {
          name: "Session 2: Poster Flash",
          time: "11:00–12:00",
          room: "Hall B",
          talks: [
            { id:"D1-S2-01", time:"11:00", title:"Poster Flash 1", authors:"A. Park", pdf:"pdf/D1_S2_01.pdf" },
          ]
        }
      ]
    },
    {
      label: "Day 2 (Thu)",
      date: "2026-03-26",
      sessions: [
        {
          name: "Session 3: Micro/Nano Fabrication",
          time: "09:00–10:30",
          room: "Hall A",
          talks: [
            { id:"D2-S3-01", time:"09:00", title:"Talk A", authors:"B. Choi", pdf:"pdf/D2_S3_01.pdf" },
          ]
        }
      ]
    },
    {
      label: "Day 3 (Fri)",
      date: "2026-03-27",
      sessions: [
        {
          name: "Session 4: Closing",
          time: "10:00–11:00",
          room: "Hall A",
          talks: [
            { id:"D3-S4-01", time:"10:00", title:"Closing Remarks", authors:"Org. Chair", pdf:"pdf/D3_S4_01.pdf" },
          ]
        }
      ]
    }
  ]
};
