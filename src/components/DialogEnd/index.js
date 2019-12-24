import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// 结束弹窗
export default function Index(props) {
    const { isShowDialogEng, handlerDialogEndConfirm, handlerDialogEndCancel } = props;
    return (
      <div>
        <Dialog
          open={isShowDialogEng}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">本小节结束</DialogTitle>
          <DialogContent style={{ minWidth: '300px' }}>是否再来一次？</DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handlerDialogEndCancel} color="primary">取消</Button>
            <Button variant="contained" color="primary" onClick={handlerDialogEndConfirm}>确定</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }