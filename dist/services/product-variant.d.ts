import { ProductVariantService as MedusaProductVariantService, ProductVariant } from '@medusajs/medusa';
import { Logger } from '@medusajs/types';
import { UpdateProductVariantInput as MedusaUpdateProductVariantInput } from '@medusajs/medusa/dist/types/product-variant';
import ImageRepository from '@medusajs/medusa/dist/repositories/image';
type UpdateProductVariantInput = {
    images: string[];
} & MedusaUpdateProductVariantInput;
declare class ProductVariantService extends MedusaProductVariantService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly imageRepository_: typeof ImageRepository;
    protected readonly logger_: Logger;
    constructor(container: any);
    update(variantOrVariantId: string | Partial<ProductVariant>, update: UpdateProductVariantInput): Promise<ProductVariant>;
}
export default ProductVariantService;
