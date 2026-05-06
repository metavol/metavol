# metavol — public website

新しい [metavol.org](https://www.metavol.org) のソースコードです。Astro + Cloudflare Pages で運用します。

## ローカル開発

```bash
cd site
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/ に静的サイトを出力
npm run preview      # ビルド済みサイトをローカルで確認
```

Node 18 以上推奨（手元では Node 22 で動作確認）。

## ディレクトリ構成

```
site/
├── astro.config.mjs        # Astro設定（i18n: ja default, en under /en/）
├── package.json
├── public/
│   ├── favicon.svg
│   ├── _headers            # Cloudflare Pages 用ヘッダ設定
│   └── _redirects          # 旧Google Sitesパスからのリダイレクト
└── src/
    ├── components/         # 各セクション（Header, Hero, Products, News, …）
    ├── content/
    │   ├── config.ts       # Content Collections のスキーマ
    │   ├── news/           # ja/, en/ サブフォルダにMarkdown
    │   └── publications/   # JSONで構造化された論文データ
    ├── i18n/ui.ts          # 日英文字列辞書
    ├── layouts/Layout.astro
    ├── pages/
    │   ├── index.astro     # 日本語トップ（/）
    │   └── en/index.astro  # 英語トップ（/en/）
    └── styles/globals.css
```

## コンテンツ更新の流れ

### お知らせを追加
`src/content/news/ja/YYYY-MM-DD-slug.md` と `src/content/news/en/...` の両方を作成します。

```yaml
---
title: "新機能を公開しました。"
date: 2026-05-06
kind: release   # release | update | paper
---

本文（任意）。
```

### 論文を追加
`src/content/publications/keyName.json`

```json
{
  "title": "タイトル",
  "journal": "Journal Name",
  "authors": "First A, Second B, et al.",
  "year": 2026,
  "doi": "10.1234/xxxx",
  "tags": ["amyloid"]
}
```

## Cloudflare Pages へのデプロイ

### 初回設定（Web UI 経由・推奨）

1. **GitHub にリポジトリを push**
   - 既存の `metavol` リポジトリへコミット → push
2. **Cloudflare ダッシュボード** → `Workers & Pages` → `Create` → `Pages` → `Connect to Git`
3. リポジトリを選択し、ビルド設定を以下にする
   - Production branch: `main`
   - Framework preset: `Astro`
   - Build command: `cd site && npm install && npm run build`
   - Build output directory: `site/dist`
   - Root directory (Advanced): 空欄のまま
4. `Save and Deploy` をクリック → 数分で `metavol-site.pages.dev` が公開
5. `Custom domains` から `www.metavol.org` を追加

### DNS の Cloudflare 移管手順

1. Cloudflare アカウントで `Add a Site` → `metavol.org` を入力
2. 既存 DNS レコードが自動取得される（要確認）
3. Cloudflare が割り当てるネームサーバ（例：`xxx.ns.cloudflare.com`）を、現在のレジストラの管理画面で設定
4. 24〜48時間以内に伝播完了
5. 完了後、Pages プロジェクトの `Custom domains` で `www.metavol.org` と `metavol.org` を有効化
6. `Always Use HTTPS` を ON に

### 段階公開（推奨：本番影響を抑える）

1. まず `metavol-site.pages.dev` で内容を確認
2. 確認用サブドメイン `preview.metavol.org` を作成し、関係者レビュー
3. 問題なければ `www.metavol.org` を切替

## i18n の方針

- 日本語がデフォルト（ルート `/`）
- 英語は `/en/` 配下
- `src/i18n/ui.ts` の `ui` オブジェクトに文字列を追加するだけで両言語対応
- ニュース・論文は別ファイルで言語別に運用

## 今後の拡張ポイント

- [ ] /publications, /news などの一覧ページを動的生成（現在はトップに4件まで表示）
- [ ] Citation の format 切替を JS で実装、コピー機能を追加
- [ ] Members, About / AMED 支援の専用ページ
- [ ] OG画像の自動生成（Astro の Satori 統合）
- [ ] RSS フィード（`@astrojs/rss`）

## ライセンス

サイトコード: MIT。コンテンツ（テキスト・画像）: CC BY 4.0（予定）。
