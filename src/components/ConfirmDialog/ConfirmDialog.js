import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialog({open, handleClose, title, content, callback}) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
        {title}
    </DialogTitle>
    <DialogContent>
        <DialogContentText id="alert-dialog-description">
            {content}
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant='outlined' onClick={callback} autoFocus>
            Confirmar
        </Button>
    </DialogActions>
    </Dialog>
  );
}