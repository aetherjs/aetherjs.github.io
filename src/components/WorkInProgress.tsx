export const WorkInProgress = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 sm:p-8'>
      <h1 className='font-heading text-4xl sm:text-6xl font-bold mb-4 text-center'>
        Work in Progress
      </h1>
      <picture className='mb-8'>
        <source
          srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a7/512.webp'
          type='image/webp'
        />
        <img
          src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a7/512.gif'
          alt='🚧'
          width='64'
          height='64'
        />
      </picture>

      <p className='font-body text-base sm:text-lg max-w-2xl text-center px-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};
