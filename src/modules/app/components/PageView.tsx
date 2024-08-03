import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const PageView = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-4xl">{title}</h2>
      {children}
    </div>
  );
};

export default PageView;
