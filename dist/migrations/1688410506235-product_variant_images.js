"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productVariantImages1688410506235 = void 0;
class productVariantImages1688410506235 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product_variant_images" ("variant_id" character varying NOT NULL, "image_id" character varying NOT NULL, CONSTRAINT "PK_variant_image" PRIMARY KEY ("variant_id", "image_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_product_variant_images_variant_id" ON "product_variant_images" ("variant_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_product_variant_images_image_id" ON "product_variant_images" ("image_id") `);
        await queryRunner.query(`ALTER TABLE "product_variant_images" ADD CONSTRAINT "FK_product_variant_images_variant_id" FOREIGN KEY ("variant_id") REFERENCES "product_variant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_variant_images" ADD CONSTRAINT "FK_product_variant_images_image_id" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_variant_images" DROP CONSTRAINT "FK_product_variant_images_variant_id"`);
        await queryRunner.query(`ALTER TABLE "product_variant_images" DROP CONSTRAINT "FK_product_variant_images_image_id"`);
        await queryRunner.query(`DROP TABLE "product_variant_images"`);
    }
}
exports.productVariantImages1688410506235 = productVariantImages1688410506235;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4ODQxMDUwNjIzNS1wcm9kdWN0X3ZhcmlhbnRfaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTY4ODQxMDUwNjIzNS1wcm9kdWN0X3ZhcmlhbnRfaW1hZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsaUNBQWlDO0lBQ3JDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQiw4TEFBOEwsQ0FDL0wsQ0FBQztRQUNGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsa0dBQWtHLENBQ25HLENBQUM7UUFDRixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLDhGQUE4RixDQUMvRixDQUFDO1FBRUYsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQixnTUFBZ00sQ0FDak0sQ0FBQztRQUNGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsa0xBQWtMLENBQ25MLENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN4QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLDZGQUE2RixDQUM5RixDQUFDO1FBQ0YsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQiwyRkFBMkYsQ0FDNUYsQ0FBQztRQUNGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRjtBQTdCRCw4RUE2QkMifQ==