import { ProductVariant as MedusaProductVariant, Image } from '@medusajs/medusa';
export declare class ProductVariant extends MedusaProductVariant {
    images: Image[];
    thumbnail: string | null;
}
