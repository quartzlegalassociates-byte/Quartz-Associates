export type ArticleSection = {
  heading?: string
  paragraphs: string[]
}

export type Article = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  readTime: string
  author: string
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: "personal-guarantor-proceedings-promoters-cirp-defence",
    title:
      "Personal Guarantor Proceedings: What Promoters Often Miss in CIRP Defence",
    category: "Insolvency",
    date: "27 August 2026",
    excerpt:
      "A practical examination of issues promoters and personal guarantors should consider when facing proceedings arising from corporate insolvency.",
    readTime: "8 min read",
    author: "Advocate Abhishek Kumar",
    sections: [
      {
        paragraphs: [
          "Personal guarantor proceedings arising from corporate insolvency can expose individuals to consequences that are distinct from the insolvency proceedings of the corporate debtor.",
          "The defence therefore requires careful examination of the underlying guarantee, the creditor's claim, the insolvency record and the procedural history of the matter.",
        ],
      },
      {
        heading: "The starting point",
        paragraphs: [
          "The first step is to identify precisely what obligations were undertaken under the guarantee and whether the creditor's claim corresponds with those obligations.",
          "A promoter should not assume that every liability attributed to the corporate debtor automatically translates into an identical liability against the personal guarantor.",
        ],
      },
      {
        heading: "What the defence should examine",
        paragraphs: [
          "The relevant documents, dates, financial transactions, invocation of the guarantee and correspondence between the parties should be examined together rather than in isolation.",
          "The procedural history of the corporate insolvency process may also be important when assessing the nature and extent of the claim against the guarantor.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Personal guarantor proceedings require a document-driven and issue-specific defence. The guarantee deed, creditor's claim and insolvency record should be analysed together before determining the appropriate legal strategy.",
        ],
      },
    ],
  },

  {
    slug: "section-9-interim-relief-commercial-disputes",
    title:
      "Section 9 Reliefs in Commercial Disputes — When Interim Relief Is the Entire War",
    category: "Arbitration",
    date: "27 August 2026",
    excerpt:
      "Why applications for interim measures under Section 9 of the Arbitration and Conciliation Act require a strategy that goes beyond obtaining a temporary order.",
    readTime: "6 min read",
    author: "Advocate Abhishek Kumar",
    sections: [
      {
        paragraphs: [
          "Interim relief can determine the commercial reality of a dispute long before the final award is delivered.",
          "For that reason, a Section 9 application should be approached as part of the overall dispute strategy rather than as an isolated procedural step.",
        ],
      },
      {
        heading: "The commercial objective",
        paragraphs: [
          "The applicant should first identify what must actually be protected: an asset, receivable, contractual position, evidence or the effectiveness of the eventual arbitral award.",
        ],
      },
      {
        heading: "Relief must serve the dispute",
        paragraphs: [
          "The strongest interim applications connect the requested relief to a clearly identifiable risk and demonstrate why the court's intervention is necessary.",
          "The drafting should therefore focus on the factual matrix, the contractual framework and the specific prejudice that may occur without protection.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "A Section 9 application should be designed with the final dispute in mind. Interim relief is most effective when it protects the commercial position that the arbitration is ultimately intended to determine.",
        ],
      },
    ],
  },

  {
    slug: "dynamic-injunctions-online-infringement",
    title:
      "Dynamic Injunctions and the Modern Playbook for Online Infringement",
    category: "Brand Enforcement",
    date: "27 August 2026",
    excerpt:
      "An overview of the strategic considerations involved in protecting brands and intellectual property against rapidly changing online infringement.",
    readTime: "7 min read",
    author: "Advocate Abhishek Kumar",
    sections: [
      {
        paragraphs: [
          "Online infringement can move quickly from one domain, platform or digital location to another. Traditional litigation strategies therefore need to account for the speed and fluidity of online conduct.",
          "Dynamic injunctions can play an important role where infringement continues through changing online locations.",
        ],
      },
      {
        heading: "Why speed matters",
        paragraphs: [
          "Delay can allow infringing material to be replicated, redistributed or shifted across multiple digital platforms.",
          "The litigation strategy should therefore consider both the immediate relief required and the mechanism through which subsequent instances of infringement can be addressed.",
        ],
      },
      {
        heading: "Building the evidence",
        paragraphs: [
          "Screenshots, URLs, transaction records, domain information and other contemporaneous evidence can become important in demonstrating the nature and continuity of online infringement.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Effective online brand enforcement requires a combination of evidence, speed and carefully structured relief. The objective should be to ensure that the protection granted by the court remains commercially meaningful as the infringement evolves.",
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}


  {
    slug: "rera-act-2016-rights-remedies-challenges",
    title:
      "Real Estate (Regulation and Development) Act, 2016: Rights, Remedies and Challenges",
    category: "Real Estate & RERA",
    date: "27 August 2026",
    excerpt:
      "A detailed analysis of the Real Estate (Regulation and Development) Act, 2016, covering its objectives, project registration, disclosure requirements, protection against diversion of project funds, promoter obligations, homebuyer rights, remedies and implementation challenges.",
    readTime: "12 min read",
    author: "Advocate Abhishek Kumar",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "The Real Estate (Regulation and Development) Act, 2016 (“RERA”) marked a significant shift in the regulation of the real estate and construction sector in India. The legislation was enacted with the objective of bringing greater transparency, accountability and financial discipline to the real estate industry and protecting the interests of homebuyers.",
          "The RERA Bill was passed by the Rajya Sabha on 10 March 2016 and by the Lok Sabha on 15 March 2016. The Act came into force on 1 May 2016, with 59 of its 92 sections initially being notified. The remaining provisions came into force on 1 May 2017.",
          "Before RERA, homebuyers frequently faced problems such as delayed possession, diversion of project funds, changes in sanctioned plans, lack of transparency and unequal bargaining power vis-à-vis developers. RERA sought to address these concerns by creating a statutory regulatory framework and mechanisms for dispute resolution.",
          "This article examines the purpose of RERA, the rights and obligations of homebuyers and promoters, remedies available under the Act, and some of the challenges in its implementation.",
        ],
      },

      {
        heading: "Why Was RERA Needed?",
        paragraphs: [
          "The real estate sector had historically been affected by several structural problems.",
          "One of the most significant concerns was the unequal bargaining position between developers and homebuyers. Homebuyers often made substantial financial commitments at an early stage of construction, while developers retained significant control over the project, its timelines and the utilisation of project funds.",
          "Another major concern was the diversion or mismanagement of funds. Amounts collected from purchasers for one project could, in certain circumstances, be utilised for other projects, contributing to delays and financial difficulties.",
          "Delay in completion and possession was consequently one of the most important grievances faced by homebuyers.",
          "RERA was introduced to create a regulatory framework under which real estate projects would be subject to greater disclosure, supervision and accountability. It also established Real Estate Regulatory Authorities in the States and Union Territories and provided mechanisms for adjudication of disputes.",
        ],
      },

      {
        heading: "Major Objectives of RERA",
        paragraphs: [
          "The principal objectives of RERA include:",
          "1. Promoting transparency in the real estate sector.",
          "2. Protecting the interests of homebuyers and allottees.",
          "3. Regulating real estate projects and promoters.",
          "4. Preventing diversion of funds collected for a particular project.",
          "5. Ensuring greater accountability of promoters.",
          "6. Providing statutory rights and remedies to allottees.",
          "7. Facilitating more efficient resolution of disputes.",
          "8. Promoting confidence and investment in the real estate sector.",
          "The legislation therefore seeks to balance the interests of homebuyers, promoters and other stakeholders, although many of its provisions are particularly focused on protecting allottees.",
        ],
      },

      {
        heading: "Registration of Real Estate Projects",
        paragraphs: [
          "One of the most important features of RERA is the requirement of project registration.",
          "Under Section 3, a promoter is generally prohibited from advertising, marketing, booking, selling or offering for sale any plot, apartment or building in a real estate project without registering the project with the Real Estate Regulatory Authority, subject to the exemptions provided under the Act.",
          "Registration is intended to bring the project within the regulatory framework and enable prospective purchasers to obtain relevant information before making an investment.",
        ],
      },

      {
        heading: "Disclosure and Transparency",
        paragraphs: [
          "Section 4 requires promoters seeking registration to provide important information and documents concerning the project and the promoter.",
          "Depending upon the requirements of the Act and applicable State rules, the information includes details relating to:",
          "• The promoter and its enterprise.",
          "• The proposed real estate project.",
          "• Approvals and commencement certificates.",
          "• Sanctioned plans.",
          "• Development plans.",
          "• The number and type of apartments or plots.",
          "• Carpet area.",
          "• Proposed completion period.",
          "• Proforma allotment letter.",
          "• Agreement for sale.",
          "• Other prescribed information and documents.",
          "The objective is to enable prospective purchasers to make a more informed decision and to reduce information asymmetry between the promoter and the buyer.",
        ],
      },

      {
        heading: "Protection Against Diversion of Project Funds",
        paragraphs: [
          "Another important safeguard under RERA concerns the utilisation of amounts collected from allottees.",
          "Under Section 4, a promoter is required to deposit 70% of the amounts realised from allottees from time to time into a separate account in a scheduled bank for the purposes specified under the Act.",
          "Withdrawals from this account are linked to the percentage of completion of the project and are subject to certification requirements involving professionals such as an engineer, architect and chartered accountant.",
          "The underlying objective is to ensure that funds collected for a particular project are used primarily for that project and to reduce the possibility of diversion of funds.",
        ],
      },

      {
        heading: "Extension of Project Registration",
        paragraphs: [
          "RERA also recognises that circumstances beyond the reasonable control of a promoter may affect project timelines.",
          "Section 6 permits extension of registration in certain circumstances, including force majeure. The extension mechanism is subject to the conditions and limitations prescribed by the Act and applicable rules.",
          "Thus, while RERA imposes significant obligations on promoters regarding project timelines, the statutory framework also recognises that genuine circumstances may prevent completion within the originally approved period.",
        ],
      },

      {
        heading: "Obligations of Promoters",
        paragraphs: [
          "The rights and remedies under RERA cannot be understood without considering the obligations imposed upon promoters.",
          "Sections 11 to 18 contain several important obligations concerning matters such as:",
          "• Disclosure of project information.",
          "• Adherence to sanctioned plans.",
          "• Compliance with the agreement for sale.",
          "• Transfer of title.",
          "• Responsibility for defects.",
          "• Timely possession.",
          "• Consequences of failure to fulfil contractual and statutory obligations.",
          "These provisions form a substantial part of the regulatory framework governing the relationship between promoters and allottees.",
        ],
      },

      {
        heading: "Rights of Homebuyers and Allottees",
        paragraphs: [
          "RERA provides several statutory protections to homebuyers.",
          "Among the important provisions are Sections 12, 14, 18 and 19, which deal with different rights and remedies of allottees.",
          "These include rights relating to:",
          "• Information and disclosures.",
          "• Possession of the property.",
          "• Compensation in appropriate circumstances.",
          "• Interest for delay.",
          "• Withdrawal from a project in circumstances recognised by the Act.",
          "• Compliance with sanctioned plans and specifications.",
          "• Other contractual and statutory obligations of the promoter.",
          "Importantly, Section 19 sets out several rights as well as obligations of the allottee.",
          "Therefore, RERA is not merely a legislation imposing obligations upon developers. It creates a statutory framework governing the rights and responsibilities of both promoters and allottees.",
        ],
      },

      {
        heading: "Remedies Available Under RERA",
        paragraphs: [
          "One of the principal advantages of RERA is the creation of a dedicated regulatory and adjudicatory framework.",
          "Before the enactment of RERA, a purchaser facing delayed possession or other disputes with a developer could be required to pursue remedies through different legal forums depending upon the nature of the dispute.",
          "RERA introduced a specialised statutory mechanism through which grievances relating to registered real estate projects can be raised before the appropriate authority or adjudicatory officer.",
        ],
      },

      {
        heading: "Filing a Complaint",
        paragraphs: [
          "Under Section 31, an aggrieved person may file a complaint before the Real Estate Regulatory Authority or the adjudicating officer, as applicable, in respect of a violation of the provisions of the Act or the rules and regulations made thereunder.",
          "The remedy is not restricted exclusively to purchasers. Depending upon the nature of the grievance and the applicable provision, other persons, including promoters, may also invoke the statutory mechanism.",
        ],
      },

      {
        heading: "Compensation and Interest",
        paragraphs: [
          "The Act provides remedies concerning compensation, interest and other reliefs, depending upon the nature of the violation.",
          "In appropriate circumstances, an allottee may seek relief relating to delayed possession, withdrawal from the project, refund, interest or compensation in accordance with the applicable provisions.",
          "The Act therefore provides a statutory framework that can be particularly significant in disputes involving delayed possession, failure to comply with sanctioned plans, defects and breaches of obligations by promoters.",
        ],
      },

      {
        heading: "Regulatory Powers Under RERA",
        paragraphs: [
          "The regulatory framework begins with project registration and continues throughout the life of the project.",
          "The regulatory authority has powers to monitor compliance and take action where the promoter fails to comply with the requirements of the Act.",
          "In appropriate circumstances, failure to comply with the statutory requirements may result in regulatory consequences, including revocation of project registration under Section 7 and consequential measures under the Act.",
          "This regulatory mechanism is important because RERA is not merely a forum for resolving individual disputes; it also seeks to regulate the conduct of the real estate sector.",
        ],
      },

      {
        heading: "Challenges and Limitations in the Implementation of RERA",
        paragraphs: [
          "Although RERA represents a significant legislative development, its effectiveness depends substantially upon the manner in which the Act is implemented.",
        ],
      },

      {
        heading: "1. Challenges Concerning Redevelopment and Rehabilitation Projects",
        paragraphs: [
          "One of the concerns highlighted in relation to the RERA framework is its application to different forms of real estate development, including redevelopment, rehabilitation and slum rehabilitation projects.",
          "The applicability of RERA depends upon the statutory definition of a real estate project and the specific facts and structure of the project. Consequently, not every redevelopment or rehabilitation arrangement can automatically be treated in the same manner as an ordinary developer-homebuyer project.",
          "This creates practical questions concerning the extent to which the regulatory framework protects different categories of stakeholders involved in such projects.",
        ],
      },

      {
        heading: "2. Separate Account Mechanism",
        paragraphs: [
          "The separate-account mechanism under Section 4 is intended to prevent diversion of project funds.",
          "However, its effectiveness depends upon proper implementation of the statutory certification and withdrawal mechanism and compliance with the applicable State rules.",
          "Where the certification process or implementation of the rules does not adequately achieve the legislative objective, the effectiveness of the safeguard can be weakened.",
        ],
      },

      {
        heading: "3. Unregistered Projects",
        paragraphs: [
          "Another important practical issue concerns projects that are not registered despite the statutory requirement.",
          "A promoter cannot ordinarily avoid the regulatory framework merely by failing to comply with a registration requirement. At the same time, disputes involving unregistered projects have generated litigation concerning the jurisdiction and powers of RERA authorities and the remedies available to affected purchasers.",
          "Courts and regulatory authorities have had to address these issues in light of the provisions of the Act and the specific facts of each case.",
        ],
      },

      {
        heading: "Is RERA Only for Homebuyers?",
        paragraphs: [
          "A common misconception is that RERA creates rights only for homebuyers.",
          "While the legislation is clearly homebuyer-centric in several respects, it establishes a regulatory framework governing the conduct and obligations of different stakeholders.",
          "Promoters are also given statutory rights and remedies, subject to compliance with the Act. The legislation therefore seeks to establish a structured regulatory relationship rather than simply imposing liabilities upon developers.",
          "The broader objective is to create a more transparent and accountable real estate market.",
        ],
      },

      {
        heading: "Has RERA Achieved Its Objective?",
        paragraphs: [
          "RERA has undoubtedly changed the legal landscape of the Indian real estate sector.",
          "It has introduced mandatory disclosures, project registration, financial safeguards, statutory obligations and specialised mechanisms for addressing grievances. These measures have substantially strengthened the legal position of homebuyers.",
          "However, the effectiveness of RERA cannot be judged merely by the text of the legislation.",
          "Its success depends upon:",
          "• Effective functioning of Real Estate Regulatory Authorities.",
          "• Proper implementation of State rules.",
          "• Timely adjudication and enforcement.",
          "• Compliance by promoters.",
          "• Effective monitoring of project funds.",
          "• Consistent judicial interpretation.",
          "• Awareness among homebuyers and other stakeholders.",
          "Where implementation is weak, even a well-designed statutory framework may fail to achieve its intended objectives.",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "The Real Estate (Regulation and Development) Act, 2016 represents a major step towards creating a more transparent, accountable and regulated real estate sector in India.",
          "The legislation addresses some of the industry's most significant historical concerns, including project delays, inadequate disclosures, diversion of funds and unequal bargaining power between developers and homebuyers.",
          "At the same time, RERA is not a complete solution to every problem in the real estate sector. Questions concerning implementation, enforcement, project registration, redevelopment and the functioning of regulatory authorities continue to require attention.",
          "The basic framework created by RERA is nevertheless significant. If the statutory provisions are implemented effectively and consistently, RERA can serve not only as a mechanism for protecting homebuyers but also as a framework for creating greater certainty and confidence for responsible developers and investors.",
          "Ultimately, the success of RERA depends not merely upon the existence of the legislation, but upon effective implementation, enforcement and compliance with its underlying principles of transparency, accountability and responsible development.",
        ],
      },

      {
        heading: "Frequently Asked Questions (FAQs)",
        paragraphs: [
          "1. What is the Real Estate (Regulation and Development) Act, 2016? RERA is a central legislation enacted to regulate the real estate sector, promote transparency and accountability, and protect the interests of homebuyers and other stakeholders.",
          "2. Why was RERA introduced? RERA was introduced to address problems such as project delays, lack of transparency, diversion of project funds and the unequal bargaining position between developers and homebuyers.",
          "3. What does Section 3 of RERA provide? Section 3 generally requires promoters to register covered real estate projects with the Real Estate Regulatory Authority before advertising, marketing, booking or offering them for sale.",
          "4. What is the 70% rule under RERA? Section 4 requires 70% of amounts realised from allottees for a real estate project to be deposited in a separate account in a scheduled bank, subject to the statutory requirements.",
          "5. Can a homebuyer file a complaint under RERA? Yes. Section 31 provides a mechanism for an aggrieved person to file a complaint concerning violations of the Act, rules or regulations before the appropriate authority or adjudicating officer, as applicable.",
          "6. What remedies can a homebuyer seek under RERA? Depending upon the facts and applicable provisions, remedies may include possession, refund, interest, compensation and other appropriate reliefs.",
          "7. Does RERA impose obligations only on builders? No. RERA establishes rights and obligations for both promoters and allottees, although several provisions are specifically designed to protect homebuyers.",
          "8. Has RERA completely solved the problems of the real estate sector? No. RERA has significantly strengthened regulation of the sector, but its effectiveness depends upon implementation, enforcement, compliance and the functioning of regulatory authorities.",
        ],
      },

      {
        heading: "Disclaimer",
        paragraphs: [
          "This article is intended for general informational purposes only and should not be treated as legal advice. The applicability of RERA and the remedies available in a particular matter depend upon the facts of the case, the applicable State rules and judicial interpretation.",
        ],
      },
    ],
  },
