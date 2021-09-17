// Core
import { ComponentProps, FC } from 'react';

export const combineComponents = (...components: FC[]): FC =>
  components.reduce(
    (AccunulatedComponents, CurrentComponent) =>
      ({ children }: ComponentProps<FC>): JSX.Element =>
        (
          <AccunulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccunulatedComponents>
        ),
    ({ children }) => <>{children}</>,
  );
