import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  public type Badge = {
    #new;
    #bestseller;
    #sale;
    #limitedEdition;
  };

  public type Category = {
    #men;
    #women;
    #unisex;
  };

  public type Product = {
    id : Nat;
    name : Text;
    priceCents : Nat;
    category : Category;
    description : Text;
    badge : Badge;
    imageIndex : Nat;
  };

  type OldActor = {};
  type NewActor = {
    products : Map.Map<Nat, Product>;
  };

  public func run(old : OldActor) : NewActor {
    let products = Map.empty<Nat, Product>();
    { products };
  };
};
