import { axiosApi } from "../config/axios";
import { ProductTypes } from "../types/globalTypes";

export class HomeService {
    static ENDPOINT = {
        ALL_PRODUCTS: "products",
    };

    static async getAllProducts(): Promise<ProductTypes[]> {
        const response = await axiosApi.get(this.ENDPOINT.ALL_PRODUCTS);
        return response.data;
    }
}
