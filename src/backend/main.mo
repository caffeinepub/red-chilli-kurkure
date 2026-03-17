import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Migration "migration";

(with migration = Migration.run)
actor {
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

  let products = Map.empty<Nat, Product>();

  public shared ({ caller }) func initialize() : async () {
    let jackets = [
      {
        id = 1;
        name = "Classic Leather Jacket";
        priceCents = 24999;
        category = #men;
        description = "Timeless men's leather jacket, perfect for any occasion.";
        badge = #bestseller;
        imageIndex = 0;
      },
      {
        id = 2;
        name = "Slim Fit Denim Jacket";
        priceCents = 17999;
        category = #women;
        description = "Stylish slim fit denim jacket for a modern look.";
        badge = #new;
        imageIndex = 1;
      },
      {
        id = 3;
        name = "Waterproof Windbreaker";
        priceCents = 12999;
        category = #unisex;
        description = "Lightweight, waterproof jacket for outdoor activities.";
        badge = #sale;
        imageIndex = 2;
      },
      {
        id = 4;
        name = "Suede Bomber Jacket";
        priceCents = 29999;
        category = #men;
        description = "Premium suede bomber jacket with ribbed cuffs.";
        badge = #limitedEdition;
        imageIndex = 3;
      },
      {
        id = 5;
        name = "Puffer Coat";
        priceCents = 19999;
        category = #women;
        description = "Warm puffer coat with detachable hood.";
        badge = #bestseller;
        imageIndex = 4;
      },
      {
        id = 6;
        name = "Hooded Parka";
        priceCents = 21999;
        category = #unisex;
        description = "Versatile parka with adjustable hood for all seasons.";
        badge = #new;
        imageIndex = 5;
      },
      {
        id = 7;
        name = "Moto Biker Jacket";
        priceCents = 25999;
        category = #men;
        description = "Edgy biker jacket with zippered details.";
        badge = #sale;
        imageIndex = 6;
      },
      {
        id = 8;
        name = "Quilted Field Jacket";
        priceCents = 18999;
        category = #women;
        description = "Quilted design offers both style and warmth.";
        badge = #bestseller;
        imageIndex = 7;
      },
      {
        id = 9;
        name = "Lightweight Rain Jacket";
        priceCents = 10999;
        category = #unisex;
        description = "Packable rain jacket, ideal for travel.";
        badge = #new;
        imageIndex = 8;
      },
      {
        id = 10;
        name = "Thermal Fleece Jacket";
        priceCents = 15999;
        category = #men;
        description = "Thermal fleece provides excellent insulation.";
        badge = #sale;
        imageIndex = 9;
      },
    ];

    for (jacket in jackets.values()) {
      products.add(jacket.id, jacket);
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().filter(
      func(product) {
        product.category == category;
      }
    ).toArray();
  };

  public query ({ caller }) func getProductById(id : Nat) : async ?Product {
    products.get(id);
  };
};
