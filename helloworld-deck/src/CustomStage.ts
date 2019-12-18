import React from 'react';
import { IStageTypeConfig } from '@spinnaker/core';
import ExecutionDetails from './ExecutionDetails';
import { ReactStageComponent } from './ReactStageComponent';

export const customStage: IStageTypeConfig = {
  key: 'custom-stage',
  alias: 'wait',
  label: `Chris's custom stage`,
  description: 'This is a custom stage to demonstrate plugins',
  component: ReactStageComponent,
  executionDetailsSections: [ExecutionDetails],
};
