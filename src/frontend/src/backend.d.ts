import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    name: string;
    description: string;
    category: Category;
    badge: Badge;
    imageIndex: bigint;
    priceCents: bigint;
}
export enum Badge {
    new_ = "new",
    limitedEdition = "limitedEdition",
    sale = "sale",
    bestseller = "bestseller"
}
export enum Category {
    men = "men",
    unisex = "unisex",
    women = "women"
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product | null>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    initialize(): Promise<void>;
}
