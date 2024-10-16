"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
class ProductVariantService extends medusa_1.ProductVariantService {
    constructor(container) {
        super(container);
        this.imageRepository_ = container.imageRepository;
        this.logger_ = container.logger;
    }
    // @ts-ignore
    async update(variantOrVariantId, update) {
        if (update === null || update === void 0 ? void 0 : update.images) {
            const variant = await this.retrieve(variantOrVariantId);
            const variantRepo = this.activeManager_.withRepository(this.productVariantRepository_);
            const imageRepo = this.manager_.withRepository(this.imageRepository_);
            variant.images = await imageRepo.upsertImages(update.images);
            await variantRepo.save(variant);
        }
        delete update.images;
        return super.update(variantOrVariantId, update);
    }
}
ProductVariantService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = ProductVariantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3Byb2R1Y3QtdmFyaWFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUNsQyw2Q0FHMEI7QUFTMUIsTUFBTSxxQkFBc0IsU0FBUSw4QkFBMkI7SUFLN0QsWUFBWSxTQUFTO1FBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELGFBQWE7SUFDYixLQUFLLENBQUMsTUFBTSxDQUNSLGtCQUFvRCxFQUNwRCxNQUFpQztRQUVuQyxJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEVBQUU7WUFDbEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUE0QixDQUFDLENBQUM7WUFDbEUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ2xELElBQUksQ0FBQyx5QkFBeUIsQ0FDakMsQ0FBQztZQUNGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU3RCxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFckIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0FBOUJNLCtCQUFTLEdBQUcsaUJBQVEsQ0FBQyxNQUFNLENBQUM7QUFpQ3JDLGtCQUFlLHFCQUFxQixDQUFDIn0=