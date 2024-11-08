import { useState, useEffect, useCallback } from "react";
import axiosClient from "@/api/axiosClient";
import { Category } from "./useCategories";

// Define the Category interface to represent each category item
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

// Define the ApiResponse type to match the API response structure
interface ApiResponse {
  code: string;
  status: string;
  message: string;
  data: Activity[];
}

// Define the interface for POST and PATCH data
interface ActivityInput {
  categoryId: string;
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
}

// Custom hook to handle CRUD operations for Activities
const useActivities = (url: string) => {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GET: Fetch Activities
  const fetchActivities = useCallback(async () => {
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

  // POST: Add a new Activity
  const addActivity = async (newActivity: ActivityInput) => {
    setLoading(true);
    try {
      const response = await axiosClient.post<Activity>(url, newActivity);
      setData((prevData) => [...prevData, response.data]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // DELETE: Remove a Activity by ID
  const deleteActivity = async (id: string) => {
    setLoading(true);
    try {
      await axiosClient.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((activity) => activity.id !== id));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // PATCH or PUT: Update a category by ID
  const updateActivity = async (id: string, updatedActivity: ActivityInput) => {
    setLoading(true);
    try {
      const response = await axiosClient.patch<Activity>(
        `${url}/${id}`,
        updatedActivity
      );
      setData((prevData) =>
        prevData.map((activity) =>
          activity.id === id ? response.data : activity
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
    fetchActivities();
  }, [url, fetchActivities]);

  return {
    data,
    loading,
    error,
    fetchActivities,
    addActivity,
    deleteActivity,
    updateActivity,
  };
};

export default useActivities;
