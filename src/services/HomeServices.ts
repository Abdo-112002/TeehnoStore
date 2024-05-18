import { axiosApi } from "../config/axios";
import { FetchFunctionParams } from "../types/globalTypes";
import { ProductTypes } from "../types/productsTypes";

export class HomeService {
    static ENDPOINT = {
        ALL_PRODUCTS: "products",
    };

    static async getAllProducts(params?: FetchFunctionParams): Promise<ProductTypes[]> {
        const response = await axiosApi.get(this.ENDPOINT.ALL_PRODUCTS, {
            signal : params?.signal,
        });
        return response.data;
    }
}
