import { expect } from "chai";
import Transport from "../../../src/factory_method/logistic_app/concrete_product/transport";

import RoadLogistic from "../../../src/factory_method/logistic_app/concerete_creator/roadLogistic";
import SeaLogistic from "./../../../src/factory_method/logistic_app/concerete_creator/seaLogistic";

import Truck from "../../../src/factory_method/logistic_app/concrete_product/truck";
import Ship from "../../../src/factory_method/logistic_app/concrete_product/ship";

describe("Test the Logistic Application", () => {
  describe("Test Road Logistic", () => {
    let roadLogistic: RoadLogistic = new RoadLogistic();

    it("Select the Truck vehicle", () => {
      let truck: Transport = roadLogistic.planDelivery();
      expect(truck).to.be.instanceOf(Truck);
    });
  });

  describe("Test Sea Logistic", () => {
    let seaLogistic: SeaLogistic = new SeaLogistic();

    it("Select the Ship vehicle", () => {
      let ship: Transport = seaLogistic.planDelivery();
      expect(ship).to.be.instanceOf(Ship);
    });
  });
});
