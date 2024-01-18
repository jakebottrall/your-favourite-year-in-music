interface LoadingProps {
  isLoading?: boolean;
}

export const Loading = (props: LoadingProps) => {
  const { isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div>
        <svg className="h-20 animate-spin" viewBox="25 25 50 50">
          <circle
            className="animate-stroke-dash stroke-fuchsia-400 stroke-2"
            cx="50"
            cy="50"
            r="20"
          />
        </svg>
      </div>
    </div>
  );
};
