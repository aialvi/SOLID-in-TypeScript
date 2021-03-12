// Not supported in Single Responsibility Principle

class Order {
  public acceptOrder() {
    // ...
  }
  public startDelivery() {
    // ...
  }
}


// Supported in Single Responsibility Principle


class Order {
  public acceptOrder() {
    // ...
  }
}
class Delivery {
  public startDelivery() {
    // ...
  }
}
