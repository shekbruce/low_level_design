import Transport from "./concrete_product/transport";

export default abstract class LogisticApp {
  constructor() {
    console.log("welcome to the Logistic App");
  }

  planDelivery() {}

  abstract createTransport(): Transport;
}
