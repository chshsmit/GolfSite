/**
 * GraphOptionSelect.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-16T14:43:33.968Z-07:00
 * @last-modified 2020-09-16T14:46:58.258Z-07:00
 */

import React from "react";

import { MenuItem, Select } from "@material-ui/core";

const GraphOptionSelect = (): React.ReactElement => {
  return (
    <Select style={{ margin: "auto" }}>
      <MenuItem value="fullCourses">Full Courses</MenuItem>
    </Select>
  );
};

export default GraphOptionSelect;
