import { useMediaQuery } from "react-responsive";

export const IsMobileWidth = () => {
  return useMediaQuery({ maxWidth: "991.98px" });
};

export const IsTabletWidth = () => {
  return useMediaQuery({ minWidth: "576px", maxWidth: "991.98px" });
};

export const IsDesktopWidth = () => {
  return useMediaQuery({ minWidth: "992px", maxWidth: "1199.98px" });
};

export const IsLargeDesktopWidth = () => {
  return useMediaQuery({ minWidth: "1200px" });
};
