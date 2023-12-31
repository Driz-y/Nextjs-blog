import React from 'react'
import { getBlogBySlug } from '@/sanity/sanity-utils'
import Header from '../../components/Header'
import Image from 'next/image'
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

export default async function page({ params }) {
    const { slug } = params;

    const blog = await getBlogBySlug(slug);


    const formatDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const components: Partial<PortableTextReactComponents> = {
        block: {
            normal: ({ children }) => <p className='text-lg my-8'>{children}</p>,
            h1: ({ children }) => <h1 className='text-4xl font-bold my-8'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-4xl font-bold my-8'>{children}</h2>,
            blockquote: ({ children }) => <blockquote className="text-2xl italic my-8"> {children} </blockquote>,
        },
    }

    return (
        <div className='h-full min-h-screen pb-20 bg-gradient-to-r from-rose-200 via-rose-200 to-teal-200'>
            <Header />
            <div className='max-w-4xl mx-auto flex flex-col mt-10 md:p-0 space-y-4'><h1 className='text-4xl font-bold'>{blog.title}</h1><p className='text-lg'>{formatDate}</p></div>
            <div className='max-w-4xl mx-auto flex flex-col mt-10 p-10 md:p-0'></div>
            <div className='relative h-96 overflow-hidden aspect-ratio-1'>
                <Image src={blog.image} layout='fill' objectFit='cover' alt='blog image' />
            </div>
            <div className='max-w-4xl mx-auto mt-10 p-10 md:p-0'>
                <PortableText value={blog.paragraphs} components={components} />
            </div>
        </div>
    )
}

