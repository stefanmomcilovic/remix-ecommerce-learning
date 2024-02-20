export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            },
            title: 'Image'
        },
        {
            title: 'Stripe Product Id',
            name: 'stripeProductId',
            type: 'string'
        }
    ]
}