import * as React from 'react';
import { IStageConfigProps, Markdown } from '@spinnaker/core';
import './ReactStageComponent.less';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const LazyComponent = React.lazy(() =>
  wait(4000).then(() => import('./LazyComponent').then(mod => ({ default: mod.LazyComponent }))),
);

export function ReactStageComponent(props: IStageConfigProps) {
  const {stage, updateStage} = props;
  return (
    <div className="PluginReactComponent">
      <h1>Hello from a stage plugin!</h1>
      <Markdown message="This stage wraps a `wait` stage" />
      <React.Suspense fallback={<h3>Lazy Loading the forms code, please wait 4 seconds...</h3>}>
        <LazyComponent stage={stage} updateStage={updateStage} />
      </React.Suspense>
    </div>
  );
}
