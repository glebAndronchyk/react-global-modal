import { Button } from "@mui/material";

import { appModalStore } from "../AppModal/store/AppModalStore.js";

const SomePageData = () => {
  const { open } = appModalStore;

  const openModal = () => {
    open({ component: <div>test</div>, configuration: "test" });
  };

  return (
    <div>
      <span>page data goes here</span>
      <Button onClick={openModal}>Open Modal</Button>
    </div>
  );
};

export default SomePageData;
