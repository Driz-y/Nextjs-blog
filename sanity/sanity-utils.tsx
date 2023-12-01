import { createClient, groq } from "next-sanity";


const client = createClient({

    projectId: "y33fkzpi",
    dataset: "production",
    apiVersion: "2023-11-28",
    useCdn: true,
})

export const getAllBlogs = async () => {
    const blogs = await client.fetch(groq`*[_type == "blog"]{
        title,
        author,
        description,
        tags,
        createdAt,
        paragraphs,
        "slug":slug.current,
        "image": image.asset->url,
    }`, {
        next: {
            revalidate: 3600, //fetch again after 1 hour
        }
    });

    return blogs;
}

export const getBlogBySlug = async (slug) => {
    console.log(slug);
    const query = groq`*[_type == "blog" && slug.current == $slug][0]{
        title,
        author,
        createdAt,
        paragraphs,
        "image": image.asset->url,
    }`;
    const blog = await client.fetch(query, { slug });


    return blog;


}