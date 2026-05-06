# 残作業の手順書

サンドボックス側からはgit/Cloudflareへの最終操作ができないため、Windows側の PowerShell（または Git Bash）で以下を実行してください。

---

## ステップ 1: GitHubへ push

PowerShellで:

```powershell
cd C:\Users\kenji\Desktop\temp\metavol

# 念のためauthor情報を設定（既に設定済みならスキップ可）
git config user.name  "Kenji Hirata"
git config user.email "kenji.hirata.kh@gmail.com"

# サンドボックスが残したロックファイルを削除
Remove-Item -Force .git\index.lock -ErrorAction SilentlyContinue

# 状態を確認（site/ と新規ファイル群が変更扱いになっているはず）
git status

# ステージ（既に site/ , .gitignore, .gitattributes, metavol-mockup.html が追加済みのはず）
git add -A

# commit
git commit -m "feat: add Astro-based site for metavol.org renewal

- Astro 4.16 + i18n (ja/en) static site under site/
- 3 product cards (classic, web, amyloid) on home page
- News (Markdown) + Publications (JSON) Content Collections
- PET Aurora color palette (cream + PET-hot accents)
- Brand mark integrated (peach circles + Asap wordmark)
- Cloudflare Pages config (_headers, _redirects)
- Standalone HTML mockup at metavol-mockup.html"

# push（GitHub credentialが既に保存されていればpasswordプロンプトは出ません）
git push origin master
```

push時にcredentialを聞かれた場合:
- **username**: GitHubのユーザー名
- **password**: ⚠️ 通常のパスワードではなく **Personal Access Token (PAT)** が必要
  - https://github.com/settings/tokens で `repo` スコープを持つPATを作成
  - 生成されたトークンをパスワード欄に貼付

push成功後、`https://github.com/metavol/metavol` で site/ フォルダ等が確認できます。

---

## ステップ 2: Cloudflare Pages を作成・接続

ブラウザで [Cloudflare ダッシュボード](https://dash.cloudflare.com) にログイン。アカウント未作成の場合はメール登録のみで完了。

1. 左メニュー → **Workers & Pages** → **Create** → **Pages** タブ → **Connect to Git**
2. GitHubアカウント連携（初回のみ）→ `metavol/metavol` リポジトリを選択
3. ビルド設定:

   | 項目 | 値 |
   |---|---|
   | Project name | `metavol-site`（任意） |
   | Production branch | `master` |
   | Framework preset | **Astro** |
   | Build command | `cd site && npm install && npm run build` |
   | Build output directory | `site/dist` |
   | Root directory | （空欄のまま） |
   | Node version | `20` または `22`（環境変数 `NODE_VERSION=20` をAdvancedで指定可） |

4. **Save and Deploy** をクリック → 2〜3分でビルド完了
5. `https://metavol-site.pages.dev` で先行公開されます — 動作確認

---

## ステップ 3: DNS を Cloudflare に移管

[現状] metavol.org のDNSは別の事業者で管理されている可能性が高いです。Cloudflareに移管することで、Pages との連携、SSL自動化、CDN高速化が一括で行えます。

1. Cloudflareダッシュボード → **Add a Site** → `metavol.org` を入力
2. 既存DNSレコードがスキャンされて表示される → 内容を確認（漏れがあれば手動追加）
3. Cloudflare が割り当てるネームサーバが2つ表示される（例: `xxx.ns.cloudflare.com`, `yyy.ns.cloudflare.com`）
4. **現在のレジストラ**（お名前.com／Google Domains／GoDaddy 等）の管理画面で、**ネームサーバを Cloudflare のものに変更**
5. 変更後、24〜48時間以内にCloudflareがアクティブ化を確認

---

## ステップ 4: カスタムドメインを Pages に割当

Cloudflareダッシュボード → 該当の Pages プロジェクト → **Custom domains** タブ:

1. **Set up a custom domain** → `www.metavol.org` を入力 → 自動でCNAMEレコード追加
2. もう一度 → `metavol.org`（apex）を入力 → 自動でCNAME flatteningで対応
3. 数分後、`https://www.metavol.org` でサイトが表示される
4. SSL/TLS タブで **Always Use HTTPS** をON

---

## ステップ 5: 確認チェックリスト

- [ ] `https://metavol.org/` でトップページが表示される
- [ ] `https://www.metavol.org/` も同じく表示される
- [ ] `https://metavol.org/en/` で英語版が表示される
- [ ] HTTPS強制がオン
- [ ] 旧Google Sitesからのリダイレクトテスト（例: `metavol.org/Home` → `metavol.org/`）
- [ ] Lighthouse でPerformance/Accessibility確認（90+目標）

---

## 今後のコンテンツ更新フロー

1. `site/src/content/news/ja/YYYY-MM-DD-slug.md` と `site/src/content/news/en/...` を追加
2. `git add . && git commit -m "news: ..." && git push`
3. Cloudflare Pages が自動で再ビルド・公開（数十秒）

論文追加は `site/src/content/publications/keyName.json` を作成して同様にpush。

---

## 既知の注意事項

- **`site/node_modules/` はpushしない**: `.gitignore` で除外済み。最初のCloudflare Pagesビルド時に依存パッケージをインストールする
- **`site-preview/` も除外**: ローカル確認用なのでpushしない
- **Asap font**: ロゴで使用。Google FontsからCDNで自動読込されるので追加作業不要
- **Facebook版ロゴ**: `site/public/brand/metavol-logo.svg` として配置済み。今後ロゴをアップデートする際は同ファイルを上書き

問題が起きたら、私（Claude）に状況を共有していただければトラブルシュートします。
