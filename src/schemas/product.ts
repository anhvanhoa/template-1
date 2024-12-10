import { z } from 'zod';

export const schemaProduct = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    thumbnail: z.string(),
});