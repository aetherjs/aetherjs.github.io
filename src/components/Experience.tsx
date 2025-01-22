import { VscLinkExternal } from "react-icons/vsc";

interface ExperienceProps {
  heading: string;
  subheading?: string;
  dates: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
  isLast?: boolean;
}

export function Experience({
  heading,
  subheading,
  dates,
  description,
  links,
  isLast,
}: ExperienceProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl md:text-3xl font-heading pt-4'>{heading}</h2>
      {subheading && (
        <h3 className='text-base md:text-lg font-body'>{subheading}</h3>
      )}
      <h3 className='text-base md:text-lg font-body'>{dates}</h3>
      <p className='text-base md:text-lg font-body'>{description}</p>

      {links && links.length > 0 && (
        <div className='flex flex-wrap gap-4'>
          {links.map((link) => (
            <div
              key={link.url}
              className='group inline-flex items-center space-x-2 transition-all duration-200 hover:-translate-y-1'
            >
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
          ))}
        </div>
      )}

      {!isLast && (
        <div className='mt-5 ml-10 h-20 border-l border-primary-text dark:border-dark-primary-text' />
      )}
    </div>
  );
}
