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
<img width="757" alt="関数形" src="https://github.com/sunnyheee/react_basic/assets/84654346/9acaa033-5cf2-41aa-ae05-b70a7af1e576">


クラス形
<img width="747" alt="クラス形" src="https://github.com/sunnyheee/react_basic/assets/84654346/6eb480a4-c7d8-46e7-a54c-23c93faf0683">
