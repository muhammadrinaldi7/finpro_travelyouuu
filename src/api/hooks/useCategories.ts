import { useState, useEffect, useCallback } from "react";
import axiosClient from "@/api/axiosClient";

// Define the Category interface to represent each category item
export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

// Define the ApiResponse type to match the API response structure
interface ApiResponse {
  code: string;
  status: string;
  message: string;
  data: Category[];
}

// Define the interface for POST and PATCH data
interface CategoryInput {
  name: string;
  imageUrl: string;
}

// Custom hook to handle CRUD operations for categories
const useCategories = (url: string) => {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GET: Fetch categories
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get<ApiResponse>(url);
      setData(response.data.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [url, setLoading, setData, setError]);

  // POST: Add a new category
  const addCategory = async (newCategory: CategoryInput) => {
    setLoading(true);
    try {
      const response = await axiosClient.post<Category>(url, newCategory);
      setData((prevData) => [...prevData, response.data]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // DELETE: Remove a category by ID
  const deleteCategory = async (id: string) => {
    setLoading(true);
    try {
      await axiosClient.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((category) => category.id !== id));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // PATCH or PUT: Update a category by ID
  const updateCategory = async (id: string, updatedCategory: CategoryInput) => {
    setLoading(true);
    try {
      const response = await axiosClient.patch<Category>(
        `${url}/${id}`,
        updatedCategory
      );
      setData((prevData) =>
        prevData.map((category) =>
          category.id === id ? response.data : category
        )
      );
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [url, fetchCategories]);

  return {
    data,
    loading,
    error,
    fetchCategories,
    addCategory,
    deleteCategory,
    updateCategory,
  };
};

export default useCategories;
