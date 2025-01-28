const Footer = () => {
  return (
    <footer className='w-full py-6 mt-auto border-t border-neutral-200 dark:border-neutral-800'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center space-x-6'>
          <a
            href='https://github.com/aetherjs'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
          >
            LinkedIn
          </a>
          <a
            href='mailto:your.email@example.com'
            className='text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
