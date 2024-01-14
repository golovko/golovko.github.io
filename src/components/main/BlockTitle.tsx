type Props = {
  title: string;
  subtitle?: string;
};

const BlockTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <div className='mb-10'>
        <h2 className='mb-6 text-4xl font-extrabold text-white'>{title}</h2>
        <div className='max-w-3xl'>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default BlockTitle;
