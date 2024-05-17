import { create } from "zustand";
import { ProductTypes } from "../types/globalTypes";

type initSateTypes = {
    products: ProductTypes[];
    total: number;
};

type sateActionsTypes = {
    setProducts: (data: ProductTypes[]) => void;
};

const initSate = {
    products: [],
    total: 0,
};

export const useProductsStore = create<initSateTypes & sateActionsTypes>(
    (set) => ({
        ...initSate,
        setProducts: (data: ProductTypes[]) => {
            set({ products: data });
        },
    })
);
