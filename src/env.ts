const getEnv = () => {
  const { VITE_CLIENT_ID, VITE_REDIRECT_URI } = import.meta.env;

  if (typeof VITE_CLIENT_ID !== "string") {
    throw new Error("Missing env variable: VITE_CLIENT_ID");
  }

  if (typeof VITE_REDIRECT_URI !== "string") {
    throw new Error("Missing env variable: VITE_REDIRECT_URI");
  }

  return {
    VITE_CLIENT_ID,
    VITE_REDIRECT_URI,
  };
};

export const env = getEnv();
