export default {
  TOKEN_NAME: import.meta.env.VITE_TOKEN_NAME ?? 'dev_token',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  MODULE_PRODUCT_MANAGEMENT_PATH: '/product-management',
  MODULE_ORDER_MANAGEMENT_PATH: '/order-management',
}