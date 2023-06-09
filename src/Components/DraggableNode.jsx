import React from "react";
import { Button } from "@mui/material";

const DraggableNode = ({ nodeType, label, sx }) => {
  const onDragStart = (event) => {
    event.stopPropagation();
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Button
      onDragStart={onDragStart}
      draggable
      sx={{
        width: "100%",
        height: "50px",
        padding: "4px",
        border: "1px solid #1a192b",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "grab",
        color: "white",
        borderColor: "#0041d0",
        marginTop: "5px",
        marginBottom: "5px",
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

export default DraggableNode;
