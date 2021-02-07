
var Product = React.createClass({

  getInitialState: function () {
    return { qty: 0 };
  },

  buy: function () {
    this.setState({ qty: this.state.qty + 1 });
  },

  render: function() {
    return (
      <div>

        <p>Android - $199</p>
        <button onClick={this.buy}>Buy</button>
        <h3>Qty: {this.state.qty} items </h3>
        <hr/>

      </div>
    );
  }
});

    var Total = React.createClass({
      render: function () {
        return (
          <div>
            <h3>Total Cash: </h3>
          </div>
        )
      }
    });

    var ProductList = React.createClass({
      render: function () {
        return (
          <div>
            <Product />
            <Product />
            <Product />
            <Total />
          </div>
        )
      }

    });

ReactDOM.render(
    <ProductList />, document.getElementById('root')
);