# Learn the basics of react

## React とは?

ユーザインダーフェース構築のための Javascript ライブラリ
SPA 開発のベースに使われるもの

- ⭐️ ユーザインダーフェースとは
  User Interface(UI)は人々がコンピュータ、システム、機器、ツールなどの間で起こる相互作用（Interaction）を媒介。

- ⭐️SPA 開発とは
  サーバーから新しいページを全部読み込むのではなく、
  画面をアップデートするために必要なデータだけをサーバーから受け取り、ブラウザで該当する部分だけをアップデートする方式で作動する WEB アプリケーションや WEB サイトをいう。

### useStateとは
useStateとは関数形またはクラス形componentを管理して、変更できるようにしてくれるReact hook。

useStateはReactで提供する多様なReact hookの中の一つで、関数形またはクラス形のcomponentでlocalのデータを管理してくれる機能だ。
useStateは初期入力値を保存して該当状態をupdateてくれる。

例えば
const [value, setValue] = useState(0)
- valueは保存した値、useState(0)で0の値を持っている状態になる。
- setValueの場合valueの変更された値を保存してくれる。

useStateは動的なデータを扱ってコンポーネントの中で状態管理をする。
(リアルタイムor周期的レンダリングが必要なUI)

クラスコンポーネントの場合"this.変数"を通じて値の状態を管理。
関数コンポーネントの場合useStatueを活用して管理できる。

関数形
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;

クラス形
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Counter;