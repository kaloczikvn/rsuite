import React, { useState, useCallback } from 'react';
import { Button, Toggle } from 'rsuite';
import DefaultPage from '@/components/Page';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';

export default function Page() {
  return (
    <DefaultPage dependencies={{ useState, useCallback, Button, Toggle, CheckIcon, CloseIcon }} />
  );
}
