"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const class_validator_1 = require("class-validator");
const update_variant_1 = require("@medusajs/medusa/dist/api/routes/admin/products/update-variant");
class AdminPostProductsProductVariantsVariantReq extends update_variant_1.AdminPostProductsProductVariantsVariantReq {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AdminPostProductsProductVariantsVariantReq.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AdminPostProductsProductVariantsVariantReq.prototype, "thumbnail", void 0);
(0, medusa_1.registerOverriddenValidators)(AdminPostProductsProductVariantsVariantReq);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWdFO0FBQ2hFLHFEQUE4RDtBQUM5RCxtR0FBZ0w7QUFFaEwsTUFBTSwwQ0FBMkMsU0FBUSwyREFBZ0Q7Q0FReEc7QUFQRztJQUFDLElBQUEseUJBQU8sR0FBRTtJQUNULElBQUEsNEJBQVUsR0FBRTs7MEVBQ0s7QUFFbEI7SUFBQyxJQUFBLDBCQUFRLEdBQUU7SUFDVixJQUFBLDRCQUFVLEdBQUU7OzZFQUNNO0FBR3ZCLElBQUEscUNBQTRCLEVBQUMsMENBQTBDLENBQUMsQ0FBQyJ9