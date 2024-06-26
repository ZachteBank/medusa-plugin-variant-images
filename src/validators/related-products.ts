import {
  AdminPostProductsProductVariantsVariantReq as MedusaAdminPostProductsProductVariantsVariantReq,
  registerOverriddenValidators
} from '@medusajs/medusa';
import { IsOptional, IsArray, IsString } from 'class-validator';

export class AdminPostProductsProductVariantsVariantReq extends MedusaAdminPostProductsProductVariantsVariantReq {
  @IsArray()
  @IsOptional()
  images?: string[];

  @IsString()
  @IsOptional()
  thumbnail?: string;
}

registerOverriddenValidators(AdminPostProductsProductVariantsVariantReq)
