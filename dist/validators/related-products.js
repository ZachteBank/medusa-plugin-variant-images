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
exports.AdminPostProductsProductVariantsVariantReq = void 0;
const medusa_1 = require("@medusajs/medusa");
const class_validator_1 = require("class-validator");
class AdminPostProductsProductVariantsVariantReq extends medusa_1.AdminPostProductsProductVariantsVariantReq {
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
exports.AdminPostProductsProductVariantsVariantReq = AdminPostProductsProductVariantsVariantReq;
(0, medusa_1.registerOverriddenValidators)(AdminPostProductsProductVariantsVariantReq);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0b3JzL3JlbGF0ZWQtcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBRzBCO0FBQzFCLHFEQUFnRTtBQUVoRSxNQUFhLDBDQUEyQyxTQUFRLG1EQUFnRDtDQVEvRztBQVBDO0lBQUMsSUFBQSx5QkFBTyxHQUFFO0lBQ1QsSUFBQSw0QkFBVSxHQUFFOzswRUFDSztBQUVsQjtJQUFDLElBQUEsMEJBQVEsR0FBRTtJQUNWLElBQUEsNEJBQVUsR0FBRTs7NkVBQ007QUFQckIsZ0dBUUM7QUFFRCxJQUFBLHFDQUE0QixFQUFDLDBDQUEwQyxDQUFDLENBQUEifQ==