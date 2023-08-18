import React from "react";
import Stack from "@mui/material/Stack";
import DetailedCard from "./components/DetailedCard";
// import CssFlipCard from "./components/CssCard/CssFlipCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Intilizing query client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="body">
      <QueryClientProvider client={queryClient}>
        <Stack spacing={1}>
          {/* Method 1 React Method */}
          <DetailedCard />

          {/* Method 2 */}
          {/* For Flipping the Card using CSS Hover Property */}
          {/* Uncomment the import First */}
          {/* <CssFlipCard /> */}
        </Stack>
      </QueryClientProvider>
    </div>
  );
}
export default App;
