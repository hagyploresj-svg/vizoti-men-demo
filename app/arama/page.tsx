import { Metadata } from "next";
import { Suspense } from "react";

import SearchResultsClient from "./SearchResultsClient";

export const metadata: Metadata = {
  title: "Arama Sonuçları",
};

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchResultsClient />
    </Suspense>
  );
}
