
# 回答解説

## 問題2

### 採点基準

- 小問毎に記載された点の通り
- `render` はファイル内に1つでよい

### 2-1: Blogコンポーネントの作成

以下の条件に従って `Blog` コンポーネントを作成してください。

#### 条件

- `Blog` コンポーネントは `<section>` 要素を返し、その中に `<h2>記事</h2>` を含む。

#### 回答

```jsx
function Blog() {
  return (
    <section>
      <h2>記事</h2>
    </section>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Blog />);
```

### 解説

- `Blog` 関数コンポーネントは、Reactの要素を返します。ここでは、セクション要素内に見出しが含まれています。
- `ReactDOM.createRoot`でルート要素を作成し、その中に `Blog` コンポーネントをレンダリングします。

### 2-2: Articleコンポーネントの作成とBlogコンポーネントの拡張

以下の条件に従って `Article` コンポーネントを作成し、 `Blog` コンポーネントを拡張してください。

#### 条件

- `Article` コンポーネントは `<article>` 要素を返し、その中に `<p>ここには記事の本文が表示されます。</p>` を含む。
- `Blog` コンポーネントは `children` プロパティを受け取り、セクション内にその子要素を表示する。

#### 回答

```jsx
function Article() {
  return (
    <article>
      <p>ここには記事の本文が表示されます。</p>
    </article>
  );
}

function Blog({ children }) {
  return (
    <section>
      <h2>記事</h2>
      {children}
    </section>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <>
    <Blog>
      <Article />
    </Blog>
  </>
);
```

### 解説

- `Article` コンポーネントは記事の本文を含む `article` 要素を返します。
- `Blog` コンポーネントは `children` プロパティを受け取り、それをセクション内に表示します。
- `app.render` で `Blog` コンポーネントの中に `Article` コンポーネントを子要素として渡しています。

#### 別解

`Article` コンポーネントを直接 `Blog` コンポーネント内で使用する場合：

```jsx
function Article() {
  return (
    <article>
      <p>ここには記事の本文が表示されます。</p>
    </article>
  );
}

function Blog({ children }) {
  return (
    <section>
      <h2>記事</h2>
      <Article />
    </section>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Blog />);
```

### 2-3: Commentsコンポーネントの作成とBlogコンポーネントの拡張

以下の条件に従って `Comments` コンポーネントを作成し、 `Blog` コンポーネントを拡張してください。

#### 条件

- `Comments` コンポーネントは `comments` 配列を使用し、その要素をリストとして表示する。
- `comments` 配列は以下のように定義する：

```jsx
const comments = [
  {
    id: 1,
    title: "１つ目のコメントが表示されます",
  },
  {
    id: 2,
    title: "２つ目のコメントが表示されます",
  },
];
```

#### 回答

```jsx
function Comments() {
  const comments = [
    {
      id: 1,
      title: "１つ目のコメントが表示されます",
    },
    {
      id: 2,
      title: "２つ目のコメントが表示されます",
    },
  ];

  return (
    <ul>
      {comments.map((com) => (
        <li key={com.id}>{com.title}</li>
      ))}
    </ul>
  );
}

function Blog({ children }) {
  return (
    <section>
      <h2>記事</h2>
      {children}
    </section>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <>
    <Blog>
      <Article />
      <Comments />
    </Blog>
  </>
);
```

### 解説

- `Comments` コンポーネントはコメントを含むリスト要素を返します。
- `Blog` コンポーネントに `Article` と `Comments` コンポーネントを子要素として渡し、セクション内に表示します。

#### 別解

`Comments` コンポーネントを直接 `Blog` コンポーネント内で使用する場合：

```jsx
function Comments() {
  const comments = [
    {
      id: 1,
      title: "１つ目のコメントが表示されます",
    },
    {
      id: 2,
      title: "２つ目のコメントが表示されます",
    },
  ];

  return (
    <ul>
      {comments.map((com) => (
        <li key={com.id}>{com.title}</li>
      ))}
    </ul>
  );
}

function Blog({ children }) {
  return (
    <section>
      <h2>記事</h2>
      <Article />
      <Comments />
    </section>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Blog />);
```

### 解説

- `Comments` コンポーネントを `Blog` コンポーネント内で直接使用することで、`render` 呼び出しを簡略化できます。

### 例

```jsx
function Blog() {
  return (
    <section>
      <h2>記事</h2>
    </section>
  );
}

function Article() {
  return (
    <article>
      <p>ここには記事の本文が表示されます。</p>
    </article>
  );
}

function Comments() {
  const comments = [
    {
      id: 1,
      title: "１つ目のコメントが表示されます",
    },
    {
      id: 2,
      title: "２つ目のコメントが表示されます",
    },
  ];

  return (
    <ul>
      {comments.map((com) => (
        <li key={com.id}>{com.title}</li>
      ))}
    </ul>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <>
    <Blog>
      <Article />
      <Comments />
    </Blog>
  </>
);
```

これにより、各コンポーネントを正しく使用して、Reactアプリケーションを構築する方法を示しています。
