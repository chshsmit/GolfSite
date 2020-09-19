/**
 * GraphOptionSelect.tsx
 * @author Christopher Smith
 * @description
 * @created 2020-09-16T14:43:33.968Z-07:00
 * @last-modified 2020-09-19T16:45:17.829Z-07:00
 */

//---------------------------------------------------------------------------------------------------

import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";

//---------------------------------------------------------------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface Option {
  value: string;
  label: string;
}

type GraphOptionSelectProps = {
  graphOptions: Array<Option>;
  value: string;
  onChange: (value: string) => void;
};

//---------------------------------------------------------------------------------------------------

const GraphOptionSelect = ({
  graphOptions,
  value,
  onChange,
}: GraphOptionSelectProps): React.ReactElement => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    onChange(event.target.value as string);

  const options = graphOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="graphOptionSelectLabel">Graph Option</InputLabel>
      <Select
        labelId="graphOptionSelectLabel"
        value={value}
        onChange={handleChange}
      >
        {options}
      </Select>
    </FormControl>
  );
};

export default GraphOptionSelect;
