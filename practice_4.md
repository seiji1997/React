
# 回答解説

## 問題4

### 採点基準

- `render` はファイル内に1つでよい

### 4-1: MyFormコンポーネントの作成

以下の条件に従って `MyForm` コンポーネントを作成してください。

#### 条件

- `MyForm` コンポーネントはメールアドレスとパスワードの入力フィールドを持ち、送信ボタンを含むフォームを返す。
- フォームの状態管理には `React.useState` を使用する。

#### 回答

```jsx
function MyForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form action="#" method="post">
      <dl>
        <dt>
          <label htmlFor="email">メールアドレス</label>
        </dt>
        <dd>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </dd>
        <dt>
          <label htmlFor="password">パスワード</label>
        </dt>
        <dd>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </dd>
      </dl>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<MyForm />);
```

### 解説

- `MyForm` コンポーネントは、メールアドレスとパスワードの入力フィールド、そして送信ボタンを含むフォームを返します。
- `React.useState` を使用して、メールアドレスとパスワードの状態を管理します。

### 4-2: フォームの送信処理の追加

以下の条件に従って `MyForm` コンポーネントに送信処理を追加してください。

#### 条件

- フォームの送信イベントを処理し、メールアドレスかパスワードが未入力の場合にアラートを表示する。

#### 回答

```jsx
function MyForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("メールアドレスかパスワードが未入力です");
    }
  };

  return (
    <form action="#" method="post" onSubmit={submitHandler}>
      <dl>
        <dt>
          <label htmlFor="email">メールアドレス</label>
        </dt>
        <dd>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </dd>
        <dt>
          <label htmlFor="password">パスワード</label>
        </dt>
        <dd>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </dd>
      </dl>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<MyForm />);
```

### 解説

- `submitHandler` 関数を追加し、フォームの送信イベントを処理します。
- メールアドレスかパスワードが未入力の場合にアラートを表示します。

### 4-3: 入力フィールドのスタイル変更

以下の条件に従って `MyForm` コンポーネントに入力フィールドのスタイル変更機能を追加してください。

#### 条件

- メールアドレスまたはパスワードが未入力の場合、対応する入力フィールドの枠線の色を赤に変更する。
- CSSクラスを使用してスタイルを変更する。

#### 回答

```jsx
function MyForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailClass, setEmailClass] = React.useState("");
  const [passwordClass, setPasswordClass] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailClass("alert");
    } else {
      setEmailClass("");
    }

    if (!password) {
      setPasswordClass("alert");
    } else {
      setPasswordClass("");
    }

    if (!email || !password) {
      alert("メールアドレスかパスワードが未入力です");
    }
  };

  return (
    <form action="#" method="post" onSubmit={submitHandler}>
      <dl>
        <dt>
          <label htmlFor="email">メールアドレス</label>
        </dt>
        <dd>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailClass} // 3
          />
        </dd>
        <dt>
          <label htmlFor="password">パスワード</label>
        </dt>
        <dd>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordClass} // 3
          />
        </dd>
      </dl>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<MyForm />);
```

#### CSS

`index.html` またはCSSファイルに以下のスタイルを追加します：

```html
<style>
  .alert {
    border-color: red;
  }
</style>
```

### 解説

- 入力フィールドが未入力の場合、`alert` クラスを追加して枠線の色を赤に変更します。
- `submitHandler` 関数内で、入力フィールドのクラス名を設定します。

### 例

```jsx
function MyForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailClass, setEmailClass] = React.useState("");
  const [passwordClass, setPasswordClass] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailClass("alert");
    } else {
      setEmailClass("");
    }

    if (!password) {
      setPasswordClass("alert");
    } else {
      setPasswordClass("");
    }

    if (!email || !password) {
      alert("メールアドレスかパスワードが未入力です");
    }
  };

  return (
    <form action="#" method="post" onSubmit={submitHandler}>
      <dl>
        <dt>
          <label htmlFor="email">メールアドレス</label>
        </dt>
        <dd>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailClass} // 3
          />
        </dd>
        <dt>
          <label htmlFor="password">パスワード</label>
        </dt>
        <dd>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordClass} // 3
          />
        </dd>
      </dl>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<MyForm />);
```

これにより、各コンポーネントを正しく使用して、Reactアプリケーションを構築する方法を示しています。
