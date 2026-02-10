// contexts/wishlist-context.tsx

"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

type WishlistContextValue = {
  isWishlisted: (productId: string) => boolean;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
};

/**
 * Create the context with an explicit undefined default.
 * allow failure in case someone forgets the Provider.
 */

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined,
);

// provider
export function WishlistProvider({ children }: { children: React.ReactNode }) {
  // internal state
  const [wishlist, setWishlist] = useState<Set<string>>(() => new Set());

  // add product by creating new set instance and return it
  const addToWishlist = useCallback((productId: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.add(productId);
      return next;
    });
  }, []);

  // remove product by create a new set instance andreturn it
  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.delete(productId);
      return next;
    });
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => {
      return wishlist.has(productId);
    },
    [wishlist],
  );

  // memory wishlist to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      isWishlisted,
      addToWishlist,
      removeFromWishlist,
    }),
    [isWishlisted, addToWishlist, removeFromWishlist],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

// useContext to consume wishlist throw error if not used within a provider
export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context)
    throw new Error("useWishlist must be used within a WishlistProvider");

  return context;
}
