import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Order, OrderItem } from "@/types";

type OrderState = {
  cart: OrderItem[];
  orders: Order[];
  addToCart: (item: Omit<OrderItem, "id" | "status" | "quantity">) => void;
  removeFromCart: (productId: number) => void;
  finishOrder: () => void;
  updateOrderItemStatus: (
    orderId: number,
    itemId: number,
    status: "PENDING" | "SUCCESS" | "FAILED"
  ) => void;
  getTotalOrders: (orderId: number) => number;
  getOrdersCount: () => number;
};

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      cart: [],
      orders: [],

      addToCart: (item) =>
        set((state) => {
          const exists = state.cart.find((i) => i.productId === item.productId);
          if (exists) {
            return {
              cart: state.cart.map((i) =>
                i.productId === item.productId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return {
            cart: [
              ...state.cart,
              { ...item, id: Date.now(), quantity: 1, status: "PENDING" },
            ],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.productId !== productId),
        })),

      finishOrder: () =>
        set((state) => {
          if (state.cart.length === 0) return state;
          const newOrder: Order = {
            id: Date.now(),
            items: state.cart,
            total: state.cart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            ),
            createdAt: new Date(),
          };
          return { cart: [], orders: [...state.orders, newOrder] };
        }),

      getTotalOrders: (orderId) => {
        const order = get().orders.find((o) => o.id === orderId);
        if (!order) return 0;
        return order.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0 // 👈 initial value
        );
      },

      getOrdersCount: () => get().orders.length,

      updateOrderItemStatus: (orderId, itemId, status) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  items: order.items.map((item) =>
                    item.id === itemId ? { ...item, status } : item
                  ),
                }
              : order
          ),
        })),
    }),
    { name: "order-storage" }
  )
);
