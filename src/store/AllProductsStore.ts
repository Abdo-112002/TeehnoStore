import { create } from "zustand";
import { ProductTypes } from "../types/productsTypes";

type initSateTypes = {
    products: ProductTypes[];
};

type sateActionsTypes = {
    setProducts: (data: ProductTypes[]) => void;
};

const initSate = {
    products: [],
};

export const useProductsStore = create<initSateTypes & sateActionsTypes>(
    (set) => ({
        ...initSate,
        setProducts: (data: ProductTypes[]) => {
            set({ products: data });
        },
    })
);
