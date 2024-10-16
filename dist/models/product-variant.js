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
exports.ProductVariant = void 0;
const typeorm_1 = require("typeorm");
const medusa_1 = require("@medusajs/medusa");
let ProductVariant = class ProductVariant extends medusa_1.ProductVariant {
};
__decorate([
    (0, typeorm_1.ManyToMany)(() => medusa_1.Image, { cascade: ['insert'] }),
    (0, typeorm_1.JoinTable)({
        name: 'product_variant_images',
        joinColumn: {
            name: 'variant_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'image_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], ProductVariant.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProductVariant.prototype, "thumbnail", void 0);
ProductVariant = __decorate([
    (0, typeorm_1.Entity)()
], ProductVariant);
exports.ProductVariant = ProductVariant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wcm9kdWN0LXZhcmlhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdFO0FBQ2hFLDZDQUcwQjtBQUduQixJQUFNLGNBQWMsR0FBcEIsTUFBTSxjQUFlLFNBQVEsdUJBQW9CO0NBaUJ2RCxDQUFBO0FBaEJDO0lBQUMsSUFBQSxvQkFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLGNBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDaEQsSUFBQSxtQkFBUyxFQUFDO1FBQ1QsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsWUFBWTtZQUNsQixvQkFBb0IsRUFBRSxJQUFJO1NBQzNCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsb0JBQW9CLEVBQUUsSUFBSTtTQUMzQjtLQUNGLENBQUM7OzhDQUNjO0FBRWhCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lEQUNqQjtBQWhCYixjQUFjO0lBRDFCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLGNBQWMsQ0FpQjFCO0FBakJZLHdDQUFjIn0=