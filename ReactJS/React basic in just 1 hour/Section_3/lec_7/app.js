
var Product = React.createClass({

  buy: function () {
    alert('Click me! James!');
  },

  render: function() {
    return (
      <div>

        <p>Android - $199</p>
        <button onClick={this.buy}>Buy</button>

      </div>
    );
  }
});

ReactDOM.render(
    <Product />, document.getElementById('root')
);