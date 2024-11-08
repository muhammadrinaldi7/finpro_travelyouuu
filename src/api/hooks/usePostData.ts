import { useState } from "react";
import axiosClient from "@/api/axiosClient";

const usePostData = (url: string) => {
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk melakukan POST
  const postData = async (payload: unknown) => {
    setLoading(true);
    setError(null); // Reset error sebelum mulai request baru
    await axiosClient.post(url, payload).then((response) => {
        setData(response);
    }).catch((error) => {
        setError(error.response.data.message);
    }).finally(() => {
        setLoading(false);
    })
    // try {
    //   const response = await axiosClient.post(url, payload);
    //   setData(response.data);
    // } catch (err) {
    //   setError(err instanceof Error ? err.message : "An error occurred");
    // } finally {
    //   setLoading(false);
    // }
  };

  // Kembalikan fungsi postData untuk bisa di-trigger manual
  return { data, postData, loading, error };
};

export default usePostData;
