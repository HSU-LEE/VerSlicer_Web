export const translations = {
  ko: {
    common: { copy: "복사", copied: "복사됨" },
    nav: {
      product: "제품",
      features: "기능",
      ecosystem: "생태계",
      install: "설치",
      download: "다운로드",
    },
    hero: {
      headline: "생각한 것을 바로 출력하세요.",
      lead: "VerSlicer는 OrcaSlicer를 기반으로 개발된 AI 통합 macOS 슬라이서입니다. 출력 품질, 강도, 배치와 같은 작업을 채팅이나 음성으로 요청하면 관련 설정을 적용하고 필요한 작업을 수행합니다.",
      motto: "더 적은 설정. 더 많은 제작.",
      downloadBtn: "다운로드",
      githubBtn: "GitHub",
      stats: ["macOS", "로컬 AI", "OrcaSlicer 기반", "음성 입력"],
    },
    vision: {
      title: "AI와 함께하는 새로운 3D 프린팅",
      steps: [
        {
          title: "모델 불러오기",
          desc: "OrcaSlicer와 같이 STL·3MF를 열고 프린터 프리셋을 선택합니다.",
        },
        {  
          title: "원하는 결과 입력하기",
          desc: "채팅이나 음성으로 \"더 튼튼하게\", \"플레이트 정리해\"처럼 말합니다.",
        },
        {
          title: "적용 후 슬라이스",
          desc: "AI가 설정을 바꾸고 배치·회전·슬라이스까지 실행합니다.",
        },
      ],
    },
    results: {
      title: "원하는 결과를 말해보세요",
      desc: "전문 지식 없이 말하기만으로 출력 결과를 조정할 수 있습니다.",
      chatLabel: "AI Assistant",
      items: [
        {
          title: "더 튼튼하게",
          desc: "벽 두께와 내부 채움 비율을 조정하여 강도를 높입니다.",
          example: "더 튼튼하게",
          reply: "벽 두께와 인필을 높여 강도를 개선했습니다.",
        },
        {
          title: "더 깔끔하게",
          desc: "표면 품질을 개선하기 위한 출력 설정을 적용합니다.",
          example: "표면 더 매끄럽게",
          reply: "레이어 높이와 외벽 설정을 조정했습니다.",
        },
        {
          title: "더 빠르게",
          desc: "출력 시간 단축을 위한 최적의 설정을 제안합니다.",
          example: "출력 속도 올려",
          reply: "속도와 레이어 설정을 최적화했습니다.",
        },
        {
          title: "자동 배치",
          desc: "플레이트 위 모델을 효율적으로 정리합니다.",
          example: "플레이트 정리해",
          reply: "플레이트 위 모델을 자동으로 정렬했습니다.",
        },
        {
          title: "슬라이싱 실행",
          desc: "준비가 끝나면 바로 슬라이싱을 시작할 수 있습니다.",
          example: "슬라이스",
          reply: "현재 플레이트 슬라이싱을 시작합니다.",
        },
      ],
    },
    localAi: {
      title: "개인정보를 지키는 로컬 AI",
      p1: "VerSlicer의 AI는 Mac 내부에서 실행됩니다. 모델 파일과 출력 데이터가 외부 서버로 전송되지 않습니다.",
      p2: "인터넷 연결 없이도 빠르고 안정적으로 사용할 수 있습니다.",
      points: [
        "온디바이스 AI",
        "오프라인 동작",
        "데이터 외부 전송 없음"
      ],
    },
    familiar: {
      title: "검증된 슬라이서 위에 구축된 AI",
      p1: "VerSlicer는 수많은 사용자가 검증한 OrcaSlicer를 기반으로 개발되었습니다.",
      p2: "기존의 강력한 슬라이싱 기능은 그대로 유지하면서 AI 기반 자동화 경험을 제공합니다.",
      features: [
        "Preview",
        "Device",
        "Smart Print",
        "Bambu Lab 연동"
      ],
    },
    ecosystem: {
      title: "생태계",
      items: [
        {
          title: "OrcaSlicer",
          desc: "업계 최고 수준의 오픈소스 슬라이서 기반입니다.",
          href: "https://github.com/SoftFever/OrcaSlicer",
        },
        {
          title: "Ollama",
          desc: "Mac에서 동작하는 로컬 AI 환경을 제공합니다.",
          href: "https://ollama.com/",
        },
        {
          title: "Llama 3.2",
          desc: "VerSlicer가 활용하는 기본 AI 모델입니다.",
          href: "https://ollama.com/library/llama3.2",
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
          a: "3D 프린팅을 처음 시작하는 입문자부터 출력 작업을 빠르게 진행하고 싶은 숙련 사용자까지 모두를 위해 설계되었습니다."
        },
        {
          q: "인터넷 없이도 사용할 수 있나요?",
          a: "네. Ollama와 AI 모델이 설치되어 있다면 인터넷 연결 없이 모든 AI 기능을 사용할 수 있습니다."
        },
        {
          q: "왜 VerSlicer를 사용해야 하나요?",
          a: "복잡한 슬라이서 설정을 직접 찾지 않아도 원하는 결과를 설명하는 것만으로 AI가 설정을 적용하고 작업을 수행하기 때문입니다."
        },
        {
          q: "어떤 AI 모델을 쓰나요?",
          a: "기본적으로 Llama 3.2를 사용하며, Ollama에서 지원하는 다른 모델로 변경할 수 있습니다.",
        },
        {
          q: "OrcaSlicer와 무엇이 다른가요?",
          a: "VerSlicer는 OrcaSlicer에 AI 기능을 통합하여 채팅과 음성으로 슬라이서를 제어할 수 있도록 확장한 프로젝트입니다.",
        },
        {
          q: "음성 입력은 어떻게 쓰나요?",
          a: "채팅 창의 마이크 버튼을 눌러 음성으로 명령할 수 있습니다.",
        },
        
      ],
    },
    install: {
      title: "설치",
      desc: "macOS 11.3 이상, Ollama 설치 필요",
      requirementsTitle: "시스템 요구사항",
      requirements: [
        "macOS 11.3 이상 (Apple Silicon · Intel)",
        "Ollama 설치 및 실행",
        "ollama pull llama3.2",
        "Xcode CLT 또는 Xcode (소스 빌드 시)",
      ],
      buildNote: "다른 Mac에 배포할 때는 DMG 인스톨러를 만들 수 있습니다.",
      steps: [
        { title: "Ollama 설치", desc: "ollama.com에서 설치 후 ollama pull llama3.2" },
        { title: "VerSlicer 설치", desc: "GitHub Releases에서 DMG 다운로드" },
        { title: "채팅 열기", desc: "3D 뷰 툴바에서 Ollama 채팅 실행" },
      ],
      codeLines: [
        "git clone https://github.com/HSU-LEE/VerSlicer.git",
        "cd VerSlicer",
        "./build_release_macos.sh",
      ],
    },
    footer: {
      license: "© 2026 Lee Hee Seung. MIT License.",
      upstream: "OrcaSlicer 및 업스트림 코드는 각각의 원 라이선스를 따릅니다.",
    },
  },
  en: {
    common: { copy: "Copy", copied: "Copied" },
    nav: {
      product: "Product",
      features: "Features",
      ecosystem: "Ecosystem",
      install: "Install",
      download: "Download",
    },
    hero: {
      headline: "Print what you have in mind.",
      lead: "VerSlicer is an AI-integrated macOS slicer built on OrcaSlicer. Ask via chat or voice for stronger parts, better surface quality, plate arrangement, and more — it applies the right settings and runs the job.",
      motto: "Less configuring. More creating.",
      downloadBtn: "Download",
      githubBtn: "GitHub",
      stats: ["macOS", "Local AI", "OrcaSlicer-based", "Voice input"],
    },
    vision: {
      title: "A new kind of 3D printing with AI",
      steps: [
        {
          title: "Load your model",
          desc: "Open STL or 3MF files and choose a printer preset, just like in OrcaSlicer.",
        },
        {
          title: "Describe the outcome you want",
          desc: "Say things like “Make it stronger” or “Arrange the plate” via chat or voice.",
        },
        {
          title: "Apply and slice",
          desc: "AI changes settings and handles placement, rotation, and slicing.",
        },
      ],
    },
    results: {
      title: "Describe the outcome you want",
      desc: "Adjust print results just by speaking — no expert knowledge required.",
      chatLabel: "AI Assistant",
      items: [
        {
          title: "Make it stronger",
          desc: "Increase strength by adjusting wall thickness and infill.",
          example: "Make it stronger",
          reply: "Increased wall thickness and infill for better strength.",
        },
        {
          title: "Cleaner finish",
          desc: "Apply print settings that improve surface quality.",
          example: "Smoother surface",
          reply: "Adjusted layer height and outer wall settings.",
        },
        {
          title: "Print faster",
          desc: "Suggest settings optimized for shorter print time.",
          example: "Speed up the print",
          reply: "Optimized speed and layer settings.",
        },
        {
          title: "Auto-arrange",
          desc: "Organize models efficiently on the build plate.",
          example: "Arrange the plate",
          reply: "Auto-arranged models on the build plate.",
        },
        {
          title: "Start slicing",
          desc: "Start slicing as soon as you are ready.",
          example: "Slice",
          reply: "Starting slice for the current plate.",
        },
      ],
    },
    localAi: {
      title: "Local AI that protects your privacy",
      p1: "VerSlicer’s AI runs on your Mac. Model files and print data are never sent to external servers.",
      p2: "Works fast and reliably without an internet connection.",
      points: ["On-device AI", "Works offline", "No data sent externally"],
    },
    familiar: {
      title: "AI built on a proven slicer",
      p1: "VerSlicer is built on OrcaSlicer, trusted by countless users.",
      p2: "Keep powerful slicing features while gaining an AI-driven automation experience.",
      features: ["Preview", "Device", "Smart Print", "Bambu Lab integration"],
    },
    ecosystem: {
      title: "Ecosystem",
      items: [
        {
          title: "OrcaSlicer",
          desc: "Built on an industry-leading open-source slicer.",
          href: "https://github.com/SoftFever/OrcaSlicer",
        },
        {
          title: "Ollama",
          desc: "Provides a local AI environment on your Mac.",
          href: "https://ollama.com/",
        },
        {
          title: "Llama 3.2",
          desc: "The default AI model used by VerSlicer.",
          href: "https://ollama.com/library/llama3.2",
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
          q: "Does it work offline?",
          a: "Yes. If Ollama and an AI model are installed, you can use all AI features without an internet connection.",
        },
        {
          q: "Why use VerSlicer?",
          a: "You can describe the outcome you want instead of hunting through complex slicer settings — AI applies them and runs the job.",
        },
        {
          q: "Which AI model does it use?",
          a: "Llama 3.2 by default. You can switch to other models supported by Ollama.",
        },
        {
          q: "How is this different from OrcaSlicer?",
          a: "VerSlicer extends OrcaSlicer with integrated AI so you can control the slicer through chat and voice.",
        },
        {
          q: "How do I use voice input?",
          a: "Tap the mic button in the chat window to give commands by voice.",
        },
      ],
    },
    install: {
      title: "Install",
      desc: "macOS 11.3 or later, Ollama required",
      requirementsTitle: "System requirements",
      requirements: [
        "macOS 11.3 or later (Apple Silicon · Intel)",
        "Ollama installed and running",
        "ollama pull llama3.2",
        "Xcode CLT or Xcode (for source builds)",
      ],
      buildNote: "You can build a DMG installer to deploy to another Mac.",
      steps: [
        { title: "Install Ollama", desc: "Install from ollama.com, then run ollama pull llama3.2" },
        { title: "Install VerSlicer", desc: "Download the DMG from GitHub Releases" },
        { title: "Open chat", desc: "Launch Ollama chat from the 3D view toolbar" },
      ],
      codeLines: [
        "git clone https://github.com/HSU-LEE/VerSlicer.git",
        "cd VerSlicer",
        "./build_release_macos.sh",
      ],
    },
    footer: {
      license: "© 2026 Lee Hee Seung. MIT License.",
      upstream: "OrcaSlicer and upstream code remain under their original licenses.",
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
