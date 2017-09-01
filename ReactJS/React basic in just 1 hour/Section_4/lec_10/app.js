
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

        <p>{this.props.name} - ${this.props.price}</p>
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
            <Product name="Iphone" price="111" />
            <Product name="Ipad" price="222" />
            <Product name="IMAC" price="333" />
            <Total />
          </div>
        )
      }

    });

ReactDOM.render(
    <ProductList />, document.getElementById('root')
);