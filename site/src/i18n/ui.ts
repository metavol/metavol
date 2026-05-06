// metavol site — i18n string dictionaries
// Locale 'ja' is default (root /), 'en' is /en/

export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  ja: {
    // Header
    'nav.products': 'Products',
    'nav.news': 'News',
    'nav.publications': 'Publications',
    'nav.download': 'Download',
    'nav.instruction': 'Instruction',
    'nav.citation': 'Citation',
    // Hero
    'hero.eyebrow': 'OPEN-SOURCE · since 2014',
    'hero.title.line1': 'PET/CTを、',
    'hero.title.accent': '"測る"',
    'hero.title.serif': '道具',
    'hero.title.line2': 'を',
    'hero.title.line3': '誰の手にも。',
    'hero.subtitle':
      'metavolはMTV／TLG／SUVmax／テクスチャ解析を一気通貫で行えるPET-CTビューワ群。Windowsデスクトップ版・Webブラウザ版・アミロイド特化版の3形態で、研究と臨床の現場に寄り添います。',
    'hero.cta.products': '3つの製品を見る',
    'hero.cta.papers': '使用論文 60+',
    'hero.note': '2014年から累計60本以上の論文で使用。',
    // Products
    'products.title': '3つの',
    'products.title.serif': 'products.',
    'products.lead': '用途に応じて選べる3形態。すべて非商用・無償・オープンソースで公開しています。',
    'products.classic.chip': 'Desktop · Windows',
    'products.classic.status': 'Stable v3.0',
    'products.classic.title': 'metavol classic',
    'products.classic.subtitle': '定番のPET-CT解析デスクトップアプリ',
    'products.classic.desc':
      '2014年以来、世界の核医学研究現場で60本以上の論文に使われてきた定番版。MTV／TLG／SUV／テクスチャを直感的に解析できます。',
    'products.classic.cta1': 'ダウンロード',
    'products.classic.cta2': '使い方',
    'products.web.chip': 'Web · Browser',
    'products.web.title': 'metavol-web',
    'products.web.subtitle': 'OS非依存のWeb版DICOMビューワ',
    'products.web.desc':
      'ブラウザだけで動く軽量ビューワ。インストール不要、Mac／Linuxでも利用可能。教育・スクリーニング用途に最適です。',
    'products.web.cta1': 'ブラウザで開く',
    'products.web.cta2': '機能一覧',
    'products.amyloid.chip': 'Amyloid PET',
    'products.amyloid.status': 'Coming Soon',
    'products.amyloid.title': 'metavol for amyloid',
    'products.amyloid.subtitle': 'アミロイドPET特化版（近日公開）',
    'products.amyloid.desc':
      'アミロイドPETに特化し、Centiloidスケールの算出やテンプレート解析をワンストップで行える新バージョン。アルツハイマー病研究を支援します。',
    'products.amyloid.cta1': '準備中',
    'products.amyloid.cta2': '通知を受け取る',
    // News
    'news.title': 'お知らせ',
    'news.title.serif': '/ news.',
    'news.lead': 'リリース・論文・更新情報。RSSでも配信予定です。',
    'news.viewAll': '過去のお知らせをすべて見る →',
    // Publications
    'pubs.title': '使用論文',
    'pubs.title.serif': '/ publications.',
    'pubs.lead': 'metavolを引用した論文の抜粋。年別・タグ別の検索ページもご用意します。',
    'pubs.viewAll': '論文一覧へ（年別・タグ別） →',
    // Citation
    'cite.title': '引用ガイド',
    'cite.title.serif': '/ cite us.',
    'cite.lead':
      '論文・学会発表でmetavolをご使用された場合は、下記をご引用ください。引用が、長期的な開発の最大の支援です。',
    'cite.body':
      'BibTeX／RIS／APA／Vancouver形式に対応しています。「Cite」ボタン1クリックでクリップボードへコピー可能なUIを実装予定。',
    // Footer
    'foot.desc':
      'PET/CTを"測る"ためのオープンソース。北海道大学核医学を中心に研究開発が続けられています。',
    'foot.amed': 'AMED 医学系研究支援プログラム連携',
    'foot.products': 'Products',
    'foot.resources': 'Resources',
    'foot.connect': 'Connect',
    'foot.copyright': '© 2014–2026 metavol project / Hokkaido University Nuclear Medicine',
  },
  en: {
    'nav.products': 'Products',
    'nav.news': 'News',
    'nav.publications': 'Publications',
    'nav.download': 'Download',
    'nav.instruction': 'Instruction',
    'nav.citation': 'Citation',
    'hero.eyebrow': 'OPEN-SOURCE · since 2014',
    'hero.title.line1': 'A tool to',
    'hero.title.accent': 'measure',
    'hero.title.serif': 'PET/CT,',
    'hero.title.line2': '',
    'hero.title.line3': 'in everyone’s hands.',
    'hero.subtitle':
      'metavol is a family of PET-CT viewers that quantify MTV, TLG, SUVmax, and texture features. Three flavors — Windows desktop, web browser, and an amyloid-PET specialty build — for research and clinical workflows alike.',
    'hero.cta.products': 'See the three products',
    'hero.cta.papers': 'Used in 60+ papers',
    'hero.note': 'Used in 60+ peer-reviewed papers since 2014.',
    'products.title': 'Our three',
    'products.title.serif': 'products.',
    'products.lead': 'Pick the form factor that fits. All free, open-source, non-commercial.',
    'products.classic.chip': 'Desktop · Windows',
    'products.classic.status': 'Stable v3.0',
    'products.classic.title': 'metavol classic',
    'products.classic.subtitle': 'The original PET-CT analysis desktop app',
    'products.classic.desc':
      'Since 2014, used in 60+ peer-reviewed nuclear medicine papers. Intuitive analysis of MTV, TLG, SUV, and texture features.',
    'products.classic.cta1': 'Download',
    'products.classic.cta2': 'How to use',
    'products.web.chip': 'Web · Browser',
    'products.web.title': 'metavol-web',
    'products.web.subtitle': 'OS-independent web DICOM viewer',
    'products.web.desc':
      'A lightweight viewer that runs entirely in the browser. No install required, works on Mac and Linux. Great for teaching and quick screening.',
    'products.web.cta1': 'Open in browser',
    'products.web.cta2': 'Features',
    'products.amyloid.chip': 'Amyloid PET',
    'products.amyloid.status': 'Coming Soon',
    'products.amyloid.title': 'metavol for amyloid',
    'products.amyloid.subtitle': 'Amyloid-PET specialized build (coming soon)',
    'products.amyloid.desc':
      'A new build dedicated to amyloid-PET — Centiloid computation and template-based analysis in one place. Supports Alzheimer’s disease research.',
    'products.amyloid.cta1': 'In preparation',
    'products.amyloid.cta2': 'Notify me',
    'news.title': 'News',
    'news.title.serif': '/ updates.',
    'news.lead': 'Releases, papers, updates. RSS feed coming soon.',
    'news.viewAll': 'View all news →',
    'pubs.title': 'Publications',
    'pubs.title.serif': '/ papers.',
    'pubs.lead': 'A selection of papers citing metavol. A full filterable list is on the way.',
    'pubs.viewAll': 'All publications (by year, by tag) →',
    'cite.title': 'Citation',
    'cite.title.serif': '/ cite us.',
    'cite.lead':
      'When you use metavol in a publication or talk, please cite us as follows. Citations are the single biggest support for long-term development.',
    'cite.body':
      'We provide BibTeX, RIS, APA, and Vancouver formats. A one-click copy-to-clipboard UI is on the roadmap.',
    'foot.desc':
      'Open-source tools to measure PET/CT. Developed at Hokkaido University, Nuclear Medicine.',
    'foot.amed': 'In collaboration with AMED clinical research support program',
    'foot.products': 'Products',
    'foot.resources': 'Resources',
    'foot.connect': 'Connect',
    'foot.copyright': '© 2014–2026 metavol project / Hokkaido University Nuclear Medicine',
  },
} as const;

export type UIKey = keyof typeof ui.ja;

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.ja as Record<string, string>)[key] ?? key;
  };
}
