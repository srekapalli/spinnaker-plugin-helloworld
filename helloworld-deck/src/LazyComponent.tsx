import * as React from 'react';
import {
  FormikFormField, FormikStageConfig, HelpField, IStageConfigProps, NumberInput, TextInput,
  Validators
} from '@spinnaker/core';

function LazyComponentForm() {
  return (
    <>
      <FormikFormField
        name="email"
        label="Email"
        help={<HelpField content="enter an email address" />}
        validate={Validators.emailValue()}
        input={props => <TextInput placeholder="enter an email address" {...props} />}
      />

      <FormikFormField
        name="age"
        label="Your age"
        help={<HelpField content="A number between 10 and 100" />}
        input={props => <NumberInput placeholder="enter a number between 10 and 100" {...props} min={10} max={100} />}
      />
    </>
  );
}

export function LazyComponent(props: IStageConfigProps) {
  const {stage, updateStage, pipeline, application, } = props;
  return (
    <>
      <h1>Hello from a Lazy Loaded Form Component</h1>
      <p>These are SpinFormik, FormikFormField and Inputs from @spinnaker/core</p>
      <FormikStageConfig
        stage={stage}
        onChange={updateStage}
        pipeline={pipeline}
        application={application}
        render={props => <LazyComponentForm/>}
      />
    </>
  );
}
