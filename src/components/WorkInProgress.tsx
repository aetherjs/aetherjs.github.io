export const WorkInProgress = () => {
  return (
    <div className='h-screen overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8 bg-primary-bg dark:bg-dark-primary-bg text-primary-text dark:text-dark-primary-text'>
      <h1 className='font-heading text-2xl md:text-6xl font-bold mb-4 text-center'>
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
        I am probably working tirelessly to bring this part of website online as
        you read it. Sorry about the inconvinience!
      </p>
    </div>
  );
};
