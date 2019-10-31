/*
 * Copyright 2019 Netflix, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.robzienert.spinnaker.plugin.helloworld.orca;

import com.netflix.spinnaker.orca.api.SimpleStage;
import com.netflix.spinnaker.orca.api.SimpleStageInput;
import com.netflix.spinnaker.orca.api.SimpleStageOutput;
import com.netflix.spinnaker.orca.api.SimpleStageStatus;
import org.pf4j.Extension;

import java.util.Collections;
import java.util.Optional;

import static java.lang.String.format;

/**
 * It says hello.
 */
@Extension
public class HelloWorldStage implements SimpleStage<HelloWorldStage.Input> {
  @Override public SimpleStageOutput execute(
    SimpleStageInput<Input> simpleStageInput) {
    Output output = new Output();
    output.setOutput(new HelloWorldMessage(
      format("Hello, %s!", Optional.ofNullable(simpleStageInput.getValue().recipient).orElse("world"))
    ));
    output.setContext(Collections.emptyMap());
    output.setStatus(SimpleStageStatus.SUCCEEDED);
    return output;
  }

  @Override public String getName() {
    return "helloWorld";
  }

  public static class Input {
    public String recipient = "world";
  }

  public static class Output extends SimpleStageOutput<HelloWorldMessage, Object> {
  }

  public static class HelloWorldMessage {
    public String message;

    public HelloWorldMessage(String message) {
      this.message = message;
    }
  }
}
