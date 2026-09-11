"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "hi" | "en";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Translations {
  topBar: {
    helpline: string;
    available247: string;
    email: string;
    emailPlaceholder: string;
    langSelect: string;
  };
  header: {
    title: string;
    govt: string;
    citizenLogin: string;
    officerLogin: string;
  };
  navbar: {
    home: string;
    faq: string;
    citizenServices: string;
    newComplaint: string;
    registeredUser: string;
    onlineUsers: string;
  };
  stats: {
    receivedToday: string;
    promptlyRegistered: string;
    resolvedToday: string;
    actionCompleted: string;
    underInvestigation: string;
    officerAssigned: string;
    overdueIssues: string;
    withinDeadline: string;
  };
  actionCards: {
    portalBadge: string;
    heading: string;
    card1Title: string;
    card1Desc: string;
    card1Btn: string;
    card2Title: string;
    card2Desc: string;
    card2Btn: string;
    card3Title: string;
    card3Desc: string;
    card3Btn: string;
    card4Title: string;
    card4Desc: string;
    card4Btn: string;
  };
  trackWidget: {
    heading: string;
    subheading: string;
    placeholder: string;
    btn: string;
    smsQuery: string;
    downloadAtr: string;
  };
  featuresAndFlow: {
    featuresTitle: string;
    featuresSubtitle: string;
    flowTitle: string;
    flowSubtitle: string;
    secureBadge: string;
    slaNote: string;
    featuresList: string[];
    steps: {
      step: number;
      title: string;
      desc: string;
    }[];
  };
  faqs: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  footer: {
    portalDesc: string;
    contactUs: string;
    addressTitle: string;
    tollFree: string;
    stateCallCenter: string;
    addressText: string[];
    copyright: string;
    developedBy: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  hi: {
    topBar: {
      helpline: "📞 हेल्पलाइन: 1100",
      available247: "24×7 उपलब्ध",
      email: "ईमेल आईडी:",
      emailPlaceholder: "(प्रस्तावित)",
      langSelect: "भाषा चुनें",
    },
    header: {
      title: "सहयोग हेल्पलाइन पोर्टल",
      govt: "बिहार सरकार",
      citizenLogin: "नागरिक लॉगिन",
      officerLogin: "अधिकारी लॉगिन",
    },
    navbar: {
      home: "मुख्य पृष्ठ",
      faq: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
      citizenServices: "नागरिक सेवाएं",
      newComplaint: "नई शिकायत दर्ज करें",
      registeredUser: "पंजीकृत उपयोगकर्ता",
      onlineUsers: "ऑनलाइन उपयोगकर्ता",
    },
    stats: {
      receivedToday: "आज प्राप्त शिकायतें",
      promptlyRegistered: "त्वरित पंजीकृत",
      resolvedToday: "आज निष्पादित शिकायतें",
      actionCompleted: "कार्य पूर्ण",
      underInvestigation: "जांच / प्रक्रियाधीन",
      officerAssigned: "अधिकारी नियुक्त",
      overdueIssues: "अतिदेय मामले",
      withinDeadline: "समय सीमा के भीतर",
    },
    actionCards: {
      portalBadge: "नागरिक सेवा पोर्टल",
      heading: "प्रमुख त्वरित सेवाएं",
      card1Title: "शिकायत पंजीकरण",
      card1Desc: "ऑनलाइन शिकायत। हमारे डिजिटल पोर्टल के माध्यम से अपनी शिकायत दर्ज करें।",
      card1Btn: "शिकायत दर्ज करें",
      card2Title: "शिकायत की स्थिति",
      card2Desc: "कार्यवाही का विवरण। मोबाइल के माध्यम से वर्तमान स्थिति जानें।",
      card2Btn: "स्थिति देखें",
      card3Title: "अनुस्मारक भेजें",
      card3Desc: "निर्धारित समय में कार्रवाई नहीं हुई? अनुस्मारक भेजें।",
      card3Btn: "अनुस्मारक भेजें",
      card4Title: "आपकी प्रतिक्रिया",
      card4Desc: "शिकायत के निपटारे के संबंध में अपनी प्रतिक्रिया / सुझाव दें।",
      card4Btn: "प्रतिक्रिया दें",
    },
    trackWidget: {
      heading: "शिकायत की वास्तविक स्थिति जानें",
      subheading: "अपनी 12 अंकों की शिकायत संदर्भ संख्या या पंजीकृत मोबाइल नंबर दर्ज करें",
      placeholder: "शिकायत संदर्भ संख्या (उदा. GOB-2026-89412) या मोबाइल नंबर दर्ज करें",
      btn: "स्थिति जांचें",
      smsQuery: "त्वरित एसएमएस स्थिति जांच",
      downloadAtr: "कार्रवाई रिपोर्ट (ATR) डाउनलोड करें",
    },
    featuresAndFlow: {
      featuresTitle: "प्रमुख विशेषताएं",
      featuresSubtitle: "पोर्टल की मुख्य सुविधाएं एवं क्षमताएं",
      flowTitle: "यह कैसे कार्य करता है",
      flowSubtitle: "शिकायत निवारण की 5-चरणीय प्रक्रिया",
      secureBadge: "100% सुरक्षित एवं प्रमाणित रिकॉर्ड",
      slaNote: "औसत समाधान समय: 7-15 दिन",
      featuresList: [
        "शिकायतों का ऑनलाइन पंजीकरण",
        "विभागवार शिकायतों का त्वरित अग्रेषण",
        "समयबद्ध निवारण तंत्र (कानूनी समय सीमा)",
        "एसएमएस एवं ईमेल अलर्ट",
        "रियल-टाइम स्थिति ट्रैकिंग एवं ऑडिट ट्रेल",
        "नियम-आधारित बहुस्तरीय एस्केलेशन मैट्रिक्स",
        "नागरिक प्रतिक्रिया एवं संतुष्टि रेटिंग",
        "उच्चाधिकारियों द्वारा डैशबोर्ड निगरानी",
      ],
      steps: [
        {
          step: 1,
          title: "नागरिक ऑनलाइन या हेल्पलाइन 1100 पर शिकायत दर्ज करते हैं",
          desc: "वेब पोर्टल या टोल-फ्री नंबर 1100 के माध्यम से विवरण व प्रमाण के साथ शिकायत दर्ज करें।",
        },
        {
          step: 2,
          title: "शिकायत संबंधित विभाग को स्वतः अग्रेषित होती है",
          desc: "सिस्टम द्वारा संबंधित विभाग व जिले के अधिकृत नोडल अधिकारी को मामला सौंपा जाता है।",
        },
        {
          step: 3,
          title: "विभाग समस्या का निवारण कर स्थिति अपडेट करता है",
          desc: "क्षेत्रीय अधिकारी मौके पर समाधान कर अधिकृत कार्रवाई रिपोर्ट (ATR) अपलोड करते हैं।",
        },
        {
          step: 4,
          title: "नागरिक को समाधान की सूचना प्राप्त होती है",
          desc: "शिकायतकर्ता को समाधान की संपूर्ण जानकारी एसएमएस एवं पोर्टल के माध्यम से मिलती है।",
        },
        {
          step: 5,
          title: "समय सीमा में समाधान न होने पर स्वतः एस्केलेशन",
          desc: "निर्धारित समय में समाधान न मिलने पर मामला स्वतः उच्चाधिकारियों को स्थानांतरित हो जाता है।",
        },
      ],
    },
    faqs: {
      title: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
      subtitle: "बिहार सहयोग पोर्टल – रियल-टाइम मॉनिटरिंग सिस्टम से संबंधित आवश्यक जानकारियां",
      items: [
        {
          question: "1. बिहार सहयोग पोर्टल – रियल-टाइम मॉनिटरिंग सिस्टम क्या है?",
          answer: "बिहार सहयोग पोर्टल – रियल-टाइम मॉनिटरिंग सिस्टम बिहार सरकार का एक केंद्रीकृत डिजिटल प्लेटफॉर्म है, जिसे जन शिकायतों के पंजीकरण, निगरानी, ट्रैकिंग और समयबद्ध निवारण के लिए विकसित किया गया है।",
        },
        {
          question: "2. बिहार सहयोग पोर्टल का मुख्य उद्देश्य क्या है?",
          answer: "इसके प्रमुख उद्देश्य हैं:\n• पारदर्शिता और जवाबदेही सुनिश्चित करना\n• शिकायतों का समयबद्ध निवारण सक्षम करना\n• विभाग, जिला और उच्च प्रशासनिक स्तरों पर निगरानी की सुविधा प्रदान करना\n• सार्वजनिक सेवा वितरण में सुधार करना",
        },
        {
          question: "3. शिकायत कौन दर्ज करा सकता है?",
          answer: "कोई भी नागरिक निम्नलिखित से संबंधित शिकायत दर्ज करा सकता है:\n• सरकारी योजनाओं एवं सेवाओं से संबंधित\n• सेवा वितरण में देरी\n• अनुमेय लाभों की अप्राप्ति\n• अधिकारियों का कदाचार या लापरवाही\n• बुनियादी ढांचे एवं नागरिक सुविधाएं संबंधी समस्याएं",
        },
        {
          question: "4. शिकायत किन माध्यमों से दर्ज की जा सकती है?",
          answer: "शिकायतें उपलब्ध विभिन्न माध्यमों से दर्ज की जा सकती हैं, जिनमें शामिल हैं:\n• ऑनलाइन वेब पोर्टल\n• चैटबॉट\n• एसएमएस (SMS)\n• ईमेल\n• वॉइस कॉल / हेल्पलाइन (1100)\n• सीसीएस (कॉल सेंटर एग्जीक्यूटिव), यथायोग्य",
        },
        {
          question: "5. शिकायत दर्ज करने के लिए क्या जानकारी आवश्यक है?",
          answer: "शिकायतकर्ता को निम्नलिखित जानकारी प्रदान करने की आवश्यकता हो सकती है:\n• नाम और संपर्क विवरण (मोबाइल नंबर)\n• पता / जिला / प्रखंड / पंचायत\n• संबंधित विभाग\n• शिकायत का विवरण\n• सहायक दस्तावेज (यदि लागू हो)",
        },
        {
          question: "6. क्या शिकायत दर्ज करने के बाद पावती (Acknowledgement) प्राप्त होगी?",
          answer: "हाँ। सफल पंजीकरण के पश्चात एक विशिष्ट शिकायत पंजीकरण संख्या (Grievance Registration Number) उत्पन्न होती है। पंजीकृत संपर्क विवरण पर एसएमएस/ईमेल के माध्यम से भी पावती भेजी जाती है।",
        },
        {
          question: "7. मैं अपनी शिकायत की स्थिति कैसे ट्रैक कर सकता हूँ?",
          answer: "नागरिक सहयोग पोर्टल और अन्य उपलब्ध ट्रैकिंग तंत्रों के माध्यम से अपनी विशिष्ट शिकायत पंजीकरण संख्या (Grievance Registration Number) का उपयोग करके अपनी शिकायत की स्थिति ट्रैक कर सकते हैं।",
        },
        {
          question: "8. शिकायत निवारण की समय सीमा क्या है?",
          answer: "निवारण की समय सीमा संबंधित विभाग और शिकायत की प्रकृति पर निर्भर करती है। जहां लागू हो, शिकायतों को प्रत्येक स्तर पर निर्धारित समय सीमा के साथ परिभाषित स्तरों के माध्यम से संसाधित किया जाता है।",
        },
        {
          question: "9. यदि मेरी शिकायत निर्धारित समय के भीतर हल नहीं होती है तो क्या होगा?",
          answer: "यदि निर्धारित समय सीमा के भीतर शिकायत का समाधान नहीं होता है, तो इसे नियमानुसार संबंधित उच्चाधिकारी को एस्केलेट (अग्रेषित) किया जा सकता है। लंबित शिकायतों की लगातार सिस्टम डैशबोर्ड के माध्यम से उच्च स्तर पर निगरानी की जाती है।",
        },
        {
          question: "10. क्या बंद की गई शिकायत को पुनः खोला जा सकता है?",
          answer: "यदि नागरिक प्राप्त समाधान से संतुष्ट नहीं हैं, तो वे लागू नियमों और समय सीमा के अधीन उपलब्ध री-ओपन (पुनः खोलने) या अपील तंत्र का उपयोग कर सकते हैं।",
        },
        {
          question: "11. शिकायतों की निगरानी कैसे की जाती है?",
          answer: "शिकायतों की निगरानी कई प्रशासनिक स्तरों पर की जाती है, जिनमें शामिल हैं:\n• विभागीय स्तर\n• जिला स्तर\n• वरिष्ठ विभागीय / सचिवालय स्तर\n• उच्च स्तरीय निगरानी डैशबोर्ड (यथायोग्य)",
        },
        {
          question: "12. एस्केलेशन तंत्र (Escalation Mechanism) क्या है?",
          answer: "शिकायत निर्धारित पदानुक्रम के अनुसार आगे बढ़ सकती है, जैसे:\n• स्तर 1 – संबंधित नोडल अधिकारी\n• स्तर 2 – जिला स्तरीय प्राधिकारी\n• स्तर 3 – विभागीय प्राधिकारी / उच्च स्तरीय निगरानी",
        },
        {
          question: "13. क्या सहायक दस्तावेज अपलोड किए जा सकते हैं?",
          answer: "हाँ। नागरिक पोर्टल द्वारा निर्धारित फाइल-साइज और फॉर्मेट सीमाओं के अधीन, पीडीएफ (PDF) और इमेज फाइलों जैसे प्रासंगिक सहायक दस्तावेज अपलोड कर सकते हैं।",
        },
        {
          question: "14. तकनीकी समस्याओं के लिए किससे संपर्क किया जा सकता है?",
          answer: "तकनीकी सहायता के लिए, नागरिक पोर्टल पर उपलब्ध कराए गए निर्धारित सहयोग पोर्टल हेल्पडेस्क / तकनीकी सहायता दल से संपर्क कर सकते हैं।",
        },
        {
          question: "15. बिहार सहयोग पोर्टल शासन व्यवस्था में कैसे सुधार करता है?",
          answer: "यह प्रणाली निम्नलिखित के माध्यम से बेहतर सुशासन को सशक्त बनाती है:\n• रियल-टाइम शिकायत निगरानी\n• डेटा एनालिटिक्स और रिपोर्टिंग\n• जिलावार लंबित मामलों की निगरानी\n• विभागवार कार्य निष्पादन विश्लेषण\n• प्रशासनिक सुधार हेतु बार-बार आने वाली समस्याओं की पहचान",
        },
      ],
    },
    footer: {
      portalDesc: "सहयोग हेल्पलाइन पोर्टल बिहार सरकार का एक पारदर्शी एवं समयबद्ध डिजिटल माध्यम है, जो नागरिकों को उनकी समस्याओं के समाधान हेतु सीधे संबंधित विभागों से जोड़ता है।",
      contactUs: "संपर्क करें",
      addressTitle: "आधिकारिक पता",
      tollFree: "टोल-फ्री: 1100",
      stateCallCenter: "24×7 राज्य कॉल सेंटर",
      addressText: [
        "सहयोग हेल्पलाइन",
        "11वीं मंजिल, बिस्कोमान टॉवर",
        "पश्चिम गांधी मैदान",
        "पटना, बिहार - 800001",
      ],
      copyright: "© बिहार सरकार | सर्वाधिकार सुरक्षित",
      developedBy: "BSEDC (BELTRON)",
      disclaimer: "अस्वीकरण (Disclaimer): इस वेबसाइट पर उपलब्ध अंग्रेजी सामग्री को आधिकारिक और प्रामाणिक संस्करण माना जाएगा। हिंदी सामग्री केवल अनुवाद और उपयोगकर्ता की सुविधा के लिए प्रदान की गई है। किसी भी विसंगति या व्याख्या में अंतर की स्थिति में अंग्रेजी संस्करण मान्य होगा।",
    },
  },
  en: {
    topBar: {
      helpline: "📞 Helpline: 1100",
      available247: "Available 24×7",
      email: "Email ID:",
      emailPlaceholder: "(to be proposed)",
      langSelect: "Select Language",
    },
    header: {
      title: "Sahyog Helpline Portal",
      govt: "Government of Bihar",
      citizenLogin: "Citizen Login",
      officerLogin: "Officer Login",
    },
    navbar: {
      home: "Home Page",
      faq: "FAQ",
      citizenServices: "Citizen Services",
      newComplaint: "New Complaint",
      registeredUser: "Registered User",
      onlineUsers: "Online Users",
    },
    stats: {
      receivedToday: "Complaints Received Today",
      promptlyRegistered: "Promptly Registered",
      resolvedToday: "Resolved Today",
      actionCompleted: "Action Completed",
      underInvestigation: "Under Investigation",
      officerAssigned: "Officer Assigned",
      overdueIssues: "Overdue Issues",
      withinDeadline: "Within Deadline",
    },
    actionCards: {
      portalBadge: "Citizen Services Portal",
      heading: "Key Quick Services",
      card1Title: "Complaint Registration",
      card1Desc: "Complaint Online. File your complaint through our digital portal.",
      card1Btn: "File complaint",
      card2Title: "Complaint Status",
      card2Desc: "Details of proceedings. Know the current status through mobile.",
      card2Btn: "View Status",
      card3Title: "Send Reminder",
      card3Desc: "Failure to take action within stipulated time? Send a reminder.",
      card3Btn: "Send Reminder",
      card4Title: "Your Feedback",
      card4Desc: "Regarding disposal of complaint. Give your feedback/suggestions.",
      card4Btn: "Give Feedback",
    },
    trackWidget: {
      heading: "Track Your Grievance Progress Real-Time",
      subheading: "Enter your 12-digit Grievance Reference ID or registered Mobile Number to get instant proceedings status",
      placeholder: "Enter Grievance Reference ID (e.g. GOB-2026-89412) or Mobile No.",
      btn: "Search Status",
      smsQuery: "Instant SMS Status Query",
      downloadAtr: "Download Action Taken Report (ATR)",
    },
    featuresAndFlow: {
      featuresTitle: "Key Features",
      featuresSubtitle: "Core platform capabilities & infrastructure",
      flowTitle: "How It Works",
      flowSubtitle: "End-to-end 5-step grievance disposal lifecycle",
      secureBadge: "100% Secure & Tamper-Proof Logs",
      slaNote: "Average SLA Resolution: 7-15 Days",
      featuresList: [
        "Online Registration of Grievances",
        "Department-wise Grievance Forwarding",
        "Time-bound Disposal Mechanism (SLA Driven)",
        "Instant SMS & Email Alerts",
        "Real-Time Status Tracking & Audit Trail",
        "Rule-based Multi-tier Escalation Matrix",
        "Citizen Feedback & Rating System",
        "Centralized Dashboard & Leadership Monitoring",
      ],
      steps: [
        {
          step: 1,
          title: "Citizen registers grievance online",
          desc: "Citizen submits complaint via web portal or toll-free helpline 1100 with location & evidence.",
        },
        {
          step: 2,
          title: "Grievance automatically forwarded to department",
          desc: "System routes ticket via intelligent workflow to the designated departmental Nodal Officer.",
        },
        {
          step: 3,
          title: "Department processes and updates status",
          desc: "Field office/department resolves issue and uploads official Action Taken Report (ATR).",
        },
        {
          step: 4,
          title: "Citizen receives notification",
          desc: "Automated SMS/Email notification sent to citizen with complete resolution remarks.",
        },
        {
          step: 5,
          title: "Escalation if not resolved within timeline",
          desc: "Automatic escalation to senior district/state authority if SLA turnaround time is breached.",
        },
      ],
    },
    faqs: {
      title: "Frequently Asked Questions (FAQ)",
      subtitle: "Bihar Sahyog Portal – Real-Time Monitoring System Guidelines & Information",
      items: [
        {
          question: "1. What is Bihar Sahyog Portal – Real-Time Monitoring System?",
          answer: "Bihar Sahyog Portal – Real-Time Monitoring System is a centralized digital platform of the Government of Bihar for registration, monitoring, tracking, and time-bound resolution of public grievances.",
        },
        {
          question: "2. What is the objective of the Bihar Sahyog Portal?",
          answer: "The key objectives are to:\n• Ensure transparency and accountability\n• Enable time-bound grievance resolution\n• Facilitate monitoring at Department, District, and higher administrative levels\n• Improve public service delivery",
        },
        {
          question: "3. Who can file a grievance?",
          answer: "Any citizen can file a grievance related to:\n• Government schemes and services\n• Delay in service delivery\n• Non-receipt of entitled benefits\n• Misconduct or negligence of officials\n• Infrastructure and civic issues",
        },
        {
          question: "4. Through which channels can grievances be filed?",
          answer: "Grievances can be registered through the available channels, including:\n• Online Portal\n• Chatbot\n• SMS\n• Email\n• Voice/Call\n• CCE (Citizen/Call Centre Executive), as applicable",
        },
        {
          question: "5. What information is required to file a grievance?",
          answer: "The complainant may be required to provide:\n• Name and contact details\n• Address/District/Block/panchyat\n• Concerned Department\n• Description of the grievance\n• Supporting documents, if applicable",
        },
        {
          question: "6. Will I receive an acknowledgement after submission?",
          answer: "Yes. After successful registration, a unique Grievance Registration Number is generated. An acknowledgement may also be sent through SMS/Email to the registered contact details.",
        },
        {
          question: "7. How can I track my grievance?",
          answer: "Citizens can track their grievance by using the Grievance Registration Number through the Sahyog Portal and other available tracking mechanisms.",
        },
        {
          question: "8. What is the time limit for grievance disposal?",
          answer: "The disposal timeline depends on the department and nature of the grievance. Where applicable, grievances may be processed through defined levels, with a prescribed timeline at each level.",
        },
        {
          question: "9. What happens if my grievance is not resolved within the prescribed time?",
          answer: "If a grievance is not resolved within the prescribed timeline, it may be escalated to the appropriate higher authority. Pending grievances are also monitored through the system dashboards.",
        },
        {
          question: "10. Can I reopen a closed grievance?",
          answer: "If the citizen is not satisfied with the resolution, they may use the available reopen/appeal mechanism, subject to the applicable rules and time limit.",
        },
        {
          question: "11. How is grievance monitoring done?",
          answer: "Grievances are monitored at multiple administrative levels, including:\n• Departmental level\n• District level\n• Senior Departmental/Secretariat level\n• Higher-level monitoring dashboards, as applicable",
        },
        {
          question: "12. What is the escalation mechanism?",
          answer: "The grievance may move through the defined escalation hierarchy, such as:\n• Level 1 – Concerned Officer\n• Level 2 – District Authority\n• Level 3 – Departmental Authority / Higher-Level Monitoring",
        },
        {
          question: "13. Can supporting documents be uploaded?",
          answer: "Yes. Citizens may upload relevant supporting documents, such as PDFs and image files, subject to the portal's prescribed file-size and format limits.",
        },
        {
          question: "14. Whom can I contact for technical issues?",
          answer: "For technical assistance, citizens may contact the designated Sahyog Portal Helpdesk/Technical Support, as provided on the portal.",
        },
        {
          question: "15. How does the Bihar Sahyog Portal improve governance?",
          answer: "The system supports better governance through:\n• Real-time grievance monitoring\n• Data analytics and reporting\n• District-wise pendency monitoring\n• Department-wise performance analysis\n• Identification of recurring issues for administrative improvement",
        },
      ],
    },
    footer: {
      portalDesc: "Sahyog Helpline Portal provides a transparent and efficient platform for citizens to register and track complaints online. The system ensures timely resolution of grievances by connecting citizens directly with concerned departments through a structured digital workflow.",
      contactUs: "Contact Us",
      addressTitle: "Official Address",
      tollFree: "Toll Free: 1100",
      stateCallCenter: "24×7 State Call Center",
      addressText: [
        "Sahyog Helpline",
        "11th Floor, Biscomaun Tower",
        "West Gandhi Maidan",
        "Patna, Bihar - 800001",
      ],
      copyright: "© Government of Bihar | All Rights Reserved",
      developedBy: "BSEDC (BELTRON)",
      disclaimer: "Disclaimer: The English content available on this website shall be treated as the official and authentic version. The Hindi content is provided solely for translation and user convenience purposes. In case of any discrepancy, inconsistency, or difference in interpretation, the English version shall prevail.",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("hi");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
