
var Product = React.createClass({

  getInitialState: function () {
    return { qty: 0 };
  },

  buy: function () {
    this.setState({ qty: this.state.qty + 1 });
  },

  show: function() {
    this.props.handleShow(this.props.name);
  },

  render: function() {
    return (
      <div>

        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
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
      showProduct: function (name) {
        alert('you select: ' + name);
      },

      render: function () {
        return (
          <div>
            <Product name="Iphone" price="111"
              handleShow={this.showProduct}/>
            <Product name="Ipad" price="222"
                     handleShow={this.showProduct}/>
            <Product name="IMAC" price="333"
                     handleShow={this.showProduct}/>
            <Total />
          </div>
        )
      }

    });

ReactDOM.render(
    <ProductList />, document.getElementById('root')
);