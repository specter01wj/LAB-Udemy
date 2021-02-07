
var Hello = React.createClass({
  render: function() {
    return (
      <h1>What up React? James</h1>
    );
  }
});

ReactDOM.render(
    <Hello />, document.getElementById('root')
);