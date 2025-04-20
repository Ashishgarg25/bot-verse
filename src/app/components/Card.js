// components/Card.js
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { PortableText } from '@portabletext/react'

export default function Card({
  image,
  title,
  description,
  category,
  categoryColor = 'blue',
  author,
  authorImage,
  date,
  href,
  isFeatured = false,
  showExcerpt = true,
  badge = null,
}) {
  return (
    <div
      className={clsx(
        'flex flex-col lg:flex-row w-full bg-white rounded-xl shadow-1',
        isFeatured
          ? 'gap-7.5 lg:gap-11 p-4 lg:p-2.5 items-start overflow-hidden'
          : 'gap-6 p-2.5 sm:flex-row sm:items-start lg:max-w-[570px]'
      )}
    >
      <div
        className={clsx(
          'relative w-full',
          isFeatured ? 'aspect-[536/320]' : 'aspect-[238/180]'
        )}
      >
        {/* {badge && (
          <div className="absolute top-3 right-3 z-10 flex items-center rounded-md bg-orange px-2.5 py-1.5 text-base uppercase text-white">
            <Image
              alt="pro-icon"
              src="/images/icons/pro-icon.svg"
              width={15}
              height={15}
              className="mr-1.5"
            />
            <span>{badge}</span>
          </div>
        )} */}
        <Link href={href}>
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-lg"
            loading={isFeatured ? 'eager' : 'lazy'}
          />
        </Link>
      </div>
      <div className={clsx('w-full pr-3 pt-6', isFeatured && 'lg:max-w-[540px]')}>
        <p
          className={clsx(
            'mb-4 inline-flex rounded-full px-3 py-1 text-sm font-medium capitalize',
            {
              'bg-purple/[0.08] text-purple-dark': categoryColor === 'purple',
              'bg-blue/[0.08] text-blue': categoryColor === 'blue',
            }
          )}
        >
          {category}
        </p>
        <h2
          className={clsx(
            'text-dark font-semibold',
            isFeatured ? 'text-custom-4 mb-4 xl:text-heading-4 font-bold' : 'text-custom-lg mb-3'
          )}
        >
          <Link href={href} className='line-clamp-3'>{title}</Link>
        </h2>
        {isFeatured ? <div className="text-md text-gray-600 line-clamp-2">
          <PortableText value={description.slice(0, 1)} />
        </div> : null}
        <div className="mt-5 flex items-center gap-2.5">
          {author && authorImage && (
            <p className="flex items-center gap-3">
              <Image
                src={authorImage}
                alt={author}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
              />
              <p className="text-sm">{author}</p>
            </p>
          )}
          <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2" />
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
}
