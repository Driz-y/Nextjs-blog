const blog = {
    name: 'blog',
    title: 'Blog',
    type: "document",

    fields: [{
        name: 'title',
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),

    }, {
        name: "author",
        title: "Author",
        type: "string",
        validation: (Rule) => Rule.required(),

    }, {
        name: "slug",
        title: "Slug",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: { source: "title", maxlength: 200, }
    }, {
        name: "image",
        title: "Image",
        type: "image",
        validation: (Rule) => Rule.required(),
        options: { hotspot: true, }
    }, {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule) => Rule.required(),
    }, {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
    }, {
        name: "paragraphs",
        title: "Paragraphs",
        type: "array",
        of: [{ type: "block" }],
        validation: (Rule) => Rule.required(),

    }, {
        name: "createdAt",
        title: "CreatedAt",
        type: "datetime",
        validation: (Rule) => Rule.required(),
        options: { dateFormat: "YYYY-MM-DDTHH:mm:ssZ" },
        readOnly: true,
    },],
    initialValue: { createdAt: new Date().toISOString() },

}

export default blog