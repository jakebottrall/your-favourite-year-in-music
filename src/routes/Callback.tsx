import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { spotifyApi } from "../services/spotifyApi";

interface CallbackProps {
  onAuth: () => void;
}

export const Callback = (props: CallbackProps) => {
  const { onAuth } = props;

  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    const hashParams = new URLSearchParams(hash.replace("#", "?"));
    const accessToken = hashParams.get("access_token");

    if (accessToken) {
      onAuth();
      localStorage.setItem("access_token", accessToken);
      spotifyApi.setAccessToken(accessToken);
      navigate("/");
    } else {
      localStorage.clear();
      spotifyApi.setAccessToken("");
      navigate("/login");
    }
  }, [hash, navigate, onAuth]);

  return <Loading isLoading />;
};
