import { AddressDto } from "./AddressDto";
import { FavoriteDto } from "./FavoriteDto";
import { ShoppingOrderDto } from "./ShoppingOrderDto";

export interface UserDto{
    _id: string;
  email: string;
  username:string;
  addressData: AddressDto[];
  favoritesData: FavoriteDto[];
  shoppingData: ShoppingOrderDto[];
  status: "active" | "inactive" | "banned";
  createdAt: Date;
  updatedAt: Date;
}