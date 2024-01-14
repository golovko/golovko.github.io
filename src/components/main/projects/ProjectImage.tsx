const ProjectImage = ({ url }: { url: string }) => {
  return (
    <figure className='relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
      <a href='#'>
        <img className='rounded-lg' src={url} />
      </a>
    </figure>
  );
};

export default ProjectImage;
