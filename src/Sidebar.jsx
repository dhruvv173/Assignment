import React from "react";
import DraggableNode from "./Components/DraggableNode";

const Sidebar = () => {
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <DraggableNode
        nodeType="Web"
        label="Web"
        sx={{ backgroundColor: "purple" }}
      />
      <DraggableNode
        nodeType="NodeJs"
        label="NodeJs"
        sx={{ backgroundColor: "green" }}
      />
      <DraggableNode
        nodeType="Postgres"
        label="Postgres"
        sx={{ backgroundColor: "blue" }}
      />
      <DraggableNode
        nodeType="Redis"
        label="Redis"
        sx={{ backgroundColor: "red" }}
      />
      <DraggableNode
        nodeType="MIKRO-ORM"
        label="MIKRO-ORM"
        sx={{ backgroundColor: "blue" }}
      />
      <DraggableNode
        nodeType="GraphQL"
        label="GraphQL"
        sx={{ backgroundColor: "#E10098" }}
      />
      <DraggableNode
        nodeType="Express"
        label="Express"
        sx={{ backgroundColor: "#000000" }}
      />
      <DraggableNode
        nodeType="React"
        label="React"
        sx={{ backgroundColor: "blue" }}
      />
      <DraggableNode
        nodeType="Chakra UI"
        label="Chakra UI"
        sx={{ backgroundColor: "#319795" }}
      />
      <DraggableNode
        nodeType="NextJS"
        label="NextJS"
        sx={{ backgroundColor: "black" }}
      />
      <DraggableNode
        nodeType="Formik"
        label="Formik"
        sx={{ backgroundColor: "#EEA647" }}
      />
      <DraggableNode
        nodeType="Yup"
        label="Yup"
        sx={{ backgroundColor: "#F7DF1E" }}
      />
    </aside>
  );
};

export default Sidebar;
