import { VscLinkExternal } from "react-icons/vsc";

interface ExperienceProps {
  heading: string;
  subheading?: string;
  dates: string;
  description: string;
  link?: {
    name: string;
    url: string;
  };
  isLast?: boolean;
}

export function Experience({
  heading,
  subheading,
  dates,
  description,
  link,
  isLast,
}: ExperienceProps) {
  return (
    <div className='space-y-4 pb-6'>
      <h2 className='text-xl md:text-3xl font-heading'>{heading}</h2>
      {subheading && (
        <h3 className='text-base md:text-lg font-body'>{subheading}</h3>
      )}
      <h3 className='text-base md:text-lg font-body'>{dates}</h3>
      <p className='text-base md:text-lg font-body'>{description}</p>

      {link && (
        <div className='group inline-flex items-center space-x-2 transition-all duration-200 hover:-translate-y-1'>
          <VscLinkExternal className='transition-all duration-200 group-hover:text-violet-500' />
          <a
            className='text-base md:text-lg group-hover:text-violet-500'
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.name}
          </a>
        </div>
      )}

      {!isLast && (
        <div className='ml-10 h-20 border-l border-primary-text dark:border-dark-primary-text' />
      )}
    </div>
  );
}
