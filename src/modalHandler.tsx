// ModalHandler.tsx
'use client'
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { useNavbarStore } from "@/store/navbarStore";

const ModalHandler = () => {
  const user = useUserStore((state) => state.user);
  const toggleModalLogin = useNavbarStore((state) => state.toggleModalLogin);
  const modalLogin = useNavbarStore((state) => state.modalLogin);

  useEffect(() => {
    if (user && modalLogin) {
      const timer = setTimeout(() => {
        toggleModalLogin(); // Menutup modal setelah 2 detik
      }, 2000); // 2000ms = 2 detik

      // Cleanup timer jika user berubah sebelum 2 detik
      return () => clearTimeout(timer);
    }
  }, [user, toggleModalLogin, modalLogin]);

  return null; // Komponen ini hanya mengurus side effect, tidak perlu render apa pun
};

export default ModalHandler;
