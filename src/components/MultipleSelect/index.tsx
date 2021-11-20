import React from 'react';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import colors from '../../assets/_colors.scss';

interface SelectProps {
  id: string;
  name: string;
  onChange?: (val: string) => void;
  checked: boolean;
}

interface AoMultipleSelectProps {
  selectedOption?: Array<string>;
  options: Array<SelectProps>;
  label?: string;
}

const checkBoxStyles = () => ({
  root: {
    '&$checked': {
      color: '#005F86',
    },
  },
  checked: {},
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const useStyles = makeStyles({
  root: {
    '&.MuiFormControl-root': {
      backgroundColor: colors.white,
      width: '100%',
      '&:hover .MuiInputLabel-root': {
        color: '#EFEFF0',
      },
      '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#EFEFF0',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
        color: '#000',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: '#005F86',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#005F86',
      },

      '& .MuiInputBase-input': {
        color: '#000',
      },
    },
  },
});

export const PlatformMultipleSelect: React.FC<AoMultipleSelectProps> = ({
  options,
  selectedOption,
  label,
}) => {
  const styles = useStyles();
  return (
    <FormControl className={styles.root}>
      <Select
        aria-label={`selectedOption`}
        variant="outlined"
        multiple
        id="select"
        value={selectedOption?.length > 0 ? selectedOption : [label]}
        renderValue={(selected) => (selected as string[])?.join(', ')}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
          PaperProps: {
            style: {
              maxHeight: 225,
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem aria-label={`option`} key={option.id} value={option.name}>
            <CustomCheckbox
              onChange={() => {
                option.onChange(option.id);
              }}
              name={option.name}
              checked={option.checked}
            />
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
