// --- Translation Data and Bilingual Dictionary ---
const translations = {
    ar: {
        nav_features: "المميزات",
        nav_rtl: "محرك الاتجاهات",
        nav_roi: "حاسبة الأرباح",
        nav_licensing: "التنشيط والترخيص",
        nav_philosophy: "<i class='fa-solid fa-sparkles'></i> الترجمة الحديثة",
        btn_lang: "English",
        btn_cta: "احصل عليه الآن",
        hero_badge: "حماية خصوصية 100% بدون سحابة",
        hero_title: "أداة الترجمة الذكية التي تفهم <br><span class='gradient-text'>عمق السياق العربي</span>",
        hero_subtitle: "لا تضيع وقتك في ترجمة نفس الجملة مرتين. Companion Studio يمنحك بيئة عمل فائقة السرعة مع ذاكرة ترجمة ذكية 101%، ومحرك متطور لحل مشاكل علامات الترقيم والاتجاهات العربية (RTL) دون أي أخطاء.",
        hero_whatsapp: "تواصل عبر الواتساب لشراء رخصتك",
        hero_email: "راسِلنا عبر البريد الإلكتروني",
        sim_title: "محاكاة ذاكرة الترجمة التفاعلية",
        sim_source_lbl: "الجملة المصدر (English)",
        sim_target_lbl: "الترجمة الذكية الفورية (العربية ثنائية الاتجاه)",
        sim_exact: "تطابق سياق 101%",
        sim_casing: "تعديل حالة الأحرف (-5%)",
        sim_tags: "اختلاف وسوم (-10%)",
        bento_section_title: "لماذا Companion Studio هو سلاح المترجم السري؟",
        bento_section_desc: "مُصمم بالكامل لتلبية احتياجات المترجمين الباحثين عن السرعة القصوى، الدقة المتناهية، وحماية خصوصية بياناتهم وبيانات عملائهم.",
        bento1_title: "تطابق السياق المتكامل 101% (In-Context Match)",
        bento1_text: "لن تكتفي الأداة بمطابقة النصوص المتطابقة فحسب، بل تبحث في الجمل السابقة لضمان توافق السياق بنسبة 100% مع الملف القديم. احصل على ترجمة مثالية ومترابطة بشكل تلقائي!",
        bento1_tag: "سرعة فائقة",
        bento2_title: "محرك اتجاهات ناضج بالكامل للعربية (RTL)",
        bento2_text: "وداعاً لقفز علامات الترقيم والأقواس المقلوبة. واجهتنا تدعم النصوص المختلطة (عربي وإنكليزي) وتنسيق علامات الترقيم في الأماكن الصحيحة تماماً أثناء وبعد الكتابة.",
        bento2_tag: "جودة احترافية",
        bento3_title: "أمان محلي 100% وقاعدة بيانات غير سحابية",
        bento3_text: "كل تراجمك ومصطلحاتك تُخزن محلياً في جهازك داخل قاعدة بيانات SQLite مشفرة وسريعة. بيانات عملائك آمنة تماماً وخاصة بك، دون أي تسريبات سحابية.",
        bento3_tag: "أمان مطلق",
        bento4_title: "إدارة اختصارات لوحة المفاتيح بشكل مرن (Shortcut Manager)",
        bento4_text: "خصص كل حركة وكل وظيفة داخل الأداة لتناسب لوحة مفاتيحك. يدعم النظام التحقق الفوري من تعارض الاختصارات مع إمكانية التصدير والاستيراد لملفات الإعدادات بسهولة تامة.",
        bento4_tag: "تخصيص كامل",
        rtl_badge: "حلول متكاملة للمترجم العربي",
        rtl_title: "انسَ عيوب الأدوات القديمة للترجمة",
        rtl_desc: "تعاني أدوات الترجمة القديمة (CAT Tools) من عيوب قاتلة عند دمج الكلمات العربية والإنجليزية والأرقام مع علامات الترقيم في نفس السطر.",
        rtl_li1: "دعم كامل لتوزيع الهوامش والمسافات (Arabic Padding): إدراج سهل للمصطلحات والترجمات التلقائية دون قفز المؤشر.",
        rtl_li2: "تقسيم النصوص بذكاء عند الالتفاف (Word Wrapping Boundaries): نصوصك تلتف بسلاسة فائقة دون تشويه الكلمات عند حدود الخلايا.",
        rtl_li3: "الذكاء الاصطناعي كخيار ثانوي: الأولوية القصوى دائماً تكون لذاكرة الترجمة (TM) وقاموس المصطلحات (Termbase)، بينما تُستدعى محركات الذكاء الاصطناعي اختيارياً لتقليل التكلفة وزيادة الجودة.",
        roi_title: "احسب العائد على استثمارك ووقتك المهدر",
        roi_subtitle: "أدخل متوسط الكلمات التي تترجمها يومياً وسعر الكلمة لتشاهد كيف يضاعف Companion Studio أرباحك ويوفر وقتك الثمين.",
        roi_input_words: "عدد الكلمات التي تترجمها يومياً",
        roi_input_rate: "سعر الترجمة لكل كلمة ($)",
        roi_res_hours: "الوقت الموفر شهرياً",
        roi_res_money: "أرباحك الإضافية شهرياً ($)",
        roi_hours_sub: "بفضل التطبيقات السياقية والاختصارات الذكية",
        roi_money_sub: "تنتج عن سرعة إنجاز مشاريع الترجمة",
        lic_title: "طريقة تنشيط ورخصة البرنامج",
        lic_desc: "نهتم بالشفافية المطلقة وحماية استثمارك. يتم تفعيل الأداة عبر ملفات تراخيص رقمية مشفرة برمجياً.",
        lic1_title: "تراخيص رقمية مشفرة بـ RSA-2048",
        lic1_text: "نحن لا نعتمد على اتصالات سحابية مستمرة قد تفشل في أوقات العمل الحرجة. يتم إرسال ملف تنشيط مستقل (.lic) بمجرد الشراء، ويتعرف عليه تطبيقك محلياً بشكل فوري وآمن.",
        lic2_title: "فئات تراخيص مرنة",
        lic2_text: "سواءً كنت مترجماً مستقلاً، أو مكتباً للترجمة المعتمدة، نوفر تراخيص تناسب معدلات استخدامك وبأعلى كفاءة تشغيلية وبدون أي اشتراكات شهرية متكررة.",
        cta_final_title: "هل أنت جاهز لتغيير مسيرتك المهنية ومضاعفة أرباحك؟",
        cta_final_sub: "تواصل معنا الآن للحصول على نسختك وتوليد رخصتك الرقمية الشخصية فوراً.",
        cta_whatsapp: "الواتساب المباشر",
        cta_email: "البريد الإلكتروني",
        cta_whatsapp_sub: "تواصل سريعاً عبر",
        cta_email_sub: "ارسل طلبك عبر",
        footer_copy: "© 2026 Companion Studio. جميع الحقوق محفوظة للمترجمين المحترفين.",
        footer_sub: "تطوير معماري متكامل لضمان سرعة فائقة وحماية مطلقة للخصوصية."
    },
    en: {
        nav_features: "Features",
        nav_rtl: "RTL Engine",
        nav_roi: "ROI Calculator",
        nav_licensing: "Licensing",
        nav_philosophy: "<i class='fa-solid fa-sparkles'></i> Modern Translation",
        btn_lang: "العربية",
        btn_cta: "Get It Now",
        hero_badge: "100% Local Privacy - No Cloud Required",
        hero_title: "The Smart CAT Tool built for <br><span class='gradient-text'>Professional Arabic Translators</span>",
        hero_subtitle: "Never translate the same segment twice. Companion Studio delivers an ultra-fast local translation memory with 101% In-Context matches, custom penalties, and a mature RTL layout engine that fixes punctuation layout instantly.",
        hero_whatsapp: "Chat on WhatsApp to Purchase",
        hero_email: "Contact via Email",
        sim_title: "Interactive TM Matching Simulator",
        sim_source_lbl: "Source Segment (English)",
        sim_target_lbl: "Smart Instant Translation (Mature Arabic Bidi)",
        sim_exact: "101% Context Match",
        sim_casing: "Casing Modification (-5%)",
        sim_tags: "Tag Mismatch (-10%)",
        bento_section_title: "Why Companion Studio is a Translator's Secret Weapon?",
        bento_section_desc: "Engineered from the ground up for high-velocity translators who demand absolute accuracy, customizable workflows, and total data privacy.",
        bento1_title: "101% In-Context Matching (ICE)",
        bento1_text: "Our engine doesn't just match identical text; it cross-references preceding paragraphs to guarantee perfectly consistent document translations. Automatically lock segments with absolute confidence!",
        bento1_tag: "Max Speed",
        bento2_title: "Mature Arabic RTL Layout Engine",
        bento2_text: "Say goodbye to jumping periods, reversed brackets, and trailing exclamation marks. Dynamic text-direction controls keep bidi layouts perfectly placed during real-time typing.",
        bento2_tag: "Premium Quality",
        bento3_title: "100% Offline SQLite Databases",
        bento3_text: "All your project documents, translation memories, and glossaries are kept safe locally on your device in a super-fast, private SQLite database. Zero cloud leaks, total NDA compliance.",
        bento3_tag: "Absolute Privacy",
        bento4_title: "Flexible Keyboard Shortcuts Manager",
        bento4_text: "Rebind every action to fit your muscle memory. Features intelligent keyboard conflict detection and quick JSON profile imports/exports to keep your workflows highly agile.",
        bento4_tag: "Fully Modular",
        rtl_badge: "Engineered for Arabic Linguistics",
        rtl_title: "Solve the Common Bidi Glitches",
        rtl_desc: "Traditional translation software (CAT Tools) suffers from visual bugs when mixing Arabic paragraphs with English acronyms, numbers, and punctuation.",
        rtl_li1: "Perfect Arabic Padding: Insert termbase entries dynamically without weird cursor jumps or visual padding breaks.",
        rtl_li2: "Smart Word Wrapping Boundaries: Beautiful text documents wrapping that keeps long sentences legible inside grids.",
        rtl_li3: "AI as a Secondary Fallback: TM exact/context matches and termbases are always prioritized first. AI triggers manually when needed to protect privacy.",
        roi_title: "Calculate Your Time & Earnings ROI",
        roi_subtitle: "Slide your daily output and rate to see how Companion Studio accelerates your productivity and monthly profits.",
        roi_input_words: "Average words translated per day",
        roi_input_rate: "Translation rate per word ($)",
        roi_res_hours: "Time Saved Monthly",
        roi_res_money: "Extra Earnings Monthly ($)",
        roi_hours_sub: "Thanks to context matches and shortcut speedups",
        roi_money_sub: "Generated from accelerated project delivery",
        lic_title: "RSA-2048 Digital Licensing",
        lic_desc: "We stand for absolute transparency. The software activates locally via digital signature license keys (.lic files) with no constant internet pings.",
        lic1_title: "RSA Cryptographic Security",
        lic1_text: "We avoid fragile cloud authentications that fail during deadline crunches. Once signed, your program recognizes your license locally, securely, and permanently.",
        lic2_title: "Flexible Lifetime Licenses",
        lic2_text: "Whether you are a solo freelance translator or an accredited translation agency, we have a tier designed for your workflow with no recurring monthly subscriptions.",
        cta_final_title: "Ready to Double Your Translation Output?",
        cta_final_sub: "Get in touch with us today to generate your digital license and start translating like a pro.",
        cta_whatsapp: "WhatsApp Direct",
        cta_email: "Email Support",
        cta_whatsapp_sub: "Fast contact via",
        cta_email_sub: "Send request via",
        footer_copy: "© 2026 Companion Studio. All rights reserved for professional translators.",
        footer_sub: "Engineered with absolute privacy and maximum speed constraints."
    }
};

let currentLang = "ar";

function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    
    // Update body direction and language classes
    const body = document.body;
    const html = document.documentElement;
    
    if (currentLang === "en") {
        html.setAttribute("lang", "en");
        html.setAttribute("dir", "ltr");
        body.classList.add("en-mode");
    } else {
        html.setAttribute("lang", "ar");
        html.setAttribute("dir", "rtl");
        body.classList.remove("en-mode");
    }
    
    // Translate text items dynamically
    const langDict = translations[currentLang];
    
    // Header Links
    const links = document.querySelectorAll(".nav-link");
    links[0].textContent = langDict.nav_features;
    links[1].textContent = langDict.nav_rtl;
    links[2].textContent = langDict.nav_roi;
    links[3].textContent = langDict.nav_licensing;
    if (links[4] && langDict.nav_philosophy) {
        links[4].innerHTML = langDict.nav_philosophy;
    }
    
    document.getElementById("lang-text").textContent = langDict.btn_lang;
    document.getElementById("header-cta").textContent = langDict.btn_cta;
    
    // Hero Text
    document.querySelector(".hero-badge").innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${langDict.hero_badge}`;
    document.getElementById("hero-title-text").innerHTML = langDict.hero_title;
    document.getElementById("hero-subtitle-text").textContent = langDict.hero_subtitle;
    document.querySelector(".hero-cta-btn.primary-glow").innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${langDict.hero_whatsapp}`;
    document.querySelector(".hero-cta-btn.secondary-btn").innerHTML = `<i class="fa-regular fa-envelope"></i> ${langDict.hero_email}`;
    
    // Simulator Labels
    document.querySelector(".card-title-tab").innerHTML = `<i class="fa-solid fa-code-merge"></i> ${langDict.sim_title}`;
    document.querySelector(".input-segment-preview label").textContent = langDict.sim_source_lbl;
    document.querySelector(".target-segment-preview label").textContent = langDict.sim_target_lbl;
    
    // Sim controls
    const simBtns = document.querySelectorAll(".sim-btn");
    simBtns[0].textContent = langDict.sim_exact;
    simBtns[1].textContent = langDict.sim_casing;
    simBtns[2].textContent = langDict.sim_tags;
    
    // Bento Grid Section
    document.querySelector(".features-section .section-title").textContent = langDict.bento_section_title;
    document.querySelector(".features-section .section-desc").textContent = langDict.bento_section_desc;
    
    const bentoCards = document.querySelectorAll(".bento-card");
    // Bento Card 1
    bentoCards[0].querySelector(".bento-title").textContent = langDict.bento1_title;
    bentoCards[0].querySelector(".bento-text").textContent = langDict.bento1_text;
    bentoCards[0].querySelector(".bento-tag").textContent = langDict.bento1_tag;
    
    // Bento Card 2
    bentoCards[1].querySelector(".bento-title").textContent = langDict.bento2_title;
    bentoCards[1].querySelector(".bento-text").textContent = langDict.bento2_text;
    bentoCards[1].querySelector(".bento-tag").textContent = langDict.bento2_tag;
    
    // Bento Card 3
    bentoCards[2].querySelector(".bento-title").textContent = langDict.bento3_title;
    bentoCards[2].querySelector(".bento-text").textContent = langDict.bento3_text;
    bentoCards[2].querySelector(".bento-tag").textContent = langDict.bento3_tag;
    
    // Bento Card 4
    bentoCards[3].querySelector(".bento-title").textContent = langDict.bento4_title;
    bentoCards[3].querySelector(".bento-text").textContent = langDict.bento4_text;
    bentoCards[3].querySelector(".bento-tag").textContent = langDict.bento4_tag;
    
    // RTL Engine Section
    document.querySelector(".badge-highlight").textContent = langDict.rtl_badge;
    document.querySelector(".rtl-text-side .section-title").textContent = langDict.rtl_title;
    document.querySelector(".rtl-text-side .section-desc").textContent = langDict.rtl_desc;
    
    const listItems = document.querySelectorAll(".rtl-list li");
    listItems[0].innerHTML = `<i class="fa-regular fa-circle-check text-green"></i> ${langDict.rtl_li1}`;
    listItems[1].innerHTML = `<i class="fa-regular fa-circle-check text-green"></i> ${langDict.rtl_li2}`;
    listItems[2].innerHTML = `<i class="fa-regular fa-circle-check text-green"></i> ${langDict.rtl_li3}`;
    
    // ROI Calculator Section
    document.querySelector(".roi-header .roi-title").textContent = langDict.roi_title;
    document.querySelector(".roi-header .roi-subtitle").textContent = langDict.roi_subtitle;
    document.querySelector(".slider-group:nth-child(1) label").textContent = langDict.roi_input_words;
    document.querySelector(".slider-group:nth-child(2) label").textContent = langDict.roi_input_rate;
    
    document.querySelector(".result-card.purple-glow .result-label").textContent = langDict.roi_res_hours;
    document.querySelector(".result-card.purple-glow .result-subtext").textContent = langDict.roi_hours_sub;
    
    document.querySelector(".result-card.green-glow .result-label").textContent = langDict.roi_res_money;
    document.querySelector(".result-card.green-glow .result-subtext").textContent = langDict.roi_money_sub;
    
    // Licensing
    document.querySelector(".licensing-section .section-title").textContent = langDict.lic_title;
    document.querySelector(".licensing-section .section-desc").textContent = langDict.lic_desc;
    
    const licCards = document.querySelectorAll(".licensing-card");
    licCards[0].querySelector(".licensing-card-title").textContent = langDict.lic1_title;
    licCards[0].querySelector(".licensing-card-text").textContent = langDict.lic1_text;
    
    licCards[1].querySelector(".licensing-card-title").textContent = langDict.lic2_title;
    licCards[1].querySelector(".licensing-card-text").textContent = langDict.lic2_text;
    
    // CTA Section
    document.querySelector(".contact-container .contact-title").textContent = langDict.cta_final_title;
    document.querySelector(".contact-container .contact-subtitle").textContent = langDict.cta_final_sub;
    
    // Whatsapp Button inside CTA
    const waBtn = document.querySelector(".contact-btn.whatsapp-btn");
    waBtn.querySelector(".btn-text").innerHTML = `<small>${langDict.cta_whatsapp_sub}</small><strong>${langDict.cta_whatsapp}</strong>`;
    
    // Email Button inside CTA
    const mailBtn = document.querySelector(".contact-btn.email-btn");
    mailBtn.querySelector(".btn-text").innerHTML = `<small>${langDict.cta_email_sub}</small><strong>${langDict.cta_email}</strong>`;
    
    // Footer
    document.querySelector(".footer p:first-child").textContent = langDict.footer_copy;
    document.querySelector(".footer-sub").textContent = langDict.footer_sub;
    
    // Refresh outputs
    calculateROI();
    updateSimulatorState();
}

// --- Interactive Translation Memory Simulator Logic ---
let activeSimState = "exact";

const simData = {
    exact: {
        en: "The system will reboot in [tag]5 minutes[/tag].",
        ar: "سيعاد تشغيل النظام خلال [tag]5 دقائق[/tag].",
        badge_text_ar: "تطابق سياقي 101% In-Context Match",
        badge_text_en: "101% In-Context Match",
        class: "badge-101"
    },
    casing: {
        en: "the system will reboot in [tag]5 minutes[/tag].",
        ar: "سيعاد تشغيل النظام خلال [tag]5 دقائق[/tag].",
        badge_text_ar: "تطابق حالة أحرف 95% (خصم 5% Casing)",
        badge_text_en: "Casing Match 95% (-5% Penalty)",
        class: "badge-casing"
    },
    tags: {
        en: "The system will reboot [tag]in 5 minutes[/tag].",
        ar: "سيعاد تشغيل النظام [tag]خلال 5 دقائق[/tag].",
        badge_text_ar: "اختلاف وسوم 82.3% (خصم 10% Tag Mismatch)",
        badge_text_en: "Tag Mismatch 82.3% (-10% Penalty)",
        class: "badge-tags"
    }
};

function triggerSim(state) {
    activeSimState = state;
    
    // Toggle active state in buttons
    const btns = document.querySelectorAll(".sim-btn");
    btns.forEach(btn => btn.classList.remove("active"));
    
    if (state === "exact") btns[0].classList.add("active");
    if (state === "casing") btns[1].classList.add("active");
    if (state === "tags") btns[2].classList.add("active");
    
    updateSimulatorState();
}

function updateSimulatorState() {
    const data = simData[activeSimState];
    const sourceBox = document.querySelector(".source-bubble");
    const outputBox = document.getElementById("sim-output");
    const badge = document.getElementById("simulator-match-badge");
    
    // Update contents
    sourceBox.innerHTML = currentLang === "ar" ? data.en : data.en;
    outputBox.innerHTML = currentLang === "ar" ? data.ar : data.ar;
    badge.textContent = currentLang === "ar" ? data.badge_text_ar : data.badge_text_en;
    
    // Update Badge classes
    badge.className = "match-badge";
    badge.classList.add(data.class);
}

// --- Interactive ROI Calculator Logic ---
function calculateROI() {
    const wordsRange = document.getElementById("words-range");
    const rateRange = document.getElementById("rate-range");
    
    const wordsVal = parseInt(wordsRange.value);
    const rateVal = parseFloat(rateRange.value);
    
    // Set text display
    document.getElementById("words-val").textContent = wordsVal.toLocaleString() + (currentLang === "ar" ? " كلمة" : " words");
    document.getElementById("rate-val").textContent = rateVal.toFixed(2) + " $";
    
    // Mathematical speeds:
    // Without TM: ~300 words/hour.
    // With Companion Studio: ~550 words/hour (45% speed improvement via shortcuts, glossary, 101% context matches).
    const hoursWithout = wordsVal / 300;
    const hoursWith = wordsVal / 550;
    const hoursSavedPerDay = hoursWithout - hoursWith;
    
    // Monthly calculation (22 working days)
    const monthlyHoursSaved = Math.round(hoursSavedPerDay * 22);
    
    // Earning speed increases capacity. Mover can translate more words in the same time!
    // Words translated increase by 80% with saved time.
    const capacityIncrease = wordsVal * 0.8 * rateVal * 22;
    const extraMoney = Math.round(capacityIncrease);
    
    // Update HTML View elements
    document.getElementById("hours-saved").textContent = monthlyHoursSaved + (currentLang === "ar" ? " ساعة" : " Hours");
    document.getElementById("money-saved").textContent = "$" + extraMoney.toLocaleString();
}

// Initialize components on load
window.addEventListener("DOMContentLoaded", () => {
    // Initial calculations
    calculateROI();
    triggerSim("exact");
});
