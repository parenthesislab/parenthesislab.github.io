var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>(parenthesis)</h1>
      );
  }
});

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content-wrapper')
  );