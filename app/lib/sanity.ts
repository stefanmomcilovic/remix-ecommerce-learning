import { createClient } from "@sanity/client";

const projectId = 'y0io4h1q';
const dataset = 'production';
const apiVersion = '2022-03-07';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
});