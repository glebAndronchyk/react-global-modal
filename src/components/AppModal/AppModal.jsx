import { observer } from "mobx-react";

import { Modal, Paper } from "@mui/material";

import { appModalStore } from "./store/AppModalStore.js";

const AppModal = observer(() => {
  const { isOpened, close, renderComponent, configuration } = appModalStore;

  const backdropClose = (event, reason) => {
    return reason === "backdropClick" ? close() : null;
  };

  return (
    <Modal onClose={backdropClose} open={isOpened}>
      <Paper>
        {renderComponent && renderComponent}
        <span>{configuration}</span>
      </Paper>
    </Modal>
  );
});

export default AppModal;
