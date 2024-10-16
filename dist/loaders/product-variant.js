"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1() {
    const adminVariantsImports = (await Promise.resolve().then(() => __importStar(require('@medusajs/medusa/dist/api/routes/admin/variants/index'))));
    const storeVariantsImports = (await Promise.resolve().then(() => __importStar(require('@medusajs/medusa/dist/api/routes/store/variants/index'))));
    adminVariantsImports.defaultAdminVariantRelations = [
        ...adminVariantsImports.defaultAdminVariantRelations,
        'images',
    ];
    storeVariantsImports.defaultStoreVariantRelations = [
        ...storeVariantsImports.defaultStoreVariantRelations,
        'images',
    ];
    storeVariantsImports.allowedStoreVariantRelations = [
        ...storeVariantsImports.allowedStoreVariantRelations,
        'images',
    ];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12YXJpYW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvYWRlcnMvcHJvZHVjdC12YXJpYW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxLQUFLO0lBQ2xCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyx3REFDNUIsdURBQXVELEdBQ3hELENBQVEsQ0FBQztJQUVWLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyx3REFDMUIsdURBQXVELEdBQzFELENBQVEsQ0FBQztJQUVWLG9CQUFvQixDQUFDLDRCQUE0QixHQUFHO1FBQ2xELEdBQUcsb0JBQW9CLENBQUMsNEJBQTRCO1FBQ3BELFFBQVE7S0FDVCxDQUFDO0lBRUYsb0JBQW9CLENBQUMsNEJBQTRCLEdBQUc7UUFDbEQsR0FBRyxvQkFBb0IsQ0FBQyw0QkFBNEI7UUFDcEQsUUFBUTtLQUNULENBQUM7SUFFRixvQkFBb0IsQ0FBQyw0QkFBNEIsR0FBRztRQUNsRCxHQUFHLG9CQUFvQixDQUFDLDRCQUE0QjtRQUNwRCxRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUM7QUF2QkQsNEJBdUJDIn0=