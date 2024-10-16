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
    const adminProductImports = (await Promise.resolve().then(() => __importStar(require('@medusajs/medusa/dist/api/routes/admin/products/index'))));
    const storeProductImports = (await Promise.resolve().then(() => __importStar(require('@medusajs/medusa/dist/api/routes/store/products/index'))));
    adminProductImports.defaultAdminProductRelations = [
        ...adminProductImports.defaultAdminProductRelations,
        'variants.images',
    ];
    storeProductImports.defaultStoreProductsRelations = [
        ...storeProductImports.defaultStoreProductsRelations,
        'variants.images',
    ];
    storeProductImports.allowedStoreProductsRelations = [
        ...storeProductImports.allowedStoreProductsRelations,
        'variants.images',
    ];
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkZXJzL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLEtBQUs7SUFDbEIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLHdEQUMzQix1REFBdUQsR0FDeEQsQ0FBUSxDQUFDO0lBRVYsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLHdEQUMzQix1REFBdUQsR0FDeEQsQ0FBUSxDQUFDO0lBRVYsbUJBQW1CLENBQUMsNEJBQTRCLEdBQUc7UUFDakQsR0FBRyxtQkFBbUIsQ0FBQyw0QkFBNEI7UUFDbkQsaUJBQWlCO0tBQ2xCLENBQUM7SUFFRixtQkFBbUIsQ0FBQyw2QkFBNkIsR0FBRztRQUNsRCxHQUFHLG1CQUFtQixDQUFDLDZCQUE2QjtRQUNwRCxpQkFBaUI7S0FDbEIsQ0FBQTtJQUVELG1CQUFtQixDQUFDLDZCQUE2QixHQUFHO1FBQ2xELEdBQUcsbUJBQW1CLENBQUMsNkJBQTZCO1FBQ3BELGlCQUFpQjtLQUNsQixDQUFBO0FBQ0gsQ0FBQztBQXZCRCw0QkF1QkMifQ==