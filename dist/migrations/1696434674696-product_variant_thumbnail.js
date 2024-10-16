"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantThumbnail1696434674696 = void 0;
class ProductVariantThumbnail1696434674696 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE "product_variant"' + ' ADD COLUMN "thumbnail" text');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE "product_variant" DROP COLUMN "thumbnail"');
    }
}
exports.ProductVariantThumbnail1696434674696 = ProductVariantThumbnail1696434674696;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5NjQzNDY3NDY5Ni1wcm9kdWN0X3ZhcmlhbnRfdGh1bWJuYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTY5NjQzNDY3NDY5Ni1wcm9kdWN0X3ZhcmlhbnRfdGh1bWJuYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsb0NBQW9DO0lBQ3RDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNuQiwrQkFBK0IsR0FBRyw4QkFBOEIsQ0FDbkUsQ0FBQztJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDbkIsdURBQXVELENBQzFELENBQUM7SUFDTixDQUFDO0NBQ0o7QUFaRCxvRkFZQyJ9