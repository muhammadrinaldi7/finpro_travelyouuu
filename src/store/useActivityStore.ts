import { create } from "zustand";

interface ApiResponse {
    code: string;
    status: string;
    message: string;
    data: Activity[];
}
interface Category {
    id: string;
    name: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

interface Activity {
    id: string;
    categoryId: string;
    category: Category;
    title: string;
    description: string;
    imageUrls: [string];
    price: string;
    price_discount: string;
    rating:string;
    total_reviews:string;
    facilities:string;
    address:string;
    province:string;
    city:string;
    location_maps:string;
    createdAt: string;
    updatedAt: string;
}

interface ActivityState{
    data: ApiResponse | null;
    categories: Category[];
    loading: boolean;
    error: string | null;
    setActivity: (data: ApiResponse) => void;
    setCategories: (categories: Category[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useActivitiesStore = create<ActivityState>((set) => ({
    data: { code: "", status: "", message: "", data: [] }, // Initialize with empty data
    categories: [],
    loading: false,
    error: null,
    setActivity: (data) => set({ data }), // Update the data state
    setCategories: (categories) => set({ categories }), // Update the categories state
    setLoading: (loading) => set({ loading }), // Update the loading state
    setError: (error) => set({ error }), // Update the error state
}));