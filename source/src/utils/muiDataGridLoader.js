import { GridOverlay } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import ReactLoading from "react-loading";

export const CustomLoadingOverlay = () => (
  <GridOverlay>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <ReactLoading type="bars" color="red" width={100} height={100} />
    </Box>
  </GridOverlay>
);
