function Topping(toppingName, price){
  this.toppingName=toppingName;
}

function PizzaOrder (quantity, pizzaSize) {
  this.quantity=quantity;
  this.pizzaSize=pizzaSize;
  this.toppings=[];
}

PizzaOrder.prototype.addTopping = function(){
  var topping=new Topping;
  this.toppings.push(topping);
}

PizzaOrder.prototype.calculatePrice=function(){
  var pizzaTopping=new Topping;
  var orderCost=0;
  if(this.pizzaSize === "small"){
    orderCost += 12;
  } else if(this.pizzaSize==="medium"){
    orderCost += 15;
  } else {
    orderCost +=18;
  }

  if(this.toppings.length>0){
    for(var i = 1; i<=this.toppings.length; i++){
      orderCost +=1;
    }
  }

  var finalPrice=orderCost*this.quantity;
  return finalPrice
}

$(document).ready(function(){
  $("#add-topping").click(function() {
  $("#new-toppings").append('<div class="new-topping">' +
                                '<div class="form-group">' +
                                  '<select id="topping">' +
                                    '<option value="olives">Olives</option>' +
                                    '<option value="pepperoni">Pepperoni</option>' +
                                  '</select>' +
                                '</div>' +
                              '</div>');
});
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedQuantity=parseInt($("input#quantity").val());
    var inputtedSize=$("select#size").val();

    var newPizzaOrder=new PizzaOrder(inputtedQuantity, inputtedSize);

    $(".new-topping").each(function(){
      var inputtedDescription = $ (this).find("select#topping").val();
      var newTopping = new Topping (inputtedDescription);
      newPizzaOrder.addTopping();
    });

    console.log(inputtedQuantity);
    var price=newPizzaOrder.calculatePrice();
    $("#result").show(function(){
      $("#order-price").text(price);
    });
  });
});
