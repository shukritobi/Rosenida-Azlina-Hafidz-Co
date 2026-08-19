(() => {
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  const translations = {
    en: {
      preview: "Concept preview, content should be verified by the firm before launch.",
      currentSite: "Current site",
      navServices: "Services",
      navPeople: "People",
      navKnowledge: "Insights",
      navLocations: "Locations",
      portal: "Client Portal",
      startEnquiry: "Start Enquiry",
      heroEyebrow: "Legal guidance, structured more clearly",
      heroTitle: "Legal matters should not have to feel complicated.",
      heroLead: "Find the relevant area, choose a branch, and reach the appropriate team directly. RAHCo provides services across property matters, litigation, Syariah and related documentation.",
      talkTeam: "Talk to the team",
      seeServices: "Explore services",
      hotlineLabel: "Enquiry hotline",
      branchLabel: "Locations on official site",
      languageLabel: "Bilingual access",
      quickRoute: "Quick route",
      enquiryOpen: "Enquiries open",
      whatNeed: "What do you need help with?",
      chooseMatter: "Choose a matter type to continue to the right enquiry route.",
      matterProperty: "Property & Conveyancing",
      matterPropertySub: "SPA, financing, transfer, perfection",
      matterLitigation: "Civil / Commercial Litigation",
      matterLitigationSub: "Disputes, debt, probate and related matters",
      matterSyariah: "Syariah Law",
      matterSyariahSub: "Family, estate, hibah and faraid",
      panelNote: "An enquiry through this website does not by itself establish a solicitor-client relationship.",
      verifiedInfo: "Firm information arranged from official sources and public legal directories",
      servicesKicker: "Practice areas",
      servicesTitle: "Start with your matter, not legal jargon.",
      servicesIntro: "This structure helps visitors understand where to begin before speaking to the firm.",
      serviceConveyancing: "Property & Conveyancing",
      serviceConveyancingDesc: "Property transaction and financing documentation, including sub-sale, SPA, loan documentation, discharge, perfection of transfer and perfection of charge.",
      serviceLitigation: "Litigation",
      serviceLitigationDesc: "Civil and commercial disputes, debt recovery, probate, estate administration, bankruptcy, winding-up and land-related matters.",
      serviceSyariah: "Syariah",
      serviceSyariahDesc: "Islamic family matters, divorce, custody, jointly acquired property, faraid, hibah, waqaf, wills and Syariah-related advice.",
      serviceEstate: "Probate & Estate",
      serviceEstateDesc: "Letters of administration, grants of probate, estate administration and matters relating to assets and beneficiaries.",
      serviceBanking: "Banking & Financing Documentation",
      serviceBankingDesc: "Islamic and conventional financing documentation, security documents and financing matters related to property transactions.",
      askThis: "Ask about this matter",
      notSure: "Not sure of the category?",
      routeForMe: "Tell us the situation and route the enquiry from there.",
      generalEnquiry: "General enquiry",
      processKicker: "Enquiry journey",
      processTitle: "Reduce the steps before speaking to the right person.",
      processDesc: "A useful corporate site should do more than act as a brochure. It should help visitors choose a matter, location and contact route quickly.",
      step1Title: "Choose your matter",
      step1Desc: "Property, litigation, Syariah, estate or financing documentation.",
      step2Title: "Choose a location",
      step2Desc: "Kajang, Setia Alam, Kuantan or Kemaman based on the official website listing.",
      step3Title: "Send a short summary",
      step3Desc: "WhatsApp opens with a structured message so the team sees the basic context immediately.",
      peopleKicker: "Legal team",
      peopleTitle: "Meet some of the people behind RAHCo.",
      peopleIntro: "The profiles below are summarised from RAHCo's public management page. The final roster should be confirmed by the firm before launch.",
      managingPartner: "Managing Partner",
      azlinaCopy: "Firm leadership listed on RAHCo's official website, with a registered practice in Kajang.",
      mazlianaCopy: "Conveyancing, land transactions, corporate / commercial documentation and banking documents.",
      litigationLawyer: "Litigation Lawyer",
      marsyaCopy: "General litigation, debt recovery, probate, administration, bankruptcy, winding-up and land matters.",
      syariahLawyer: "Syarie Lawyer",
      dinieCopy: "Syariah family matters, jointly acquired property, faraid, hibah, waqaf, wills and advisory work.",
      conveyancingLawyer: "Conveyancing Lawyer",
      fatinCopy: "Sub-sale SPAs for individual and strata properties and documentation related to housing financing.",
      amirCopy: "Real estate, sub-sale, HDA agreements and Islamic banking documentation for retail and commercial matters.",
      knowledgeKicker: "Knowledge Centre",
      knowledgeTitle: "Existing content can work harder for search and trust.",
      knowledgeDesc: "RAHCo already has useful legal articles. A new site should make them easier to discover, read and connect to relevant enquiries.",
      viewAllArticles: "View all articles",
      locationsKicker: "Locations",
      locationsTitle: "Choose the most suitable branch.",
      locationsIntro: "These four locations are shown on RAHCo's official website at the time this concept was prepared.",
      branch: "Branch",
      directions: "Get directions",
      faqKicker: "Quick questions",
      faqTitle: "Before you contact the firm.",
      faq1Q: "I am not sure which area of law applies.",
      faq1A: "Choose “Other / Not sure” in the form. Describe the situation briefly without sending documents or sensitive information at this stage.",
      faq2Q: "Does sending an enquiry immediately create a solicitor-client relationship?",
      faq2A: "No. This only starts an enquiry. Any professional engagement is subject to the firm's confirmation and process.",
      faq3Q: "Can I go straight to WhatsApp?",
      faq3A: "Yes. The form below simply structures your message so the matter type and preferred branch are clear when WhatsApp opens.",
      enquiryKicker: "Start an enquiry",
      enquiryTitle: "Share the basics. WhatsApp will open with a prepared message.",
      enquiryDesc: "Do not enter identity card numbers, account numbers, confidential documents or sensitive facts in this initial form.",
      officialHotline: "Hotline shown on the official website",
      formName: "Name",
      formMatter: "Matter type",
      formBranch: "Preferred branch",
      formSummary: "Short summary",
      namePlaceholder: "Your name",
      summaryPlaceholder: "Example: I am buying a sub-sale property and would like to understand the next steps.",
      selectMatter: "Choose a matter type",
      acknowledge: "I understand this is an initial enquiry and I will not send confidential information through this form.",
      openWhatsapp: "Open WhatsApp",
      formFootnote: "The message is only sent when you press “Send” in WhatsApp.",
      footerIntro: "A corporate website concept focused on information clarity, enquiry routing and a faster mobile experience.",
      footerExplore: "Explore",
      footerOfficial: "Official links",
      conceptOnly: "Concept preview.",
      legalNote: "This website content is for general information and is not legal advice. Final information should be verified by RAHCo before publication."
    }
  };

  let language = "ms";

  const applyLanguage = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = nextLanguage;

    const langButton = $(".lang-toggle");
    if (langButton) {
      const spans = $$('span', langButton);
      spans.forEach((span) => span.classList.remove("active"));
      if (nextLanguage === "ms") spans[0]?.classList.add("active");
      if (nextLanguage === "en") spans[1]?.classList.add("active");
    }

    $$('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (!element.dataset.originalText) {
        element.dataset.originalText = element.textContent.trim();
      }
      if (nextLanguage === "en" && translations.en[key]) {
        element.textContent = translations.en[key];
      } else if (nextLanguage === "ms" && element.dataset.originalText) {
        element.textContent = element.dataset.originalText;
      }
    });

    $$('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (!element.dataset.originalPlaceholder) {
        element.dataset.originalPlaceholder = element.getAttribute("placeholder") || "";
      }
      if (nextLanguage === "en" && translations.en[key]) {
        element.setAttribute("placeholder", translations.en[key]);
      } else {
        element.setAttribute("placeholder", element.dataset.originalPlaceholder);
      }
    });
  };

  const langToggle = $(".lang-toggle");
  langToggle?.addEventListener("click", () => {
    applyLanguage(language === "ms" ? "en" : "ms");
  });

  const menuToggle = $(".menu-toggle");
  menuToggle?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$('#site-nav a').forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const routeToEnquiry = (service) => {
    const matter = $("#matter");
    if (matter) matter.value = service;
    $("#enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => matter?.focus({ preventScroll: true }), 550);
  };

  $$('.matter-option, .service-select').forEach((button) => {
    button.addEventListener("click", () => routeToEnquiry(button.dataset.service || ""));
  });

  const form = $("#enquiry-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = $("#client-name")?.value.trim() || "";
    const matter = $("#matter")?.value || "Lain-lain / Tidak pasti";
    const branch = $("#branch-select")?.value || "Tidak pasti";
    const summary = $("#summary")?.value.trim() || "";

    const linesMs = [
      "Salam RAHCo, saya ingin membuat pertanyaan guaman.",
      "",
      `Nama: ${name || "-"}`,
      `Jenis urusan: ${matter}`,
      `Cawangan pilihan: ${branch}`,
      `Ringkasan: ${summary || "Saya ingin mendapatkan maklumat lanjut."}`,
      "",
      "Saya faham ini ialah pertanyaan awal dan bukan pelantikan peguam secara automatik."
    ];

    const linesEn = [
      "Hello RAHCo, I would like to make a legal enquiry.",
      "",
      `Name: ${name || "-"}`,
      `Matter: ${matter}`,
      `Preferred branch: ${branch}`,
      `Summary: ${summary || "I would like more information."}`,
      "",
      "I understand this is an initial enquiry and does not automatically establish a solicitor-client relationship."
    ];

    const message = language === "en" ? linesEn.join("\n") : linesMs.join("\n");
    const whatsappUrl = `https://wa.me/60102663501?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  const revealElements = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  window.setTimeout(() => {
    $$(".hero .reveal").forEach((element) => element.classList.add("visible"));
  }, 50);
})();
