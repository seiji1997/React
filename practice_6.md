
# 回答解説

## 問題6

### 採点基準

- 問題の項目で実装できていないもの一つにつき -5 点

### 問題

次の条件に従って、商品の合計金額を計算するアプリケーションを作成してください。

1. `App` コンポーネントを作成し、その中に `Items` コンポーネントを含めます。
2. `Items` コンポーネントでは、複数の `Item` コンポーネントを表示し、各 `Item` コンポーネントには商品の名前と価格が表示されます。
3. `Item` コンポーネントには、商品の数をカウントする `Counter` コンポーネントを含めます。
4. `Counter` コンポーネントでは、商品の数をカウントし、小計金額を表示します。また、追加ボタンをクリックすると、`App` コンポーネントの合計金額が更新されます。

#### 回答

```jsx
function App() {
  const [total, setTotal] = React.useState(0);

  const addHandler = (sub) => {
    setTotal(total + sub);
  };

  return (
    <main>
      <Items addHandler={addHandler} />
      <p>合計{total}円</p>
    </main>
  );
}

function Items({ addHandler }) {
  const items = [
    { id: 1, name: '食パン', price: 330 },
    { id: 2, name: 'フランスパン', price: 440 },
    { id: 3, name: 'クロワッサン', price: 220 },
  ];

  return (
    <div className="container">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            addHandler={addHandler}
          />
        );
      })}
    </div>
  );
}

function Item({ name, price, addHandler }) {
  return (
    <div className="item">
      <dl>
        <dt>{name}</dt>
        <dd>
          {price}円
          <Counter price={price} addHandler={addHandler} />
        </dd>
      </dl>
    </div>
  );
}

function Counter({ price, addHandler }) {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const clickHandler = () => {
    const nextCount = count + 1;
    setCount(nextCount);

    const nextTotal = price * nextCount;
    setTotal(nextTotal);

    addHandler(price);
  };

  return (
    <p>
      {count}個&nbsp;小計{total}円&nbsp;
      <button type="button" onClick={clickHandler}>
        追加
      </button>
    </p>
  );
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);
```

### 解説

- `App` コンポーネントは、商品の合計金額を管理します。
- `Items` コンポーネントは、商品のリストを表示し、各商品について `Item` コンポーネントを使用します。
- `Item` コンポーネントは、商品の名前と価格を表示し、商品の数をカウントする `Counter` コンポーネントを含みます。
- `Counter` コンポーネントは、商品の数をカウントし、小計金額を表示します。また、追加ボタンをクリックすると、`App` コンポーネントの合計金額が更新されます。

### 例

```jsx
function App() {
  const [total, setTotal] = React.useState(0);

  const addHandler = (sub) => {
    setTotal(total + sub);
  };

  return (
    <main>
      <Items addHandler={addHandler} />
      <p>合計{total}円</p>
    </main>
  );
}

function Items({ addHandler }) {
  const items = [
    { id: 1, name: '食パン', price: 330 },
    { id: 2, name: 'フランスパン', price: 440 },
    { id: 3, name: 'クロワッサン', price: 220 },
  ];

  return (
    <div className="container">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            addHandler={addHandler}
          />
        );
      })}
    </div>
  );
}

function Item({ name, price, addHandler }) {
  return (
    <div className="item">
      <dl>
        <dt>{name}</dt>
        <dd>
          {price}円
          <Counter price={price} addHandler={addHandler} />
        </dd>
      </dl>
    </div>
  );
}

function Counter({ price, addHandler }) {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const clickHandler = () => {
    const nextCount = count + 1;
    setCount(nextCount);

    const nextTotal = price * nextCount;
    setTotal(nextTotal);

    addHandler(price);
  };

  return (
    <p>
      {count}個&nbsp;小計{total}円&nbsp;
      <button type="button" onClick={clickHandler}>
        追加
      </button>
    </p>
  );
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);
```

これにより、商品の合計金額を計算するアプリケーションを作成する方法を示しています。
