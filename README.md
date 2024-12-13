# check-html-functionality
repository for performing various operation checks（*public）

***
Node.jsとExpressを使ってローカルサーバーを構築する方法をステップバイステップで説明します。

### 1. **Node.jsのインストール**
まず、Node.jsをインストールします。公式サイトからダウンロードできます。

### 2. **プロジェクトのセットアップ**
新しいディレクトリを作成し、プロジェクトの初期化を行います。

```bash
mkdir my-express-app
cd my-express-app
npm init -y
```

### 3. **Expressのインストール**
Expressをインストールします。

```bash
npm install express
```

### 4. **サーバーファイルの作成**
プロジェクトのルートディレクトリに`index.js`ファイルを作成し、以下のコードを追加します。

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

### 5. **サーバーの起動**
以下のコマンドでサーバーを起動します。

```bash
node index.js
```

ブラウザで`http://localhost:3000`にアクセスすると、「Hello World!」と表示されるはずです。

### 6. **静的ファイルの提供**
静的ファイルを提供するには、`public`ディレクトリを作成し、その中にHTMLファイルなどを配置します。以下のようにExpressに設定します。

```javascript
app.use(express.static('public'));
```

### 7. **ルーティングの追加**
複数のルートを追加することも簡単です。

```javascript
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
```

これで、`/about`や`/contact`にアクセスすると、それぞれのページが表示されます。

この手順で、Node.jsとExpressを使ってローカルサーバーを構築できます。何か他に質問があれば教えてくださいね！