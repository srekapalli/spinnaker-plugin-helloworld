import * as React from 'react';
import { IExecutionDetailsSection } from '@spinnaker/core';

function ExecutionDetails(props: any) {
  return (
    <h3>{ props.title } Execution Details</h3>
  )
}

export default ExecutionDetails as IExecutionDetailsSection;
