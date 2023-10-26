import { Button, IconButton, InputBase, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';
import styles from './currentBets.module.scss';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export function CurrentBets() {
  const [type, setType] = useState<string>('Удержание позиции');

  function handleChange(e: SelectChangeEvent<string>) {
    setType(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Актуальные ставки</div>
      <div className={styles.search_panel}>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={type} label='Тип' onChange={handleChange}>
          <MenuItem value={'Удержание позиции'}>Удержание позиции</MenuItem>
        </Select>
        <Paper component='form' className={styles.search_input_wrapper}>
          <InputBase
            className={styles.search_input}
            placeholder='Поиск по названию или артикулу'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button className={styles.search_btn} variant='contained'>
          Найти
        </Button>
      </div>
    </div>
  );
}
