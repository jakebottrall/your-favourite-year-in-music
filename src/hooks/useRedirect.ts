import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (criteria: boolean, path: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (criteria) {
      navigate(path);
    }
  }, [criteria, navigate, path]);
};
