
# 回答解説

## 問題5

### 採点基準

- 問題の項目で実装できていないもの一つにつき -5 点

### 問題

次の条件に従って、趣味に関する入力フォームを作成してください。

1. `UserForm` コンポーネントを作成し、その中に `Hobby` コンポーネントを含めます。
2. `Hobby` コンポーネントでは、趣味を選択するためのセレクトボックスを表示します。
3. 趣味が「トライアスロン」の場合、`Sport` コンポーネントを表示し、好きな種目を選択できるようにします。
4. 趣味が「その他」の場合、`Other` コンポーネントを表示し、好きなことを入力できるようにします。

#### 回答

```jsx
function UserForm() {
  return (
    <form>
      <Hobby />
    </form>
  );
}

function Hobby() {
  const [hobby, setHobby] = React.useState('');
  const [tri, setTri] = React.useState(false);
  const [other, setOther] = React.useState(false);

  const changeHandler = (e) => {
    const value = e.target.value;
    setHobby(value);
    if (value === 'トライアスロン') {
      setTri(true);
      setOther(false);
    } else if (value === 'その他') {
      setOther(true);
      setTri(false);
    } else {
      setTri(false);
      setOther(false);
    }
  };

  return (
    <>
      <p>
        <label htmlFor="hobby">趣味はなんですか？</label>
        <select name="hobby" value={hobby} onChange={changeHandler}>
          <option>--</option>
          <option>トライアスロン</option>
          <option>その他</option>
        </select>
      </p>
      <Sport tri={tri} />
      <Other other={other} />
    </>
  );
}

function Sport({ tri }) {
  return (
    <p style={{ display: tri ? 'block' : 'none' }}>
      では好きな種目は？
      <input type="radio" id="swim" name="sport" value="swim" />
      <label htmlFor="swim">Swim</label>
      <input type="radio" id="bike" name="sport" value="bike" />
      <label htmlFor="bike">Bike</label>
      <input type="radio" id="run" name="sport" value="run" />
      <label htmlFor="run">Run</label>
    </p>
  );
}

function Other({ other }) {
  return (
    <p style={{ display: other ? 'block' : 'none' }}>
      <label htmlFor="other">では何が好き？</label>
      <input type="text" id="other" name="other" />
    </p>
  );
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<UserForm />);
```

### 解説

- `UserForm` コンポーネントは `Hobby` コンポーネントを含むフォームを返します。
- `Hobby` コンポーネントは、趣味を選択するセレクトボックスと、選択に応じて表示される `Sport` および `Other` コンポーネントを返します。
- `changeHandler` 関数は、セレクトボックスの値に応じて表示するコンポーネントを切り替えます。
- `Sport` コンポーネントは、`tri` プロパティが `true` の場合に表示され、好きな種目を選択するためのラジオボタンを返します。
- `Other` コンポーネントは、`other` プロパティが `true` の場合に表示され、好きなことを入力するためのテキストボックスを返します。

### 例

```jsx
function UserForm() {
  return (
    <form>
      <Hobby />
    </form>
  );
}

function Hobby() {
  const [hobby, setHobby] = React.useState('');
  const [tri, setTri] = React.useState(false);
  const [other, setOther] = React.useState(false);

  const changeHandler = (e) => {
    const value = e.target.value;
    setHobby(value);
    if (value === 'トライアスロン') {
      setTri(true);
      setOther(false);
    } else if (value === 'その他') {
      setOther(true);
      setTri(false);
    } else {
      setTri(false);
      setOther(false);
    }
  };

  return (
    <>
      <p>
        <label htmlFor="hobby">趣味はなんですか？</label>
        <select name="hobby" value={hobby} onChange={changeHandler}>
          <option>--</option>
          <option>トライアスロン</option>
          <option>その他</option>
        </select>
      </p>
      <Sport tri={tri} />
      <Other other={other} />
    </>
  );
}

function Sport({ tri }) {
  return (
    <p style={{ display: tri ? 'block' : 'none' }}>
      では好きな種目は？
      <input type="radio" id="swim" name="sport" value="swim" />
      <label htmlFor="swim">Swim</label>
      <input type="radio" id="bike" name="sport" value="bike" />
      <label htmlFor="bike">Bike</label>
      <input type="radio" id="run" name="sport" value="run" />
      <label htmlFor="run">Run</label>
    </p>
  );
}

function Other({ other }) {
  return (
    <p style={{ display: other ? 'block' : 'none' }}>
      <label htmlFor="other">では何が好き？</label>
      <input type="text" id="other" name="other" />
    </p>
  );
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<UserForm />);
```

これにより、趣味に応じて異なる入力フィールドを表示するフォームを作成する方法を示しています。
