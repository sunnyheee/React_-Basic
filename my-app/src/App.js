function Dialog(props) {
  return (
    // props.childrenで長身を引き
    <div>{props.children}</div>
  );
}

function SplitPane(props) {
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <Dialog>
        <h1>Welcome</h1>
        <h2>It's sunny today</h2>
      </Dialog>
      <SplitPane left={<h1>left text</h1>} right={<h2>right text</h2>} />
    </>
  );
}

export default App;
