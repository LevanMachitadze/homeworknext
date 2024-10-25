const Services = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <p className='bg-[#F5F8FF] w-full mx-auto h-screen'>
        your services number is: {params.id}
      </p>
    </div>
  );
};

export default Services;
