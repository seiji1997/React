
# 回答解説

## 事前準備

各ディレクトリに次のHTMLテンプレートを作成し、画面確認を行ってください。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx" src="app.jsx"></script>
</body>
</html>
```

## 問題1

### 1-1: シンプルな見出しのレンダリング

以下の条件に従ってReactを使用してシンプルな見出しをレンダリングしてください。

#### 条件

- HTMLの`<div id="one"></div>`にReactを使用して`<h1>シェークスピア</h1>`をレンダリングします。

#### 回答

```jsx
const one = ReactDOM.createRoot(document.getElementById("one"));
one.render(<h1>シェークスピア</h1>);
```

#### 別解

コンポーネント関数を作成しても良いです。

```jsx
function Heading1() {
  return <h1>シェークスピア</h1>;
}

const one = ReactDOM.createRoot(document.getElementById("one"));
one.render(<Heading1 />);
```

### 解説

- `ReactDOM.createRoot`は、指定されたDOM要素をReactのルートとして作成します。
- `one.render`メソッドは、指定されたReact要素をルートにレンダリングします。
- 別解では、`Heading1`というコンポーネント関数を定義し、それをレンダリングしています。

### 1-2: 複数の要素のレンダリング

以下の条件に従って複数の要素をレンダリングしてください。

#### 条件

- HTMLの`<div id="two"></div>`にReactを使用して`<h2>作品一覧</h2>`と`<p>名作目白押し</p>`をレンダリングします。

#### 回答

```jsx
const two = ReactDOM.createRoot(document.getElementById("two"));
two.render(
  <>
    <h2>作品一覧</h2>
    <p>名作目白押し</p>
  </>
);
```

### 解説

- Reactのフラグメント（`<> </>`）を使用して、複数の要素を1つのルート要素としてレンダリングしています。

### 1-3: リストのレンダリング

以下の条件に従ってリストをレンダリングしてください。

#### 条件

- HTMLの`<div id="three"></div>`にReactを使用して、配列`books`の要素をリストとしてレンダリングします。
- `books`は以下のように定義します：

```jsx
const books = [
  { id: 1, title: "テンペスト" },
  { id: 2, title: "ハムレット" },
  { id: 3, title: "マクベス" },
];
```

#### 回答

```jsx
const three = ReactDOM.createRoot(document.getElementById("three"));
const books = [
  { id: 1, title: "テンペスト" },
  { id: 2, title: "ハムレット" },
  { id: 3, title: "マクベス" },
];

three.render(
  <ul>
    {books.map((book) => (
      <li key={book.id}>{book.title}</li>
    ))}
  </ul>
);
```

#### 別解

`for ~ of`を使った場合：

```jsx
const list = [];

for (const book of books) {
  list.push(<li key={book.id}>{book.title}</li>);
}

three.render(<ul>{list}</ul>);
```

`for`を使った場合：

```jsx
for (let i = 0; i < books.length; i++) {
  list.push(<li key={books[i].id}>{books[i].title}</li>);
}

three.render(<ul>{list}</ul>);
```

### 解説

- `books.map`を使用して、各本のタイトルをリストアイテムとしてレンダリングしています。
- 別解では、`for ~ of`や`for`ループを使用して同様の結果を得ています。

### 補足

次のように1-1、1-2、1-3を一つの`render`でまとめても減点なしです。

#### 回答

```jsx
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <>
    <div id="one">
      <h1>シェークスピア</h1>
    </div>
    <div id="two">
      <h2>作品一覧</h2>
      <p>名作目白押し</p>
    </div>
    <div id="three">
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  </>
);
```

これにより、すべての要素を一度にレンダリングする方法も示しています。
