import axios from "axios";
import { IAddition } from "../../interfaces/addition";
import { ICategory } from "../../interfaces/category";
import { IProduct } from "../../interfaces/product";
import { ISubcategory } from "../../interfaces/subcategory";

interface ITypes {
  products: IProduct;
  categories: ICategory;
  additions: IAddition;
  subcategories: ISubcategory;
}

export const fetchData = async <T extends keyof ITypes>(url: T): Promise<ITypes[T]> => {
  try {
    const res = await axios.get<ITypes[T]>(`${url}/`);
    return res.data;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${error}`);
  }
};
