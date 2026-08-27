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
