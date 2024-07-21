
# 回答解説

## 問題3

### 採点基準

- `render` はファイル内に1つでよい

### 3-1: Greetコンポーネントの作成

以下の条件に従って `Greet` コンポーネントを作成してください。

#### 条件

- `Greet` コンポーネントは `props` を受け取り、`<h3>{props.greeting}</h3>` を返す。

#### 回答

```jsx
function Greet(props) {
  return <h3>{props.greeting}</h3>;
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Greet greeting="こんにちは" />);
```

#### 別解

```jsx
function Greet({ greeting }) {
  return <h3>{greeting}</h3>;
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Greet greeting="こんにちは" />);
```

### 解説

- `Greet` 関数コンポーネントは、`props` を受け取り、その `greeting` プロパティを表示します。
- 別解では、オブジェクトの分割代入を使用して `greeting` プロパティを直接受け取っています。

### 3-2: Peopleコンポーネントの作成と使用

以下の条件に従って `People` コンポーネントを作成し、 `Greet` コンポーネントに統合してください。

#### 条件

- `People` コンポーネントは `people` 配列を使用し、その要素をリストとして表示する。
- `people` 配列は以下のように定義する：

```jsx
const people = [
  { id: 1, name: "楽子" },
  { id: 2, name: "楽太" },
];
```

#### 回答

```jsx
function Greet({ greeting }) {
  return (
    <>
      <h3>{greeting}</h3>
      <People />
    </>
  );
}

function People() {
  const people = [
    { id: 1, name: "楽子" },
    { id: 2, name: "楽太" },
  ];

  return (
    <ul>
      {people.map((person) => (
        <Person id={person.id} name={person.name} />
      ))}
    </ul>
  );
}

function Person({ id, name }) {
  return <li key={id}>{name}</li>;
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Greet greeting="こんにちは" />);
```

### 解説

- `People` コンポーネントは `people` 配列をリストとして表示します。
- `Person` コンポーネントは個々の `person` をリストアイテムとして表示します。

### 3-3: GreetingをPersonコンポーネントに渡す

以下の条件に従って `People` コンポーネントを拡張し、 `Person` コンポーネントに `greeting` プロパティを渡してください。

#### 条件

- `People` コンポーネントは `greeting` プロパティを受け取り、それを `Person` コンポーネントに渡す。

#### 回答

```jsx
function Greet({ greeting }) {
  return (
    <>
      <h3>{greeting}</h3>
      <People greeting={greeting} />
    </>
  );
}

function People({ greeting }) {
  const people = [
    { id: 1, name: "楽子" },
    { id: 2, name: "楽太" },
  ];

  return (
    <ul>
      {people.map((person) => (
        <Person id={person.id} name={person.name} greeting={greeting} />
      ))}
    </ul>
  );
}

function Person({ id, name, greeting }) {
  return (
    <li key={id}>
      {greeting}&nbsp;{name}
    </li>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Greet greeting="こんにちは" />);
```

### 解説

- `People` コンポーネントは `greeting` プロパティを受け取り、それを `Person` コンポーネントに渡します。
- `Person` コンポーネントは `greeting` プロパティを表示します。

### 例

```jsx
function Greet({ greeting }) {
  return (
    <>
      <h3>{greeting}</h3>
      <People greeting={greeting} />
    </>
  );
}

function People({ greeting }) {
  const people = [
    { id: 1, name: "楽子" },
    { id: 2, name: "楽太" },
  ];

  return (
    <ul>
      {people.map((person) => (
        <Person id={person.id} name={person.name} greeting={greeting} />
      ))}
    </ul>
  );
}

function Person({ id, name, greeting }) {
  return (
    <li key={id}>
      {greeting}&nbsp;{name}
    </li>
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Greet greeting="こんにちは" />);
```

これにより、各コンポーネントを正しく使用して、Reactアプリケーションを構築する方法を示しています。
