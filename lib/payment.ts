// Payment service layer
//
// This module isolates payment-provider logic from the UI so a real provider
// (iyzico, PayTR, ...) can be wired in later without touching checkout screens.
// No live payment processing happens here yet.
//
// Required environment variables once a provider is connected:
//   PAYMENT_PROVIDER=iyzico | paytr
//   PAYMENT_API_KEY=...
//   PAYMENT_SECRET_KEY=...
//   PAYMENT_BASE_URL=...
//
// Do not commit real credentials. Read them from process.env only.

export type PaymentMethod = "credit-card";
export type SecureMode = "3d" | "non-3d";

export interface CheckoutPayload {
  amount: number;
  currency: "TRY";
  method: PaymentMethod;
  secureMode: SecureMode;
  orderId: string;
}

export interface PaymentResult {
  success: boolean;
  message: string;
}

/**
 * Placeholder for the real payment call. Wire this to iyzico/PayTR's
 * server-side SDK or REST API using the environment variables above.
 * Throws until a provider is configured so it can never be mistaken
 * for a working integration.
 */
export async function createPayment(_payload: CheckoutPayload): Promise<PaymentResult> {
  throw new Error(
    "Ödeme sağlayıcısı henüz yapılandırılmadı. lib/payment.ts içine iyzico veya PayTR entegrasyonunu ekleyin."
  );
}

// 3D Secure is the default and only mode enabled in the UI. Non-3D checkout
// must only be exposed once the payment provider/merchant account explicitly
// supports and allows it — do not enable in the UI before that is confirmed.
export const NON_3D_AVAILABLE = false;
