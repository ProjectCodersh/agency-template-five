const API_BASE = 'https://dedicated.codersh.com/cms/wp-json';

export async function getMenu(slug) {
    const res = await fetch(`${API_BASE}/custom/v1/menu/${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch menu');
    }

    return res.json();
}

export const getPageBySlug = async(slug) => {
    const res = await fetch(`${API_BASE}/wp/v2/pages?slug=${slug}`);

    if (!res.ok) throw new Error('Page fetch failed');

    const data = await res.json();
    return data[0]; // WP returns array
};

export const getCPTBySlug = async(slug) => {
    const res = await fetch(
        `${API_BASE}/wp/v2/shopify-sections?slug=${slug}&_embed&acf_format=standard`
    );
    if (!res.ok) throw new Error('Single Shopify section fetch failed');
    const data = await res.json();
    return data[0];
};

export const getAllShopifySections = async() => {
    const res = await fetch(`${API_BASE}/wp/v2/shopify-sections?_embed`);

    if (!res.ok) {
        throw new Error('Failed to fetch Shopify sections');
    }

    return res.json();
};