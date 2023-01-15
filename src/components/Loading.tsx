import classnames from 'classnames';

interface LoadingProps {
  isLoading?: boolean;
}

export const Loading = (props: LoadingProps) => {
  const { isLoading } = props;

  if (!isLoading) {
    return null;
  }

  const rootClassNames = classnames(
    `top-0 left-0 opacity-0 w-screen h-screen flex absolute items-center justify-center transition-all bg-black bg-opacity-50`,
    { 'opacity-100': isLoading },
  );

  return (
    <div className={rootClassNames}>
      <div>
        <svg className='h-20 animate-spin' viewBox='25 25 50 50'>
          <circle
            className='stroke-2 stroke-fuchsia-400 animate-stroke-dash'
            cx='50'
            cy='50'
            r='20'
          />
        </svg>
      </div>
    </div>
  );
};
