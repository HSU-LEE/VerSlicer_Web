export const translations = {
  ko: {
    common: { copy: "복사", copied: "복사됨" },
    nav: {
      product: "제품",
      features: "기능",
      ecosystem: "생태계",
      install: "설치",
      wiki: "위키",
      download: "다운로드",
    },
    hero: {
      headline: "생각한 것을 바로 출력하세요.",
      lead: "VerSlicer는 OrcaSlicer를 기반으로 개발된 AI 통합 macOS 슬라이서입니다. 출력 품질, 강도, 배치와 같은 작업을 채팅이나 음성으로 요청하면 관련 설정을 적용하고 슬라이스까지 수행합니다. 출력 버튼은 언제나 직접 누릅니다.",
      motto: "더 적은 설정. 더 많은 제작.",
      downloadBtn: "다운로드",
      githubBtn: "GitHub",
      stats: ["macOS (Apple Silicon)", "ChatGPT 연동", "OrcaSlicer 기반", "음성 입력"],
    },
    vision: {
      title: "AI와 함께하는 새로운 3D 프린팅",
      steps: [
        {
          title: "모델 불러오기",
          desc: "STL·3MF를 열거나, 빈 플레이트에서 \"용 피규어 출력해줘\"라고 말해 MakerWorld에서 모델을 찾습니다.",
        },
        {
          title: "원하는 결과 입력하기",
          desc: "채팅이나 음성으로 \"더 튼튼하게\", \"45도 회전해\"처럼 말합니다. 설정 변경은 항상 확인 창을 거칩니다.",
        },
        {
          title: "슬라이스 후 출력",
          desc: "AI가 설정·배치·회전·슬라이스를 마치면, 화면의 Print with Bambu Connect 버튼을 직접 눌러 출력합니다.",
        },
      ],
    },
    results: {
      title: "원하는 결과를 말해보세요",
      desc: "전문 지식 없이 말하기만으로 출력 결과를 조정할 수 있습니다. 한국어와 영어 모두 지원합니다.",
      chatLabel: "AI Assistant",
      scrollHint: "옆으로 밀어 더 보기",
      items: [
        {
          title: "더 튼튼하게",
          desc: "벽 두께와 내부 채움 비율을 조정하여 강도를 높입니다.",
          example: "더 튼튼하게",
          reply: "벽 루프를 4개로, 인필을 30%로 높였습니다. 확인 후 적용해 주세요.",
        },
        {
          title: "더 깔끔하게",
          desc: "표면 품질을 개선하기 위한 출력 설정을 적용합니다.",
          example: "표면 더 매끄럽게",
          reply: "레이어 높이와 외벽 설정을 조정했습니다.",
        },
        {
          title: "MakerWorld에서 찾아 출력",
          desc: "빈 플레이트에서 모델을 검색·불러오기·메시 점검·슬라이스까지 진행합니다.",
          example: "용 피규어 출력해줘",
          reply: "MakerWorld에서 모델을 골라 슬라이스했습니다. 화면의 Print with Bambu Connect 버튼을 눌러 출력하세요.",
        },
        {
          title: "출력 실패 진단",
          desc: "프린터 오류 코드와 HMS 알림을 읽어 원인과 확인할 설정을 알려줍니다.",
          example: "출력이 실패했어",
          reply: "HMS 알림으로 보아 첫 레이어 접착 문제일 가능성이 큽니다. 베드 온도와 첫 레이어 속도를 확인해 보세요.",
        },
        {
          title: "자동 배치",
          desc: "플레이트 위 모델을 효율적으로 정리합니다.",
          example: "플레이트 정리해",
          reply: "플레이트 위 모델을 자동으로 정렬했습니다.",
        },
        {
          title: "되돌리기",
          desc: "마지막 AI 설정 변경을 한 번에 되돌립니다.",
          example: "방금 바꾼 거 되돌려",
          reply: "마지막 설정 변경을 되돌렸습니다.",
        },
      ],
    },
    localAi: {
      title: "내가 통제하는 안전한 AI",
      p1: "요청 내용과 플레이트 정보(모델 이름, 크기, 현재 설정)만 내 ChatGPT 계정으로 OpenAI에 전달됩니다. STL·3MF 모델 파일과 G-code는 전송되지 않으며, 처음 사용할 때 한 번 동의를 받습니다.",
      p2: "AI는 출력 작업을 프린터로 보내거나 형상을 만들지 않습니다. 등록된 동작만 실행되고, 설정·프리셋·내보내기·저장·삭제는 확인 창을 거칩니다. 로그인 정보는 이 Mac에만 저장되며 VerSlicer 서버는 없습니다.",
      points: [
        "모델 파일·G-code 전송 없음",
        "설정 변경 전 확인 창",
        "출력은 항상 사용자가 직접",
      ],
    },
    familiar: {
      title: "검증된 슬라이서 위에 구축된 AI",
      p1: "VerSlicer는 수많은 사용자가 검증한 OrcaSlicer를 기반으로 개발되었습니다. 캘리브레이션, 심·벽 제어, 서포트, 네트워크 프린터, 전체 프린터 프로필이 그대로 유지됩니다.",
      p2: "Bambu Lab 프린터는 Developer Mode 없이 Bambu Connect로 출력하고, 허용하면 AI가 노즐·베드·챔버 온도와 출력 속도를 프린터 한도 안에서 조절할 수 있습니다.",
      features: ["Preview", "Device", "Smart Print", "Bambu Connect", "MakerWorld"],
    },
    ecosystem: {
      title: "생태계",
      items: [
        {
          title: "OrcaSlicer",
          desc: "업계 최고 수준의 오픈소스 슬라이서 기반입니다.",
          href: "https://github.com/OrcaSlicer/OrcaSlicer",
        },
        {
          title: "ChatGPT",
          desc: "내 ChatGPT 계정(Plus·Pro)으로 AI 어시스턴트를 사용합니다.",
          href: "https://chatgpt.com/",
        },
        {
          title: "Bambu Connect",
          desc: "Bambu Lab 프린터로 슬라이스한 플레이트를 보내는 도우미 앱입니다.",
          href: "https://wiki.bambulab.com/en/software/bambu-connect",
        },
        {
          title: "GitHub",
          desc: "소스 코드와 개발 현황을 확인할 수 있습니다.",
          href: "https://github.com/HSU-LEE/VerSlicer",
        },
      ],
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          q: "VerSlicer는 누구를 위한 프로그램인가요?",
          a: "3D 프린팅을 처음 시작하는 입문자부터 출력 작업을 빠르게 진행하고 싶은 숙련 사용자까지 모두를 위해 설계되었습니다.",
        },
        {
          q: "어떤 AI를 쓰나요? 유료인가요?",
          a: "VerSlicer 자체는 무료입니다. AI 어시스턴트는 내 ChatGPT 계정으로 동작하며 ChatGPT Plus 또는 Pro 요금제가 필요합니다. 모델은 채팅 창의 드롭다운에서 고를 수 있습니다.",
        },
        {
          q: "인터넷 없이도 사용할 수 있나요?",
          a: "슬라이싱 등 기존 OrcaSlicer 기능은 오프라인에서도 동작합니다. AI 어시스턴트는 ChatGPT를 사용하므로 인터넷 연결이 필요합니다.",
        },
        {
          q: "AI가 마음대로 출력을 시작하나요?",
          a: "아니요. AI는 프린터로 작업을 보내지 않습니다. 슬라이스까지만 하고, 출력 버튼은 사용자가 직접 누릅니다.",
        },
        {
          q: "Bambu Lab 프린터로 출력하려면 Developer Mode가 필요한가요?",
          a: "필요 없습니다. 기본 출력 방식인 Print with Bambu Connect가 슬라이스한 파일을 Bambu Connect(무료, macOS 13 이상)로 넘깁니다. LAN 모드와 Developer Mode를 쓰는 경우 Print plate로 직접 보낼 수도 있습니다.",
        },
        {
          q: "\"손상되었기 때문에 열 수 없습니다\"라고 나와요.",
          a: "아직 Apple Developer ID 서명이 없어 첫 실행이 차단될 수 있습니다. 터미널에서 xattr -dr com.apple.quarantine /Applications/VerSlicer.app 을 실행한 뒤 다시 열어 주세요. 다운로드마다 한 번만 하면 됩니다.",
        },
        {
          q: "OrcaSlicer와 무엇이 다른가요?",
          a: "VerSlicer는 OrcaSlicer에 AI 기능을 통합하여 채팅과 음성으로 슬라이서를 제어할 수 있도록 확장한 프로젝트입니다.",
        },
        {
          q: "음성 입력은 어떻게 쓰나요?",
          a: "채팅 창의 마이크 버튼을 누르고 마이크·음성 인식 권한을 허용하세요. 한국어는 시스템 설정 → 일반 → 언어 및 지역에서 한국어를 영어보다 위에 두면 됩니다.",
        },
      ],
    },
    install: {
      title: "설치",
      desc: "Apple Silicon Mac, macOS 11.3 이상",
      requirementsTitle: "시스템 요구사항",
      requirements: [
        "macOS 11.3 이상 (Apple Silicon)",
        "ChatGPT Plus 또는 Pro 계정 (AI 어시스턴트)",
        "Bambu Connect (Bambu Lab 프린터, macOS 13 이상)",
      ],
      buildNote: "아직 서명되지 않은 릴리스라 첫 실행이 차단되면, 오른쪽 명령을 터미널에 붙여 넣고 VerSlicer를 다시 여세요.",
      steps: [
        { title: "VerSlicer 설치", desc: "GitHub Releases에서 PKG 또는 DMG를 내려받아 설치합니다." },
        { title: "ChatGPT 연결", desc: "3D 뷰 툴바의 AI 어시스턴트에서 Connect ChatGPT를 누르고 로그인합니다." },
        { title: "말하고 출력하기", desc: "원하는 결과를 말한 뒤 슬라이스하고 Print with Bambu Connect를 누릅니다." },
      ],
      codeLines: [
        "# 첫 실행이 차단될 때 (한 번만)",
        "xattr -dr com.apple.quarantine /Applications/VerSlicer.app",
      ],
    },
    footer: {
      license: "© 2026 Lee Hee Seung. GNU AGPL-3.0 License.",
      upstream: "OrcaSlicer 기반. VerSlicer는 OpenAI 및 Bambu Lab과 관련이 없습니다.",
    },
  },
  en: {
    common: { copy: "Copy", copied: "Copied" },
    nav: {
      product: "Product",
      features: "Features",
      ecosystem: "Ecosystem",
      install: "Install",
      wiki: "Wiki",
      download: "Download",
    },
    hero: {
      headline: "Print what you have in mind.",
      lead: "VerSlicer is an AI-integrated macOS slicer built on OrcaSlicer. Ask via chat or voice for stronger parts, better surface quality, plate arrangement, and more — it applies the right settings and slices. You always press Print yourself.",
      motto: "Less configuring. More creating.",
      downloadBtn: "Download",
      githubBtn: "GitHub",
      stats: ["macOS (Apple Silicon)", "ChatGPT", "OrcaSlicer-based", "Voice input"],
    },
    vision: {
      title: "A new kind of 3D printing with AI",
      steps: [
        {
          title: "Load your model",
          desc: "Open STL or 3MF files — or say “print me a dragon” on an empty plate to find one on MakerWorld.",
        },
        {
          title: "Describe the outcome you want",
          desc: "Say things like “Make it stronger” or “Rotate it 45 degrees”. Setting changes always open a review dialog first.",
        },
        {
          title: "Slice, then print",
          desc: "AI handles settings, placement, rotation and slicing. Then you press Print with Bambu Connect.",
        },
      ],
    },
    results: {
      title: "Describe the outcome you want",
      desc: "Adjust print results just by speaking — no expert knowledge required. Works in English and Korean.",
      chatLabel: "AI Assistant",
      scrollHint: "Swipe for more",
      items: [
        {
          title: "Make it stronger",
          desc: "Increase strength by adjusting wall thickness and infill.",
          example: "Make it stronger",
          reply: "Raised walls to 4 and infill to 30%. Review and apply.",
        },
        {
          title: "Cleaner finish",
          desc: "Apply print settings that improve surface quality.",
          example: "Smoother surface",
          reply: "Adjusted layer height and outer wall settings.",
        },
        {
          title: "Find & print",
          desc: "On an empty plate, search MakerWorld, import, check the mesh and slice.",
          example: "Print me a dragon",
          reply: "Picked a model from MakerWorld and sliced it. Press Print with Bambu Connect to print.",
        },
        {
          title: "Failed-print diagnosis",
          desc: "Reads the printer’s error code and HMS alerts, names the likely cause and settings to check.",
          example: "My print failed",
          reply: "The HMS alerts point to first-layer adhesion. Check bed temperature and first-layer speed.",
        },
        {
          title: "Auto-arrange",
          desc: "Organize models efficiently on the build plate.",
          example: "Arrange the plate",
          reply: "Auto-arranged models on the build plate.",
        },
        {
          title: "Rollback",
          desc: "Undo the last AI settings change with one request.",
          example: "Undo that change",
          reply: "Rolled back the last settings change.",
        },
      ],
    },
    localAi: {
      title: "AI that stays under your control",
      p1: "Only your requests and plate context (model names, sizes, current settings) go to OpenAI under your ChatGPT account. Model files (STL/3MF) and G-code are never sent, and nothing is sent until you accept a one-time notice.",
      p2: "The AI never sends jobs to the printer or creates geometry. Only allow-listed actions run, and settings, presets, export, save and delete go through a review dialog. Your sign-in stays on this Mac — there is no VerSlicer server.",
      points: ["No model files or G-code sent", "Review before every change", "You always press Print"],
    },
    familiar: {
      title: "AI built on a proven slicer",
      p1: "VerSlicer is built on OrcaSlicer, trusted by countless users. Calibration, seam and wall control, supports, network printers and the full printer profile library are unchanged underneath.",
      p2: "Bambu Lab printers print through Bambu Connect without Developer Mode, and once you allow it, the AI can set nozzle, bed and chamber temperature and print speed within the printer’s limits.",
      features: ["Preview", "Device", "Smart Print", "Bambu Connect", "MakerWorld"],
    },
    ecosystem: {
      title: "Ecosystem",
      items: [
        {
          title: "OrcaSlicer",
          desc: "Built on an industry-leading open-source slicer.",
          href: "https://github.com/OrcaSlicer/OrcaSlicer",
        },
        {
          title: "ChatGPT",
          desc: "The assistant runs on your own ChatGPT account (Plus or Pro).",
          href: "https://chatgpt.com/",
        },
        {
          title: "Bambu Connect",
          desc: "Bambu Lab’s helper app that sends your sliced plate to the printer.",
          href: "https://wiki.bambulab.com/en/software/bambu-connect",
        },
        {
          title: "GitHub",
          desc: "View source code and development updates.",
          href: "https://github.com/HSU-LEE/VerSlicer",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Who is VerSlicer for?",
          a: "From beginners starting 3D printing to experienced users who want to move through print jobs faster.",
        },
        {
          q: "Which AI does it use? Does it cost anything?",
          a: "VerSlicer itself is free. The assistant runs on your ChatGPT account and needs a ChatGPT Plus or Pro plan. Pick a model from the dropdown in the chat panel.",
        },
        {
          q: "Does it work offline?",
          a: "Slicing and everything else OrcaSlicer does works offline. The AI assistant uses ChatGPT, so it needs an internet connection.",
        },
        {
          q: "Will the AI start a print on its own?",
          a: "No. The AI never sends a job to the printer. It stops after slicing, and you press Print yourself.",
        },
        {
          q: "Do I need Developer Mode on my Bambu Lab printer?",
          a: "No. Print with Bambu Connect, the default, hands the sliced file to Bambu Connect (free, macOS 13 or later). If your printer is in LAN mode with Developer Mode on, Print plate sends directly.",
        },
        {
          q: "macOS says VerSlicer is damaged or can’t be opened.",
          a: "Releases aren’t signed with an Apple Developer ID yet. Run xattr -dr com.apple.quarantine /Applications/VerSlicer.app in Terminal, then open VerSlicer again. Once per download is enough.",
        },
        {
          q: "How is this different from OrcaSlicer?",
          a: "VerSlicer extends OrcaSlicer with integrated AI so you can control the slicer through chat and voice.",
        },
        {
          q: "How do I use voice input?",
          a: "Tap the mic button in the chat panel and allow Microphone and Speech Recognition when asked.",
        },
      ],
    },
    install: {
      title: "Install",
      desc: "Apple Silicon Mac, macOS 11.3 or later",
      requirementsTitle: "System requirements",
      requirements: [
        "macOS 11.3 or later (Apple Silicon)",
        "ChatGPT Plus or Pro account (for the AI assistant)",
        "Bambu Connect (Bambu Lab printers, macOS 13 or later)",
      ],
      buildNote: "Releases aren’t signed yet. If macOS blocks the first launch, paste the command on the right into Terminal and open VerSlicer again.",
      steps: [
        { title: "Install VerSlicer", desc: "Download the PKG or DMG from GitHub Releases and install it." },
        { title: "Connect ChatGPT", desc: "Open the AI assistant on the 3D view toolbar, press Connect ChatGPT and sign in." },
        { title: "Talk, then print", desc: "Describe what you want, slice, and press Print with Bambu Connect." },
      ],
      codeLines: [
        "# If the first launch is blocked (once)",
        "xattr -dr com.apple.quarantine /Applications/VerSlicer.app",
      ],
    },
    footer: {
      license: "© 2026 Lee Hee Seung. GNU AGPL-3.0 License.",
      upstream: "Based on OrcaSlicer. VerSlicer is not affiliated with OpenAI or Bambu Lab.",
    },
  },
};

export const NAV_ACTIVE_MAP = {
  vision: "product",
  "local-ai": "features",
  familiar: "features",
  faq: "install",
};

export const NAV_LINKS = [
  { href: "#product", key: "product", id: "product" },
  { href: "#features", key: "features", id: "features" },
  { href: "#ecosystem", key: "ecosystem", id: "ecosystem" },
  { href: "#install", key: "install", id: "install" },
];

export const SECTION_IDS = [
  "product",
  "vision",
  "features",
  "local-ai",
  "familiar",
  "ecosystem",
  "install",
  "faq",
];
